import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">braedee.how</div>

          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Process</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Book Free Consultation</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#process" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#experience" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center" onClick={() => setIsMenuOpen(false)}>Book Free Consultation</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
