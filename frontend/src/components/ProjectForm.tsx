import React, { useState } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { ProjectData } from '../pages/GeneratorPage';

interface ProjectFormProps {
  onSubmit: (data: ProjectData) => void;
  isLoading: boolean;
  onReset: () => void;
  hasResult: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit, isLoading, onReset, hasResult }) => {
  const [formData, setFormData] = useState<ProjectData>({
    project_name: '',
    project_description: ''
  });
  const [errors, setErrors] = useState<Partial<ProjectData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ProjectData> = {};

    if (!formData.project_name.trim()) {
      newErrors.project_name = 'Project name is required';
    }

    if (!formData.project_description.trim()) {
      newErrors.project_description = 'Project description is required';
    } else if (formData.project_description.trim().length < 20) {
      newErrors.project_description = 'Please provide a more detailed description (at least 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    setFormData({ project_name: '', project_description: '' });
    setErrors({});
    onReset();
  };

  const handleInputChange = (field: keyof ProjectData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
      <h2 className="text-2xl font-bold text-french-violet mb-6">Project Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="project_name" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="project_name"
            value={formData.project_name}
            onChange={(e) => handleInputChange('project_name', e.target.value)}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
              errors.project_name
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-700 focus:ring-slate-blue focus:border-slate-blue bg-white/50'
            }`}
            placeholder="e.g., E-commerce Platform"
            disabled={isLoading}
          />
          {errors.project_name && (
            <p className="mt-2 text-sm text-red-600">{errors.project_name}</p>
          )}
        </div>

        <div>
          <label htmlFor="project_description" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            id="project_description"
            value={formData.project_description}
            onChange={(e) => handleInputChange('project_description', e.target.value)}
            rows={6}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
              errors.project_description
                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-700 focus:ring-slate-blue focus:border-slate-blue bg-white/50'
            }`}
            placeholder="Describe your project in detail. Include the main features, target audience, and any specific requirements you have in mind..."
            disabled={isLoading}
          />
          {errors.project_description && (
            <p className="mt-2 text-sm text-red-600">{errors.project_description}</p>
          )}
          <p className="mt-2 text-sm text-gray-500">
            {formData.project_description.length}/500 characters
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-grape to-slate-blue text-white font-semibold rounded-xl hover:from-french-violet hover:to-grape focus:outline-none focus:ring-2 focus:ring-slate-blue focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            {isLoading ? 'Generating...' : 'Generate Plan'}
          </button>

          {hasResult && (
            <button
              type="button"
              onClick={handleReset}
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/80 text-gray-700 font-semibold rounded-xl hover:bg-white hover:text-french-violet focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-white/50"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Reset
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;