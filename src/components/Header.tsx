import React from 'react';

interface HeaderProps {
  activeTab: 'form' | 'preview' | 'contoh';
  setActiveTab: (tab: 'form' | 'preview' | 'contoh') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white shadow-xl print:hidden">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Perencanaan Kokurikuler
              </h1>
              <p className="text-emerald-100 text-sm md:text-base">
                Kurikulum Berbasis Cinta (KBC) - Madrasah
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'form'
                  ? 'bg-white text-emerald-700 shadow-md'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              📝 Template Isi
            </button>
            <button
              onClick={() => setActiveTab('contoh')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'contoh'
                  ? 'bg-white text-emerald-700 shadow-md'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              📋 Contoh Lengkap
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-white text-emerald-700 shadow-md'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              👁️ Preview & Cetak
            </button>
          </div>
        </div>
      </div>
      
      {/* KBC Values Strip */}
      <div className="bg-emerald-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs md:text-sm text-emerald-100">
            <span>❤️ Cinta Allah & Rasul</span>
            <span>💚 Cinta Diri</span>
            <span>🤝 Cinta Sesama</span>
            <span>📚 Cinta Ilmu</span>
            <span>🌿 Cinta Lingkungan</span>
            <span>🇮🇩 Cinta Tanah Air</span>
          </div>
        </div>
      </div>
    </header>
  );
};
