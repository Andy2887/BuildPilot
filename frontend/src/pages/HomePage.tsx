import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Sparkles, Zap, Target } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="font-bold text-french-violet mb-3">
                Build Better Projects with AI
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your project ideas into comprehensive plans with intelligent AI agents. 
              Get technology recommendations, development timelines, and professional documentation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/generator"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-grape to-slate-blue text-white font-semibold rounded-xl hover:from-french-violet hover:to-grape transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Planning
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-white/80 text-gray-700 font-semibold rounded-xl border-2 border-white/50 hover:border-tiffany-blue hover:text-french-violet transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/30">
              <div className="bg-gradient-to-br from-picton-blue to-aero w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-french-violet mb-3">Architecture</h3>
              <p className="text-gray-700">
                Get detailed project structure and architecture recommendations for scalability.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/30">
              <div className="bg-gradient-to-br from-turquoise to-aquamarine w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-french-violet mb-3">Documentation</h3>
              <p className="text-gray-700">
                Generate professional README files and comprehensive project documentation automatically.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/30">
              <div className="bg-gradient-to-br from-grape to-slate-blue w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-french-violet mb-3">Tech Stack</h3>
              <p className="text-gray-700">
                Get expert recommendations for frameworks, tools, and technologies for your specific use case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-blue/90 to-united-nations-blue/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Have questions about BuildPilot or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@buildpilot.ai"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 border border-white/30 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/buildpilot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 border border-white/30 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
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