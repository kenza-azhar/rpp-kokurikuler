import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { KokurikulerForm } from './components/KokurikulerForm';
import { DocumentPreview } from './components/DocumentPreview';
import { ContohLengkap } from './components/ContohLengkap';
import { ProgressBar } from './components/ProgressBar';
import { AIGenerator } from './components/AIGenerator';
import { FormData, defaultFormData, contohFormData } from './types/kokurikuler';

type TabType = 'form' | 'preview' | 'contoh';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('form');
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAIGenerator, setShowAIGenerator] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kokurikuler-data');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (!showWelcome) {
      localStorage.setItem('kokurikuler-data', JSON.stringify(formData));
    }
  }, [formData, showWelcome]);

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mengosongkan semua data?')) {
      setFormData(defaultFormData);
      localStorage.removeItem('kokurikuler-data');
    }
  };

  const handleLoadContoh = () => {
    if (confirm('Apakah Anda yakin ingin memuat contoh data? Data saat ini akan diganti.')) {
      setFormData(contohFormData);
    }
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kokurikuler-${formData.tema || 'draft'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        setFormData(imported);
        alert('Data berhasil diimpor!');
      } catch {
        alert('Gagal membaca file. Pastikan file JSON valid.');
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset input
  };

  // Welcome Modal
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white text-center">
            <img
              src="https://freeimghost.com/images/2026/05/08/logo-kemenag60fceb73d13a9d39.png"
              alt="Logo Kemenag"
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h1 className="text-3xl font-bold mb-2">Perencanaan Kokurikuler</h1>
            <p className="text-emerald-100">Kurikulum Berbasis Cinta (KBC) - Madrasah</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Selamat Datang! 👋
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Aplikasi ini membantu Anda menyusun perencanaan pembelajaran kokurikuler 
              yang sistematis, jelas, dan sesuai dengan Kurikulum Berbasis Cinta (KBC).
            </p>

            {/* KBC Values */}
            <div className="bg-emerald-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-emerald-700 mb-3 text-center">6 Dimensi Kurikulum Berbasis Cinta</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <div className="bg-white rounded-lg p-2 text-center">❤️ Cinta Allah & Rasul</div>
                <div className="bg-white rounded-lg p-2 text-center">💚 Cinta Diri</div>
                <div className="bg-white rounded-lg p-2 text-center">🤝 Cinta Sesama</div>
                <div className="bg-white rounded-lg p-2 text-center">📚 Cinta Ilmu</div>
                <div className="bg-white rounded-lg p-2 text-center">🌿 Cinta Lingkungan</div>
                <div className="bg-white rounded-lg p-2 text-center">🇮🇩 Cinta Tanah Air</div>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowWelcome(false);
                  setShowAIGenerator(true);
                }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                🤖 Generate Otomatis dengan AI
              </button>
              <button
                onClick={() => {
                  setShowWelcome(false);
                  setActiveTab('form');
                }}
                className="w-full py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                📝 Mulai dengan Template Kosong
              </button>
              <button
                onClick={() => {
                  setFormData(contohFormData);
                  setShowWelcome(false);
                  setActiveTab('form');
                }}
                className="w-full py-4 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                📋 Mulai dengan Contoh Terisi
              </button>
              <button
                onClick={() => {
                  setShowWelcome(false);
                  setActiveTab('contoh');
                }}
                className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                👁️ Lihat Contoh Dokumen Lengkap
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-6">
              Data tersimpan otomatis di browser Anda
            </p>
            <p className="text-xs text-gray-400 text-center mt-2">
              © Copyright: Agus Arifien @min1cms
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-5xl mx-auto px-4 py-8 print:p-0 print:max-w-none">
        {/* AI Generator Modal */}
        {showAIGenerator && (
          <AIGenerator
            onGenerate={(data) => {
              setFormData(data);
              setActiveTab('form');
            }}
            onClose={() => setShowAIGenerator(false)}
          />
        )}

        {/* Action Buttons */}
        {activeTab === 'form' && (
          <div className="mb-6 flex flex-wrap gap-3 print:hidden">
            <button
              onClick={() => setShowWelcome(true)}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center gap-2"
            >
              🏠 Beranda
            </button>
            <button
              onClick={() => setShowAIGenerator(true)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all text-sm font-medium flex items-center gap-2 shadow-md"
            >
              🤖 AI Generate
            </button>
            <button
              onClick={handleLoadContoh}
              className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors text-sm font-medium flex items-center gap-2"
            >
              📋 Muat Contoh
            </button>
            <button
              onClick={handleExportJSON}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium flex items-center gap-2"
            >
              💾 Simpan
            </button>
            <label className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer">
              📂 Muat
              <input
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
              />
            </label>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium flex items-center gap-2"
            >
              🗑️ Reset
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium flex items-center gap-2 ml-auto"
            >
              👁️ Preview & Cetak
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {activeTab === 'form' && (
          <ProgressBar formData={formData} />
        )}

        {/* Tab Content */}
        <div className="print:block">
          {activeTab === 'form' && (
            <KokurikulerForm formData={formData} setFormData={setFormData} />
          )}
          {activeTab === 'preview' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <DocumentPreview formData={formData} />
            </div>
          )}
          {activeTab === 'contoh' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ContohLengkap />
            </div>
          )}
        </div>

        {/* Back Buttons (for Preview/Contoh tab) */}
        {(activeTab === 'preview' || activeTab === 'contoh') && (
          <div className="mt-6 flex justify-center gap-3 print:hidden">
            <button
              onClick={() => setShowWelcome(true)}
              className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2"
            >
              🏠 Beranda
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors font-medium flex items-center gap-2"
            >
              ← Kembali ke Form
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-6 mt-12 print:hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-emerald-200 text-sm">
            Perencanaan Kokurikuler - Kurikulum Berbasis Cinta (KBC)
          </p>
          <p className="text-emerald-300 text-xs mt-2">
            Untuk Madrasah Ibtidaiyah, Tsanawiyah, dan Aliyah
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-emerald-200">
            <span>❤️ Cinta Allah & Rasul</span>
            <span>•</span>
            <span>💚 Cinta Diri</span>
            <span>•</span>
            <span>🤝 Cinta Sesama</span>
            <span>•</span>
            <span>📚 Cinta Ilmu</span>
            <span>•</span>
            <span>🌿 Cinta Lingkungan</span>
            <span>•</span>
            <span>🇮🇩 Cinta Tanah Air</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
