import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check } from 'lucide-react';

interface MarkdownPreviewProps {
  content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 bg-gray-50/50">
        <h3 className="text-lg font-semibold text-gray-900">Generated Project Plan</h3>
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </>
          )}
        </button>
      </div>
      
      <div className="p-6 max-h-96 overflow-y-auto">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">{children}</h3>,
              p: ({ children }) => <p className="text-gray-700 mb-3 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-1">{children}</ol>,
              li: ({ children }) => <li className="ml-2">{children}</li>,
              code: ({ children, className }) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
                ) : (
                  <code className="block bg-gray-100 text-gray-800 p-3 rounded-lg text-sm font-mono overflow-x-auto">{children}</code>
                );
              },
              pre: ({ children }) => <pre className="bg-gray-100 rounded-lg overflow-x-auto mb-4">{children}</pre>,
              blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 mb-4">{children}</blockquote>,
              table: ({ children }) => <table className="min-w-full border border-gray-300 mb-4">{children}</table>,
              th: ({ children }) => <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold text-left">{children}</th>,
              td: ({ children }) => <td className="border border-gray-300 px-4 py-2">{children}</td>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreview;