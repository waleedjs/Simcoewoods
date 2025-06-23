import React from 'react';

const Footer = () => {
  return (
    // Footer
    <footer className="bg-white text-gray-700 text-xs">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col gap-6 justify-between items-center">
          <div className="text-center text-base md:text-right">
            <p>© {new Date().getFullYear()} Simcoe Woods. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;