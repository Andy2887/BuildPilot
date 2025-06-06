import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Home, Info, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/generator', label: 'Generator', icon: Zap },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Settings className="h-8 w-8 text-french-violet group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-bold text-xl text-french-violet">BuildPilot</span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-aero/20 to-sky-blue/20 text-french-violet font-medium border border-sky-blue/30'
                    : 'text-gray-600 hover:text-french-violet hover:bg-tiffany-blue/10'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-aero via-sky-blue to-tiffany-blue"></div>
    </nav>
  );
};

export default Navbar;