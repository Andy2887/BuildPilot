import React, { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import LoadingSpinner from '../components/LoadingSpinner';
import MarkdownPreview from '../components/MarkdownPreview';
import ExportOptions from '../components/ExportOptions';

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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Project <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Generator</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </div>

          {/* Right Column - Results */}
          <div className="space-y-8">
            {generatedPlan && (
              <>
                <ExportOptions 
                  plan={generatedPlan} 
                  projectName={projectData?.project_name || 'Project'} 
                />
                <MarkdownPreview content={generatedPlan} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;