import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Sparkles, Zap, Target } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Project Planning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Better Projects with
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your project ideas into comprehensive plans with intelligent AI agents. 
              Get technology recommendations, development timelines, and professional documentation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/generator"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Planning
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Analysis</h3>
              <p className="text-gray-600">
                AI-powered project analysis that understands your requirements and recommends optimal solutions.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto Documentation</h3>
              <p className="text-gray-600">
                Generate professional README files and comprehensive project documentation automatically.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Stack Guidance</h3>
              <p className="text-gray-600">
                Get expert recommendations for frameworks, tools, and technologies for your specific use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about BuildPilot or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@buildpilot.ai"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/buildpilot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;