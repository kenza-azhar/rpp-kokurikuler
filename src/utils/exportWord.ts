import { FormData } from '../types/kokurikuler';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildPertemuanRows(formData: FormData): string {
  return formData.pertemuan
    .map(
      (p, i) => `
    <div style="margin-bottom:10pt; padding-left:10pt; border-left:2pt solid #059669;">
      <p style="font-weight:bold; color:#059669; margin:0 0 4pt 0; font-size:11pt;">
        Pertemuan ${i + 1} &ndash; ${escapeHtml(p.judul || '&hellip;&hellip;')} (${p.jamPelajaran} JP)
      </p>
      <p style="margin:2pt 0;"><b>1. Pendahuluan:</b> ${escapeHtml(p.pendahuluan || '&hellip;')}</p>
      <p style="margin:2pt 0;"><b>2. Inti:</b> ${escapeHtml(p.inti || '&hellip;')}</p>
      <p style="margin:2pt 0;"><b>3. Penutup:</b> ${escapeHtml(p.penutup || '&hellip;')}</p>
    </div>`
    )
    .join('');
}

function buildRubrikTable(formData: FormData): string {
  const rows = formData.rubrikPenilaian
    .map(
      (r) => `
    <tr>
      <td style="border:1pt solid #444; padding:3pt 5pt;">${escapeHtml(r.indikator || '&hellip;')}</td>
      <td style="border:1pt solid #444; padding:3pt 5pt; text-align:center;">${escapeHtml(r.sangatBaik || '&hellip;')}</td>
      <td style="border:1pt solid #444; padding:3pt 5pt; text-align:center;">${escapeHtml(r.baik || '&hellip;')}</td>
      <td style="border:1pt solid #444; padding:3pt 5pt; text-align:center;">${escapeHtml(r.cukup || '&hellip;')}</td>
      <td style="border:1pt solid #444; padding:3pt 5pt; text-align:center;">${escapeHtml(r.kurang || '&hellip;')}</td>
    </tr>`
    )
    .join('');

  return `
  <table style="width:100%; border-collapse:collapse; font-size:10pt; margin-top:6pt;">
    <thead>
      <tr style="background:#059669; color:white;">
        <th style="border:1pt solid #047857; padding:4pt 5pt; text-align:left; width:25%;">Indikator (DPL &amp; KBC)</th>
        <th style="border:1pt solid #047857; padding:4pt 5pt; text-align:center;">Sangat Baik (SB)</th>
        <th style="border:1pt solid #047857; padding:4pt 5pt; text-align:center;">Baik (B)</th>
        <th style="border:1pt solid #047857; padding:4pt 5pt; text-align:center;">Cukup (C)</th>
        <th style="border:1pt solid #047857; padding:4pt 5pt; text-align:center;">Kurang (K)</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function buildKBCSection(formData: FormData): string {
  const items: { label: string; value: string }[] = [];
  if (formData.kbc.cintaAllahRasul) items.push({ label: 'Cinta Allah &amp; Rasul', value: formData.kbc.cintaAllahRasul });
  if (formData.kbc.cintaDiri) items.push({ label: 'Cinta Diri', value: formData.kbc.cintaDiri });
  if (formData.kbc.cintaSesama) items.push({ label: 'Cinta Sesama', value: formData.kbc.cintaSesama });
  if (formData.kbc.cintaIlmu) items.push({ label: 'Cinta Ilmu', value: formData.kbc.cintaIlmu });
  if (formData.kbc.cintaLingkungan) items.push({ label: 'Cinta Lingkungan', value: formData.kbc.cintaLingkungan });
  if (formData.kbc.cintaTanahAir) items.push({ label: 'Cinta Tanah Air', value: formData.kbc.cintaTanahAir });

  if (items.length === 0) return '<p style="color:#999;font-style:italic;">Dimensi KBC belum diisi</p>';

  return items
    .map(
      (item) =>
        `<p style="margin:3pt 0;"><b>${item.label}</b> : ${escapeHtml(item.value)}</p>`
    )
    .join('');
}

function buildLKPD(formData: FormData): string {
  return formData.lkpd
    .map(
      (lkpd, index) => `
    <div style="border:1pt solid #bbb; padding:12pt; margin-bottom:14pt;">
      <h3 style="text-align:center; color:#059669; border-bottom:1pt solid #bbb; padding-bottom:5pt; margin-top:0; font-size:12pt;">
        LKPD PERTEMUAN ${index + 1} &ndash; ${escapeHtml(lkpd.judulPertemuan || formData.pertemuan[index]?.judul || '&hellip;')}
      </h3>
      <p><b>Nama:</b> ___________________________</p>
      <p style="font-weight:bold; color:#2563eb; font-size:11pt;">Ayo Amati!</p>
      <ol>
        ${lkpd.ayoAmati.map((a) => `<li style="margin-bottom:6pt;">${escapeHtml(a || '&hellip;')}<br/><div style="border:1pt solid #ccc; min-height:30pt; padding:3pt; margin-top:3pt;"><span style="color:#aaa; font-size:9pt;">Jawaban:</span></div></li>`).join('')}
      </ol>
      <p style="font-weight:bold; color:#16a34a; font-size:11pt;">Ayo Cerita!</p>
      <p>${escapeHtml(lkpd.ayoCerita || '&hellip;')}</p>
      <div style="border:1pt solid #ccc; min-height:50pt; padding:3pt;"><span style="color:#aaa; font-size:9pt;">Ceritamu:</span></div>
      <p style="font-weight:bold; color:#9333ea; margin-top:8pt; font-size:11pt;">Refleksi:</p>
      <p>&#9744; Senang &nbsp;&nbsp;&nbsp; &#9744; Biasa saja &nbsp;&nbsp;&nbsp; &#9744; Belum paham</p>
    </div>`
    )
    .join('');
}

function buildFullHTML(formData: FormData): string {
  const f = formData;

  // Word-compatible HTML with @page for A4, 2cm margins
  return `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<meta name="ProgId" content="Word.Document">
<meta name="Generator" content="Microsoft Word 15">
<meta name="Originator" content="Microsoft Word 15">
<!--[if gte mso 9]>
<xml>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: A4;
    margin: 2cm 2cm 2cm 2cm;
    mso-page-orientation: portrait;
    mso-header-margin: 1cm;
    mso-footer-margin: 1cm;
  }
  @page Section1 {
    size: 595.3pt 841.9pt;
    margin: 56.7pt 56.7pt 56.7pt 56.7pt;
    mso-header-margin: 28.35pt;
    mso-footer-margin: 28.35pt;
    mso-paper-source: 0;
  }
  div.Section1 { page: Section1; }
  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.5;
    color: #222;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 14pt;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5pt;
    margin-bottom: 2pt;
    font-weight: bold;
  }
  h2 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    font-weight: bold;
    border-bottom: 1pt solid #333;
    padding-bottom: 2pt;
    margin-top: 14pt;
    margin-bottom: 6pt;
  }
  h3 {
    font-family: 'Times New Roman', Times, serif;
    font-size: 11pt;
    font-weight: bold;
    margin-top: 10pt;
    margin-bottom: 4pt;
  }
  p {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    margin: 2pt 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    font-family: 'Times New Roman', Times, serif;
    font-size: 11pt;
    vertical-align: top;
  }
  ol, ul {
    margin: 4pt 0;
    padding-left: 20pt;
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
  }
  li { margin-bottom: 2pt; }
  .section { padding-left: 10pt; }
  .info-table td { border: none; padding: 1pt 4pt; vertical-align: top; }
  br.page-break {
    page-break-before: always;
    mso-break-type: section-break;
  }
</style>
</head>
<body>
<div class="Section1">

<!-- HEADER -->
<h1>PERENCANAAN PEMBELAJARAN KOKURIKULER</h1>
<p style="text-align:center; font-size:10pt; color:#666; margin-bottom:12pt;">Kurikulum Berbasis Cinta (KBC)</p>

<!-- INFO DASAR -->
<table class="info-table" style="margin-bottom:10pt;">
  <tr><td style="width:140pt;">Nama Madrasah</td><td style="width:10pt;">:</td><td><b>${escapeHtml(f.namaMadrasah || '…………………………………')}</b></td></tr>
  <tr><td>Kelas/Semester</td><td>:</td><td><b>${escapeHtml(f.kelasSemester || '…………………………………')}</b></td></tr>
  <tr><td>Tema</td><td>:</td><td><b>${escapeHtml(f.tema || '…………………………………')}</b></td></tr>
  <tr><td>Alokasi Waktu</td><td>:</td><td><b>${escapeHtml(f.alokasiWaktu || '…………………………………')}</b></td></tr>
  <tr><td>Jenis Kokurikuler</td><td>:</td><td><b>${escapeHtml(f.bentukKokurikuler || '…………………………………')}</b></td></tr>
  <tr><td>Bentuk Kegiatan</td><td>:</td><td><b>${escapeHtml(f.bentukKegiatan || '…………………………………')}</b></td></tr>
  <tr><td>Lokasi Kegiatan</td><td>:</td><td><b>${escapeHtml(f.lokasiKegiatan || '…………………………………')}</b></td></tr>
</table>

<!-- A. DIMENSI PROFIL LULUSAN -->
<h2>A. Dimensi Profil Lulusan</h2>
<div class="section">
  <ul>
    ${f.dimensiProfilLulusan.filter((d) => d).length > 0
      ? f.dimensiProfilLulusan.filter((d) => d).map((d) => `<li>${escapeHtml(d)}</li>`).join('')
      : '<li style="color:#999;">…………………………………</li>'}
  </ul>
</div>

<!-- B. KBC -->
<h2>B. Kurikulum Berbasis Cinta (KBC)</h2>
<div class="section">
  ${buildKBCSection(f)}
</div>

<!-- C. TUJUAN PEMBELAJARAN -->
<h2>C. Tujuan Pembelajaran</h2>
<div class="section">
  <ol>
    ${f.tujuanPembelajaran.filter((t) => t).length > 0
      ? f.tujuanPembelajaran.filter((t) => t).map((t) => `<li>Murid mampu ${escapeHtml(t.replace(/^Murid mampu /i, ''))}</li>`).join('')
      : '<li style="color:#999;">Murid mampu …………………………………</li>'}
  </ol>
</div>

<!-- D. PRAKTIK PEDAGOGIS -->
<h2>D. Praktik Pedagogis</h2>
<div class="section">
  <p><b>&bull; Model Pembelajaran:</b> ${escapeHtml(f.praktikPedagogis.modelPembelajaran || '…………………………………')}</p>
  <p><b>&bull; Pendekatan:</b> ${escapeHtml(f.praktikPedagogis.pendekatan || '…………………………………')}</p>
  <p><b>&bull; Refleksi:</b> ${escapeHtml(f.praktikPedagogis.refleksi || '…………………………………')}</p>
</div>

<!-- E. LINGKUNGAN PEMBELAJARAN -->
<h2>E. Lingkungan Pembelajaran</h2>
<div class="section">
  <p><b>&bull; Lingkungan Madrasah:</b> ${escapeHtml(f.lingkunganPembelajaran.madrasah || '…………………………………')}</p>
  <p><b>&bull; Lingkungan Rumah/Masyarakat:</b> ${escapeHtml(f.lingkunganPembelajaran.rumahMasyarakat || '…………………………………')}</p>
</div>

<!-- F. KEMITRAAN PEMBELAJARAN -->
<h2>F. Kemitraan Pembelajaran</h2>
<div class="section">
  <p><b>1. Satuan Pendidikan:</b> ${escapeHtml(f.kemitraanPembelajaran.satuanPendidikan || '…………………………………')}</p>
  <p><b>2. Keluarga:</b> ${escapeHtml(f.kemitraanPembelajaran.keluarga || '…………………………………')}</p>
  <p><b>3. Masyarakat/Narasumber:</b> ${escapeHtml(f.kemitraanPembelajaran.masyarakatNarasumber || '…………………………………')}</p>
</div>

<!-- G. MATA PELAJARAN TERKAIT -->
<h2>G. Mata Pelajaran yang Terkait</h2>
<div class="section">
  <ul>
    ${f.mataPelajaranTerkait.filter((m) => m).length > 0
      ? f.mataPelajaranTerkait.filter((m) => m).map((m) => `<li>${escapeHtml(m)}</li>`).join('')
      : '<li style="color:#999;">…………………………………</li>'}
  </ul>
</div>

<!-- H. PEMANFAATAN DIGITAL -->
<h2>H. Pemanfaatan Digital</h2>
<div class="section">
  <p>${escapeHtml(f.pemanfaatanDigital || '…………………………………')}</p>
</div>

<!-- I. KEGIATAN -->
<h2>I. Kegiatan (${f.pertemuan.length} Pertemuan)</h2>
<div class="section">
  ${buildPertemuanRows(f)}
</div>

<!-- J. ASESMEN -->
<h2>J. Asesmen</h2>
<div class="section">
  <p><b>&bull; Diagnostik:</b> ${escapeHtml(f.asesmen.diagnostik || '……………………………')}</p>
  <p><b>&bull; Formatif:</b> ${escapeHtml(f.asesmen.formatif || '……………………………')}</p>
  <p><b>&bull; Sumatif:</b> ${escapeHtml(f.asesmen.sumatif || '……………………………')}</p>
  <p><b>&bull; Instrumen:</b> ${escapeHtml(f.asesmen.instrumen.join(', ') || '……………………………')}</p>
</div>

<!-- K. CATATAN HASIL AKTIVITAS -->
<h2>K. Catatan Hasil Aktivitas</h2>
<div class="section" style="border:1pt solid #ccc; padding:8pt;">
  <table class="info-table">
    <tr><td style="width:100pt;"><b>&bull; Nama Siswa</b></td><td style="width:10pt;">:</td><td>${escapeHtml(f.catatanAktivitas.namaSiswa || '……………………………')}</td></tr>
    <tr><td><b>&bull; Aktivitas</b></td><td>:</td><td>${escapeHtml(f.catatanAktivitas.aktivitas || '……………………………')}</td></tr>
    <tr><td><b>&bull; Catatan Guru</b></td><td>:</td><td>${escapeHtml(f.catatanAktivitas.catatanGuru || '……………………………')}</td></tr>
  </table>
</div>

<!-- L. RUBRIK PENILAIAN -->
<h2>L. Rubrik Penilaian</h2>
<div class="section">
  ${buildRubrikTable(f)}
</div>

<!-- TANDA TANGAN -->
<div style="margin-top:30pt; padding-top:12pt; border-top:1pt solid #aaa;">
  <table style="width:100%; border:none;">
    <tr>
      <td style="border:none; text-align:center; width:50%; vertical-align:top;">
        <p style="margin-bottom:50pt;"><b>Mengetahui,</b></p>
        <p><b>Kepala Madrasah</b></p>
        <p style="text-decoration:underline; margin-top:4pt;">
          ${escapeHtml(f.tandaTangan.kepalaMadrasah || '…………………………………')}
        </p>
      </td>
      <td style="border:none; text-align:center; width:50%; vertical-align:top;">
        <p style="margin-bottom:50pt;">&nbsp;</p>
        <p><b>Fasilitator Kokurikuler</b></p>
        <p style="text-decoration:underline; margin-top:4pt;">
          ${escapeHtml(f.tandaTangan.fasilitatorKokurikuler || '…………………………………')}
        </p>
      </td>
    </tr>
  </table>
</div>

<!-- PAGE BREAK -->
<br class="page-break">

<!-- LAMPIRAN LKPD -->
<h1>LAMPIRAN LKPD</h1>
<p style="text-align:center; font-size:10pt; color:#666; margin-bottom:12pt;">Lembar Kerja Peserta Didik</p>

${buildLKPD(f)}

</div>
</body>
</html>`;
}

export async function exportToWord(formData: FormData): Promise<void> {
  const htmlContent = buildFullHTML(formData);

  // Create Blob with Word-compatible MIME type
  const blob = new Blob(
    ['\ufeff', htmlContent], // BOM for proper encoding
    { type: 'application/msword' }
  );

  // Download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `RPP-Kokurikuler-${formData.tema || 'draft'}-${new Date().toISOString().split('T')[0]}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
