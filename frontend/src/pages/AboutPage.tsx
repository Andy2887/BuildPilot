import React from 'react';
import { Brain, Users, Cog, FileText, Clock, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI agents analyze your project requirements and provide intelligent recommendations.',
      color: 'bg-gradient-to-br from-picton-blue to-aero text-white'
    },
    {
      icon: Cog,
      title: 'Technology Stack Recommendations',
      description: 'Get expert suggestions for frameworks, tools, and technologies tailored to your project.',
      color: 'bg-gradient-to-br from-turquoise to-aquamarine text-white'
    },
    {
      icon: FileText,
      title: 'Automated Documentation',
      description: 'Generate professional README files and comprehensive project documentation instantly.',
      color: 'bg-gradient-to-br from-grape to-slate-blue text-white'
    },
    {
      icon: Clock,
      title: 'Development Timeline',
      description: 'Receive realistic timeline estimates and milestone planning for your project.',
      color: 'bg-gradient-to-br from-aero to-sky-blue text-white'
    },
    {
      icon: Users,
      title: 'Multi-Agent System',
      description: 'Specialized AI agents work together to provide comprehensive project planning.',
      color: 'bg-gradient-to-br from-sky-blue to-tiffany-blue text-white'
    },
    {
      icon: Shield,
      title: 'Architecture Planning',
      description: 'Get detailed project structure and architecture recommendations for scalability.',
      color: 'bg-gradient-to-br from-french-violet to-grape text-white'
    }
  ];

  const agents = [
    {
      title: 'Project Planner Agent',
      role: 'Senior Software Project Planner',
      experience: '15+ years of software architecture experience',
      capabilities: ['Technology stack recommendations', 'Timeline estimation', 'Development phase planning']
    },
    {
      title: 'Documentation Agent',
      role: 'Technical Documentation Specialist',
      experience: 'Expert in creating clear, comprehensive documentation',
      capabilities: ['README generation', 'API documentation', 'Project structure documentation']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-french-violet mb-6">
            About <span className="bg-gradient-to-r from-grape to-slate-blue bg-clip-text text-transparent">BuildPilot</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            BuildPilot is an AI-powered project planning assistant that revolutionizes how developers approach 
            project planning and documentation. Using advanced AI agents, we transform your ideas into 
            comprehensive, actionable project plans.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/30">
          <h2 className="text-3xl font-bold text-french-violet mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            We believe that great projects start with great planning. BuildPilot empowers developers, 
            entrepreneurs, and teams to turn their innovative ideas into well-structured, professionally 
            documented projects with the power of artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-french-violet mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:bg-white/80">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-french-violet mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Agents Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-french-violet mb-12 text-center">Meet Our AI Agents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-white/30">
                <h3 className="text-2xl font-bold text-french-violet mb-2">{agent.title}</h3>
                <p className="text-slate-blue font-semibold mb-3">{agent.role}</p>
                <p className="text-gray-700 mb-4">{agent.experience}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Capabilities:</h4>
                  <ul className="space-y-1">
                    {agent.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-gray-700 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-picton-blue to-aero rounded-full mr-3"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
          <h2 className="text-3xl font-bold text-french-violet mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-blue mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python 3.12+ & Django</li>
                <li>• CrewAI Multi-agent Framework</li>
                <li>• OpenAI GPT-4 Integration</li>
                <li>• Django REST Framework</li>
                <li>• LangChain for AI Applications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-blue mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React & TypeScript</li>
                <li>• Tailwind CSS for Styling</li>
                <li>• Real-time Markdown Preview</li>
                <li>• PDF/TXT/MD Export Options</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;