import React, { useState, useEffect } from 'react';
import { Brain, Cog, FileText, AlertCircle } from 'lucide-react';

interface LoadingSpinnerProps {
  onTimeout?: () => void;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ onTimeout }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  const steps = [
    { icon: Brain, label: 'Analyzing requirements', delay: '0s' },
    { icon: Cog, label: 'Generating architecture', delay: '0.5s' },
    { icon: FileText, label: 'Creating documentation', delay: '1s' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prev => {
        const newTime = prev + 1;
        
        // Check if 5 minutes (300 seconds) have passed
        if (newTime >= 300 && !hasTimedOut) {
          setHasTimedOut(true);
          if (onTimeout) {
            onTimeout();
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hasTimedOut, onTimeout]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getStatusColor = (): string => {
    if (hasTimedOut) return 'text-red-600';
    if (elapsedTime > 180) return 'text-orange-600'; // Warning after 3 minutes
    return 'text-blue-600';
  };

  const getStatusMessage = (): string => {
    if (hasTimedOut) return 'Process timed out - Please try again';
    if (elapsedTime > 180) return 'Taking longer than expected...';
    return 'Please do not close this page';
  };

  if (hasTimedOut) {
    return (
      <div className="bg-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200/50">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-red-900 mb-2">Request Timed Out</h3>
          <p className="text-red-700 mb-4">
            The process has taken longer than expected (5+ minutes). This might be due to high server load or a complex project.
          </p>
          <div className="text-2xl font-mono font-bold text-red-600 mb-4">
            {formatTime(elapsedTime)}
          </div>
          <p className="text-sm text-red-600">
            Please try again or consider simplifying your project description.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Agents at Work</h3>
        <p className={`${getStatusColor()}`}>{getStatusMessage()}</p>
      </div>

      {/* Time Counter */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
          <div className={`w-3 h-3 rounded-full mr-3 animate-pulse ${
            hasTimedOut ? 'bg-red-500' : elapsedTime > 180 ? 'bg-orange-500' : 'bg-blue-500'
          }`}></div>
          <span className="text-sm font-medium text-gray-600 mr-2">Elapsed time:</span>
          <span className={`text-2xl font-mono font-bold ${getStatusColor()}`}>
            {formatTime(elapsedTime)}
          </span>
        </div>
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

      <div className="mt-6 text-center">
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm ${
          elapsedTime > 180 
            ? 'bg-orange-50 text-orange-700' 
            : 'bg-blue-50 text-blue-700'
        }`}>
          <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
            elapsedTime > 180 ? 'bg-orange-500' : 'bg-blue-500'
          }`}></div>
          {elapsedTime > 180 ? 'Please wait, processing...' : 'Estimated time: 2 to 3 minutes'}
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;