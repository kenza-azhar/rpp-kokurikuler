import React, { useState } from 'react';
import { FormData } from '../types/kokurikuler';
import { exportToWord } from '../utils/exportWord';

interface DocumentPreviewProps {
  formData: FormData;
  showPrintButton?: boolean;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({ formData, showPrintButton = true }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleExportWord = async () => {
    setIsExporting(true);
    try {
      await exportToWord(formData);
    } catch (e) {
      console.error('Gagal export Word:', e);
      alert('Gagal membuat file Word. Silakan coba lagi.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Print Button */}
      {showPrintButton && (
        <div className="print:hidden sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-sm z-10">
          <h2 className="text-lg font-semibold text-gray-700">Preview Dokumen</h2>
          <div className="flex gap-2">
            <button
              onClick={handleExportWord}
              disabled={isExporting}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-60"
            >
              {isExporting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                  Membuat .docx…
                </>
              ) : (
                <>📄 Cetak ke Word</>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center gap-2"
            >
              🖨️ Cetak / PDF
            </button>
          </div>
        </div>
      )}

      {/* Document Content */}
      <div className="p-8 max-w-4xl mx-auto print:p-4 print:max-w-none">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
          <h1 className="text-xl font-bold uppercase tracking-wide mb-2">
            PERENCANAAN PEMBELAJARAN KOKURIKULER
          </h1>
          <p className="text-sm text-gray-600">Kurikulum Berbasis Cinta (KBC)</p>
        </div>

        {/* Basic Info */}
        <div className="mb-6">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="py-1 w-44">Nama Madrasah</td>
                <td className="py-1 w-4">:</td>
                <td className="py-1 font-medium">{formData.namaMadrasah || '…………………………………'}</td>
              </tr>
              <tr>
                <td className="py-1">Kelas/Semester</td>
                <td className="py-1">:</td>
                <td className="py-1 font-medium">{formData.kelasSemester || '…………………………………'}</td>
              </tr>
              <tr>
                <td className="py-1">Tema</td>
                <td className="py-1">:</td>
                <td className="py-1 font-medium">{formData.tema || '…………………………………'}</td>
              </tr>
              <tr>
                <td className="py-1">Alokasi Waktu</td>
                <td className="py-1">:</td>
                <td className="py-1 font-medium">{formData.alokasiWaktu || '…………………………………'}</td>
              </tr>
              <tr>
                <td className="py-1">Jenis Kokurikuler</td>
                <td className="py-1">:</td>
                <td className="py-1 font-medium">{formData.bentukKokurikuler || '…………………………………'}</td>
              </tr>
              <tr>
                <td className="py-1">Bentuk Kegiatan</td>
                <td className="py-1">:</td>
                <td className="py-1 font-medium">{formData.bentukKegiatan || '…………………………………'}</td>
              </tr>
              <tr>
                <td className="py-1">Lokasi Kegiatan</td>
                <td className="py-1">:</td>
                <td className="py-1 font-medium">{formData.lokasiKegiatan || '…………………………………'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* A. Dimensi Profil Lulusan */}
        <Section title="A. Dimensi Profil Lulusan">
          <ul className="list-disc list-inside space-y-1 text-sm">
            {formData.dimensiProfilLulusan.filter(d => d).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {formData.dimensiProfilLulusan.filter(d => d).length === 0 && (
              <li className="text-gray-400">…………………………………</li>
            )}
          </ul>
        </Section>

        {/* B. Kurikulum Berbasis Cinta */}
        <Section title="B. Kurikulum Berbasis Cinta (KBC)">
          <div className="space-y-3 text-sm">
            {formData.kbc.cintaAllahRasul && (
              <div className="flex gap-2">
                <span className="font-medium min-w-32">❤️ Cinta Allah & Rasul</span>
                <span>:</span>
                <span>{formData.kbc.cintaAllahRasul}</span>
              </div>
            )}
            {formData.kbc.cintaDiri && (
              <div className="flex gap-2">
                <span className="font-medium min-w-32">💚 Cinta Diri</span>
                <span>:</span>
                <span>{formData.kbc.cintaDiri}</span>
              </div>
            )}
            {formData.kbc.cintaSesama && (
              <div className="flex gap-2">
                <span className="font-medium min-w-32">🤝 Cinta Sesama</span>
                <span>:</span>
                <span>{formData.kbc.cintaSesama}</span>
              </div>
            )}
            {formData.kbc.cintaIlmu && (
              <div className="flex gap-2">
                <span className="font-medium min-w-32">📚 Cinta Ilmu</span>
                <span>:</span>
                <span>{formData.kbc.cintaIlmu}</span>
              </div>
            )}
            {formData.kbc.cintaLingkungan && (
              <div className="flex gap-2">
                <span className="font-medium min-w-32">🌿 Cinta Lingkungan</span>
                <span>:</span>
                <span>{formData.kbc.cintaLingkungan}</span>
              </div>
            )}
            {formData.kbc.cintaTanahAir && (
              <div className="flex gap-2">
                <span className="font-medium min-w-32">🇮🇩 Cinta Tanah Air</span>
                <span>:</span>
                <span>{formData.kbc.cintaTanahAir}</span>
              </div>
            )}
            {/* Jika semua kosong, tampilkan placeholder */}
            {!formData.kbc.cintaAllahRasul && !formData.kbc.cintaDiri && !formData.kbc.cintaSesama && 
             !formData.kbc.cintaIlmu && !formData.kbc.cintaLingkungan && !formData.kbc.cintaTanahAir && (
              <p className="text-gray-400 italic">Dimensi KBC belum diisi</p>
            )}
          </div>
        </Section>

        {/* C. Tujuan Pembelajaran */}
        <Section title="C. Tujuan Pembelajaran">
          <ol className="list-decimal list-inside space-y-1 text-sm">
            {formData.tujuanPembelajaran.filter(t => t).map((item, index) => (
              <li key={index}>Murid mampu {item.replace(/^Murid mampu /i, '')}</li>
            ))}
            {formData.tujuanPembelajaran.filter(t => t).length === 0 && (
              <>
                <li className="text-gray-400">Murid mampu …………………………………</li>
                <li className="text-gray-400">Murid mampu …………………………………</li>
              </>
            )}
          </ol>
        </Section>

        {/* D. Praktik Pedagogis */}
        <Section title="D. Praktik Pedagogis">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">• Model Pembelajaran:</span> {formData.praktikPedagogis.modelPembelajaran || '…………………………………'}</p>
            <p><span className="font-medium">• Pendekatan:</span> {formData.praktikPedagogis.pendekatan || '…………………………………'}</p>
            <p><span className="font-medium">• Refleksi:</span> {formData.praktikPedagogis.refleksi || '…………………………………'}</p>
          </div>
        </Section>

        {/* E. Lingkungan Pembelajaran */}
        <Section title="E. Lingkungan Pembelajaran">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">• Lingkungan Madrasah:</span> {formData.lingkunganPembelajaran.madrasah || '…………………………………'}</p>
            <p><span className="font-medium">• Lingkungan Rumah/Masyarakat:</span> {formData.lingkunganPembelajaran.rumahMasyarakat || '…………………………………'}</p>
          </div>
        </Section>

        {/* F. Kemitraan Pembelajaran */}
        <Section title="F. Kemitraan Pembelajaran">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">1. Satuan Pendidikan:</span> {formData.kemitraanPembelajaran.satuanPendidikan || '…………………………………'}</p>
            <p><span className="font-medium">2. Keluarga:</span> {formData.kemitraanPembelajaran.keluarga || '…………………………………'}</p>
            <p><span className="font-medium">3. Masyarakat/Narasumber:</span> {formData.kemitraanPembelajaran.masyarakatNarasumber || '…………………………………'}</p>
          </div>
        </Section>

        {/* G. Mata Pelajaran Terkait */}
        <Section title="G. Mata Pelajaran yang Terkait">
          <ul className="list-disc list-inside space-y-1 text-sm">
            {formData.mataPelajaranTerkait.filter(m => m).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {formData.mataPelajaranTerkait.filter(m => m).length === 0 && (
              <li className="text-gray-400">…………………………………</li>
            )}
          </ul>
        </Section>

        {/* H. Pemanfaatan Digital */}
        <Section title="H. Pemanfaatan Digital">
          <p className="text-sm">{formData.pemanfaatanDigital || '…………………………………'}</p>
        </Section>

        {/* I. Kegiatan */}
        <Section title={`I. Kegiatan (${formData.pertemuan.length} Pertemuan)`}>
          <div className="space-y-6">
            {formData.pertemuan.map((p, index) => (
              <div key={p.id} className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-emerald-700 mb-2">
                  Pertemuan {index + 1} – {p.judul || '……………'} ({p.jamPelajaran} JP)
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">1. Pendahuluan:</span> {p.pendahuluan || '……………………………'}</p>
                  <p><span className="font-medium">2. Inti:</span> {p.inti || '……………………………'}</p>
                  <p><span className="font-medium">3. Penutup:</span> {p.penutup || '……………………………'}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* J. Asesmen */}
        <Section title="J. Asesmen">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">• Diagnostik:</span> {formData.asesmen.diagnostik || '……………………………'}</p>
            <p><span className="font-medium">• Formatif:</span> {formData.asesmen.formatif || '……………………………'}</p>
            <p><span className="font-medium">• Sumatif:</span> {formData.asesmen.sumatif || '……………………………'}</p>
            <p><span className="font-medium">• Instrumen:</span> {formData.asesmen.instrumen.join(', ') || '……………………………'}</p>
          </div>
        </Section>

        {/* K. Catatan Hasil Aktivitas */}
        <Section title="K. Catatan Hasil Aktivitas">
          <div className="border border-gray-300 rounded-lg p-4 text-sm">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="font-medium">• Nama Siswa:</span>
                <p className="mt-1">{formData.catatanAktivitas.namaSiswa || '……………………………'}</p>
              </div>
              <div>
                <span className="font-medium">• Aktivitas:</span>
                <p className="mt-1">{formData.catatanAktivitas.aktivitas || '……………………………'}</p>
              </div>
              <div>
                <span className="font-medium">• Catatan Guru:</span>
                <p className="mt-1">{formData.catatanAktivitas.catatanGuru || '……………………………'}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* L. Rubrik Penilaian */}
        <Section title="L. Rubrik Penilaian">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="border border-emerald-700 px-3 py-2 text-left">Indikator (DPL & KBC)</th>
                  <th className="border border-emerald-700 px-3 py-2 text-center">Sangat Baik (SB)</th>
                  <th className="border border-emerald-700 px-3 py-2 text-center">Baik (B)</th>
                  <th className="border border-emerald-700 px-3 py-2 text-center">Cukup (C)</th>
                  <th className="border border-emerald-700 px-3 py-2 text-center">Kurang (K)</th>
                </tr>
              </thead>
              <tbody>
                {formData.rubrikPenilaian.map((row) => (
                  <tr key={row.id} className="border border-gray-300">
                    <td className="border border-gray-300 px-3 py-2">{row.indikator || '…'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.sangatBaik || '…'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.baik || '…'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.cukup || '…'}</td>
                    <td className="border border-gray-300 px-3 py-2 text-center">{row.kurang || '…'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex justify-between text-sm">
            <div className="text-center">
              <p className="font-medium mb-16">Mengetahui,</p>
              <p className="font-medium">Kepala Madrasah</p>
              <p className="mt-2 border-b border-gray-400 min-w-48 inline-block">
                {formData.tandaTangan.kepalaMadrasah || '…………………………………'}
              </p>
            </div>
            <div className="text-center">
              <p className="mb-16">&nbsp;</p>
              <p className="font-medium">Fasilitator Kokurikuler</p>
              <p className="mt-2 border-b border-gray-400 min-w-48 inline-block">
                {formData.tandaTangan.fasilitatorKokurikuler || '…………………………………'}
              </p>
            </div>
          </div>
        </div>

        {/* Page Break for Print */}
        <div className="print:break-before-page"></div>

        {/* LKPD Section */}
        <div className="mt-12 print:mt-0">
          <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
            <h1 className="text-xl font-bold uppercase tracking-wide mb-2">
              LAMPIRAN LKPD
            </h1>
            <p className="text-sm text-gray-600">Lembar Kerja Peserta Didik</p>
          </div>

          {formData.lkpd.map((lkpd, index) => (
            <div key={lkpd.id} className="mb-8 border border-gray-300 rounded-lg p-6 print:break-inside-avoid">
              <h3 className="text-lg font-bold text-emerald-700 mb-4 text-center border-b pb-2">
                LKPD PERTEMUAN {index + 1} – {lkpd.judulPertemuan || formData.pertemuan[index]?.judul || '……………'}
              </h3>
              
              <div className="mb-4">
                <p className="text-sm"><strong>Nama:</strong> ……………………………</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-blue-600 mb-3">🔍 Ayo Amati!</h4>
                <ol className="list-decimal list-inside space-y-3 text-sm">
                  {lkpd.ayoAmati.map((amati, amatiIndex) => (
                    <li key={amatiIndex}>
                      {amati || '……………………………'}
                      <div className="mt-2 border border-gray-300 rounded p-3 min-h-16 ml-5">
                        <p className="text-gray-400 text-xs">Jawaban:</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-green-600 mb-3">📝 Ayo Cerita!</h4>
                <p className="text-sm mb-2">{lkpd.ayoCerita || '……………………………'}</p>
                <div className="border border-gray-300 rounded p-3 min-h-24">
                  <p className="text-gray-400 text-xs">Ceritamu:</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-purple-600 mb-3">💭 Refleksi:</h4>
                <div className="flex gap-6 text-sm">
                  <label className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-gray-400 rounded inline-block"></span>
                    😊 Senang
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-gray-400 rounded inline-block"></span>
                    😐 Biasa saja
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-gray-400 rounded inline-block"></span>
                    😕 Belum paham
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KBC Character Notes */}
        <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200 print:break-inside-avoid">
          <h3 className="font-bold text-emerald-700 mb-4">📌 Catatan Integrasi Karakter KBC</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-2">Dimensi Cinta:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>❤️ Cinta Allah dan Rasul</li>
                <li>💚 Cinta Diri</li>
                <li>🤝 Cinta Sesama</li>
                <li>📚 Cinta Ilmu</li>
                <li>🌿 Cinta Lingkungan</li>
                <li>🇮🇩 Cinta Tanah Air</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Pembiasaan:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Pembiasaan adab</li>
                <li>Refleksi rasa</li>
                <li>Kepedulian</li>
                <li>Kolaborasi</li>
                <li>Kebermaknaan kegiatan nyata</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">{title}</h3>
    <div className="pl-4">{children}</div>
  </div>
);
