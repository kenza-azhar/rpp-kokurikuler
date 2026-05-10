export interface Pertemuan {
  id: number;
  judul: string;
  jamPelajaran: number;
  pendahuluan: string;
  inti: string;
  penutup: string;
}

export interface RubrikRow {
  id: number;
  indikator: string;
  sangatBaik: string;
  baik: string;
  cukup: string;
  kurang: string;
}

export interface LKPDPertemuan {
  id: number;
  judulPertemuan: string;
  ayoAmati: string[];
  ayoCerita: string;
}

export interface FormData {
  // Header
  namaMadrasah: string;
  kelasSemester: string;
  tema: string;
  alokasiWaktu: string;
  bentukKokurikuler: string;
  bentukKegiatan: string;
  lokasiKegiatan: string;
  
  // A. Dimensi Profil Lulusan
  dimensiProfilLulusan: string[];
  
  // B. Kurikulum Berbasis Cinta
  kbc: {
    cintaAllahRasul: string;
    cintaDiri: string;
    cintaSesama: string;
    cintaIlmu: string;
    cintaLingkungan: string;
    cintaTanahAir: string;
  };
  
  // C. Tujuan Pembelajaran
  tujuanPembelajaran: string[];
  
  // D. Praktik Pedagogis
  praktikPedagogis: {
    modelPembelajaran: string;
    pendekatan: string;
    refleksi: string;
  };
  
  // E. Lingkungan Pembelajaran
  lingkunganPembelajaran: {
    madrasah: string;
    rumahMasyarakat: string;
  };
  
  // F. Kemitraan Pembelajaran
  kemitraanPembelajaran: {
    satuanPendidikan: string;
    keluarga: string;
    masyarakatNarasumber: string;
  };
  
  // G. Mata Pelajaran Terkait
  mataPelajaranTerkait: string[];
  
  // H. Pemanfaatan Digital
  pemanfaatanDigital: string;
  
  // I. Kegiatan
  pertemuan: Pertemuan[];
  
  // J. Asesmen
  asesmen: {
    diagnostik: string;
    formatif: string;
    sumatif: string;
    instrumen: string[];
  };
  
  // K. Catatan Hasil Aktivitas
  catatanAktivitas: {
    namaSiswa: string;
    aktivitas: string;
    catatanGuru: string;
  };
  
  // L. Rubrik Penilaian
  rubrikPenilaian: RubrikRow[];
  
  // Tanda tangan
  tandaTangan: {
    kepalaMadrasah: string;
    fasilitatorKokurikuler: string;
  };
  
  // Lampiran LKPD
  lkpd: LKPDPertemuan[];
}

export const defaultFormData: FormData = {
  namaMadrasah: "",
  kelasSemester: "",
  tema: "",
  alokasiWaktu: "",
  bentukKokurikuler: "",
  bentukKegiatan: "",
  lokasiKegiatan: "",
  
  dimensiProfilLulusan: ["", "", ""],
  
  kbc: {
    cintaAllahRasul: "",
    cintaDiri: "",
    cintaSesama: "",
    cintaIlmu: "",
    cintaLingkungan: "",
    cintaTanahAir: "",
  },
  
  tujuanPembelajaran: ["", "", "", "", ""],
  
  praktikPedagogis: {
    modelPembelajaran: "",
    pendekatan: "",
    refleksi: "",
  },
  
  lingkunganPembelajaran: {
    madrasah: "",
    rumahMasyarakat: "",
  },
  
  kemitraanPembelajaran: {
    satuanPendidikan: "",
    keluarga: "",
    masyarakatNarasumber: "",
  },
  
  mataPelajaranTerkait: ["", "", ""],
  
  pemanfaatanDigital: "",
  
  pertemuan: [
    { id: 1, judul: "", jamPelajaran: 3, pendahuluan: "", inti: "", penutup: "" },
    { id: 2, judul: "", jamPelajaran: 3, pendahuluan: "", inti: "", penutup: "" },
    { id: 3, judul: "", jamPelajaran: 3, pendahuluan: "", inti: "", penutup: "" },
  ],
  
  asesmen: {
    diagnostik: "",
    formatif: "",
    sumatif: "",
    instrumen: ["LKPD", "Observasi", "Unjuk Kerja", "Jurnal", "Portofolio"],
  },
  
  catatanAktivitas: {
    namaSiswa: "",
    aktivitas: "",
    catatanGuru: "",
  },
  
  rubrikPenilaian: [
    { id: 1, indikator: "", sangatBaik: "", baik: "", cukup: "", kurang: "" },
    { id: 2, indikator: "", sangatBaik: "", baik: "", cukup: "", kurang: "" },
    { id: 3, indikator: "", sangatBaik: "", baik: "", cukup: "", kurang: "" },
    { id: 4, indikator: "", sangatBaik: "", baik: "", cukup: "", kurang: "" },
  ],
  
  tandaTangan: {
    kepalaMadrasah: "",
    fasilitatorKokurikuler: "",
  },
  
  lkpd: [
    { id: 1, judulPertemuan: "", ayoAmati: ["", ""], ayoCerita: "" },
    { id: 2, judulPertemuan: "", ayoAmati: ["", ""], ayoCerita: "" },
    { id: 3, judulPertemuan: "", ayoAmati: ["", ""], ayoCerita: "" },
  ],
};

export const contohFormData: FormData = {
  namaMadrasah: "MI Nurul Hikmah",
  kelasSemester: "Kelas 4 / Semester 1",
  tema: "Cinta Lingkungan Sekolahku",
  alokasiWaktu: "9 JP (3 Pertemuan @ 3 JP)",
  bentukKokurikuler: "Proyek Berbasis Lingkungan",
  bentukKegiatan: "Praktik Penghijauan & Kebersihan",
  lokasiKegiatan: "Halaman Sekolah & Lingkungan Sekitar",
  
  dimensiProfilLulusan: [
    "Keimanan/Ketakwaan",
    "Kolaborasi",
    "Penalaran Kritis",
  ],
  
  kbc: {
    cintaAllahRasul: "Mensyukuri nikmat Allah berupa lingkungan yang indah dengan menjaga dan merawatnya sebagai bentuk ibadah",
    cintaDiri: "Membiasakan hidup bersih dan sehat sebagai wujud cinta terhadap diri sendiri",
    cintaSesama: "Bekerjasama dengan teman dalam menjaga kebersihan dan keindahan lingkungan bersama",
    cintaIlmu: "Mempelajari cara merawat tanaman dan menjaga lingkungan dengan baik dan benar",
    cintaLingkungan: "Menanam dan merawat tanaman serta menjaga kebersihan sebagai bentuk kepedulian terhadap alam",
    cintaTanahAir: "Menjaga kelestarian lingkungan Indonesia sebagai amanah untuk generasi mendatang",
  },
  
  tujuanPembelajaran: [
    "Murid mampu menjelaskan pentingnya menjaga kebersihan lingkungan sebagai bentuk syukur kepada Allah SWT",
    "Murid mampu mempraktikkan cara menanam dan merawat tanaman dengan benar",
    "Murid mampu bekerjasama dalam kegiatan penghijauan dan kebersihan lingkungan",
    "Murid mampu mengidentifikasi permasalahan lingkungan dan solusinya",
    "Murid mampu merefleksikan pengalaman belajar dalam menjaga lingkungan",
  ],
  
  praktikPedagogis: {
    modelPembelajaran: "Project Based Learning (PjBL)",
    pendekatan: "Kontekstual, Kolaboratif, dan Reflektif",
    refleksi: "Jurnal harian, diskusi kelompok, dan presentasi hasil kerja",
  },
  
  lingkunganPembelajaran: {
    madrasah: "Halaman sekolah, taman madrasah, dan area penghijauan",
    rumahMasyarakat: "Lingkungan rumah siswa untuk praktik lanjutan dan kebun warga sekitar",
  },
  
  kemitraanPembelajaran: {
    satuanPendidikan: "Guru kelas, guru PAI, dan petugas kebersihan sekolah",
    keluarga: "Orangtua mendampingi praktik perawatan tanaman di rumah",
    masyarakatNarasumber: "Petani/Penyuluh pertanian lokal, Dinas Lingkungan Hidup",
  },
  
  mataPelajaranTerkait: [
    "Akidah Akhlak",
    "IPAS",
    "Bahasa Indonesia",
  ],
  
  pemanfaatanDigital: "Video pembelajaran tentang pelestarian lingkungan, aplikasi identifikasi tanaman, dan dokumentasi digital kegiatan melalui foto/video",
  
  pertemuan: [
    {
      id: 1,
      judul: "Mengenal Lingkungan Sekolahku",
      jamPelajaran: 3,
      pendahuluan: "Pembukaan dengan salam, doa bersama, dan membaca Asmaul Husna. Guru menyampaikan tujuan pembelajaran dan melakukan apersepsi tentang lingkungan sekolah yang bersih dan asri.",
      inti: "1) Siswa melakukan observasi lingkungan sekolah secara berkelompok, 2) Mengidentifikasi kondisi kebersihan dan tanaman yang ada, 3) Mencatat temuan dalam lembar observasi, 4) Diskusi kelompok tentang permasalahan yang ditemukan",
      penutup: "Refleksi bersama tentang kondisi lingkungan sekolah, menyimpulkan hasil pembelajaran, doa penutup dan salam.",
    },
    {
      id: 2,
      judul: "Praktik Menanam dan Merawat Tanaman",
      jamPelajaran: 3,
      pendahuluan: "Salam, doa, dan review pembelajaran sebelumnya. Pengenalan alat dan bahan untuk menanam tanaman. Narasumber (petani lokal) memberikan pengarahan.",
      inti: "1) Siswa menyiapkan media tanam dengan bimbingan, 2) Praktik menanam bibit tanaman secara berkelompok, 3) Belajar cara menyiram dan merawat tanaman, 4) Memberi label nama kelompok pada tanaman",
      penutup: "Refleksi tentang pengalaman menanam, membuat komitmen merawat tanaman, doa dan salam penutup.",
    },
    {
      id: 3,
      judul: "Aksi Bersih Lingkungan & Presentasi",
      jamPelajaran: 3,
      pendahuluan: "Salam, doa, dan review perkembangan tanaman. Persiapan alat kebersihan untuk aksi bersih.",
      inti: "1) Aksi bersih lingkungan sekolah secara gotong royong, 2) Dokumentasi kegiatan melalui foto, 3) Menyusun laporan kegiatan sederhana, 4) Presentasi hasil kerja kelompok dan tanaman yang dirawat",
      penutup: "Refleksi keseluruhan proyek, apresiasi dan penghargaan kelompok terbaik, komitmen menjaga lingkungan, doa dan salam.",
    },
  ],
  
  asesmen: {
    diagnostik: "Tanya jawab awal tentang pengetahuan siswa mengenai lingkungan dan pengalaman menanam tanaman",
    formatif: "Observasi partisipasi siswa dalam kegiatan, diskusi kelompok, dan praktik harian",
    sumatif: "Penilaian hasil proyek (tanaman yang dirawat), laporan kegiatan, dan presentasi kelompok",
    instrumen: ["LKPD", "Observasi", "Unjuk Kerja", "Jurnal", "Portofolio"],
  },
  
  catatanAktivitas: {
    namaSiswa: "(Diisi sesuai nama siswa)",
    aktivitas: "(Diisi sesuai aktivitas yang dilakukan)",
    catatanGuru: "(Diisi catatan perkembangan dan refleksi guru)",
  },
  
  rubrikPenilaian: [
    {
      id: 1,
      indikator: "Partisipasi dalam kegiatan (Gotong Royong)",
      sangatBaik: "Aktif berpartisipasi dan membantu teman lain",
      baik: "Aktif berpartisipasi dalam kegiatan",
      cukup: "Berpartisipasi dengan bimbingan",
      kurang: "Kurang berpartisipasi dalam kegiatan",
    },
    {
      id: 2,
      indikator: "Keterampilan menanam (Cinta Lingkungan)",
      sangatBaik: "Mampu menanam dengan benar dan mandiri",
      baik: "Mampu menanam dengan benar",
      cukup: "Mampu menanam dengan bimbingan",
      kurang: "Belum mampu menanam dengan benar",
    },
    {
      id: 3,
      indikator: "Perawatan tanaman (Cinta Diri & Lingkungan)",
      sangatBaik: "Merawat tanaman secara rutin dan konsisten",
      baik: "Merawat tanaman dengan baik",
      cukup: "Merawat tanaman dengan pengingat",
      kurang: "Belum mampu merawat tanaman",
    },
    {
      id: 4,
      indikator: "Refleksi dan Syukur (Cinta Allah)",
      sangatBaik: "Mampu merefleksikan dengan penuh rasa syukur",
      baik: "Mampu merefleksikan pembelajaran",
      cukup: "Merefleksikan dengan bimbingan",
      kurang: "Belum mampu merefleksikan",
    },
  ],
  
  tandaTangan: {
    kepalaMadrasah: "H. Ahmad Fauzi, S.Pd.I, M.Pd",
    fasilitatorKokurikuler: "Siti Aisyah, S.Pd",
  },
  
  lkpd: [
    {
      id: 1,
      judulPertemuan: "Mengenal Lingkungan Sekolahku",
      ayoAmati: [
        "Amati halaman sekolahmu! Apa saja yang kamu lihat? (tanaman, sampah, dll)",
        "Bagaimana kondisi kebersihan di sekitar kelasmu?",
      ],
      ayoCerita: "Ceritakan perasaanmu ketika melihat lingkungan sekolah yang bersih dan asri! Apa yang ingin kamu lakukan untuk menjaga kebersihannya?",
    },
    {
      id: 2,
      judulPertemuan: "Praktik Menanam dan Merawat Tanaman",
      ayoAmati: [
        "Amati bibit tanaman yang akan kamu tanam! Bagaimana bentuk daun dan batangnya?",
        "Apa saja alat dan bahan yang dibutuhkan untuk menanam?",
      ],
      ayoCerita: "Ceritakan pengalamanmu saat menanam tanaman hari ini! Apa yang kamu rasakan? Bagaimana caramu akan merawat tanaman ini?",
    },
    {
      id: 3,
      judulPertemuan: "Aksi Bersih Lingkungan & Presentasi",
      ayoAmati: [
        "Amati perkembangan tanaman yang sudah kamu tanam! Apa perubahannya?",
        "Setelah aksi bersih, bagaimana kondisi lingkungan sekolahmu sekarang?",
      ],
      ayoCerita: "Ceritakan apa yang sudah kamu pelajari selama kegiatan ini! Apa komitmenmu untuk menjaga lingkungan setelah ini?",
    },
  ],
};
