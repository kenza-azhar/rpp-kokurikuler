import React from 'react';
import { FormData } from '../types/kokurikuler';

interface ProgressBarProps {
  formData: FormData;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ formData }) => {
  const calculateProgress = (): number => {
    let filled = 0;
    let total = 0;

    // Basic info (7 fields)
    const basicFields = [
      formData.namaMadrasah,
      formData.kelasSemester,
      formData.tema,
      formData.alokasiWaktu,
      formData.bentukKokurikuler,
      formData.bentukKegiatan,
      formData.lokasiKegiatan,
    ];
    total += basicFields.length;
    filled += basicFields.filter(f => f.trim()).length;

    // Dimensi Profil Lulusan (at least 1)
    total += 1;
    filled += formData.dimensiProfilLulusan.some(d => d.trim()) ? 1 : 0;

    // KBC (6 fields)
    const kbcFields = Object.values(formData.kbc);
    total += kbcFields.length;
    filled += kbcFields.filter(f => f.trim()).length;

    // Tujuan Pembelajaran (at least 3)
    total += 3;
    filled += Math.min(3, formData.tujuanPembelajaran.filter(t => t.trim()).length);

    // Praktik Pedagogis (3 fields)
    const ppFields = Object.values(formData.praktikPedagogis);
    total += ppFields.length;
    filled += ppFields.filter(f => f.trim()).length;

    // Lingkungan (2 fields)
    total += 2;
    filled += formData.lingkunganPembelajaran.madrasah.trim() ? 1 : 0;
    filled += formData.lingkunganPembelajaran.rumahMasyarakat.trim() ? 1 : 0;

    // Kemitraan (3 fields)
    total += 3;
    filled += formData.kemitraanPembelajaran.satuanPendidikan.trim() ? 1 : 0;
    filled += formData.kemitraanPembelajaran.keluarga.trim() ? 1 : 0;
    filled += formData.kemitraanPembelajaran.masyarakatNarasumber.trim() ? 1 : 0;

    // Mata Pelajaran (at least 1)
    total += 1;
    filled += formData.mataPelajaranTerkait.some(m => m.trim()) ? 1 : 0;

    // Digital
    total += 1;
    filled += formData.pemanfaatanDigital.trim() ? 1 : 0;

    // Pertemuan (each has 4 important fields)
    formData.pertemuan.forEach(p => {
      total += 4;
      filled += p.judul.trim() ? 1 : 0;
      filled += p.pendahuluan.trim() ? 1 : 0;
      filled += p.inti.trim() ? 1 : 0;
      filled += p.penutup.trim() ? 1 : 0;
    });

    // Asesmen
    total += 3;
    filled += formData.asesmen.diagnostik.trim() ? 1 : 0;
    filled += formData.asesmen.formatif.trim() ? 1 : 0;
    filled += formData.asesmen.sumatif.trim() ? 1 : 0;

    // Rubrik (at least 2 complete rows)
    total += 2;
    const completeRubrik = formData.rubrikPenilaian.filter(r => 
      r.indikator.trim() && r.sangatBaik.trim() && r.baik.trim() && r.cukup.trim() && r.kurang.trim()
    ).length;
    filled += Math.min(2, completeRubrik);

    return Math.round((filled / total) * 100);
  };

  const progress = calculateProgress();

  const getProgressColor = () => {
    if (progress >= 80) return 'bg-emerald-500';
    if (progress >= 50) return 'bg-amber-500';
    return 'bg-red-400';
  };

  const getProgressEmoji = () => {
    if (progress >= 80) return '🎉';
    if (progress >= 50) return '📝';
    return '✏️';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6 print:hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {getProgressEmoji()} Kelengkapan Dokumen
        </span>
        <span className={`text-sm font-bold ${
          progress >= 80 ? 'text-emerald-600' : progress >= 50 ? 'text-amber-600' : 'text-red-500'
        }`}>
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2">
        {progress < 50 && 'Masih banyak bagian yang perlu diisi'}
        {progress >= 50 && progress < 80 && 'Bagus! Lanjutkan mengisi bagian lainnya'}
        {progress >= 80 && progress < 100 && 'Hampir selesai! Tinggal sedikit lagi'}
        {progress === 100 && 'Sempurna! Dokumen sudah lengkap'}
      </p>
    </div>
  );
};
