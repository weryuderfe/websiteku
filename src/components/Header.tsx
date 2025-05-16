import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-semibold text-gray-800">Membedakan</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Beranda
            </Link>
            <Link to="/category/pertanian" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pertanian
            </Link>
            <Link to="/category/kuliner" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Kuliner
            </Link>
            <Link to="/category/kesehatan" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Kesehatan
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              to="/category/pertanian" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pertanian
            </Link>
            <Link 
              to="/category/kuliner" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kuliner
            </Link>
            <Link 
              to="/category/kesehatan" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kesehatan
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;