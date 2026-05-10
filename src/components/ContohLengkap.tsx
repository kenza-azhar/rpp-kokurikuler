import React from 'react';
import { contohFormData } from '../types/kokurikuler';
import { DocumentPreview } from './DocumentPreview';

export const ContohLengkap: React.FC = () => {
  return (
    <div>
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-4 mb-6 print:hidden">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <h3 className="font-semibold text-amber-800">Contoh Dokumen Lengkap Terisi</h3>
            <p className="text-sm text-amber-700 mt-1">
              Ini adalah contoh perencanaan kokurikuler yang sudah lengkap terisi. 
              Anda dapat menggunakannya sebagai referensi untuk mengisi template kosong.
            </p>
            <p className="text-sm text-amber-600 mt-2">
              <strong>Tema:</strong> {contohFormData.tema} | 
              <strong> Kelas:</strong> {contohFormData.kelasSemester}
            </p>
          </div>
        </div>
      </div>

      {/* Document Preview with Example Data */}
      <DocumentPreview formData={contohFormData} showPrintButton={true} />
    </div>
  );
};
