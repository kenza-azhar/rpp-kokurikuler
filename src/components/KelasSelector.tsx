import React from 'react';

interface KelasSelectorProps {
  onSelectKelas: (kelas: string) => void;
  onClose: () => void;
}

export const KelasSelector: React.FC<KelasSelectorProps> = ({ onSelectKelas, onClose }) => {
  const kelasList = [
    { id: '1', label: 'Kelas 1', semester: 'Semester 1' },
    { id: '1-2', label: 'Kelas 1', semester: 'Semester 2' },
    { id: '2', label: 'Kelas 2', semester: 'Semester 1' },
    { id: '2-2', label: 'Kelas 2', semester: 'Semester 2' },
    { id: '3', label: 'Kelas 3', semester: 'Semester 1' },
    { id: '3-2', label: 'Kelas 3', semester: 'Semester 2' },
    { id: '4', label: 'Kelas 4', semester: 'Semester 1' },
    { id: '4-2', label: 'Kelas 4', semester: 'Semester 2' },
    { id: '5', label: 'Kelas 5', semester: 'Semester 1' },
    { id: '5-2', label: 'Kelas 5', semester: 'Semester 2' },
    { id: '6', label: 'Kelas 6', semester: 'Semester 1' },
    { id: '6-2', label: 'Kelas 6', semester: 'Semester 2' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
          <h2 className="text-xl font-bold">Pilih Kelas & Semester</h2>
          <p className="text-emerald-100 text-sm mt-1">Untuk Madrasah Ibtidaiyah</p>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-2 gap-3">
            {kelasList.map((kelas) => (
              <button
                key={kelas.id}
                onClick={() => {
                  onSelectKelas(`${kelas.label} / ${kelas.semester}`);
                  onClose();
                }}
                className="p-4 border-2 border-gray-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left"
              >
                <span className="font-semibold text-gray-800">{kelas.label}</span>
                <span className="block text-sm text-gray-500">{kelas.semester}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};
