import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Search, User, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-heading font-bold text-primary-600">
              <span className="text-primary-500">Sahiplen</span>
              <span className="text-secondary-500">Sen</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="/" 
              className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              Ana Sayfa
            </a>
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200 flex items-center">
                Hayvanlar
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/pets?species=dog" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">Köpekler</a>
                <a href="/pets?species=cat" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">Kediler</a>
                <a href="/pets" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">Tüm Hayvanlar</a>
              </div>
            </div>
            <a 
              href="/shelters" 
              className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              Barınaklar
            </a>
            <a 
              href="/about" 
              className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              Hakkımızda
            </a>
            <a 
              href="/contact" 
              className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
            >
              İletişim
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-500 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-primary-500 transition-colors duration-200">
              <Heart size={20} />
            </button>
            <Button 
              variant="primary" 
              size="sm"
              icon={<User size={16} />}
            >
              Giriş Yap
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <a 
                href="/" 
                className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
              >
                Ana Sayfa
              </a>
              <a 
                href="/pets" 
                className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
              >
                Hayvanlar
              </a>
              <a 
                href="/shelters" 
                className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
              >
                Barınaklar
              </a>
              <a 
                href="/about" 
                className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
              >
                Hakkımızda
              </a>
              <a 
                href="/contact" 
                className="px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200"
              >
                İletişim
              </a>
              <div className="pt-2 flex items-center space-x-4">
                <Button 
                  variant="primary" 
                  size="sm"
                  fullWidth
                  icon={<User size={16} />}
                >
                  Giriş Yap
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;