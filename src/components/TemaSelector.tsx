import React, { useState } from 'react';

interface TemaSelectorProps {
  onSelectTema: (tema: string) => void;
  onClose: () => void;
}

export const TemaSelector: React.FC<TemaSelectorProps> = ({ onSelectTema, onClose }) => {
  const [customTema, setCustomTema] = useState('');

  const temaList = [
    {
      category: '🌿 Cinta Lingkungan',
      items: [
        'Cinta Lingkungan Sekolahku',
        'Menjaga Kebersihan Madrasah',
        'Penghijauan dan Penanaman Pohon',
        'Pengelolaan Sampah',
        'Hemat Energi dan Air',
      ],
    },
    {
      category: '🤝 Cinta Sesama',
      items: [
        'Gotong Royong di Masyarakat',
        'Membantu Sesama',
        'Menghargai Perbedaan',
        'Kerjasama dan Toleransi',
        'Bakti Sosial',
      ],
    },
    {
      category: '❤️ Cinta Allah & Rasul',
      items: [
        'Mengenal Asmaul Husna',
        'Meneladani Akhlak Rasulullah',
        'Ibadah dalam Kehidupan',
        'Syukur Nikmat Allah',
        'Kisah Teladan Nabi dan Sahabat',
      ],
    },
    {
      category: '📚 Cinta Ilmu',
      items: [
        'Senangnya Membaca',
        'Eksplorasi Sains Sederhana',
        'Belajar dari Alam',
        'Keterampilan Digital',
        'Literasi dan Numerasi',
      ],
    },
    {
      category: '💚 Cinta Diri',
      items: [
        'Hidup Sehat dan Bersih',
        'Mengenal Emosi',
        'Percaya Diri',
        'Kebiasaan Baik Sehari-hari',
        'Menjaga Kesehatan',
      ],
    },
    {
      category: '🇮🇩 Cinta Tanah Air',
      items: [
        'Mengenal Budaya Indonesia',
        'Pahlawan Nasional',
        'Keberagaman Nusantara',
        'Produk Lokal Indonesia',
        'Melestarikan Tradisi',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white shrink-0">
          <h2 className="text-xl font-bold">Pilih Tema Kokurikuler</h2>
          <p className="text-emerald-100 text-sm mt-1">Berbasis Kurikulum Berbasis Cinta (KBC)</p>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {/* Manual input */}
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <label className="block text-sm font-semibold text-amber-800 mb-2">
              ✏️ Atau Ketik Tema Sendiri:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customTema}
                onChange={(e) => setCustomTema(e.target.value)}
                placeholder="Ketik tema kustom Anda di sini..."
                className="flex-1 px-4 py-2.5 rounded-lg border border-amber-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
              />
              <button
                onClick={() => {
                  if (customTema.trim()) {
                    onSelectTema(customTema.trim());
                    onClose();
                  }
                }}
                disabled={!customTema.trim()}
                className="px-5 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                Gunakan →
              </button>
            </div>
          </div>

          <div className="relative flex items-center mb-6">
            <div className="flex-1 border-t border-gray-200" />
            <span className="px-3 text-xs text-gray-400 uppercase">atau pilih dari daftar</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>

          {/* List tema */}
          <div className="space-y-6">
            {temaList.map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-gray-700 mb-2 text-sm">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {category.items.map((tema) => (
                    <button
                      key={tema}
                      onClick={() => {
                        onSelectTema(tema);
                        onClose();
                      }}
                      className="p-3 text-left border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all text-sm"
                    >
                      {tema}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t bg-gray-50 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};
