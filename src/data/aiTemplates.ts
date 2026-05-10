// Database template untuk AI Generator

export const dimensiProfilLulusanOptions = [
  "Keimanan/Ketakwaan",
  "Kewargaan",
  "Penalaran Kritis",
  "Kreativitas",
  "Kolaborasi",
  "Kemandirian",
  "Kesehatan",
  "Komunikasi",
];

// Daftar 6 Dimensi KBC (Kurikulum Berbasis Cinta)
export const dimensiKBCOptions = [
  { key: 'cintaAllahRasul', label: 'Cinta Allah & Rasul', icon: '❤️', description: 'Kecintaan kepada Allah SWT dan Rasulullah SAW' },
  { key: 'cintaDiri', label: 'Cinta Diri', icon: '💚', description: 'Menghargai dan merawat diri sendiri' },
  { key: 'cintaSesama', label: 'Cinta Sesama', icon: '🤝', description: 'Kepedulian dan kerjasama dengan sesama' },
  { key: 'cintaIlmu', label: 'Cinta Ilmu', icon: '📚', description: 'Semangat belajar dan menuntut ilmu' },
  { key: 'cintaLingkungan', label: 'Cinta Lingkungan', icon: '🌿', description: 'Menjaga dan melestarikan lingkungan' },
  { key: 'cintaTanahAir', label: 'Cinta Tanah Air', icon: '🇮🇩', description: 'Cinta NKRI dan budaya Indonesia' },
];

// Template KBC berdasarkan tema (untuk generate otomatis)
export const kbcTemplates: Record<string, Record<string, string>> = {
  cintaAllahRasul: {
    default: 'Mensyukuri nikmat Allah dan meneladani akhlak Rasulullah melalui kegiatan {tema}',
    'Cinta Lingkungan': 'Mensyukuri nikmat Allah berupa alam yang indah dengan menjaga {tema} sebagai bentuk ibadah',
    'Cinta Sesama': 'Mengamalkan ajaran tolong-menolong dalam {tema} sebagai perintah Allah dan sunnah Rasulullah',
    'Cinta Allah & Rasul': 'Mencintai dan meneladani akhlak Rasulullah SAW melalui {tema} dalam kehidupan sehari-hari',
    'Cinta Ilmu': 'Mengamalkan perintah Allah "Iqra" (Bacalah!) dengan semangat {tema}',
    'Cinta Diri': 'Menjaga kesehatan dan kebersihan diri sebagai bagian dari iman melalui {tema}',
    'Cinta Tanah Air': 'Mensyukuri keberagaman budaya Indonesia sebagai nikmat Allah melalui {tema}',
  },
  cintaDiri: {
    default: 'Mengembangkan potensi diri dan membangun karakter positif melalui {tema}',
    'Cinta Lingkungan': 'Membiasakan hidup bersih dan sehat sebagai wujud cinta terhadap diri sendiri melalui {tema}',
    'Cinta Sesama': 'Membangun karakter tanggung jawab dan kepedulian dalam diri melalui {tema}',
    'Cinta Allah & Rasul': 'Membangun karakter mulia dalam diri dengan mengikuti sunnah Nabi melalui {tema}',
    'Cinta Ilmu': 'Mengembangkan potensi diri melalui {tema} dan menambah wawasan',
    'Cinta Diri': 'Merawat tubuh dengan pola hidup sehat sebagai wujud syukur melalui {tema}',
    'Cinta Tanah Air': 'Bangga dengan identitas budaya sendiri dan menghargai keunikan diri melalui {tema}',
  },
  cintaSesama: {
    default: 'Membangun sikap kerjasama dan kepedulian terhadap sesama melalui {tema}',
    'Cinta Lingkungan': 'Bekerjasama dengan teman dalam menjaga kebersihan dan keindahan lingkungan melalui {tema}',
    'Cinta Sesama': 'Membantu sesama tanpa membedakan suku, agama, dan golongan melalui {tema}',
    'Cinta Allah & Rasul': 'Mempraktikkan sikap ramah, jujur, dan santun kepada semua orang melalui {tema}',
    'Cinta Ilmu': 'Berbagi ilmu dan pengalaman dari {tema} kepada teman',
    'Cinta Diri': 'Saling mengingatkan untuk hidup bersih dan sehat melalui {tema}',
    'Cinta Tanah Air': 'Menghargai budaya teman dari daerah lain dan hidup rukun dalam keberagaman melalui {tema}',
  },
  cintaIlmu: {
    default: 'Menumbuhkan semangat belajar dan rasa ingin tahu melalui {tema}',
    'Cinta Lingkungan': 'Mempelajari cara merawat dan menjaga lingkungan dengan baik melalui {tema}',
    'Cinta Sesama': 'Mempelajari nilai-nilai gotong royong dan kepedulian sosial melalui {tema}',
    'Cinta Allah & Rasul': 'Mempelajari sirah Nabawiyah dan hadits-hadits tentang akhlak melalui {tema}',
    'Cinta Ilmu': 'Menumbuhkan kecintaan terhadap buku dan kegemaran belajar melalui {tema}',
    'Cinta Diri': 'Mempelajari pentingnya kebersihan dan cara menjaga kesehatan melalui {tema}',
    'Cinta Tanah Air': 'Mempelajari kekayaan budaya Indonesia dari berbagai daerah melalui {tema}',
  },
  cintaLingkungan: {
    default: 'Menjaga dan melestarikan lingkungan sebagai bentuk kepedulian melalui {tema}',
    'Cinta Lingkungan': 'Menanam dan merawat tanaman serta menjaga kebersihan sebagai bentuk kepedulian melalui {tema}',
    'Cinta Sesama': 'Menjaga kebersihan lingkungan bersama untuk kenyamanan semua melalui {tema}',
    'Cinta Allah & Rasul': 'Meneladani kasih sayang Rasulullah terhadap makhluk dan alam melalui {tema}',
    'Cinta Ilmu': 'Membaca dan mempelajari buku tentang alam dan lingkungan melalui {tema}',
    'Cinta Diri': 'Menjaga kebersihan lingkungan untuk kesehatan diri sendiri melalui {tema}',
    'Cinta Tanah Air': 'Mengenal kearifan lokal dalam menjaga lingkungan Indonesia melalui {tema}',
  },
  cintaTanahAir: {
    default: 'Menumbuhkan rasa cinta tanah air dan bangga sebagai bangsa Indonesia melalui {tema}',
    'Cinta Lingkungan': 'Menjaga kelestarian lingkungan Indonesia sebagai amanah untuk generasi mendatang melalui {tema}',
    'Cinta Sesama': 'Melestarikan budaya gotong royong sebagai warisan bangsa Indonesia melalui {tema}',
    'Cinta Allah & Rasul': 'Mengamalkan nilai-nilai luhur yang menjadi karakter bangsa Indonesia melalui {tema}',
    'Cinta Ilmu': 'Membaca cerita rakyat dan buku tentang Indonesia melalui {tema}',
    'Cinta Diri': 'Menjadi generasi Indonesia yang sehat dan kuat melalui {tema}',
    'Cinta Tanah Air': 'Melestarikan dan membanggakan budaya Indonesia melalui {tema}',
  },
};

// Fungsi untuk generate KBC berdasarkan tema, kategori, dan dimensi yang dipilih
export interface KBCData {
  cintaAllahRasul: string;
  cintaDiri: string;
  cintaSesama: string;
  cintaIlmu: string;
  cintaLingkungan: string;
  cintaTanahAir: string;
}

// Mapping dari Kategori KBC ke dimensi KBC yang sesuai
export const kategoriToDimensiKBC: Record<string, string> = {
  'Cinta Allah & Rasul': 'cintaAllahRasul',
  'Cinta Diri': 'cintaDiri',
  'Cinta Sesama': 'cintaSesama',
  'Cinta Ilmu': 'cintaIlmu',
  'Cinta Lingkungan': 'cintaLingkungan',
  'Cinta Tanah Air': 'cintaTanahAir',
};

export function generateKBC(
  tema: string, 
  kategoriKBC: string, 
  selectedDimensiKBC: string[] // dimensi tambahan yang dipilih user
): KBCData {
  const result: KBCData = {
    cintaAllahRasul: '',
    cintaDiri: '',
    cintaSesama: '',
    cintaIlmu: '',
    cintaLingkungan: '',
    cintaTanahAir: '',
  };

  const fillTemplate = (template: string) => {
    return template.replace(/\{tema\}/g, tema.toLowerCase());
  };

  // Dimensi utama berdasarkan kategori yang dipilih
  const dimensiUtama = kategoriToDimensiKBC[kategoriKBC];
  
  // Gabungkan dimensi utama dengan dimensi tambahan yang dipilih user
  const dimensiToFill = new Set<string>();
  
  // Selalu tambahkan dimensi utama sesuai kategori
  if (dimensiUtama) {
    dimensiToFill.add(dimensiUtama);
  }
  
  // Tambahkan dimensi tambahan yang dipilih user
  for (const d of selectedDimensiKBC) {
    dimensiToFill.add(d);
  }

  // Generate konten untuk setiap dimensi yang dipilih
  for (const key of dimensiToFill) {
    const templates = kbcTemplates[key];
    if (templates) {
      const template = templates[kategoriKBC] || templates.default;
      (result as unknown as Record<string, string>)[key] = fillTemplate(template);
    }
  }

  return result;
}

export const modelPembelajaranOptions = [
  "Project Based Learning (PjBL)",
  "Problem Based Learning (PBL)",
  "Discovery Learning",
  "Inquiry Based Learning",
  "Cooperative Learning",
  "Contextual Teaching and Learning (CTL)",
];

export const pendekatanOptions = [
  "Kontekstual, Kolaboratif, dan Reflektif",
  "Saintifik dan Eksploratif",
  "Tematik Integratif",
  "Berbasis Pengalaman (Experiential Learning)",
  "Diferensiasi dan Personalisasi",
];

export const instrumenOptions = ["LKPD", "Observasi", "Unjuk Kerja", "Jurnal", "Portofolio"];

export interface TemaTemplate {
  tema: string;
  kategori: string;
  bentukKokurikuler: string;
  bentukKegiatan: string;
  lokasiKegiatan: string;
  dimensiProfil: string[];
  kbc: {
    cintaAllahRasul: string;
    cintaDiri: string;
    cintaSesama: string;
    cintaIlmu: string;
    cintaLingkungan: string;
    cintaTanahAir: string;
  };
  tujuanPembelajaran: string[];
  praktikPedagogis: {
    model: string;
    pendekatan: string;
    refleksi: string;
  };
  lingkungan: {
    madrasah: string;
    rumahMasyarakat: string;
  };
  kemitraan: {
    satuanPendidikan: string;
    keluarga: string;
    masyarakat: string;
  };
  mataPelajaran: string[];
  pemanfaatanDigital: string;
  pertemuanTemplate: {
    judul: string;
    pendahuluan: string;
    inti: string;
    penutup: string;
    lkpdAmati: string[];
    lkpdCerita: string;
  }[];
  asesmen: {
    diagnostik: string;
    formatif: string;
    sumatif: string;
  };
  rubrik: {
    indikator: string;
    sangatBaik: string;
    baik: string;
    cukup: string;
    kurang: string;
  }[];
}

export const temaTemplates: TemaTemplate[] = [
  // ======= CINTA LINGKUNGAN =======
  {
    tema: "Cinta Lingkungan Sekolahku",
    kategori: "Cinta Lingkungan",
    bentukKokurikuler: "Proyek Berbasis Lingkungan",
    bentukKegiatan: "Praktik Penghijauan & Kebersihan",
    lokasiKegiatan: "Halaman Sekolah & Lingkungan Sekitar",
    dimensiProfil: [
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
      "menjelaskan pentingnya menjaga kebersihan lingkungan sebagai bentuk syukur kepada Allah SWT",
      "mempraktikkan cara menanam dan merawat tanaman dengan benar",
      "bekerjasama dalam kegiatan penghijauan dan kebersihan lingkungan",
      "mengidentifikasi permasalahan lingkungan dan solusinya",
      "merefleksikan pengalaman belajar dalam menjaga lingkungan",
    ],
    praktikPedagogis: {
      model: "Project Based Learning (PjBL)",
      pendekatan: "Kontekstual, Kolaboratif, dan Reflektif",
      refleksi: "Jurnal harian, diskusi kelompok, dan presentasi hasil kerja",
    },
    lingkungan: {
      madrasah: "Halaman sekolah, taman madrasah, dan area penghijauan",
      rumahMasyarakat: "Lingkungan rumah siswa untuk praktik lanjutan dan kebun warga sekitar",
    },
    kemitraan: {
      satuanPendidikan: "Guru kelas, guru PAI, dan petugas kebersihan sekolah",
      keluarga: "Orangtua mendampingi praktik perawatan tanaman di rumah",
      masyarakat: "Petani/Penyuluh pertanian lokal, Dinas Lingkungan Hidup",
    },
    mataPelajaran: [
      "Akidah Akhlak",
      "IPAS",
      "Bahasa Indonesia",
    ],
    pemanfaatanDigital: "Video pembelajaran tentang pelestarian lingkungan, aplikasi identifikasi tanaman, dan dokumentasi digital kegiatan melalui foto/video",
    pertemuanTemplate: [
      {
        judul: "Mengenal Lingkungan Sekolahku",
        pendahuluan: "Pembukaan dengan salam, doa bersama, dan membaca Asmaul Husna. Guru menyampaikan tujuan pembelajaran dan melakukan apersepsi tentang lingkungan sekolah yang bersih dan asri.",
        inti: "1) Siswa melakukan observasi lingkungan sekolah secara berkelompok, 2) Mengidentifikasi kondisi kebersihan dan tanaman yang ada, 3) Mencatat temuan dalam lembar observasi, 4) Diskusi kelompok tentang permasalahan yang ditemukan",
        penutup: "Refleksi bersama tentang kondisi lingkungan sekolah, menyimpulkan hasil pembelajaran, doa penutup dan salam.",
        lkpdAmati: [
          "Amati halaman sekolahmu! Apa saja yang kamu lihat? (tanaman, sampah, dll)",
          "Bagaimana kondisi kebersihan di sekitar kelasmu?",
        ],
        lkpdCerita: "Ceritakan perasaanmu ketika melihat lingkungan sekolah yang bersih dan asri! Apa yang ingin kamu lakukan untuk menjaga kebersihannya?",
      },
      {
        judul: "Praktik Menanam dan Merawat Tanaman",
        pendahuluan: "Salam, doa, dan review pembelajaran sebelumnya. Pengenalan alat dan bahan untuk menanam tanaman. Narasumber (petani lokal) memberikan pengarahan.",
        inti: "1) Siswa menyiapkan media tanam dengan bimbingan, 2) Praktik menanam bibit tanaman secara berkelompok, 3) Belajar cara menyiram dan merawat tanaman, 4) Memberi label nama kelompok pada tanaman",
        penutup: "Refleksi tentang pengalaman menanam, membuat komitmen merawat tanaman, doa dan salam penutup.",
        lkpdAmati: [
          "Amati bibit tanaman yang akan kamu tanam! Bagaimana bentuk daun dan batangnya?",
          "Apa saja alat dan bahan yang dibutuhkan untuk menanam?",
        ],
        lkpdCerita: "Ceritakan pengalamanmu saat menanam tanaman hari ini! Apa yang kamu rasakan? Bagaimana caramu akan merawat tanaman ini?",
      },
      {
        judul: "Aksi Bersih Lingkungan & Presentasi",
        pendahuluan: "Salam, doa, dan review perkembangan tanaman. Persiapan alat kebersihan untuk aksi bersih.",
        inti: "1) Aksi bersih lingkungan sekolah secara gotong royong, 2) Dokumentasi kegiatan melalui foto, 3) Menyusun laporan kegiatan sederhana, 4) Presentasi hasil kerja kelompok dan tanaman yang dirawat",
        penutup: "Refleksi keseluruhan proyek, apresiasi dan penghargaan kelompok terbaik, komitmen menjaga lingkungan, doa dan salam.",
        lkpdAmati: [
          "Amati perkembangan tanaman yang sudah kamu tanam! Apa perubahannya?",
          "Setelah aksi bersih, bagaimana kondisi lingkungan sekolahmu sekarang?",
        ],
        lkpdCerita: "Ceritakan apa yang sudah kamu pelajari selama kegiatan ini! Apa komitmenmu untuk menjaga lingkungan setelah ini?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab awal tentang pengetahuan siswa mengenai lingkungan dan pengalaman menanam tanaman",
      formatif: "Observasi partisipasi siswa dalam kegiatan, diskusi kelompok, dan praktik harian",
      sumatif: "Penilaian hasil proyek (tanaman yang dirawat), laporan kegiatan, dan presentasi kelompok",
    },
    rubrik: [
      {
        indikator: "Partisipasi dalam kegiatan (Gotong Royong)",
        sangatBaik: "Aktif berpartisipasi dan membantu teman lain",
        baik: "Aktif berpartisipasi dalam kegiatan",
        cukup: "Berpartisipasi dengan bimbingan",
        kurang: "Kurang berpartisipasi dalam kegiatan",
      },
      {
        indikator: "Keterampilan menanam (Cinta Lingkungan)",
        sangatBaik: "Mampu menanam dengan benar dan mandiri",
        baik: "Mampu menanam dengan benar",
        cukup: "Mampu menanam dengan bimbingan",
        kurang: "Belum mampu menanam dengan benar",
      },
      {
        indikator: "Perawatan tanaman (Cinta Diri & Lingkungan)",
        sangatBaik: "Merawat tanaman secara rutin dan konsisten",
        baik: "Merawat tanaman dengan baik",
        cukup: "Merawat tanaman dengan pengingat",
        kurang: "Belum mampu merawat tanaman",
      },
      {
        indikator: "Refleksi dan Syukur (Cinta Allah)",
        sangatBaik: "Mampu merefleksikan dengan penuh rasa syukur",
        baik: "Mampu merefleksikan pembelajaran",
        cukup: "Merefleksikan dengan bimbingan",
        kurang: "Belum mampu merefleksikan",
      },
    ],
  },

  // ======= PENGELOLAAN SAMPAH =======
  {
    tema: "Pengelolaan Sampah",
    kategori: "Cinta Lingkungan",
    bentukKokurikuler: "Proyek Daur Ulang Kreatif",
    bentukKegiatan: "Praktik Pemilahan & Daur Ulang Sampah",
    lokasiKegiatan: "Ruang Kelas, Halaman Sekolah, dan Bank Sampah",
    dimensiProfil: [
      "Keimanan/Ketakwaan",
      "Kreativitas",
      "Kolaborasi",
    ],
    kbc: {
      cintaAllahRasul: "Menjaga kebersihan sebagai bagian dari iman dan mengamalkan hadits Rasulullah tentang kebersihan",
      cintaDiri: "Menjaga kesehatan dengan tidak membuang sampah sembarangan dan hidup bersih",
      cintaSesama: "Bekerjasama dalam memilah sampah dan menciptakan lingkungan bersih untuk semua",
      cintaIlmu: "Mempelajari jenis-jenis sampah, cara pemilahan, dan teknik daur ulang sederhana",
      cintaLingkungan: "Mengurangi sampah plastik dan mendaur ulang sampah menjadi barang berguna",
      cintaTanahAir: "Menjaga Indonesia tetap bersih dan bebas dari pencemaran sampah",
    },
    tujuanPembelajaran: [
      "mengidentifikasi jenis-jenis sampah (organik, anorganik, B3)",
      "mempraktikkan cara memilah sampah dengan benar",
      "membuat kerajinan dari bahan daur ulang",
      "menjelaskan dampak sampah terhadap lingkungan",
      "berkomitmen untuk mengurangi penggunaan plastik sekali pakai",
    ],
    praktikPedagogis: {
      model: "Project Based Learning (PjBL)",
      pendekatan: "Saintifik dan Eksploratif",
      refleksi: "Jurnal refleksi harian, pameran karya daur ulang",
    },
    lingkungan: {
      madrasah: "Ruang kelas, halaman sekolah, dan pojok daur ulang",
      rumahMasyarakat: "Rumah siswa untuk praktik pemilahan sampah keluarga, bank sampah terdekat",
    },
    kemitraan: {
      satuanPendidikan: "Guru kelas, guru seni, dan petugas kebersihan",
      keluarga: "Orangtua mendampingi pemilahan sampah di rumah",
      masyarakat: "Pengelola bank sampah, pengrajin daur ulang lokal",
    },
    mataPelajaran: [
      "Akidah Akhlak",
      "IPAS",
      "Seni Budaya",
    ],
    pemanfaatanDigital: "Video edukasi pemilahan sampah, tutorial kerajinan daur ulang, dan dokumentasi proses pembelajaran",
    pertemuanTemplate: [
      {
        judul: "Mengenal Jenis-jenis Sampah",
        pendahuluan: "Salam, doa, Asmaul Husna. Apersepsi dengan menampilkan gambar/video tentang kondisi sampah di Indonesia.",
        inti: "1) Siswa mengamati berbagai jenis sampah yang dibawa guru, 2) Diskusi tentang perbedaan sampah organik, anorganik, dan B3, 3) Praktik memilah sampah ke tempat yang sesuai, 4) Membuat poster pemilahan sampah",
        penutup: "Refleksi tentang pentingnya memilah sampah, komitmen memilah sampah di rumah, doa penutup.",
        lkpdAmati: [
          "Amati sampah-sampah di sekitarmu! Kelompokkan mana yang organik dan anorganik!",
          "Menurutmu, sampah mana yang paling berbahaya? Mengapa?",
        ],
        lkpdCerita: "Ceritakan bagaimana kondisi tempat sampah di rumahmu! Apakah sudah dipisahkan? Apa rencanamu untuk membantu memilah sampah?",
      },
      {
        judul: "Kreasi Daur Ulang",
        pendahuluan: "Salam, doa, review materi sebelumnya. Menampilkan contoh kerajinan dari barang bekas.",
        inti: "1) Mengumpulkan bahan daur ulang (botol plastik, kardus, dll), 2) Belajar teknik membuat kerajinan sederhana, 3) Praktik membuat celengan dari botol bekas atau tempat pensil dari kardus, 4) Menghias hasil karya",
        penutup: "Pameran mini hasil karya, apresiasi antar kelompok, refleksi dan doa.",
        lkpdAmati: [
          "Amati bahan-bahan bekas yang kamu kumpulkan! Apa saja yang bisa dibuat dari bahan tersebut?",
          "Amati langkah-langkah membuat kerajinan! Mana yang paling sulit?",
        ],
        lkpdCerita: "Ceritakan proses membuat kerajinanmu! Apa kesulitanmu? Bagaimana kamu mengatasinya?",
      },
      {
        judul: "Kampanye Kurangi Sampah Plastik",
        pendahuluan: "Salam, doa, review kegiatan sebelumnya. Diskusi tentang bahaya sampah plastik.",
        inti: "1) Membuat poster/spanduk ajakan kurangi plastik, 2) Menyusun yel-yel kampanye, 3) Praktik kampanye di lingkungan sekolah, 4) Presentasi hasil dan komitmen bersama",
        penutup: "Refleksi keseluruhan proyek, ikrar bersama kurangi plastik, penghargaan, doa penutup.",
        lkpdAmati: [
          "Amati berapa banyak plastik yang kamu gunakan dalam sehari!",
          "Apa saja alternatif pengganti plastik yang bisa kamu gunakan?",
        ],
        lkpdCerita: "Ceritakan aksi nyatamu untuk mengurangi sampah plastik! Apa yang sudah kamu lakukan? Apa tantangannya?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab tentang kebiasaan membuang sampah dan pengetahuan jenis sampah",
      formatif: "Observasi praktik pemilahan, kreativitas dalam membuat kerajinan",
      sumatif: "Penilaian produk kerajinan daur ulang, presentasi kampanye, portofolio",
    },
    rubrik: [
      {
        indikator: "Pemahaman jenis sampah (Cinta Ilmu)",
        sangatBaik: "Mampu mengidentifikasi semua jenis sampah dengan tepat",
        baik: "Mampu mengidentifikasi sebagian besar jenis sampah",
        cukup: "Mampu mengidentifikasi dengan bimbingan",
        kurang: "Belum mampu mengidentifikasi jenis sampah",
      },
      {
        indikator: "Kreativitas daur ulang (Kreatif)",
        sangatBaik: "Sangat kreatif dan inovatif dalam membuat kerajinan",
        baik: "Kreatif dalam membuat kerajinan",
        cukup: "Membuat kerajinan dengan bimbingan",
        kurang: "Belum mampu membuat kerajinan",
      },
      {
        indikator: "Kerjasama tim (Gotong Royong)",
        sangatBaik: "Sangat aktif berkontribusi dan membantu teman",
        baik: "Aktif berkontribusi dalam kelompok",
        cukup: "Berkontribusi dengan dorongan",
        kurang: "Kurang berkontribusi",
      },
      {
        indikator: "Komitmen kebersihan (Cinta Allah)",
        sangatBaik: "Sangat konsisten menjaga kebersihan sebagai ibadah",
        baik: "Konsisten menjaga kebersihan",
        cukup: "Menjaga kebersihan dengan pengingat",
        kurang: "Belum konsisten menjaga kebersihan",
      },
    ],
  },

  // ======= GOTONG ROYONG =======
  {
    tema: "Gotong Royong di Masyarakat",
    kategori: "Cinta Sesama",
    bentukKokurikuler: "Proyek Sosial Kemasyarakatan",
    bentukKegiatan: "Kerja Bakti & Aksi Sosial",
    lokasiKegiatan: "Lingkungan Madrasah dan Masyarakat Sekitar",
    dimensiProfil: [
      "Keimanan/Ketakwaan",
      "Kolaborasi",
      "Kewargaan",
    ],
    kbc: {
      cintaAllahRasul: "Mengamalkan ajaran tolong-menolong dalam kebaikan sebagai perintah Allah dan sunnah Rasulullah",
      cintaDiri: "Membangun karakter tanggung jawab dan kepedulian dalam diri",
      cintaSesama: "Membantu sesama tanpa membedakan suku, agama, dan golongan",
      cintaIlmu: "Mempelajari nilai-nilai gotong royong dalam tradisi Indonesia",
      cintaLingkungan: "Menjaga kebersihan dan keindahan lingkungan bersama-sama",
      cintaTanahAir: "Melestarikan budaya gotong royong sebagai warisan bangsa Indonesia",
    },
    tujuanPembelajaran: [
      "menjelaskan makna dan nilai gotong royong dalam Islam dan budaya Indonesia",
      "mempraktikkan sikap tolong-menolong dalam kehidupan sehari-hari",
      "bekerjasama dengan masyarakat dalam kegiatan sosial",
      "menghargai perbedaan dan keberagaman dalam bergotong royong",
      "merefleksikan manfaat gotong royong bagi diri dan masyarakat",
    ],
    praktikPedagogis: {
      model: "Cooperative Learning",
      pendekatan: "Berbasis Pengalaman (Experiential Learning)",
      refleksi: "Diskusi kelompok, jurnal refleksi, dan sharing pengalaman",
    },
    lingkungan: {
      madrasah: "Ruang kelas, halaman madrasah, dan area yang membutuhkan perbaikan",
      rumahMasyarakat: "Lingkungan RT/RW, rumah warga yang membutuhkan bantuan",
    },
    kemitraan: {
      satuanPendidikan: "Guru kelas, guru PAI, kepala madrasah",
      keluarga: "Orangtua ikut serta dalam kegiatan gotong royong",
      masyarakat: "Ketua RT/RW, tokoh masyarakat, warga sekitar madrasah",
    },
    mataPelajaran: [
      "Akidah Akhlak",
      "Pendidikan Pancasila",
      "Bahasa Indonesia",
    ],
    pemanfaatanDigital: "Video dokumenter gotong royong, foto kegiatan untuk portofolio digital, presentasi hasil kegiatan",
    pertemuanTemplate: [
      {
        judul: "Mengenal Nilai Gotong Royong",
        pendahuluan: "Salam, doa, Asmaul Husna. Menyanyikan lagu 'Gotong Royong'. Apersepsi dengan cerita tentang ta'awun.",
        inti: "1) Menonton video tentang gotong royong di berbagai daerah Indonesia, 2) Diskusi tentang ayat dan hadits tentang tolong-menolong, 3) Mengidentifikasi bentuk gotong royong di sekitar madrasah, 4) Merencanakan kegiatan gotong royong",
        penutup: "Refleksi nilai gotong royong, pembagian tugas untuk pertemuan selanjutnya, doa penutup.",
        lkpdAmati: [
          "Amati video gotong royong! Apa saja kegiatan yang dilakukan warga?",
          "Di lingkunganmu, kapan biasanya warga bergotong royong?",
        ],
        lkpdCerita: "Ceritakan pengalamanmu ikut gotong royong! Bagaimana perasaanmu? Apa manfaatnya?",
      },
      {
        judul: "Aksi Gotong Royong di Madrasah",
        pendahuluan: "Salam, doa, persiapan alat-alat untuk kerja bakti. Pembagian kelompok dan area kerja.",
        inti: "1) Kerja bakti membersihkan lingkungan madrasah, 2) Memperbaiki fasilitas yang rusak bersama-sama, 3) Menata taman dan halaman madrasah, 4) Dokumentasi kegiatan",
        penutup: "Istirahat bersama, refleksi kegiatan, apresiasi kerja keras bersama, doa dan salam.",
        lkpdAmati: [
          "Amati area yang kamu bersihkan! Bagaimana perubahannya sebelum dan sesudah?",
          "Siapa saja yang membantu dalam kelompokmu? Apa tugas masing-masing?",
        ],
        lkpdCerita: "Ceritakan apa yang kamu kerjakan hari ini! Bagaimana rasanya bekerja bersama teman-teman?",
      },
      {
        judul: "Aksi Sosial di Masyarakat",
        pendahuluan: "Salam, doa, berkumpul di madrasah. Pengarahan kegiatan di lingkungan masyarakat.",
        inti: "1) Kunjungan ke rumah warga yang membutuhkan bantuan, 2) Membantu pekerjaan ringan (bersih-bersih, menata barang), 3) Berinteraksi dengan warga dan mendengar cerita mereka, 4) Berbagi sembako/donasi jika ada",
        penutup: "Kembali ke madrasah, refleksi pengalaman, menulis jurnal kegiatan, doa penutup.",
        lkpdAmati: [
          "Amati kondisi rumah/lingkungan warga yang dikunjungi! Apa yang bisa kita bantu?",
          "Bagaimana ekspresi warga saat kita membantu mereka?",
        ],
        lkpdCerita: "Ceritakan pengalamanmu membantu warga hari ini! Apa pelajaran penting yang kamu dapatkan?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab tentang pemahaman gotong royong dan pengalaman sebelumnya",
      formatif: "Observasi partisipasi dan kerjasama selama kegiatan",
      sumatif: "Jurnal refleksi, presentasi pengalaman, dan penilaian sikap",
    },
    rubrik: [
      {
        indikator: "Partisipasi aktif (Gotong Royong)",
        sangatBaik: "Sangat aktif dan inisiatif membantu",
        baik: "Aktif berpartisipasi",
        cukup: "Berpartisipasi dengan dorongan",
        kurang: "Kurang berpartisipasi",
      },
      {
        indikator: "Kerjasama dengan teman (Cinta Sesama)",
        sangatBaik: "Sangat kooperatif dan membantu teman",
        baik: "Kooperatif dengan teman",
        cukup: "Bekerjasama dengan bimbingan",
        kurang: "Sulit bekerjasama",
      },
      {
        indikator: "Kepedulian sosial (Cinta Sesama)",
        sangatBaik: "Sangat peduli dan empati tinggi",
        baik: "Peduli terhadap sesama",
        cukup: "Menunjukkan kepedulian dengan dorongan",
        kurang: "Kurang menunjukkan kepedulian",
      },
      {
        indikator: "Refleksi nilai ta'awun (Cinta Allah)",
        sangatBaik: "Mampu merefleksikan dengan sangat baik",
        baik: "Mampu merefleksikan dengan baik",
        cukup: "Merefleksikan dengan bimbingan",
        kurang: "Belum mampu merefleksikan",
      },
    ],
  },

  // ======= MENELADANI AKHLAK RASULULLAH =======
  {
    tema: "Meneladani Akhlak Rasulullah",
    kategori: "Cinta Allah & Rasul",
    bentukKokurikuler: "Proyek Pembentukan Karakter",
    bentukKegiatan: "Praktik Akhlak Mulia Sehari-hari",
    lokasiKegiatan: "Ruang Kelas, Masjid, dan Lingkungan Madrasah",
    dimensiProfil: [
      "Keimanan/Ketakwaan",
      "Kemandirian",
      "Komunikasi",
    ],
    kbc: {
      cintaAllahRasul: "Mencintai dan meneladani akhlak Rasulullah SAW dalam kehidupan sehari-hari",
      cintaDiri: "Membangun karakter mulia dalam diri dengan mengikuti sunnah Nabi",
      cintaSesama: "Mempraktikkan sikap ramah, jujur, dan santun kepada semua orang",
      cintaIlmu: "Mempelajari sirah Nabawiyah dan hadits-hadits tentang akhlak",
      cintaLingkungan: "Meneladani kasih sayang Rasulullah terhadap makhluk dan alam",
      cintaTanahAir: "Mengamalkan nilai-nilai luhur yang juga menjadi karakter bangsa Indonesia",
    },
    tujuanPembelajaran: [
      "menceritakan kisah akhlak mulia Rasulullah SAW",
      "mengidentifikasi sifat-sifat terpuji Rasulullah (shiddiq, amanah, tabligh, fathanah)",
      "mempraktikkan akhlak mulia dalam kehidupan sehari-hari",
      "membuat komitmen untuk meneladani Rasulullah",
      "merefleksikan perubahan sikap setelah meneladani Rasulullah",
    ],
    praktikPedagogis: {
      model: "Contextual Teaching and Learning (CTL)",
      pendekatan: "Keteladanan dan Pembiasaan",
      refleksi: "Jurnal akhlak harian, muhasabah diri, sharing circle",
    },
    lingkungan: {
      madrasah: "Ruang kelas, musholla/masjid madrasah, dan seluruh area madrasah",
      rumahMasyarakat: "Rumah siswa untuk praktik akhlak dengan keluarga, lingkungan bermain",
    },
    kemitraan: {
      satuanPendidikan: "Guru PAI, wali kelas, seluruh guru sebagai teladan",
      keluarga: "Orangtua memantau dan mendampingi praktik akhlak di rumah",
      masyarakat: "Ustadz/ustadzah pengajian, tokoh agama setempat",
    },
    mataPelajaran: [
      "Al-Quran Hadis",
      "Akidah Akhlak",
      "Bahasa Indonesia",
    ],
    pemanfaatanDigital: "Video animasi sirah Nabawiyah, aplikasi dzikir dan doa, rekaman murotal untuk pembiasaan",
    pertemuanTemplate: [
      {
        judul: "Mengenal Akhlak Mulia Rasulullah",
        pendahuluan: "Salam, doa, shalawat bersama. Menyanyikan lagu 'Rasulku Teladanku'. Apersepsi tentang kecintaan kepada Rasulullah.",
        inti: "1) Menonton video animasi kisah akhlak Rasulullah, 2) Diskusi tentang sifat shiddiq, amanah, tabligh, fathanah, 3) Bermain peran (role play) situasi yang membutuhkan akhlak mulia, 4) Membuat peta konsep akhlak Rasulullah",
        penutup: "Refleksi sifat mana yang ingin diteladani, membaca shalawat bersama, doa penutup.",
        lkpdAmati: [
          "Amati kisah Rasulullah dalam video! Akhlak apa saja yang ditunjukkan beliau?",
          "Dalam kehidupanmu, kapan kamu perlu bersikap jujur (shiddiq)?",
        ],
        lkpdCerita: "Ceritakan salah satu kisah Rasulullah yang paling kamu sukai! Mengapa kamu menyukainya?",
      },
      {
        judul: "Praktik Akhlak Mulia di Madrasah",
        pendahuluan: "Salam, doa, shalawat. Review sifat-sifat Rasulullah. Penjelasan tantangan akhlak hari ini.",
        inti: "1) Challenge jujur: tidak mencontek dan berkata jujur sepanjang hari, 2) Challenge ramah: menyapa dan tersenyum kepada semua orang, 3) Challenge amanah: menjaga barang titipan dengan baik, 4) Mencatat pengalaman di jurnal akhlak",
        penutup: "Sharing pengalaman challenge, apresiasi dan motivasi, shalawat dan doa.",
        lkpdAmati: [
          "Amati dirimu hari ini! Challenge apa yang paling sulit kamu lakukan?",
          "Amati temanmu! Siapa yang sudah menunjukkan akhlak mulia hari ini?",
        ],
        lkpdCerita: "Ceritakan pengalamanmu menjalankan challenge akhlak hari ini! Apa tantangannya? Bagaimana perasaanmu?",
      },
      {
        judul: "Ikrar dan Komitmen Akhlak Mulia",
        pendahuluan: "Salam, doa, shalawat. Review perjalanan akhlak selama proyek. Persiapan ikrar.",
        inti: "1) Presentasi jurnal akhlak dan perubahan yang dirasakan, 2) Membuat poster komitmen akhlak pribadi, 3) Ikrar bersama untuk meneladani Rasulullah, 4) Penandatanganan poster komitmen",
        penutup: "Shalawat bersama, foto bersama dengan poster, doa penutup dan harapan.",
        lkpdAmati: [
          "Amati perubahanmu selama proyek ini! Akhlak apa yang sudah lebih baik?",
          "Amati poster komitmenmu! Apa target akhlakmu ke depan?",
        ],
        lkpdCerita: "Ceritakan perubahan dirimu setelah belajar meneladani Rasulullah! Apa yang paling berkesan?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab tentang pengetahuan sirah dan akhlak Rasulullah",
      formatif: "Observasi praktik akhlak harian, jurnal refleksi",
      sumatif: "Portofolio jurnal akhlak, presentasi perubahan diri, penilaian sikap",
    },
    rubrik: [
      {
        indikator: "Pemahaman akhlak Rasulullah (Cinta Ilmu)",
        sangatBaik: "Sangat memahami dan bisa menjelaskan dengan contoh",
        baik: "Memahami dengan baik",
        cukup: "Memahami dengan bimbingan",
        kurang: "Belum memahami",
      },
      {
        indikator: "Praktik kejujuran/shiddiq (Cinta Allah)",
        sangatBaik: "Selalu jujur dalam semua situasi",
        baik: "Jujur dalam sebagian besar situasi",
        cukup: "Jujur dengan pengingat",
        kurang: "Masih sering tidak jujur",
      },
      {
        indikator: "Sikap ramah dan santun (Cinta Sesama)",
        sangatBaik: "Sangat ramah dan santun kepada semua",
        baik: "Ramah dan santun",
        cukup: "Ramah dengan pengingat",
        kurang: "Kurang ramah",
      },
      {
        indikator: "Konsistensi berakhlak mulia (Cinta Diri)",
        sangatBaik: "Sangat konsisten setiap hari",
        baik: "Konsisten",
        cukup: "Kadang konsisten",
        kurang: "Belum konsisten",
      },
    ],
  },

  // ======= SENANGNYA MEMBACA =======
  {
    tema: "Senangnya Membaca",
    kategori: "Cinta Ilmu",
    bentukKokurikuler: "Proyek Literasi",
    bentukKegiatan: "Gerakan Gemar Membaca",
    lokasiKegiatan: "Perpustakaan, Ruang Kelas, dan Pojok Baca",
    dimensiProfil: [
      "Penalaran Kritis",
      "Kreativitas",
      "Kemandirian",
    ],
    kbc: {
      cintaAllahRasul: "Mengamalkan perintah Allah 'Iqra' (Bacalah!) sebagai wahyu pertama yang turun",
      cintaDiri: "Mengembangkan potensi diri melalui membaca dan menambah wawasan",
      cintaSesama: "Berbagi ilmu dan cerita dari buku yang dibaca kepada teman",
      cintaIlmu: "Menumbuhkan kecintaan terhadap buku dan kegemaran membaca",
      cintaLingkungan: "Membaca buku tentang alam dan lingkungan untuk menambah pengetahuan",
      cintaTanahAir: "Membaca cerita rakyat dan buku tentang Indonesia",
    },
    tujuanPembelajaran: [
      "menunjukkan kegemaran membaca berbagai jenis buku",
      "menceritakan kembali isi buku yang dibaca",
      "membuat resensi buku sederhana",
      "berbagi pengalaman membaca dengan teman",
      "membuat pojok baca yang menarik di kelas",
    ],
    praktikPedagogis: {
      model: "Discovery Learning",
      pendekatan: "Literasi dan Eksplorasi",
      refleksi: "Jurnal membaca, book talk, dan pameran buku",
    },
    lingkungan: {
      madrasah: "Perpustakaan madrasah, pojok baca kelas, taman baca",
      rumahMasyarakat: "Pojok baca di rumah, perpustakaan desa/kelurahan",
    },
    kemitraan: {
      satuanPendidikan: "Guru kelas, pustakawan, guru bahasa Indonesia",
      keluarga: "Orangtua mendampingi membaca di rumah, menyediakan buku",
      masyarakat: "Relawan literasi, penerbit buku anak, komunitas baca",
    },
    mataPelajaran: [
      "Bahasa Indonesia",
      "Al-Quran Hadis",
      "Seni Budaya",
    ],
    pemanfaatanDigital: "E-book anak, aplikasi baca digital, video book review, rekaman audio book",
    pertemuanTemplate: [
      {
        judul: "Menjelajahi Dunia Buku",
        pendahuluan: "Salam, doa, membaca Iqra bersama. Apersepsi dengan menampilkan berbagai jenis buku menarik.",
        inti: "1) Kunjungan ke perpustakaan madrasah, 2) Mengenal berbagai jenis buku (fiksi, non-fiksi, ensiklopedia, dll), 3) Memilih buku favorit untuk dibaca, 4) Membaca bersama di perpustakaan (silent reading)",
        penutup: "Sharing buku yang dipilih, membuat target membaca, doa penutup.",
        lkpdAmati: [
          "Amati perpustakaan madrasahmu! Ada berapa rak buku? Jenis buku apa saja yang ada?",
          "Amati sampul buku yang kamu pilih! Apa yang membuatmu tertarik?",
        ],
        lkpdCerita: "Ceritakan tentang buku yang kamu pilih! Mengapa kamu memilih buku itu? Apa yang ingin kamu ketahui dari buku tersebut?",
      },
      {
        judul: "Berbagi Cerita dari Buku",
        pendahuluan: "Salam, doa, review buku yang sudah dibaca. Ice breaking dengan tebak-tebakan tokoh cerita.",
        inti: "1) Book talk: menceritakan isi buku yang dibaca, 2) Membuat resensi buku sederhana (judul, pengarang, isi singkat, kesan), 3) Menggambar tokoh atau adegan favorit dari buku, 4) Pameran mini hasil karya",
        penutup: "Apresiasi presentasi terbaik, tantangan membaca buku lain, doa penutup.",
        lkpdAmati: [
          "Amati cerita temanmu! Buku apa yang paling menarik menurutmu?",
          "Dari buku yang kamu baca, siapa tokoh favoritmu? Mengapa?",
        ],
        lkpdCerita: "Ceritakan kembali isi buku yang sudah kamu baca! Apa bagian yang paling seru atau menarik?",
      },
      {
        judul: "Membuat Pojok Baca Kelas",
        pendahuluan: "Salam, doa, diskusi tentang pojok baca impian. Persiapan bahan dan alat.",
        inti: "1) Merancang desain pojok baca kelas, 2) Mengumpulkan dan menata buku-buku, 3) Membuat dekorasi (poster motivasi membaca, rak kreatif, bantal duduk), 4) Meresmikan pojok baca dengan membaca bersama",
        penutup: "Foto bersama di pojok baca, komitmen rajin membaca, apresiasi dan doa.",
        lkpdAmati: [
          "Amati pojok baca yang sudah dibuat! Apa saja yang ada di sana?",
          "Bagaimana cara merawat buku-buku di pojok baca?",
        ],
        lkpdCerita: "Ceritakan perasaanmu setelah punya pojok baca di kelas! Kapan kamu akan membaca di pojok baca? Buku apa yang ingin kamu baca selanjutnya?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab tentang kebiasaan membaca dan buku favorit",
      formatif: "Observasi kegiatan membaca, jurnal membaca harian",
      sumatif: "Resensi buku, presentasi book talk, portofolio literasi",
    },
    rubrik: [
      {
        indikator: "Kegemaran membaca (Cinta Ilmu)",
        sangatBaik: "Sangat gemar membaca dan banyak buku dibaca",
        baik: "Gemar membaca",
        cukup: "Membaca dengan dorongan",
        kurang: "Belum gemar membaca",
      },
      {
        indikator: "Kemampuan menceritakan kembali (Bernalar Kritis)",
        sangatBaik: "Mampu menceritakan dengan runtut dan detail",
        baik: "Mampu menceritakan dengan baik",
        cukup: "Menceritakan dengan bimbingan",
        kurang: "Belum mampu menceritakan",
      },
      {
        indikator: "Berbagi dengan teman (Cinta Sesama)",
        sangatBaik: "Aktif berbagi dan merekomendasikan buku",
        baik: "Berbagi cerita buku",
        cukup: "Berbagi dengan dorongan",
        kurang: "Kurang berbagi",
      },
      {
        indikator: "Kreativitas karya literasi (Kreatif)",
        sangatBaik: "Sangat kreatif dalam membuat karya",
        baik: "Kreatif dalam membuat karya",
        cukup: "Membuat karya dengan bimbingan",
        kurang: "Belum mampu membuat karya",
      },
    ],
  },

  // ======= HIDUP SEHAT DAN BERSIH =======
  {
    tema: "Hidup Sehat dan Bersih",
    kategori: "Cinta Diri",
    bentukKokurikuler: "Proyek Pola Hidup Sehat",
    bentukKegiatan: "Praktik Kebersihan dan Kesehatan",
    lokasiKegiatan: "Ruang Kelas, UKS, dan Halaman Madrasah",
    dimensiProfil: [
      "Keimanan/Ketakwaan",
      "Kesehatan",
      "Kemandirian",
    ],
    kbc: {
      cintaAllahRasul: "Menjaga kebersihan dan kesehatan sebagai bagian dari iman dan ajaran Rasulullah",
      cintaDiri: "Merawat tubuh dengan pola hidup sehat sebagai wujud syukur atas nikmat kesehatan",
      cintaSesama: "Saling mengingatkan untuk hidup bersih dan sehat",
      cintaIlmu: "Mempelajari pentingnya kebersihan dan cara menjaga kesehatan",
      cintaLingkungan: "Menjaga kebersihan lingkungan untuk kesehatan bersama",
      cintaTanahAir: "Menjadi generasi Indonesia yang sehat dan kuat",
    },
    tujuanPembelajaran: [
      "mempraktikkan cara mencuci tangan yang benar",
      "menerapkan pola makan sehat dan bergizi",
      "menjaga kebersihan diri dan lingkungan",
      "menjelaskan pentingnya olahraga dan istirahat cukup",
      "membuat jadwal hidup sehat harian",
    ],
    praktikPedagogis: {
      model: "Contextual Teaching and Learning (CTL)",
      pendekatan: "Pembiasaan dan Praktik Langsung",
      refleksi: "Jurnal kesehatan harian, cek kesehatan sederhana",
    },
    lingkungan: {
      madrasah: "Ruang kelas, UKS, kantin sehat, wastafel",
      rumahMasyarakat: "Rumah siswa untuk praktik hidup sehat, Puskesmas",
    },
    kemitraan: {
      satuanPendidikan: "Guru kelas, guru PJOK, petugas UKS",
      keluarga: "Orangtua mendampingi praktik hidup sehat di rumah",
      masyarakat: "Petugas kesehatan/Puskesmas, dokter gigi",
    },
    mataPelajaran: [
      "Fikih",
      "PJOK",
      "IPAS",
    ],
    pemanfaatanDigital: "Video edukasi kesehatan, poster digital PHBS, aplikasi pengingat minum air dan cuci tangan",
    pertemuanTemplate: [
      {
        judul: "Bersih Itu Sehat",
        pendahuluan: "Salam, doa, menyanyikan lagu 'Bangun Tidur'. Apersepsi tentang kegiatan kebersihan pagi hari.",
        inti: "1) Praktik mencuci tangan 6 langkah dengan benar, 2) Diskusi tentang pentingnya kebersihan dalam Islam, 3) Membuat poster langkah cuci tangan, 4) Challenge kebersihan diri (cek kuku, gigi, rambut)",
        penutup: "Refleksi kebiasaan kebersihan diri, komitmen cuci tangan teratur, doa penutup.",
        lkpdAmati: [
          "Amati tanganmu! Apakah sudah bersih? Bagaimana cara mencuci tangan yang benar?",
          "Amati kebersihan dirimu (kuku, gigi, rambut)! Mana yang perlu diperbaiki?",
        ],
        lkpdCerita: "Ceritakan kebiasaan kebersihanmu setiap hari! Kapan kamu mencuci tangan? Berapa kali menggosok gigi?",
      },
      {
        judul: "Makanan Sehat Bergizi",
        pendahuluan: "Salam, doa, tanya jawab tentang sarapan pagi ini. Ice breaking dengan tebak buah dan sayur.",
        inti: "1) Mengenal gizi seimbang (karbohidrat, protein, vitamin, mineral), 2) Memilah makanan sehat dan tidak sehat, 3) Membuat piring gizi seimbang dari kertas, 4) Menyusun menu sehat untuk satu hari",
        penutup: "Sharing menu sehat, komitmen mengurangi jajanan tidak sehat, doa penutup.",
        lkpdAmati: [
          "Amati isi bekal/jajananmu! Apakah sudah sehat dan bergizi?",
          "Amati piring gizi seimbang! Apa saja yang harus ada di piringmu?",
        ],
        lkpdCerita: "Ceritakan makanan favoritmu! Apakah termasuk makanan sehat? Makanan sehat apa yang ingin kamu coba?",
      },
      {
        judul: "Tubuh Sehat, Jiwa Kuat",
        pendahuluan: "Salam, doa, senam pagi bersama. Review pola hidup sehat yang sudah dipelajari.",
        inti: "1) Praktik olahraga ringan/senam, 2) Diskusi tentang pentingnya istirahat dan tidur cukup, 3) Membuat jadwal hidup sehat harian, 4) Presentasi jadwal dan komitmen hidup sehat",
        penutup: "Ikrar hidup sehat bersama, penutupan dengan relaksasi singkat, doa penutup.",
        lkpdAmati: [
          "Amati tubuhmu setelah olahraga! Bagaimana perasaanmu?",
          "Amati jadwal harianmu! Apakah sudah ada waktu olahraga dan istirahat yang cukup?",
        ],
        lkpdCerita: "Ceritakan komitmenmu untuk hidup sehat! Apa yang akan kamu ubah dari kebiasaanmu?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab tentang kebiasaan hidup sehat dan pengetahuan dasar kesehatan",
      formatif: "Observasi praktik kebersihan, cek daftar kebiasaan sehat harian",
      sumatif: "Jadwal hidup sehat, portofolio poster, penilaian praktik kebersihan",
    },
    rubrik: [
      {
        indikator: "Praktik kebersihan diri (Cinta Diri)",
        sangatBaik: "Selalu menjaga kebersihan dengan sangat baik",
        baik: "Menjaga kebersihan dengan baik",
        cukup: "Menjaga kebersihan dengan pengingat",
        kurang: "Kurang menjaga kebersihan",
      },
      {
        indikator: "Pola makan sehat (Cinta Diri)",
        sangatBaik: "Selalu memilih makanan sehat",
        baik: "Sering memilih makanan sehat",
        cukup: "Kadang memilih makanan sehat",
        kurang: "Jarang memilih makanan sehat",
      },
      {
        indikator: "Pemahaman hidup sehat (Cinta Ilmu)",
        sangatBaik: "Sangat memahami dan bisa menjelaskan",
        baik: "Memahami dengan baik",
        cukup: "Memahami dengan bimbingan",
        kurang: "Belum memahami",
      },
      {
        indikator: "Konsistensi kebiasaan sehat (Mandiri)",
        sangatBaik: "Sangat konsisten menerapkan hidup sehat",
        baik: "Konsisten menerapkan",
        cukup: "Kadang konsisten",
        kurang: "Belum konsisten",
      },
    ],
  },

  // ======= MENGENAL BUDAYA INDONESIA =======
  {
    tema: "Mengenal Budaya Indonesia",
    kategori: "Cinta Tanah Air",
    bentukKokurikuler: "Proyek Apresiasi Budaya",
    bentukKegiatan: "Pameran & Pentas Budaya Nusantara",
    lokasiKegiatan: "Ruang Kelas, Aula, dan Halaman Madrasah",
    dimensiProfil: [
      "Kewargaan",
      "Kreativitas",
      "Kolaborasi",
    ],
    kbc: {
      cintaAllahRasul: "Mensyukuri keberagaman budaya sebagai nikmat Allah dan menghargai perbedaan",
      cintaDiri: "Bangga dengan identitas budaya sendiri dan menghargai keunikan diri",
      cintaSesama: "Menghargai budaya teman dari daerah lain dan hidup rukun dalam keberagaman",
      cintaIlmu: "Mempelajari kekayaan budaya Indonesia dari berbagai daerah",
      cintaLingkungan: "Mengenal kearifan lokal dalam menjaga lingkungan",
      cintaTanahAir: "Melestarikan dan membanggakan budaya Indonesia",
    },
    tujuanPembelajaran: [
      "mengidentifikasi berbagai budaya dari berbagai daerah di Indonesia",
      "mempraktikkan tarian/lagu daerah atau permainan tradisional",
      "membuat karya seni bertema budaya Indonesia",
      "menghargai keberagaman budaya bangsa",
      "mempresentasikan budaya daerah kepada teman",
    ],
    praktikPedagogis: {
      model: "Project Based Learning (PjBL)",
      pendekatan: "Eksplorasi dan Apresiasi Budaya",
      refleksi: "Jurnal budaya, diskusi keberagaman, refleksi identitas",
    },
    lingkungan: {
      madrasah: "Ruang kelas, aula, halaman madrasah untuk pentas",
      rumahMasyarakat: "Sanggar budaya, museum daerah, rumah adat jika ada",
    },
    kemitraan: {
      satuanPendidikan: "Guru kelas, guru SBdP, guru mulok",
      keluarga: "Orangtua berbagi cerita budaya keluarga/daerah asal",
      masyarakat: "Seniman lokal, sanggar tari, komunitas budaya",
    },
    mataPelajaran: [
      "Seni Budaya",
      "Pendidikan Pancasila",
      "Bahasa Indonesia",
    ],
    pemanfaatanDigital: "Video tarian dan musik daerah, virtual tour museum budaya, dokumentasi pentas budaya",
    pertemuanTemplate: [
      {
        judul: "Menjelajah Budaya Nusantara",
        pendahuluan: "Salam, doa, menyanyikan lagu 'Dari Sabang Sampai Merauke'. Apersepsi dengan peta Indonesia.",
        inti: "1) Presentasi guru tentang keberagaman budaya Indonesia (rumah adat, pakaian, tarian), 2) Eksplorasi video budaya dari berbagai daerah, 3) Diskusi kelompok tentang budaya daerah asal, 4) Membuat peta budaya Indonesia sederhana",
        penutup: "Refleksi tentang indahnya keberagaman, pembagian tugas proyek budaya, doa penutup.",
        lkpdAmati: [
          "Amati peta Indonesia! Sebutkan 5 provinsi dan budaya khasnya!",
          "Amati video tarian daerah! Apa nama tariannya dan dari daerah mana?",
        ],
        lkpdCerita: "Ceritakan budaya daerah asalmu atau daerah yang paling kamu sukai! Apa yang menarik dari budaya tersebut?",
      },
      {
        judul: "Berkreasi dengan Budaya",
        pendahuluan: "Salam, doa, review budaya yang sudah dipelajari. Persiapan bahan untuk berkarya.",
        inti: "1) Praktik tarian daerah sederhana atau menyanyikan lagu daerah, 2) Membuat kerajinan bertema budaya (wayang kertas, hiasan batik, miniatur rumah adat), 3) Bermain permainan tradisional (congklak, engklek, dll), 4) Latihan presentasi budaya",
        penutup: "Sharing hasil karya, latihan untuk pentas, doa penutup.",
        lkpdAmati: [
          "Amati gerakan tarian yang kamu pelajari! Apa makna dari gerakan tersebut?",
          "Amati kerajinan yang kamu buat! Budaya daerah mana yang kamu tampilkan?",
        ],
        lkpdCerita: "Ceritakan pengalamanmu berkreasi dengan budaya! Apa yang paling menyenangkan?",
      },
      {
        judul: "Pentas & Pameran Budaya Nusantara",
        pendahuluan: "Salam, doa, persiapan pentas dan pameran. Gladi bersih.",
        inti: "1) Pameran hasil karya budaya dari semua kelompok, 2) Pentas tarian dan nyanyian daerah, 3) Stand permainan tradisional, 4) Kunjungan antar kelompok dan apresiasi",
        penutup: "Penghargaan untuk semua kelompok, ikrar cinta budaya Indonesia, foto bersama, doa penutup.",
        lkpdAmati: [
          "Amati pameran budaya temanmu! Budaya apa yang paling menarik perhatianmu?",
          "Amati pentas budaya! Apa yang kamu pelajari dari keberagaman ini?",
        ],
        lkpdCerita: "Ceritakan kesan dan pesanmu setelah mengikuti seluruh kegiatan budaya ini! Apa komitmenmu untuk melestarikan budaya Indonesia?",
      },
    ],
    asesmen: {
      diagnostik: "Tanya jawab tentang pengetahuan budaya daerah dan pengalaman dengan tradisi",
      formatif: "Observasi partisipasi, kreativitas dalam berkarya",
      sumatif: "Hasil karya budaya, penampilan pentas, portofolio proyek",
    },
    rubrik: [
      {
        indikator: "Pengetahuan budaya Indonesia (Cinta Ilmu)",
        sangatBaik: "Sangat menguasai berbagai budaya Indonesia",
        baik: "Menguasai dengan baik",
        cukup: "Menguasai dengan bimbingan",
        kurang: "Belum menguasai",
      },
      {
        indikator: "Kreativitas karya budaya (Kreatif)",
        sangatBaik: "Sangat kreatif dan orisinal",
        baik: "Kreatif dalam berkarya",
        cukup: "Berkarya dengan bimbingan",
        kurang: "Belum mampu berkarya",
      },
      {
        indikator: "Sikap menghargai keberagaman (Berkebinekaan)",
        sangatBaik: "Sangat menghargai semua budaya",
        baik: "Menghargai keberagaman",
        cukup: "Menghargai dengan pengingat",
        kurang: "Kurang menghargai",
      },
      {
        indikator: "Kerjasama dalam proyek (Gotong Royong)",
        sangatBaik: "Sangat kooperatif dan membantu teman",
        baik: "Kooperatif dalam kelompok",
        cukup: "Bekerjasama dengan bimbingan",
        kurang: "Kurang kooperatif",
      },
    ],
  },
];

export const getTemaByKategori = (kategori: string): TemaTemplate[] => {
  return temaTemplates.filter(t => t.kategori === kategori);
};

export const getAllKategori = (): string[] => {
  return [...new Set(temaTemplates.map(t => t.kategori))];
};

export const getRandomTema = (): TemaTemplate => {
  return temaTemplates[Math.floor(Math.random() * temaTemplates.length)];
};

// ============================================================
// TUJUAN PEMBELAJARAN GENERATOR
// ============================================================

export interface TujuanPembelajaranInput {
  tema: string;
  kategoriKBC: string;
  bentukKokurikuler: string;
  bentukKegiatan: string;
  mataPelajaran: string[];
  kelas: string;
  dimensiProfil?: string[];
}

// Kata kerja operasional berdasarkan level kognitif (Bloom's Taxonomy)
const kataKerjaKognitif = {
  mengingat: ['menyebutkan', 'mengidentifikasi', 'menunjukkan', 'mengenali', 'menyatakan'],
  memahami: ['menjelaskan', 'mendeskripsikan', 'menguraikan', 'menceritakan', 'membedakan'],
  menerapkan: ['mempraktikkan', 'menerapkan', 'melaksanakan', 'menggunakan', 'mendemonstrasikan'],
  menganalisis: ['menganalisis', 'membandingkan', 'menghubungkan', 'mengklasifikasikan', 'menemukan'],
  mengevaluasi: ['menilai', 'menyimpulkan', 'memutuskan', 'mengkritisi', 'merefleksikan'],
  mencipta: ['membuat', 'merancang', 'menyusun', 'menghasilkan', 'menciptakan'],
};

// Kata kerja afektif (sikap)
const kataKerjaAfektif = ['menunjukkan', 'menghargai', 'menghayati', 'membiasakan', 'berkomitmen', 'mengamalkan', 'meneladani'];

// Kata kerja psikomotorik (keterampilan)
const kataKerjaPsikomotorik = ['mempraktikkan', 'membuat', 'melakukan', 'menampilkan', 'menyajikan', 'mempresentasikan'];

// Template tujuan berdasarkan kategori KBC
const tujuanTemplateByKBC: Record<string, string[]> = {
  'Cinta Allah & Rasul': [
    '{kataKerja} nilai-nilai {tema} sebagai bentuk kecintaan kepada Allah SWT',
    '{kataKerja} sikap {tema} sesuai ajaran Rasulullah SAW',
    '{kataKerja} hikmah dan pelajaran dari kegiatan {bentukKegiatan} dalam perspektif Islam',
    '{kataKerja} rasa syukur melalui {bentukKegiatan}',
    '{kataKerja} akhlak mulia dalam {tema}',
  ],
  'Cinta Diri': [
    '{kataKerja} pentingnya {tema} untuk kesehatan dan perkembangan diri',
    '{kataKerja} kebiasaan positif terkait {tema} dalam kehidupan sehari-hari',
    '{kataKerja} sikap percaya diri melalui kegiatan {bentukKegiatan}',
    '{kataKerja} potensi diri dalam {bentukKokurikuler}',
    '{kataKerja} kemampuan {tema} secara mandiri',
  ],
  'Cinta Sesama': [
    '{kataKerja} sikap kerjasama dalam kegiatan {bentukKegiatan}',
    '{kataKerja} kepedulian terhadap sesama melalui {tema}',
    '{kataKerja} sikap toleransi dan menghargai perbedaan dalam {bentukKokurikuler}',
    '{kataKerja} kemampuan berkomunikasi dan berkolaborasi',
    '{kataKerja} empati dan kepedulian sosial melalui {bentukKegiatan}',
  ],
  'Cinta Ilmu': [
    '{kataKerja} konsep dan pengetahuan tentang {tema}',
    '{kataKerja} rasa ingin tahu melalui eksplorasi {bentukKegiatan}',
    '{kataKerja} keterampilan berpikir kritis dalam {bentukKokurikuler}',
    '{kataKerja} informasi dan data terkait {tema}',
    '{kataKerja} kreativitas dalam kegiatan {bentukKegiatan}',
  ],
  'Cinta Lingkungan': [
    '{kataKerja} pentingnya menjaga {tema} sebagai anugerah Allah',
    '{kataKerja} sikap peduli lingkungan melalui {bentukKegiatan}',
    '{kataKerja} cara merawat dan melestarikan lingkungan',
    '{kataKerja} dampak positif dan negatif terhadap lingkungan',
    '{kataKerja} aksi nyata dalam {bentukKokurikuler} untuk kelestarian lingkungan',
  ],
  'Cinta Tanah Air': [
    '{kataKerja} kekayaan budaya Indonesia melalui {tema}',
    '{kataKerja} sikap cinta tanah air dalam kegiatan {bentukKegiatan}',
    '{kataKerja} keberagaman dan persatuan bangsa',
    '{kataKerja} nilai-nilai luhur budaya Indonesia',
    '{kataKerja} peran dalam melestarikan {tema} sebagai warisan bangsa',
  ],
};

// Template tujuan berdasarkan mata pelajaran
const tujuanTemplateByMapel: Record<string, string[]> = {
  'Akidah Akhlak': [
    '{kataKerja} nilai-nilai akidah dan akhlak mulia yang terkandung dalam {tema}',
    '{kataKerja} sikap terpuji sesuai tuntunan agama melalui {bentukKegiatan}',
  ],
  'Al-Quran Hadis': [
    '{kataKerja} ayat Al-Quran dan hadis yang berkaitan dengan {tema}',
    '{kataKerja} kandungan nilai Al-Quran dan hadis dalam {bentukKegiatan}',
  ],
  'Fikih': [
    '{kataKerja} hukum dan tata cara ibadah yang berkaitan dengan {tema}',
    '{kataKerja} ketentuan fikih dalam kehidupan sehari-hari melalui {bentukKegiatan}',
  ],
  'Pendidikan Pancasila': [
    '{kataKerja} nilai-nilai Pancasila dalam {tema}',
    '{kataKerja} sikap warga negara yang baik melalui {bentukKegiatan}',
  ],
  'Bahasa Indonesia': [
    '{kataKerja} laporan/cerita tentang pengalaman {bentukKegiatan}',
    '{kataKerja} ide dan gagasan terkait {tema} secara lisan dan tulisan',
  ],
  'IPAS': [
    '{kataKerja} fenomena alam dan sosial terkait {tema}',
    '{kataKerja} proses ilmiah dan interaksi sosial dalam {bentukKegiatan}',
  ],
  'Seni Budaya': [
    '{kataKerja} karya seni dan budaya terkait {tema}',
    '{kataKerja} kreativitas dan apresiasi seni dalam {bentukKegiatan}',
  ],
  'PJOK': [
    '{kataKerja} aktivitas fisik dan pola hidup sehat dalam {bentukKegiatan}',
    '{kataKerja} kesehatan jasmani dan rohani melalui {tema}',
  ],
};

// Template tujuan berdasarkan bentuk kegiatan
const tujuanTemplateByBentukKegiatan: Record<string, string[]> = {
  'proyek': [
    '{kataKerja} proyek {tema} secara kolaboratif',
    '{kataKerja} langkah-langkah pelaksanaan proyek dengan sistematis',
    '{kataKerja} hasil proyek kepada orang lain',
  ],
  'praktik': [
    '{kataKerja} keterampilan {tema} dengan benar',
    '{kataKerja} prosedur {bentukKegiatan} secara mandiri',
  ],
  'observasi': [
    '{kataKerja} objek/fenomena terkait {tema} dengan teliti',
    '{kataKerja} hasil pengamatan dalam bentuk laporan',
  ],
  'presentasi': [
    '{kataKerja} hasil kerja/karya terkait {tema}',
    '{kataKerja} penjelasan dengan percaya diri',
  ],
  'pameran': [
    '{kataKerja} karya untuk pameran {tema}',
    '{kataKerja} karya orang lain dengan sikap apresiatif',
  ],
  'bakti sosial': [
    '{kataKerja} kepedulian sosial melalui aksi nyata',
    '{kataKerja} manfaat berbagi dengan sesama',
  ],
  'pentas': [
    '{kataKerja} kemampuan tampil dalam pentas {tema}',
    '{kataKerja} karya seni/budaya dengan percaya diri',
  ],
};

// Fungsi helper untuk random pick
function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Fungsi untuk mendeteksi kata kunci dalam teks
function containsKeyword(text: string, keywords: string[]): boolean {
  const lowerText = text.toLowerCase();
  return keywords.some(k => lowerText.includes(k.toLowerCase()));
}

// Fungsi untuk menentukan level kelas (rendah/tinggi)
function getKelasLevel(kelas: string): 'rendah' | 'tinggi' {
  if (kelas.includes('1') || kelas.includes('2') || kelas.includes('3')) {
    return 'rendah';
  }
  return 'tinggi';
}

// Fungsi untuk mendapatkan kata kerja sesuai level kelas
function getKataKerja(level: 'rendah' | 'tinggi', domain: 'kognitif' | 'afektif' | 'psikomotorik'): string {
  if (domain === 'afektif') {
    return randomPick(kataKerjaAfektif);
  }
  if (domain === 'psikomotorik') {
    return randomPick(kataKerjaPsikomotorik);
  }
  
  // Kognitif - sesuaikan dengan level kelas
  if (level === 'rendah') {
    const lowLevel = [...kataKerjaKognitif.mengingat, ...kataKerjaKognitif.memahami, ...kataKerjaKognitif.menerapkan];
    return randomPick(lowLevel);
  } else {
    const highLevel = [...kataKerjaKognitif.memahami, ...kataKerjaKognitif.menerapkan, ...kataKerjaKognitif.menganalisis, ...kataKerjaKognitif.mengevaluasi];
    return randomPick(highLevel);
  }
}

// Fungsi untuk mendeteksi jenis bentuk kegiatan
function detectBentukKegiatan(bentukKegiatan: string): string {
  const lower = bentukKegiatan.toLowerCase();
  if (containsKeyword(lower, ['proyek', 'project'])) return 'proyek';
  if (containsKeyword(lower, ['praktik', 'praktis', 'latihan'])) return 'praktik';
  if (containsKeyword(lower, ['observasi', 'pengamatan', 'amati'])) return 'observasi';
  if (containsKeyword(lower, ['presentasi', 'tampil'])) return 'presentasi';
  if (containsKeyword(lower, ['pameran', 'display', 'galeri'])) return 'pameran';
  if (containsKeyword(lower, ['bakti', 'sosial', 'berbagi'])) return 'bakti sosial';
  if (containsKeyword(lower, ['pentas', 'pertunjukan', 'perform'])) return 'pentas';
  return 'proyek'; // default
}

// Fungsi untuk replace template dengan nilai aktual
function fillTemplate(template: string, values: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(values)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  }
  // Capitalize first letter
  return result.charAt(0).toUpperCase() + result.slice(1);
}

// Fungsi untuk mendeteksi mapel dari string
function detectMapel(mapelStr: string): string {
  const lower = mapelStr.toLowerCase();
  if (containsKeyword(lower, ['akidah', 'akhlak'])) return 'Akidah Akhlak';
  if (containsKeyword(lower, ['quran', 'qur\'an', 'hadis', 'hadits'])) return 'Al-Quran Hadis';
  if (containsKeyword(lower, ['fikih', 'fiqih', 'fiqh'])) return 'Fikih';
  if (containsKeyword(lower, ['pancasila', 'ppkn', 'pkn', 'kewarganegaraan'])) return 'Pendidikan Pancasila';
  if (containsKeyword(lower, ['bahasa indonesia', 'menulis', 'membaca', 'sastra'])) return 'Bahasa Indonesia';
  if (containsKeyword(lower, ['ipas', 'ipa', 'ips', 'sains', 'alam', 'sosial'])) return 'IPAS';
  if (containsKeyword(lower, ['seni', 'budaya', 'prakarya', 'sbdp', 'musik', 'tari', 'rupa'])) return 'Seni Budaya';
  if (containsKeyword(lower, ['pjok', 'olahraga', 'jasmani', 'kesehatan'])) return 'PJOK';
  return '';
}

// Template tujuan berdasarkan Dimensi Profil Lulusan
const tujuanTemplateByDimensi: Record<string, string[]> = {
  'Keimanan/Ketakwaan': [
    '{kataKerja} nilai-nilai keimanan dan ketakwaan melalui kegiatan {tema}',
    '{kataKerja} akhlak mulia dalam {bentukKegiatan}',
    '{kataKerja} sikap syukur dan sabar dalam proses {bentukKokurikuler}',
  ],
  'Kewargaan': [
    '{kataKerja} sikap cinta tanah air dan menghargai keberagaman melalui {tema}',
    '{kataKerja} wawasan kebangsaan dan tanggung jawab sosial dalam {bentukKegiatan}',
    '{kataKerja} sikap toleransi dan kepedulian bermasyarakat dalam {bentukKokurikuler}',
  ],
  'Penalaran Kritis': [
    '{kataKerja} kemampuan berpikir kritis dan analitis tentang {tema}',
    '{kataKerja} informasi dan data terkait {bentukKegiatan} secara logis',
    '{kataKerja} solusi berbasis penalaran dalam {bentukKokurikuler}',
  ],
  'Kreativitas': [
    '{kataKerja} kreativitas dan inovasi dalam kegiatan {tema}',
    '{kataKerja} karya orisinal melalui {bentukKegiatan}',
    '{kataKerja} gagasan baru dalam {bentukKokurikuler}',
  ],
  'Kolaborasi': [
    '{kataKerja} sikap kerjasama dan gotong royong dalam {bentukKegiatan}',
    '{kataKerja} kepedulian terhadap sesama melalui {tema}',
    '{kataKerja} kemampuan berkolaborasi dan berbagi peran dalam {bentukKokurikuler}',
  ],
  'Kemandirian': [
    '{kataKerja} kemandirian dalam menyelesaikan tugas {tema}',
    '{kataKerja} tanggung jawab pribadi dan inisiatif dalam {bentukKegiatan}',
    '{kataKerja} kemampuan mengatur diri dalam {bentukKokurikuler}',
  ],
  'Kesehatan': [
    '{kataKerja} pola hidup sehat dan bersih melalui kegiatan {tema}',
    '{kataKerja} kesadaran menjaga kesehatan jasmani dan rohani dalam {bentukKegiatan}',
    '{kataKerja} kebiasaan positif untuk kesejahteraan diri dalam {bentukKokurikuler}',
  ],
  'Komunikasi': [
    '{kataKerja} kemampuan menyampaikan ide dan gagasan tentang {tema} secara efektif',
    '{kataKerja} keterampilan berkomunikasi lisan dan tulisan dalam {bentukKegiatan}',
    '{kataKerja} kemampuan presentasi dan berbagi pengalaman dalam {bentukKokurikuler}',
  ],
};

// ============================================================
// MAIN GENERATOR FUNCTION
// ============================================================

export function generateTujuanPembelajaran(input: TujuanPembelajaranInput): string[] {
  const { tema, kategoriKBC, bentukKokurikuler, bentukKegiatan, mataPelajaran, kelas, dimensiProfil } = input;
  const kelasLevel = getKelasLevel(kelas);
  const bentukKegiatanType = detectBentukKegiatan(bentukKegiatan);
  
  const tujuanList: string[] = [];
  const usedTemplates = new Set<string>();
  
  const values = {
    tema: tema.toLowerCase(),
    bentukKokurikuler: bentukKokurikuler.toLowerCase(),
    bentukKegiatan: bentukKegiatan.toLowerCase(),
  };

  // 1. Tujuan dari Dimensi Profil Lulusan (jika ada yang dipilih)
  if (dimensiProfil && dimensiProfil.length > 0) {
    for (const dimensi of dimensiProfil.slice(0, 2)) {
      const dimensiTemplates = tujuanTemplateByDimensi[dimensi];
      if (dimensiTemplates && dimensiTemplates.length > 0) {
        const template = randomPick(dimensiTemplates);
        if (!usedTemplates.has(template)) {
          const kataKerja = getKataKerja(kelasLevel, 'afektif');
          const tujuan = fillTemplate(template, { ...values, kataKerja });
          tujuanList.push(tujuan);
          usedTemplates.add(template);
        }
      }
    }
  }

  // 2. Tujuan dari kategori KBC (1-2 tujuan)
  const kbcTemplates = tujuanTemplateByKBC[kategoriKBC] || tujuanTemplateByKBC['Cinta Ilmu'];
  const shuffledKBC = [...kbcTemplates].sort(() => Math.random() - 0.5);
  const maxKBC = dimensiProfil && dimensiProfil.length > 0 ? 2 : 3;
  
  for (let i = 0; i < Math.min(maxKBC, shuffledKBC.length); i++) {
    const template = shuffledKBC[i];
    if (!usedTemplates.has(template)) {
      const domains: Array<'kognitif' | 'afektif' | 'psikomotorik'> = ['kognitif', 'afektif', 'psikomotorik'];
      const kataKerja = getKataKerja(kelasLevel, domains[i % 3]);
      const tujuan = fillTemplate(template, { ...values, kataKerja });
      tujuanList.push(tujuan);
      usedTemplates.add(template);
    }
  }

  // 3. Tujuan dari bentuk kegiatan (1 tujuan)
  const bentukTemplates = tujuanTemplateByBentukKegiatan[bentukKegiatanType] || [];
  if (bentukTemplates.length > 0 && tujuanList.length < 4) {
    const template = randomPick(bentukTemplates);
    if (!usedTemplates.has(template)) {
      const kataKerja = getKataKerja(kelasLevel, 'psikomotorik');
      const tujuan = fillTemplate(template, { ...values, kataKerja });
      tujuanList.push(tujuan);
      usedTemplates.add(template);
    }
  }

  // 4. Tujuan dari mata pelajaran (1-2 tujuan)
  for (const mapelStr of mataPelajaran.slice(0, 2)) {
    if (!mapelStr.trim() || tujuanList.length >= 5) continue;
    const mapelKey = detectMapel(mapelStr);
    const mapelTemplates = tujuanTemplateByMapel[mapelKey];
    if (mapelTemplates && mapelTemplates.length > 0) {
      const template = randomPick(mapelTemplates);
      if (!usedTemplates.has(template)) {
        const kataKerja = getKataKerja(kelasLevel, 'kognitif');
        const tujuan = fillTemplate(template, { ...values, kataKerja });
        tujuanList.push(tujuan);
        usedTemplates.add(template);
      }
    }
  }

  // 5. Tambahkan tujuan refleksi jika masih kurang dari 5
  if (tujuanList.length < 5) {
    const refleksiTemplates = [
      `Merefleksikan pengalaman dan pembelajaran dari kegiatan ${values.bentukKegiatan}`,
      `Menunjukkan sikap positif dan tanggung jawab selama kegiatan ${values.tema}`,
      `Mengapresiasi hasil karya sendiri dan orang lain dalam ${values.bentukKokurikuler}`,
    ];
    const refleksiTujuan = randomPick(refleksiTemplates);
    if (!usedTemplates.has(refleksiTujuan)) {
      tujuanList.push(refleksiTujuan);
    }
  }

  // Pastikan minimal 5 tujuan
  while (tujuanList.length < 5) {
    const extraTemplates = [
      `Menunjukkan sikap antusias dalam mengikuti kegiatan ${values.tema}`,
      `Bekerjasama dengan teman dalam menyelesaikan tugas ${values.bentukKegiatan}`,
      `Mengkomunikasikan hasil pembelajaran kepada orang lain`,
      `Menerapkan nilai-nilai yang dipelajari dalam kehidupan sehari-hari`,
      `Mengembangkan kreativitas melalui ${values.bentukKokurikuler}`,
    ];
    const extra = randomPick(extraTemplates);
    if (!tujuanList.includes(extra)) {
      tujuanList.push(extra);
    }
  }

  // Maksimal 5 tujuan
  return tujuanList.slice(0, 5);
}

// Fungsi untuk generate mata pelajaran terkait berdasarkan tema dan kategori
export function generateMataPelajaranTerkait(tema: string, kategoriKBC: string, bentukKegiatan: string): string[] {
  const mataPelajaran: string[] = [];
  const lower = (tema + ' ' + bentukKegiatan).toLowerCase();
  
  // Mapel keagamaan selalu relevan untuk KBC
  switch (kategoriKBC) {
    case 'Cinta Lingkungan':
      mataPelajaran.push('Akidah Akhlak');
      mataPelajaran.push('IPAS');
      mataPelajaran.push('Bahasa Indonesia');
      break;
    case 'Cinta Sesama':
      mataPelajaran.push('Akidah Akhlak');
      mataPelajaran.push('Pendidikan Pancasila');
      mataPelajaran.push('Bahasa Indonesia');
      break;
    case 'Cinta Allah & Rasul':
      mataPelajaran.push('Al-Quran Hadis');
      mataPelajaran.push('Akidah Akhlak');
      mataPelajaran.push('Bahasa Indonesia');
      break;
    case 'Cinta Ilmu':
      mataPelajaran.push('Al-Quran Hadis');
      if (containsKeyword(lower, ['baca', 'literasi', 'buku'])) {
        mataPelajaran.push('Bahasa Indonesia');
      } else {
        mataPelajaran.push('IPAS');
      }
      mataPelajaran.push('Bahasa Indonesia');
      break;
    case 'Cinta Diri':
      mataPelajaran.push('Fikih');
      mataPelajaran.push('PJOK');
      mataPelajaran.push('Bahasa Indonesia');
      break;
    case 'Cinta Tanah Air':
      mataPelajaran.push('Pendidikan Pancasila');
      mataPelajaran.push('Seni Budaya');
      mataPelajaran.push('Bahasa Indonesia');
      break;
    default:
      mataPelajaran.push('Akidah Akhlak');
      mataPelajaran.push('Bahasa Indonesia');
  }
  
  // Tambahkan berdasarkan bentuk kegiatan
  if (containsKeyword(lower, ['seni', 'tari', 'musik', 'kerajinan', 'kreasi', 'budaya'])) {
    if (!mataPelajaran.includes('Seni Budaya')) {
      mataPelajaran.push('Seni Budaya');
    }
  }
  
  // Hapus duplikat dan batasi 3
  return [...new Set(mataPelajaran)].slice(0, 3);
}
