import React, { useState, useMemo, useEffect } from 'react';
import { FormData, defaultFormData } from '../types/kokurikuler';
import { temaTemplates, TemaTemplate, getAllKategori, generateTujuanPembelajaran, generateMataPelajaranTerkait, dimensiProfilLulusanOptions, dimensiKBCOptions, generateKBC } from '../data/aiTemplates';
import { panduanKurikulum, findPanduan, kbcLabelToKategori, type PanduanKelas } from '../data/panduanKurikulum';

interface AIGeneratorProps {
  onGenerate: (data: FormData) => void;
  onClose: () => void;
}

type TemaMode = 'pilih' | 'manual';

// ---- Manual Input State ----
interface ManualTemaInput {
  tema: string;
  bentukKokurikuler: string;
  bentukKegiatan: string;
  lokasiKegiatan: string;
  kategoriKBC: string;
  deskripsiSingkat: string;
}

const emptyManualInput: ManualTemaInput = {
  tema: '',
  bentukKokurikuler: '',
  bentukKegiatan: '',
  lokasiKegiatan: '',
  kategoriKBC: '',
  deskripsiSingkat: '',
};

// Daftar mata pelajaran umum
const daftarMataPelajaran = [
  'Akidah Akhlak',
  'Al-Quran Hadis',
  'Fikih',
  'Pendidikan Pancasila',
  'Bahasa Indonesia',
  'IPAS',
  'Seni Budaya',
  'PJOK',
];

// Deskripsi singkat untuk setiap dimensi profil lulusan
const dimensiProfilDescriptions: Record<string, string> = {
  'Keimanan/Ketakwaan': 'Menghayati ajaran agama, berakhlak mulia, dan bersyukur',
  'Kewargaan': 'Cinta tanah air, toleransi, tanggung jawab sosial, dan menghargai keberagaman',
  'Penalaran Kritis': 'Menganalisis, mengevaluasi informasi, dan memecahkan masalah secara logis',
  'Kreativitas': 'Menghasilkan gagasan orisinal, karya baru, dan berinovasi',
  'Kolaborasi': 'Bekerjasama, gotong royong, berbagi peran, dan saling mendukung',
  'Kemandirian': 'Inisiatif, tanggung jawab pribadi, regulasi diri, dan percaya diri',
  'Kesehatan': 'Pola hidup sehat, kebersihan, kesejahteraan jasmani dan rohani',
  'Komunikasi': 'Menyampaikan gagasan secara efektif, lisan dan tulisan, serta mendengarkan',
};

// Konstanta JP per pertemuan
const JP_PER_PERTEMUAN = 3;

// ---- Helper: build FormData ----
function buildFromManual(
  manual: ManualTemaInput,
  baseTpl: TemaTemplate,
  namaMadrasah: string,
  selectedKelas: string,
  jumlahPertemuan: number,
  selectedDimensi: string[],
  selectedMapel: string[],
  selectedDimensiKBC: string[],
): FormData {
  const jpPerPertemuan = JP_PER_PERTEMUAN;
  const totalJP = jumlahPertemuan * jpPerPertemuan;
  const tema = manual.tema;
  const bentukKokurikuler = manual.bentukKokurikuler || baseTpl.bentukKokurikuler;
  const bentukKegiatan = manual.bentukKegiatan || baseTpl.bentukKegiatan;

  // Generate KBC berdasarkan dimensi yang dipilih
  const kbc = generateKBC(tema, manual.kategoriKBC, selectedDimensiKBC);

  // Helper untuk replace tema di template pertemuan
  const replaceTheme = (text: string) => {
    return text
      .replace(new RegExp(baseTpl.tema, 'gi'), tema)
      .replace(new RegExp(baseTpl.bentukKegiatan, 'gi'), bentukKegiatan);
  };

  // Gunakan dimensi profil yang dipilih, atau default dari template
  const dimensiProfil = selectedDimensi.length > 0 ? selectedDimensi : [...baseTpl.dimensiProfil];

  // Gunakan mata pelajaran dari input manual jika ada, jika tidak generate otomatis
  const mataPelajaranTerkait = selectedMapel.length > 0 
    ? selectedMapel 
    : generateMataPelajaranTerkait(tema, manual.kategoriKBC, bentukKegiatan);

  // Generate tujuan pembelajaran yang terintegrasi
  const tujuanPembelajaran = generateTujuanPembelajaran({
    tema,
    kategoriKBC: manual.kategoriKBC,
    bentukKokurikuler,
    bentukKegiatan,
    mataPelajaran: mataPelajaranTerkait,
    kelas: selectedKelas,
    dimensiProfil,
  });

  // Build pertemuan
  const pertemuan = [];
  const lkpd = [];

  const subtemas = generateSubtemas(tema, jumlahPertemuan);

  for (let i = 0; i < jumlahPertemuan; i++) {
    const ti = i % baseTpl.pertemuanTemplate.length;
    const tpl = baseTpl.pertemuanTemplate[ti];
    const subTema = subtemas[i] || `Kegiatan ${i + 1}`;

    pertemuan.push({
      id: i + 1,
      judul: subTema,
      jamPelajaran: jpPerPertemuan,
      pendahuluan: replaceTheme(tpl.pendahuluan),
      inti: replaceTheme(tpl.inti),
      penutup: replaceTheme(tpl.penutup),
    });

    lkpd.push({
      id: i + 1,
      judulPertemuan: subTema,
      ayoAmati: tpl.lkpdAmati.map((a) => replaceTheme(a)),
      ayoCerita: replaceTheme(tpl.lkpdCerita),
    });
  }

  return {
    ...defaultFormData,
    namaMadrasah,
    kelasSemester: selectedKelas,
    tema,
    alokasiWaktu: `${totalJP} JP (${jumlahPertemuan} Pertemuan @ ${jpPerPertemuan} JP)`,
    bentukKokurikuler,
    bentukKegiatan,
    lokasiKegiatan: manual.lokasiKegiatan || baseTpl.lokasiKegiatan,
    dimensiProfilLulusan: dimensiProfil,
    kbc,
    tujuanPembelajaran,
    praktikPedagogis: {
      modelPembelajaran: baseTpl.praktikPedagogis.model,
      pendekatan: baseTpl.praktikPedagogis.pendekatan,
      refleksi: baseTpl.praktikPedagogis.refleksi,
    },
    lingkunganPembelajaran: {
      madrasah: manual.lokasiKegiatan || baseTpl.lingkungan.madrasah,
      rumahMasyarakat: baseTpl.lingkungan.rumahMasyarakat,
    },
    kemitraanPembelajaran: {
      satuanPendidikan: baseTpl.kemitraan.satuanPendidikan,
      keluarga: baseTpl.kemitraan.keluarga,
      masyarakatNarasumber: baseTpl.kemitraan.masyarakat,
    },
    mataPelajaranTerkait,
    pemanfaatanDigital: `Video pembelajaran tentang ${tema.toLowerCase()}, dokumentasi digital kegiatan ${bentukKegiatan.toLowerCase()}, dan media interaktif`,
    pertemuan,
    asesmen: {
      diagnostik: `Tanya jawab awal tentang pengetahuan dan pengalaman siswa terkait ${tema.toLowerCase()}`,
      formatif: `Observasi partisipasi siswa dalam ${bentukKegiatan.toLowerCase()}, diskusi kelompok, dan praktik harian`,
      sumatif: `Penilaian hasil ${bentukKokurikuler.toLowerCase()}, laporan kegiatan, dan presentasi kelompok`,
      instrumen: ['LKPD', 'Observasi', 'Unjuk Kerja', 'Jurnal', 'Portofolio'],
    },
    catatanAktivitas: {
      namaSiswa: '(Diisi sesuai nama siswa)',
      aktivitas: '(Diisi sesuai aktivitas yang dilakukan)',
      catatanGuru: '(Diisi catatan perkembangan dan refleksi guru)',
    },
    rubrikPenilaian: baseTpl.rubrik.map((r, i) => ({
      id: i + 1,
      indikator: replaceTheme(r.indikator),
      sangatBaik: replaceTheme(r.sangatBaik),
      baik: replaceTheme(r.baik),
      cukup: replaceTheme(r.cukup),
      kurang: replaceTheme(r.kurang),
    })),
    tandaTangan: { kepalaMadrasah: '', fasilitatorKokurikuler: '' },
    lkpd,
  };
}

// Build subtopik berdasarkan nama tema
function generateSubtemas(tema: string, count: number): string[] {
  const base = tema.replace(/^(cinta |mengenal |senangnya |hidup )/i, '').trim();
  const patterns = [
    [`Mengenal ${base}`, `Praktik ${base}`, `Refleksi & Presentasi ${base}`],
    [`Pengenalan ${base}`, `Eksplorasi ${base}`, `Aksi Nyata ${base}`, `Pameran Hasil ${base}`],
    [`Observasi ${base}`, `Diskusi & Perencanaan ${base}`, `Praktik Lapangan ${base}`, `Evaluasi & Presentasi ${base}`, `Refleksi Akhir ${base}`],
  ];
  let chosen: string[];
  if (count <= 3) chosen = patterns[0];
  else if (count <= 4) chosen = patterns[1];
  else chosen = patterns[2];

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(chosen[i % chosen.length]);
  }
  return result;
}

// Find the best matching template for a given kategori
function findBestTemplate(kategori: string): TemaTemplate {
  const match = temaTemplates.find((t) => t.kategori === kategori);
  return match || temaTemplates[0];
}

// ================================================================
//  COMPONENT
// ================================================================
export const AIGenerator: React.FC<AIGeneratorProps> = ({ onGenerate, onClose }) => {
  const [step, setStep] = useState(1);
  const [namaMadrasah, setNamaMadrasah] = useState('');
  const [selectedKelas, setSelectedKelas] = useState('');
  const [jumlahPertemuan, setJumlahPertemuan] = useState(3);

  // Step 2 state
  const [temaMode, setTemaMode] = useState<TemaMode>('pilih');
  const [activePanduan, setActivePanduan] = useState<PanduanKelas | null>(null);
  const [manualInput, setManualInput] = useState<ManualTemaInput>(emptyManualInput);

  // Dimensi Profil Lulusan (multi-select)
  const [selectedDimensi, setSelectedDimensi] = useState<string[]>([]);

  // Dimensi KBC yang dipilih (multi-select)
  const [selectedDimensiKBC, setSelectedDimensiKBC] = useState<string[]>([]);

  // Mata Pelajaran (dynamic array)
  const [mataPelajaranList, setMataPelajaranList] = useState<string[]>(['']);

  const [isGenerating, setIsGenerating] = useState(false);

  const kategoriList = getAllKategori();

  const kategoriIcons: Record<string, string> = {
    'Cinta Lingkungan': '🌿',
    'Cinta Sesama': '🤝',
    'Cinta Allah & Rasul': '❤️',
    'Cinta Ilmu': '📚',
    'Cinta Diri': '💚',
    'Cinta Tanah Air': '🇮🇩',
  };

  // Auto-detect panduan saat kelas berubah
  useEffect(() => {
    if (selectedKelas && temaMode === 'pilih') {
      const panduan = findPanduan(selectedKelas);
      if (panduan) {
        setActivePanduan(panduan);
        // Pre-fill mapel & dimensi dari panduan
        setMataPelajaranList(panduan.mataPelajaran.length > 0 ? [...panduan.mataPelajaran] : ['']);
        setSelectedDimensi([panduan.dpl]);
      } else {
        setActivePanduan(null);
      }
    }
  }, [selectedKelas, temaMode]);

  // Toggle dimensi profil
  const toggleDimensi = (dimensi: string) => {
    setSelectedDimensi(prev => 
      prev.includes(dimensi) 
        ? prev.filter(d => d !== dimensi)
        : [...prev, dimensi]
    );
  };

  // Toggle dimensi KBC
  const toggleDimensiKBC = (key: string) => {
    setSelectedDimensiKBC(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  // Mata pelajaran handlers
  const addMataPelajaran = () => {
    if (mataPelajaranList.length < 6) {
      setMataPelajaranList([...mataPelajaranList, '']);
    }
  };

  const removeMataPelajaran = (index: number) => {
    if (mataPelajaranList.length > 1) {
      setMataPelajaranList(mataPelajaranList.filter((_, i) => i !== index));
    }
  };

  const updateMataPelajaran = (index: number, value: string) => {
    const updated = [...mataPelajaranList];
    updated[index] = value;
    setMataPelajaranList(updated);
  };

  // Check validity per-step
  const canGoNext = useMemo(() => {
    if (step === 1) return !!(namaMadrasah.trim() && selectedKelas);
    if (step === 2) {
      if (temaMode === 'pilih') return !!activePanduan;
      return !!(manualInput.tema.trim() && manualInput.kategoriKBC);
    }
    return true;
  }, [step, namaMadrasah, selectedKelas, temaMode, activePanduan, manualInput]);

  // Summary data
  const summaryTema = temaMode === 'pilih' ? activePanduan?.tema : manualInput.tema;
  const summaryKategori = temaMode === 'pilih'
    ? (activePanduan ? kbcLabelToKategori(activePanduan.kbc) : '')
    : manualInput.kategoriKBC;
  const filteredMapel = mataPelajaranList.filter(m => m.trim());
  const filteredDimensi = selectedDimensi;
  const filteredDimensiKBC = selectedDimensiKBC;

  // ---- Generate ----
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let data: FormData;
      if (temaMode === 'pilih' && activePanduan) {
        // Build manualInput from panduan
        const panduanAsManual: ManualTemaInput = {
          tema: activePanduan.tema,
          bentukKokurikuler: activePanduan.jenisKokurikuler,
          bentukKegiatan: activePanduan.bentukKegiatan,
          lokasiKegiatan: '',
          kategoriKBC: kbcLabelToKategori(activePanduan.kbc),
          deskripsiSingkat: '',
        };
        const baseTpl = findBestTemplate(panduanAsManual.kategoriKBC);
        data = buildFromManual(
          panduanAsManual, 
          baseTpl, 
          namaMadrasah, 
          selectedKelas, 
          jumlahPertemuan,
          filteredDimensi,
          filteredMapel,
          filteredDimensiKBC
        );
      } else {
        const baseTpl = findBestTemplate(manualInput.kategoriKBC);
        data = buildFromManual(
          manualInput, 
          baseTpl, 
          namaMadrasah, 
          selectedKelas, 
          jumlahPertemuan,
          filteredDimensi,
          filteredMapel,
          filteredDimensiKBC
        );
      }
      setIsGenerating(false);
      onGenerate(data);
      onClose();
    }, 1800);
  };

  // ---- Render ----
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[95vh] flex flex-col my-4">
        {/* ========== HEADER ========== */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-5 text-white rounded-t-2xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2.5 rounded-xl">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold">🤖 AI Generator RPP Kokurikuler</h2>
              <p className="text-purple-200 text-xs">Buat perencanaan otomatis berbasis KBC</p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-between mt-5">
            {[
              { n: 1, label: 'Info Dasar' },
              { n: 2, label: 'Tema & KBC' },
              { n: 3, label: 'Profil & Mapel' },
              { n: 4, label: 'Generate' },
            ].map((s, idx) => (
              <React.Fragment key={s.n}>
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step >= s.n ? 'bg-white text-purple-600 shadow' : 'bg-purple-500 text-purple-200'
                    }`}
                  >
                    {step > s.n ? '✓' : s.n}
                  </div>
                  <span className="text-[9px] text-purple-200">{s.label}</span>
                </div>
                {idx < 3 && (
                  <div className={`flex-1 h-0.5 mx-1 rounded ${step > s.n ? 'bg-white' : 'bg-purple-500'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ========== CONTENT ========== */}
        <div className="p-5 overflow-y-auto flex-1">
          {/* ---- STEP 1: Info Dasar ---- */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-800">📋 Informasi Dasar</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Madrasah <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={namaMadrasah}
                  onChange={(e) => setNamaMadrasah(e.target.value)}
                  placeholder="MI/MTs/MA Nurul Hikmah"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kelas / Semester <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedKelas}
                  onChange={(e) => setSelectedKelas(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                >
                  <option value="">-- Pilih Kelas --</option>
                  {panduanKurikulum.map((p) => (
                    <option key={p.id} value={p.label}>{p.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah Pertemuan</label>
                <div className="flex gap-2 items-center">
                  <select
                    value={jumlahPertemuan}
                    onChange={(e) => setJumlahPertemuan(Number(e.target.value))}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                  >
                    {Array.from({ length: 18 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} Pertemuan</option>
                    ))}
                  </select>
                  <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium whitespace-nowrap">
                    = {jumlahPertemuan * JP_PER_PERTEMUAN} JP
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">1 Pertemuan = {JP_PER_PERTEMUAN} JP (Jam Pelajaran)</p>
              </div>
            </div>
          )}

          {/* ---- STEP 2: Tema & KBC ---- */}
          {step === 2 && (
            <div className="space-y-4">
              {/* Toggle mode */}
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">📚 Tentukan Tema</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTemaMode('pilih')}
                    className={`py-2.5 px-3 rounded-xl border-2 text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      temaMode === 'pilih'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 text-gray-500 hover:border-purple-300'
                    }`}
                  >
                    📋 Sesuai Panduan Kurikulum
                  </button>
                  <button
                    onClick={() => setTemaMode('manual')}
                    className={`py-2.5 px-3 rounded-xl border-2 text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      temaMode === 'manual'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 text-gray-500 hover:border-purple-300'
                    }`}
                  >
                    ✏️ Input Manual
                  </button>
                </div>
              </div>

              {/* ---- Mode PILIH (Panduan) ---- */}
              {temaMode === 'pilih' && (
                <div className="space-y-3">
                  {activePanduan ? (
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-4 space-y-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">📌</span>
                        <p className="text-sm font-bold text-emerald-800">Panduan Kurikulum — {activePanduan.label}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <p className="text-[10px] font-semibold text-emerald-600 uppercase">Dimensi Profil Lulusan</p>
                          <p className="font-medium text-gray-800">{activePanduan.dpl}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-emerald-600 uppercase">Kategori KBC</p>
                          <p className="font-medium text-gray-800">{kategoriIcons[kbcLabelToKategori(activePanduan.kbc)] || '❤️'} {activePanduan.kbc}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-emerald-600 uppercase">Tema</p>
                        <p className="font-bold text-gray-900 text-base">{activePanduan.tema}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <p className="text-[10px] font-semibold text-emerald-600 uppercase">Jenis Kokurikuler</p>
                          <p className="text-gray-800">{activePanduan.jenisKokurikuler}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-emerald-600 uppercase">Mata Pelajaran</p>
                          <p className="text-gray-800">{activePanduan.mataPelajaran.join(', ')}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-emerald-600 uppercase">Bentuk Kegiatan</p>
                        <p className="text-gray-800 text-sm">{activePanduan.bentukKegiatan}</p>
                      </div>

                      <div className="pt-2 border-t border-emerald-200">
                        <p className="text-[10px] text-emerald-600 italic">✅ Semua komponen akan otomatis terisi sesuai panduan kurikulum saat di-generate.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                      <p className="text-sm text-amber-700">⚠️ Pilih Kelas / Semester di Step 1 terlebih dahulu untuk melihat panduan kurikulum.</p>
                    </div>
                  )}
                </div>
              )}

              {/* ---- Mode MANUAL ---- */}
              {temaMode === 'manual' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Tema <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={manualInput.tema}
                      onChange={(e) => setManualInput({ ...manualInput, tema: e.target.value })}
                      placeholder="Contoh: Indahnya Berbagi, Hemat Energi, dll"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kategori KBC Utama <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {kategoriList.map((kat) => (
                        <button
                          key={kat}
                          onClick={() => setManualInput({ ...manualInput, kategoriKBC: kat })}
                          className={`p-2 rounded-lg border-2 text-left transition-all ${
                            manualInput.kategoriKBC === kat
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <span className="text-base">{kategoriIcons[kat] || '📌'}</span>
                          <p className="font-medium text-[9px] mt-0.5 leading-tight">{kat}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Detail Opsional</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Jenis Kokurikuler</label>
                        <input type="text" value={manualInput.bentukKokurikuler}
                          onChange={(e) => setManualInput({ ...manualInput, bentukKokurikuler: e.target.value })}
                          placeholder="Nilai-nilai Madrasah, Gerakan 7KAIH..."
                          className="w-full px-2 py-1.5 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Bentuk Kegiatan</label>
                        <input type="text" value={manualInput.bentukKegiatan}
                          onChange={(e) => setManualInput({ ...manualInput, bentukKegiatan: e.target.value })}
                          placeholder="Praktik, Kunjungan, Simulasi..."
                          className="w-full px-2 py-1.5 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500" />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[10px] font-medium text-gray-600 mb-0.5">Lokasi Kegiatan</label>
                        <input type="text" value={manualInput.lokasiKegiatan}
                          onChange={(e) => setManualInput({ ...manualInput, lokasiKegiatan: e.target.value })}
                          placeholder="Halaman Sekolah, Desa, Pasar..."
                          className="w-full px-2 py-1.5 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ---- STEP 3: Dimensi Profil & Mata Pelajaran ---- */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Dimensi Profil Lulusan */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-800">🎯 Dimensi Profil Lulusan</h3>
                  <span className="text-[10px] text-gray-400">(Pilih 1 atau lebih, kosongkan = auto)</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Pilih dimensi yang akan dikembangkan. Ini akan terintegrasi dengan Tujuan Pembelajaran dan Rubrik.
                </p>
                <div className="space-y-2">
                  {dimensiProfilLulusanOptions.map((dimensi) => (
                    <button
                      key={dimensi}
                      onClick={() => toggleDimensi(dimensi)}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all flex items-start gap-3 ${
                        selectedDimensi.includes(dimensi)
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedDimensi.includes(dimensi)
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : 'border-gray-300'
                      }`}>
                        {selectedDimensi.includes(dimensi) && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-800">{dimensi}</p>
                        <p className="text-[10px] text-gray-500 mt-0.5">{dimensiProfilDescriptions[dimensi]}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mata Pelajaran Terkait */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-800">📚 Mata Pelajaran Terkait</h3>
                  <span className="text-[10px] text-gray-400">(Kosongkan = auto generate)</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  Pilih mata pelajaran yang terintegrasi dengan tema. Akan mempengaruhi Tujuan Pembelajaran.
                </p>
                
                <div className="space-y-2">
                  {mataPelajaranList.map((mapel, index) => (
                    <div key={index} className="flex gap-2">
                      <select
                        value={mapel}
                        onChange={(e) => updateMataPelajaran(index, e.target.value)}
                        className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">-- Pilih Mata Pelajaran --</option>
                        {daftarMataPelajaran.map((mp) => (
                          <option key={mp} value={mp} disabled={mataPelajaranList.includes(mp) && mapel !== mp}>
                            {mp}
                          </option>
                        ))}
                      </select>
                      {mataPelajaranList.length > 1 && (
                        <button
                          onClick={() => removeMataPelajaran(index)}
                          className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {mataPelajaranList.length < 6 && (
                  <button
                    onClick={addMataPelajaran}
                    className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium w-full"
                  >
                    + Tambah Mata Pelajaran
                  </button>
                )}

                {filteredMapel.length > 0 && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs font-medium text-blue-700">Mapel terpilih: {filteredMapel.join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Dimensi KBC Tambahan (Opsional) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-800">❤️ Dimensi KBC Tambahan</h3>
                  <span className="text-[10px] text-gray-400">(Opsional)</span>
                </div>
                
                {/* Info Kategori Utama */}
                <div className="mb-3 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <p className="text-xs text-red-700">
                    <strong>📌 Dimensi Utama:</strong> {kategoriIcons[summaryKategori || ''] || ''} <strong>{summaryKategori}</strong> (otomatis ditampilkan berdasarkan Kategori KBC yang dipilih)
                  </p>
                </div>

                <p className="text-xs text-gray-500 mb-3">
                  Jika ingin menambahkan dimensi KBC lain selain dimensi utama, pilih di bawah ini:
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {dimensiKBCOptions
                    .filter(kbc => {
                      // Jangan tampilkan dimensi yang sudah jadi dimensi utama
                      const dimensiUtamaKey = summaryKategori === 'Cinta Allah & Rasul' ? 'cintaAllahRasul' :
                        summaryKategori === 'Cinta Diri' ? 'cintaDiri' :
                        summaryKategori === 'Cinta Sesama' ? 'cintaSesama' :
                        summaryKategori === 'Cinta Ilmu' ? 'cintaIlmu' :
                        summaryKategori === 'Cinta Lingkungan' ? 'cintaLingkungan' :
                        summaryKategori === 'Cinta Tanah Air' ? 'cintaTanahAir' : '';
                      return kbc.key !== dimensiUtamaKey;
                    })
                    .map((kbc) => (
                    <button
                      key={kbc.key}
                      onClick={() => toggleDimensiKBC(kbc.key)}
                      className={`p-2.5 rounded-xl border-2 text-left transition-all flex items-start gap-2 ${
                        selectedDimensiKBC.includes(kbc.key)
                          ? 'border-red-400 bg-red-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedDimensiKBC.includes(kbc.key)
                          ? 'border-red-500 bg-red-500 text-white'
                          : 'border-gray-300'
                      }`}>
                        {selectedDimensiKBC.includes(kbc.key) && (
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-xs text-gray-800 flex items-center gap-1">
                          <span>{kbc.icon}</span> {kbc.label}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedDimensiKBC.length > 0 && (
                  <div className="mt-3 p-2 bg-red-50 rounded-lg">
                    <p className="text-[10px] font-medium text-red-700">
                      + Tambahan: {selectedDimensiKBC.map(k => dimensiKBCOptions.find(d => d.key === k)?.label).join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ---- STEP 4: Konfirmasi ---- */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-800">✅ Konfirmasi & Generate</h3>

              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <Row label="Madrasah" value={namaMadrasah} />
                <Row label="Kelas" value={selectedKelas} />
                <Row label="Pertemuan" value={`${jumlahPertemuan} Pertemuan (${jumlahPertemuan * JP_PER_PERTEMUAN} JP)`} />
                <div className="border-t border-gray-200 my-2" />
                <Row label="Mode" value={temaMode === 'pilih' ? '📋 Pilih dari Daftar' : '✏️ Input Manual'} />
                <Row
                  label="Kategori KBC"
                  value={`${kategoriIcons[summaryKategori || ''] || ''} ${summaryKategori || '-'}`}
                />
                <Row label="Tema" value={summaryTema || '-'} bold />
                {temaMode === 'manual' && manualInput.bentukKokurikuler && (
                  <Row label="Jenis Kokurikuler" value={manualInput.bentukKokurikuler} />
                )}
                {temaMode === 'manual' && manualInput.bentukKegiatan && (
                  <Row label="Bentuk Kegiatan" value={manualInput.bentukKegiatan} />
                )}
                <div className="border-t border-gray-200 my-2" />
                <Row 
                  label="Dimensi Profil" 
                  value={filteredDimensi.length > 0 ? `${filteredDimensi.length} dimensi dipilih` : 'Auto (dari template)'} 
                />
                <Row 
                  label="Mata Pelajaran" 
                  value={filteredMapel.length > 0 ? `${filteredMapel.length} mapel dipilih` : 'Auto generate'} 
                />
                <Row 
                  label="Dimensi KBC" 
                  value={`${summaryKategori}${filteredDimensiKBC.length > 0 ? ` + ${filteredDimensiKBC.length} tambahan` : ' (sesuai kategori)'}`} 
                />
              </div>

              {/* Detail Dimensi, Mapel, dan KBC yang dipilih */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {filteredDimensi.length > 0 && (
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-emerald-700 mb-1">🎯 Dimensi Profil:</p>
                    <ul className="text-[10px] text-emerald-600 space-y-0.5">
                      {filteredDimensi.map(d => (
                        <li key={d}>• {d.split(',')[0]}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {filteredMapel.length > 0 && (
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-700 mb-1">📚 Mata Pelajaran:</p>
                    <ul className="text-[10px] text-blue-600 space-y-0.5">
                      {filteredMapel.map(m => (
                        <li key={m}>• {m}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-red-700 mb-1">❤️ Dimensi KBC:</p>
                  <ul className="text-[10px] text-red-600 space-y-0.5">
                    <li>• <strong>{summaryKategori}</strong> (utama)</li>
                    {filteredDimensiKBC.map(k => (
                      <li key={k}>• {dimensiKBCOptions.find(d => d.key === k)?.label}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-4">
                <h4 className="font-semibold text-purple-700 mb-2 text-sm">🎯 Yang Akan Di-generate:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {[
                    'Dimensi Profil Lulusan',
                    '6 Dimensi KBC',
                    'Tujuan Pembelajaran (terintegrasi)',
                    'Praktik Pedagogis',
                    'Lingkungan & Kemitraan',
                    `Detail ${jumlahPertemuan} Pertemuan`,
                    'Asesmen Lengkap',
                    'Rubrik Penilaian',
                    'LKPD tiap Pertemuan',
                    'Mata Pelajaran Terkait',
                  ].map((item) => (
                    <p key={item} className="text-[10px] text-purple-600 flex items-center gap-1">
                      <span className="text-emerald-500">✓</span> {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-700">
                  <strong>💡 Tips:</strong> Tujuan Pembelajaran akan di-generate dengan kata kerja operasional sesuai level kelas, 
                  terintegrasi dengan Tema, Dimensi Profil, dan Mata Pelajaran yang dipilih.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ========== FOOTER ========== */}
        <div className="p-4 border-t bg-gray-50 flex justify-between items-center shrink-0 rounded-b-2xl">
          <button
            onClick={step === 1 ? onClose : () => setStep(step - 1)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
          >
            {step === 1 ? 'Batal' : '← Kembali'}
          </button>

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canGoNext}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Lanjut →
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-70 flex items-center gap-2 text-sm font-medium shadow-lg shadow-purple-200"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating RPP...
                </>
              ) : (
                '🤖 Generate RPP Sekarang'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Tiny sub-component for summary rows
const Row: React.FC<{ label: string; value: string; bold?: boolean }> = ({ label, value, bold }) => (
  <div className="flex justify-between items-start gap-4">
    <span className="text-gray-500 text-xs shrink-0">{label}:</span>
    <span className={`text-right text-xs ${bold ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>{value}</span>
  </div>
);
