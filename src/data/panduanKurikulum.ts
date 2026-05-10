// Panduan Kurikulum Kokurikuler per Kelas/Semester
// Berdasarkan panduan resmi Madrasah KBC

export interface PanduanKelas {
  id: string;
  kelas: string;
  semester: string;
  label: string; // "Kelas 1 / Semester 1"
  dpl: string; // Dimensi Profil Lulusan
  kbc: string; // Kategori KBC
  tema: string;
  jenisKokurikuler: string;
  bentukKegiatan: string;
  mataPelajaran: string[];
}

export const panduanKurikulum: PanduanKelas[] = [
  {
    id: '1-s1',
    kelas: '1',
    semester: '1',
    label: 'Kelas 1 / Semester 1',
    dpl: 'Keimanan & Ketakwaan',
    kbc: 'Cinta Allah & Rasul',
    tema: 'Keagungan Ciptaan Allah di Desaku',
    jenisKokurikuler: 'Nilai-nilai Madrasah',
    bentukKegiatan: 'Praktik adab makan & bersyukur atas hasil tani lokal (padi/buah)',
    mataPelajaran: ['Al-Quran Hadis'],
  },
  {
    id: '1-s2',
    kelas: '1',
    semester: '2',
    label: 'Kelas 1 / Semester 2',
    dpl: 'Kemandirian',
    kbc: 'Cinta Diri',
    tema: 'Kebun Kecil di Halaman Sekolah',
    jenisKokurikuler: 'Gerakan 7KAIH',
    bentukKegiatan: 'Menanam sayuran media polybag secara mandiri',
    mataPelajaran: ['Bahasa Indonesia', 'Pendidikan Pancasila'],
  },
  {
    id: '2-s1',
    kelas: '2',
    semester: '1',
    label: 'Kelas 2 / Semester 1',
    dpl: 'Kewargaan',
    kbc: 'Cinta Tanah Air',
    tema: 'Pahlawan Pangan Desa Kami',
    jenisKokurikuler: 'Ciri Khas Madrasah Konteks Lokal',
    bentukKegiatan: 'Kunjungan ke tokoh petani sukses dan membantu menyemai benih',
    mataPelajaran: ['Bahasa Indonesia', 'Pendidikan Pancasila'],
  },
  {
    id: '2-s2',
    kelas: '2',
    semester: '2',
    label: 'Kelas 2 / Semester 2',
    dpl: 'Komunikasi',
    kbc: 'Cinta Ilmu',
    tema: 'Pasar Rakyat Cilik',
    jenisKokurikuler: 'Kolaboratif Berbasis Cinta (KKBC)',
    bentukKegiatan: 'Bermain peran jual beli hasil kebun dengan bahasa yang santun',
    mataPelajaran: ['Bahasa Indonesia', 'Al-Quran Hadis'],
  },
  {
    id: '3-s1',
    kelas: '3',
    semester: '1',
    label: 'Kelas 3 / Semester 1',
    dpl: 'Kreativitas',
    kbc: 'Cinta Lingkungan',
    tema: 'Olahan Limbah Pertanian',
    jenisKokurikuler: 'Pembelajaran Kolaboratif Lintas Disiplin',
    bentukKegiatan: 'Membuat pupuk kompos dari dedaunan dan limbah jerami',
    mataPelajaran: ['IPAS', 'Bahasa Indonesia'],
  },
  {
    id: '3-s2',
    kelas: '3',
    semester: '2',
    label: 'Kelas 3 / Semester 2',
    dpl: 'Kolaborasi',
    kbc: 'Cinta Sesama',
    tema: 'Zakat Hasil Bumi',
    jenisKokurikuler: 'Satu Disiplin Ilmu Kolaboratif',
    bentukKegiatan: 'Simulasi perhitungan dan penyaluran zakat pertanian (gabah)',
    mataPelajaran: ['Fikih', 'IPAS'],
  },
  {
    id: '4-s1',
    kelas: '4',
    semester: '1',
    label: 'Kelas 4 / Semester 1',
    dpl: 'Penalaran Kritis',
    kbc: 'Cinta Ilmu',
    tema: 'Siklus Air di Sawah',
    jenisKokurikuler: 'Pembelajaran Kolaboratif Lintas Disiplin',
    bentukKegiatan: 'Observasi sistem irigasi lokal dan dampak sampah pada air',
    mataPelajaran: ['IPAS', 'Fikih'],
  },
  {
    id: '4-s2',
    kelas: '4',
    semester: '2',
    label: 'Kelas 4 / Semester 2',
    dpl: 'Kesehatan',
    kbc: 'Cinta Lingkungan',
    tema: 'Tanaman Obat Keluarga (TOGA)',
    jenisKokurikuler: 'Gerakan 7KAIH',
    bentukKegiatan: 'Eksplorasi tanaman herbal pedesaan untuk kesehatan tubuh',
    mataPelajaran: ['IPAS', 'Bahasa Indonesia'],
  },
  {
    id: '5-s1',
    kelas: '5',
    semester: '1',
    label: 'Kelas 5 / Semester 1',
    dpl: 'Kreativitas',
    kbc: 'Cinta Tanah Air',
    tema: 'Kriya Desa Mandiri',
    jenisKokurikuler: 'Ciri Khas Madrasah Konteks Lokal',
    bentukKegiatan: 'Membuat kerajinan tangan dari anyaman bambu/daun pandan',
    mataPelajaran: ['Seni Budaya', 'Bahasa Indonesia'],
  },
  {
    id: '5-s2',
    kelas: '5',
    semester: '2',
    label: 'Kelas 5 / Semester 2',
    dpl: 'Keimanan & Ketakwaan',
    kbc: 'Cinta Allah & Rasul',
    tema: 'Etika Bisnis Islami',
    jenisKokurikuler: 'Nilai-nilai Madrasah',
    bentukKegiatan: 'Magang sehari di toko kelontong dengan prinsip kejujuran',
    mataPelajaran: ['Akidah Akhlak', 'Seni Budaya'],
  },
  {
    id: '6-s1',
    kelas: '6',
    semester: '1',
    label: 'Kelas 6 / Semester 1',
    dpl: 'Kolaborasi',
    kbc: 'Cinta Sesama',
    tema: 'Sportivitas dan Kerjasama',
    jenisKokurikuler: 'Gerakan 7KAIH',
    bentukKegiatan: 'Turnamen olahraga tradisional antar kelas (Bakiak/Engklek)',
    mataPelajaran: ['PJOK', 'Bahasa Indonesia'],
  },
  {
    id: '6-s2',
    kelas: '6',
    semester: '2',
    label: 'Kelas 6 / Semester 2',
    dpl: 'Kemandirian',
    kbc: 'Cinta Tanah Air',
    tema: 'Pesta Panen Perpisahan',
    jenisKokurikuler: 'Kolaboratif Berbasis Cinta (KKBC)',
    bentukKegiatan: 'Mengelola bazar hasil karya sendiri sebagai bekal kemandirian',
    mataPelajaran: ['Akidah Akhlak', 'PJOK'],
  },
];

// Helper: cari panduan berdasarkan kelas/semester string
export function findPanduan(kelasStr: string): PanduanKelas | undefined {
  // Normalisasi: "Kelas 1 / Semester 1" → match
  const lower = kelasStr.toLowerCase().replace(/\s+/g, '');
  return panduanKurikulum.find(p => {
    const pLabel = p.label.toLowerCase().replace(/\s+/g, '');
    return pLabel === lower;
  });
}

// Helper: mapping dari kategori KBC label ke key internal
export function kbcLabelToKategori(kbcLabel: string): string {
  const map: Record<string, string> = {
    'Cinta Allah & Rasul': 'Cinta Allah & Rasul',
    'Cinta Allah dan Rasulnya': 'Cinta Allah & Rasul',
    'Cinta diri': 'Cinta Diri',
    'Cinta diri dan sesama': 'Cinta Sesama',
    'Cinta tanah air': 'Cinta Tanah Air',
    'Cinta ilmu': 'Cinta Ilmu',
    'Cinta lingkungan': 'Cinta Lingkungan',
    'Cinta sesama': 'Cinta Sesama',
  };
  // Case-insensitive match
  for (const [key, value] of Object.entries(map)) {
    if (key.toLowerCase() === kbcLabel.toLowerCase()) return value;
  }
  return kbcLabel;
}
