import React, { useState } from 'react';
import { FormData, Pertemuan, RubrikRow, LKPDPertemuan } from '../types/kokurikuler';
import { FormSection, InputField, NumberInput } from './FormSection';
import { KelasSelector } from './KelasSelector';
import { TemaSelector } from './TemaSelector';

interface KokurikulerFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const KokurikulerForm: React.FC<KokurikulerFormProps> = ({ formData, setFormData }) => {
  const [showKelasSelector, setShowKelasSelector] = useState(false);
  const [showTemaSelector, setShowTemaSelector] = useState(false);
  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateNestedField = <K extends keyof FormData>(
    key: K,
    subKey: string,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [key]: { ...(prev[key] as Record<string, string>), [subKey]: value }
    }));
  };

  const updateArrayField = (key: keyof FormData, index: number, value: string) => {
    setFormData(prev => {
      const arr = [...(prev[key] as string[])];
      arr[index] = value;
      return { ...prev, [key]: arr };
    });
  };

  const addArrayItem = (key: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [key]: [...(prev[key] as string[]), '']
    }));
  };

  const removeArrayItem = (key: keyof FormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).filter((_, i) => i !== index)
    }));
  };

  const updatePertemuan = (index: number, field: keyof Pertemuan, value: string | number) => {
    setFormData(prev => {
      const pertemuan = [...prev.pertemuan];
      pertemuan[index] = { ...pertemuan[index], [field]: value };
      return { ...prev, pertemuan };
    });
  };

  const addPertemuan = () => {
    setFormData(prev => ({
      ...prev,
      pertemuan: [
        ...prev.pertemuan,
        { id: prev.pertemuan.length + 1, judul: '', jamPelajaran: 3, pendahuluan: '', inti: '', penutup: '' }
      ],
      lkpd: [
        ...prev.lkpd,
        { id: prev.lkpd.length + 1, judulPertemuan: '', ayoAmati: ['', ''], ayoCerita: '' }
      ]
    }));
  };

  const removePertemuan = (index: number) => {
    if (formData.pertemuan.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      pertemuan: prev.pertemuan.filter((_, i) => i !== index).map((p, i) => ({ ...p, id: i + 1 })),
      lkpd: prev.lkpd.filter((_, i) => i !== index).map((l, i) => ({ ...l, id: i + 1 }))
    }));
  };

  const updateRubrik = (index: number, field: keyof RubrikRow, value: string) => {
    setFormData(prev => {
      const rubrik = [...prev.rubrikPenilaian];
      rubrik[index] = { ...rubrik[index], [field]: value };
      return { ...prev, rubrikPenilaian: rubrik };
    });
  };

  const addRubrik = () => {
    setFormData(prev => ({
      ...prev,
      rubrikPenilaian: [
        ...prev.rubrikPenilaian,
        { id: prev.rubrikPenilaian.length + 1, indikator: '', sangatBaik: '', baik: '', cukup: '', kurang: '' }
      ]
    }));
  };

  const removeRubrik = (index: number) => {
    if (formData.rubrikPenilaian.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      rubrikPenilaian: prev.rubrikPenilaian.filter((_, i) => i !== index).map((r, i) => ({ ...r, id: i + 1 }))
    }));
  };

  const updateLKPD = (index: number, field: keyof LKPDPertemuan, value: string | string[]) => {
    setFormData(prev => {
      const lkpd = [...prev.lkpd];
      lkpd[index] = { ...lkpd[index], [field]: value };
      return { ...prev, lkpd };
    });
  };

  const updateLKPDAyoAmati = (lkpdIndex: number, amatiIndex: number, value: string) => {
    setFormData(prev => {
      const lkpd = [...prev.lkpd];
      const ayoAmati = [...lkpd[lkpdIndex].ayoAmati];
      ayoAmati[amatiIndex] = value;
      lkpd[lkpdIndex] = { ...lkpd[lkpdIndex], ayoAmati };
      return { ...prev, lkpd };
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Selectors */}
      {showKelasSelector && (
        <KelasSelector
          onSelectKelas={(kelas) => updateField('kelasSemester', kelas)}
          onClose={() => setShowKelasSelector(false)}
        />
      )}
      {showTemaSelector && (
        <TemaSelector
          onSelectTema={(tema) => updateField('tema', tema)}
          onClose={() => setShowTemaSelector(false)}
        />
      )}

      {/* Header Information */}
      <FormSection title="Informasi Dasar" icon="📋">
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Nama Madrasah"
            value={formData.namaMadrasah}
            onChange={(v) => updateField('namaMadrasah', v)}
            placeholder="MI/MTs/MA Nurul Hikmah"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kelas/Semester <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.kelasSemester}
                onChange={(e) => updateField('kelasSemester', e.target.value)}
                placeholder="Kelas 4 / Semester 1"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowKelasSelector(true)}
                className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
                title="Pilih dari daftar"
              >
                📋
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tema <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.tema}
                onChange={(e) => updateField('tema', e.target.value)}
                placeholder="Cinta Lingkungan Sekolahku"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowTemaSelector(true)}
                className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
                title="Pilih dari daftar tema"
              >
                📋
              </button>
            </div>
          </div>
          <InputField
            label="Alokasi Waktu"
            value={formData.alokasiWaktu}
            onChange={(v) => updateField('alokasiWaktu', v)}
            placeholder="9 JP (3 Pertemuan @ 3 JP)"
          />
          <InputField
            label="Jenis Kokurikuler"
            value={formData.bentukKokurikuler}
            onChange={(v) => updateField('bentukKokurikuler', v)}
            placeholder="Proyek Berbasis Lingkungan"
          />
          <InputField
            label="Bentuk Kegiatan"
            value={formData.bentukKegiatan}
            onChange={(v) => updateField('bentukKegiatan', v)}
            placeholder="Praktik Penghijauan & Kebersihan"
          />
          <InputField
            label="Lokasi Kegiatan"
            value={formData.lokasiKegiatan}
            onChange={(v) => updateField('lokasiKegiatan', v)}
            placeholder="Halaman Sekolah & Lingkungan Sekitar"
          />
        </div>
      </FormSection>

      {/* A. Dimensi Profil Lulusan */}
      <FormSection title="A. Dimensi Profil Lulusan" icon="🎯">
        <p className="text-sm text-gray-600 mb-4">
          Tentukan dimensi profil pelajar Pancasila yang akan dikembangkan
        </p>
        {formData.dimensiProfilLulusan.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <span className="flex items-center justify-center w-8 h-10 bg-emerald-100 text-emerald-700 rounded-lg font-medium text-sm">
              {index + 1}
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => updateArrayField('dimensiProfilLulusan', index, e.target.value)}
              placeholder={`Dimensi ${index + 1} (contoh: Beriman, Gotong Royong, dll)`}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            {formData.dimensiProfilLulusan.length > 1 && (
              <button
                onClick={() => removeArrayItem('dimensiProfilLulusan', index)}
                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addArrayItem('dimensiProfilLulusan')}
          className="mt-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-medium"
        >
          + Tambah Dimensi
        </button>
      </FormSection>

      {/* B. Kurikulum Berbasis Cinta */}
      <FormSection title="B. Kurikulum Berbasis Cinta (KBC)" icon="❤️">
        <p className="text-sm text-gray-600 mb-4">
          Integrasikan 6 dimensi cinta dalam pembelajaran
        </p>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <InputField
              label="❤️ Cinta Allah & Rasul"
              value={formData.kbc.cintaAllahRasul}
              onChange={(v) => updateNestedField('kbc', 'cintaAllahRasul', v)}
              placeholder="Bagaimana kegiatan ini menumbuhkan cinta kepada Allah dan Rasul?"
              multiline
              rows={2}
            />
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <InputField
              label="💚 Cinta Diri"
              value={formData.kbc.cintaDiri}
              onChange={(v) => updateNestedField('kbc', 'cintaDiri', v)}
              placeholder="Bagaimana kegiatan ini menumbuhkan cinta terhadap diri sendiri?"
              multiline
              rows={2}
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <InputField
              label="🤝 Cinta Sesama"
              value={formData.kbc.cintaSesama}
              onChange={(v) => updateNestedField('kbc', 'cintaSesama', v)}
              placeholder="Bagaimana kegiatan ini menumbuhkan cinta kepada sesama?"
              multiline
              rows={2}
            />
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <InputField
              label="📚 Cinta Ilmu"
              value={formData.kbc.cintaIlmu}
              onChange={(v) => updateNestedField('kbc', 'cintaIlmu', v)}
              placeholder="Bagaimana kegiatan ini menumbuhkan cinta terhadap ilmu?"
              multiline
              rows={2}
            />
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
            <InputField
              label="🌿 Cinta Lingkungan"
              value={formData.kbc.cintaLingkungan}
              onChange={(v) => updateNestedField('kbc', 'cintaLingkungan', v)}
              placeholder="Bagaimana kegiatan ini menumbuhkan cinta terhadap lingkungan?"
              multiline
              rows={2}
            />
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <InputField
              label="🇮🇩 Cinta Tanah Air"
              value={formData.kbc.cintaTanahAir}
              onChange={(v) => updateNestedField('kbc', 'cintaTanahAir', v)}
              placeholder="Bagaimana kegiatan ini menumbuhkan cinta tanah air?"
              multiline
              rows={2}
            />
          </div>
        </div>
      </FormSection>

      {/* C. Tujuan Pembelajaran */}
      <FormSection title="C. Tujuan Pembelajaran" icon="🎓">
        <p className="text-sm text-gray-600 mb-4">
          Rumuskan tujuan pembelajaran yang ingin dicapai
        </p>
        {formData.tujuanPembelajaran.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <span className="flex items-center justify-center w-8 h-10 bg-emerald-100 text-emerald-700 rounded-lg font-medium text-sm">
              {index + 1}
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => updateArrayField('tujuanPembelajaran', index, e.target.value)}
              placeholder={`Murid mampu ...`}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            {formData.tujuanPembelajaran.length > 1 && (
              <button
                onClick={() => removeArrayItem('tujuanPembelajaran', index)}
                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addArrayItem('tujuanPembelajaran')}
          className="mt-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-medium"
        >
          + Tambah Tujuan
        </button>
      </FormSection>

      {/* D. Praktik Pedagogis */}
      <FormSection title="D. Praktik Pedagogis" icon="📖">
        <div className="space-y-4">
          <InputField
            label="Model Pembelajaran"
            value={formData.praktikPedagogis.modelPembelajaran}
            onChange={(v) => updateNestedField('praktikPedagogis', 'modelPembelajaran', v)}
            placeholder="Project Based Learning (PjBL), Problem Based Learning, dll"
          />
          <InputField
            label="Pendekatan"
            value={formData.praktikPedagogis.pendekatan}
            onChange={(v) => updateNestedField('praktikPedagogis', 'pendekatan', v)}
            placeholder="Kontekstual, Kolaboratif, dan Reflektif"
          />
          <InputField
            label="Refleksi"
            value={formData.praktikPedagogis.refleksi}
            onChange={(v) => updateNestedField('praktikPedagogis', 'refleksi', v)}
            placeholder="Jurnal harian, diskusi kelompok, dan presentasi hasil kerja"
            multiline
            rows={2}
          />
        </div>
      </FormSection>

      {/* E. Lingkungan Pembelajaran */}
      <FormSection title="E. Lingkungan Pembelajaran" icon="🏫">
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="Lingkungan Madrasah"
            value={formData.lingkunganPembelajaran.madrasah}
            onChange={(v) => updateNestedField('lingkunganPembelajaran', 'madrasah', v)}
            placeholder="Halaman sekolah, taman madrasah, dll"
            multiline
            rows={2}
          />
          <InputField
            label="Lingkungan Rumah/Masyarakat"
            value={formData.lingkunganPembelajaran.rumahMasyarakat}
            onChange={(v) => updateNestedField('lingkunganPembelajaran', 'rumahMasyarakat', v)}
            placeholder="Lingkungan rumah siswa, kebun warga, dll"
            multiline
            rows={2}
          />
        </div>
      </FormSection>

      {/* F. Kemitraan Pembelajaran */}
      <FormSection title="F. Kemitraan Pembelajaran" icon="🤝">
        <div className="space-y-4">
          <InputField
            label="1. Satuan Pendidikan"
            value={formData.kemitraanPembelajaran.satuanPendidikan}
            onChange={(v) => updateNestedField('kemitraanPembelajaran', 'satuanPendidikan', v)}
            placeholder="Guru kelas, guru PAI, petugas kebersihan sekolah"
          />
          <InputField
            label="2. Keluarga"
            value={formData.kemitraanPembelajaran.keluarga}
            onChange={(v) => updateNestedField('kemitraanPembelajaran', 'keluarga', v)}
            placeholder="Orangtua mendampingi praktik di rumah"
          />
          <InputField
            label="3. Masyarakat/Narasumber"
            value={formData.kemitraanPembelajaran.masyarakatNarasumber}
            onChange={(v) => updateNestedField('kemitraanPembelajaran', 'masyarakatNarasumber', v)}
            placeholder="Petani lokal, tokoh masyarakat, dll"
          />
        </div>
      </FormSection>

      {/* G. Mata Pelajaran Terkait */}
      <FormSection title="G. Mata Pelajaran yang Terkait" icon="📚">
        {formData.mataPelajaranTerkait.map((item, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <span className="flex items-center justify-center w-8 h-10 bg-emerald-100 text-emerald-700 rounded-lg font-medium text-sm">
              {index + 1}
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => updateArrayField('mataPelajaranTerkait', index, e.target.value)}
              placeholder={`Mata pelajaran ${index + 1}`}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            {formData.mataPelajaranTerkait.length > 1 && (
              <button
                onClick={() => removeArrayItem('mataPelajaranTerkait', index)}
                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => addArrayItem('mataPelajaranTerkait')}
          className="mt-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-medium"
        >
          + Tambah Mata Pelajaran
        </button>
      </FormSection>

      {/* H. Pemanfaatan Digital */}
      <FormSection title="H. Pemanfaatan Digital" icon="💻">
        <InputField
          label="Media dan Teknologi Digital"
          value={formData.pemanfaatanDigital}
          onChange={(v) => updateField('pemanfaatanDigital', v)}
          placeholder="Video pembelajaran, aplikasi edukasi, dokumentasi digital, dll"
          multiline
          rows={3}
        />
      </FormSection>

      {/* I. Kegiatan */}
      <FormSection title="I. Kegiatan Pembelajaran" icon="📅">
        <p className="text-sm text-gray-600 mb-4">
          Rincian kegiatan setiap pertemuan
        </p>
        
        {formData.pertemuan.map((p, index) => (
          <div key={p.id} className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-emerald-700">
                Pertemuan {index + 1}
              </h3>
              {formData.pertemuan.length > 1 && (
                <button
                  onClick={() => removePertemuan(index)}
                  className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm"
                >
                  Hapus
                </button>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <InputField
                label="Judul Pertemuan"
                value={p.judul}
                onChange={(v) => updatePertemuan(index, 'judul', v)}
                placeholder="Judul kegiatan pertemuan"
              />
              <NumberInput
                label="Jam Pelajaran (JP)"
                value={p.jamPelajaran}
                onChange={(v) => updatePertemuan(index, 'jamPelajaran', v)}
                min={1}
                max={8}
              />
            </div>
            
            <InputField
              label="Pendahuluan"
              value={p.pendahuluan}
              onChange={(v) => updatePertemuan(index, 'pendahuluan', v)}
              placeholder="Kegiatan pembuka: salam, doa, apersepsi, dll"
              multiline
              rows={3}
            />
            <InputField
              label="Inti"
              value={p.inti}
              onChange={(v) => updatePertemuan(index, 'inti', v)}
              placeholder="Kegiatan inti pembelajaran"
              multiline
              rows={4}
            />
            <InputField
              label="Penutup"
              value={p.penutup}
              onChange={(v) => updatePertemuan(index, 'penutup', v)}
              placeholder="Kegiatan penutup: refleksi, kesimpulan, doa"
              multiline
              rows={3}
            />
          </div>
        ))}
        
        <button
          onClick={addPertemuan}
          className="w-full py-3 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors font-medium"
        >
          + Tambah Pertemuan
        </button>
      </FormSection>

      {/* J. Asesmen */}
      <FormSection title="J. Asesmen" icon="📊">
        <div className="space-y-4">
          <InputField
            label="Diagnostik"
            value={formData.asesmen.diagnostik}
            onChange={(v) => updateNestedField('asesmen', 'diagnostik', v)}
            placeholder="Tanya jawab awal tentang pengetahuan siswa"
            multiline
            rows={2}
          />
          <InputField
            label="Formatif"
            value={formData.asesmen.formatif}
            onChange={(v) => updateNestedField('asesmen', 'formatif', v)}
            placeholder="Observasi partisipasi siswa, diskusi kelompok"
            multiline
            rows={2}
          />
          <InputField
            label="Sumatif"
            value={formData.asesmen.sumatif}
            onChange={(v) => updateNestedField('asesmen', 'sumatif', v)}
            placeholder="Penilaian hasil proyek, laporan kegiatan, presentasi"
            multiline
            rows={2}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instrumen Penilaian
            </label>
            <div className="flex flex-wrap gap-2">
              {['LKPD', 'Observasi', 'Unjuk Kerja', 'Jurnal', 'Portofolio'].map((item) => (
                <label key={item} className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-emerald-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.asesmen.instrumen.includes(item)}
                    onChange={(e) => {
                      const newInstrumen = e.target.checked
                        ? [...formData.asesmen.instrumen, item]
                        : formData.asesmen.instrumen.filter(i => i !== item);
                      setFormData(prev => ({
                        ...prev,
                        asesmen: { ...prev.asesmen, instrumen: newInstrumen }
                      }));
                    }}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </FormSection>

      {/* K. Catatan Hasil Aktivitas */}
      <FormSection title="K. Catatan Hasil Aktivitas" icon="📝">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
          <p className="text-sm text-yellow-700">
            💡 Bagian ini diisi oleh guru setelah kegiatan dilaksanakan
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <InputField
            label="Nama Siswa"
            value={formData.catatanAktivitas.namaSiswa}
            onChange={(v) => updateNestedField('catatanAktivitas', 'namaSiswa', v)}
            placeholder="(Diisi sesuai nama siswa)"
          />
          <InputField
            label="Aktivitas"
            value={formData.catatanAktivitas.aktivitas}
            onChange={(v) => updateNestedField('catatanAktivitas', 'aktivitas', v)}
            placeholder="(Diisi sesuai aktivitas)"
          />
          <InputField
            label="Catatan Guru"
            value={formData.catatanAktivitas.catatanGuru}
            onChange={(v) => updateNestedField('catatanAktivitas', 'catatanGuru', v)}
            placeholder="(Diisi catatan perkembangan)"
          />
        </div>
      </FormSection>

      {/* L. Rubrik Penilaian */}
      <FormSection title="L. Rubrik Penilaian" icon="📋">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white">
                <th className="border border-emerald-700 px-3 py-2 text-left text-sm">Indikator (DPL & KBC)</th>
                <th className="border border-emerald-700 px-3 py-2 text-center text-sm w-32">Sangat Baik (SB)</th>
                <th className="border border-emerald-700 px-3 py-2 text-center text-sm w-32">Baik (B)</th>
                <th className="border border-emerald-700 px-3 py-2 text-center text-sm w-32">Cukup (C)</th>
                <th className="border border-emerald-700 px-3 py-2 text-center text-sm w-32">Kurang (K)</th>
                <th className="border border-emerald-700 px-3 py-2 text-center text-sm w-16">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {formData.rubrikPenilaian.map((row, index) => (
                <tr key={row.id} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-1">
                    <input
                      type="text"
                      value={row.indikator}
                      onChange={(e) => updateRubrik(index, 'indikator', e.target.value)}
                      placeholder="Indikator penilaian"
                      className="w-full px-2 py-1 text-sm border-0 focus:ring-1 focus:ring-emerald-500 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input
                      type="text"
                      value={row.sangatBaik}
                      onChange={(e) => updateRubrik(index, 'sangatBaik', e.target.value)}
                      placeholder="Kriteria SB"
                      className="w-full px-2 py-1 text-sm border-0 focus:ring-1 focus:ring-emerald-500 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input
                      type="text"
                      value={row.baik}
                      onChange={(e) => updateRubrik(index, 'baik', e.target.value)}
                      placeholder="Kriteria B"
                      className="w-full px-2 py-1 text-sm border-0 focus:ring-1 focus:ring-emerald-500 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input
                      type="text"
                      value={row.cukup}
                      onChange={(e) => updateRubrik(index, 'cukup', e.target.value)}
                      placeholder="Kriteria C"
                      className="w-full px-2 py-1 text-sm border-0 focus:ring-1 focus:ring-emerald-500 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input
                      type="text"
                      value={row.kurang}
                      onChange={(e) => updateRubrik(index, 'kurang', e.target.value)}
                      placeholder="Kriteria K"
                      className="w-full px-2 py-1 text-sm border-0 focus:ring-1 focus:ring-emerald-500 rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-1 text-center">
                    {formData.rubrikPenilaian.length > 1 && (
                      <button
                        onClick={() => removeRubrik(index)}
                        className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={addRubrik}
          className="mt-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors text-sm font-medium"
        >
          + Tambah Baris Rubrik
        </button>
      </FormSection>

      {/* Tanda Tangan */}
      <FormSection title="Tanda Tangan" icon="✍️">
        <div className="grid md:grid-cols-2 gap-8">
          <InputField
            label="Kepala Madrasah"
            value={formData.tandaTangan.kepalaMadrasah}
            onChange={(v) => updateNestedField('tandaTangan', 'kepalaMadrasah', v)}
            placeholder="Nama Kepala Madrasah"
          />
          <InputField
            label="Fasilitator Kokurikuler"
            value={formData.tandaTangan.fasilitatorKokurikuler}
            onChange={(v) => updateNestedField('tandaTangan', 'fasilitatorKokurikuler', v)}
            placeholder="Nama Fasilitator"
          />
        </div>
      </FormSection>

      {/* Lampiran LKPD */}
      <FormSection title="Lampiran LKPD" icon="📄">
        <p className="text-sm text-gray-600 mb-4">
          Lembar Kerja Peserta Didik untuk setiap pertemuan
        </p>
        
        {formData.lkpd.map((lkpd, index) => (
          <div key={lkpd.id} className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-700 mb-4">
              LKPD Pertemuan {index + 1}
            </h3>
            
            <InputField
              label="Judul Pertemuan"
              value={lkpd.judulPertemuan}
              onChange={(v) => updateLKPD(index, 'judulPertemuan', v)}
              placeholder="Judul kegiatan"
            />
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔍 Ayo Amati!
              </label>
              {lkpd.ayoAmati.map((amati, amatiIndex) => (
                <div key={amatiIndex} className="flex gap-2 mb-2">
                  <span className="flex items-center justify-center w-8 h-10 bg-blue-100 text-blue-700 rounded-lg font-medium text-sm">
                    {amatiIndex + 1}
                  </span>
                  <input
                    type="text"
                    value={amati}
                    onChange={(e) => updateLKPDAyoAmati(index, amatiIndex, e.target.value)}
                    placeholder="Pertanyaan observasi"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              ))}
            </div>
            
            <InputField
              label="📝 Ayo Cerita!"
              value={lkpd.ayoCerita}
              onChange={(v) => updateLKPD(index, 'ayoCerita', v)}
              placeholder="Instruksi untuk bercerita/refleksi"
              multiline
              rows={2}
            />
          </div>
        ))}
      </FormSection>
    </div>
  );
};
