import React from 'react';
import { Brain, Cog, FileText } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  const steps = [
    { icon: Brain, label: 'Analyzing requirements', delay: '0s' },
    { icon: Cog, label: 'Generating architecture', delay: '0.5s' },
    { icon: FileText, label: 'Creating documentation', delay: '1s' }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Agents at Work</h3>
        <p className="text-gray-600">Our specialized agents are analyzing your project...</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div 
              className="relative w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
              style={{ animationDelay: step.delay }}
            >
              <step.icon className="h-6 w-6 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 bg-blue-200 rounded-xl animate-ping opacity-20"></div>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{step.label}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full animate-pulse"
                  style={{ 
                    width: '100%',
                    animationDelay: step.delay,
                    animationDuration: '2s'
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
          Estimated time: 2 to 3 minutes
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;