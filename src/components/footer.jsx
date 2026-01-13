import { Coffee, Instagram, Facebook, Mail, ChevronRight } from 'lucide-react';
import { Link, NavLink } from "react-router-dom";
function Footer() {
  const navStyles = ({ isActive }) => 
    isActive ? "text-amber-300 font-bold" : "text-white hover:text-amber-200 transition-colors";

  return (
    <footer className="bg-linear-to-r from-amber-900 via-orange-800 to-amber-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* The Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-amber-300" />
              <h3 className="text-2xl font-bold">Cuddle Cup</h3>
            </div>
            <p className="text-amber-200 text-sm">
              Crafting cozy moments and premium brews in the heart of the city since 2024.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><NavLink to="/about" className={navStyles}>About Us</NavLink></li>
              <li><NavLink to="/menu" className={navStyles}>Our Menu</NavLink></li>
              <li><NavLink to="/location" className={navStyles}>Find Us</NavLink></li>
              <li><NavLink to="/contact" className={navStyles}>Get in Touch</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Newsletter or Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-300/20 transition-all"><Instagram size={20}/></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-300/20 transition-all"><Facebook size={20}/></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber-300/20 transition-all"><Mail size={20}/></a>
            </div>
            <p className="text-xs text-amber-200/60 italic">hello@cuddlecup.com</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-amber-200/50">
          &copy; {new Date().getFullYear()} Cuddle Cup Café. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;