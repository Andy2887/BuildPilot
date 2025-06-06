import React, { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import LoadingSpinner from '../components/LoadingSpinner';
import MarkdownPreview from '../components/MarkdownPreview';
import ExportOptions from '../components/ExportOptions';
import { FileText, ArrowDown } from 'lucide-react';

export interface ProjectData {
  project_name: string;
  project_description: string;
}

const GeneratorPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  const handleGeneratePlan = async (data: ProjectData) => {
    setIsLoading(true);
    setError('');
    setProjectData(data);

    try {
      const response = await fetch('http://localhost:8000/api/generate-plan/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.message === 'success') {
        setGeneratedPlan(result.plan);
      } else {
        throw new Error('Failed to generate plan');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the plan');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setGeneratedPlan('');
    setError('');
    setProjectData(null);
  };

  return (
    <div className="min-h-screen pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-french-violet mb-4">
            AI Project <span className="bg-gradient-to-r from-grape to-slate-blue bg-clip-text text-transparent">Generator</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transform your project ideas into comprehensive plans with our AI-powered assistant
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-8">
            <ProjectForm 
              onSubmit={handleGeneratePlan} 
              isLoading={isLoading}
              onReset={handleReset}
              hasResult={!!generatedPlan}
            />
            
            {isLoading && <LoadingSpinner />}
            
            {error && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>

          {/* Right Column - Results or Placeholder */}
          <div className="space-y-8">
            {generatedPlan ? (
              <>
                <MarkdownPreview content={generatedPlan} />
                <ExportOptions 
                  plan={generatedPlan} 
                  projectName={projectData?.project_name || 'Project'} 
                />
              </>
            ) : (
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-aero to-sky-blue">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-french-violet mb-3">Your Project Plan Will Appear Here</h3>
                <p className="text-gray-700 mb-6 max-w-md">
                  Fill in the project details on the left and click "Generate Plan" to create a comprehensive project plan using AI.
                </p>
                <div className="flex items-center text-slate-blue">
                  <ArrowDown className="h-5 w-5 mr-2" />
                  <span className="font-medium">Generated content will show here</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;