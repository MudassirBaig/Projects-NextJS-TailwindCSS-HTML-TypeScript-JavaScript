// components/Footer.tsx
import React from 'react';





const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 rounded-t-lg">
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-2">
        <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
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
