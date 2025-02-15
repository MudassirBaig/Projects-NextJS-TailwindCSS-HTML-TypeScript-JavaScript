// components/Footer.tsx
import React from 'react';
// import Link from 'next/link';




const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 rounded-t-lg">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mb-2">
          <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
          
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Baig-PowerIoTize. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
