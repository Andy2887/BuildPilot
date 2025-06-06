import React from 'react';
import { Download, FileText, File, FileImage } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportOptionsProps {
  plan: string;
  projectName: string;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ plan, projectName }) => {
  const sanitizeFilename = (name: string): string => {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  };

  const exportAsPDF = async () => {
    try {
      const element = document.querySelector('.prose') as HTMLElement;
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save(`${sanitizeFilename(projectName)}_plan.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const exportAsText = () => {
    const blob = new Blob([plan], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sanitizeFilename(projectName)}_plan.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportAsMarkdown = () => {
    const blob = new Blob([plan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sanitizeFilename(projectName)}_plan.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportOptions = [
    {
      label: 'Export PDF',
      icon: FileImage,
      onClick: exportAsPDF,
      description: 'Professional document format'
    },
    {
      label: 'Export TXT',
      icon: FileText,
      onClick: exportAsText,
      description: 'Plain text version'
    },
    {
      label: 'Export MD',
      icon: File,
      onClick: exportAsMarkdown,
      description: 'Markdown source file'
    }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-french-violet">Export Options</h3>
      </div>
      
      <div className="grid gap-3">
        {exportOptions.map((option, index) => (
          <button
            key={index}
            onClick={option.onClick}
            className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <option.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">{option.label}</p>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            </div>
            <Download className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExportOptions;