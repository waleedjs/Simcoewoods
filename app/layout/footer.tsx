import React from 'react';

const Footer = () => {
  return (
    // Footer
    <footer className="bg-white text-gray-400 text-xs">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col gap-6 justify-between items-center">
          <div className="leading-relaxed text-center md:text-left mb-4 md:mb-0">
            <p className="text-base text-center">
              The Developer reserves the right to make changes to the floor plans, project design, and specifications
              without notice as deemed necessary. Please see a sales representative for details. E.&O.E. All images,
              logos, and text are owned by their respective owners. By submitting your email address, you consent to
              receive various promotional materials from us such as newsletters, event notices, and new project
              announcements.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Simcoe Woods. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;