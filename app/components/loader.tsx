import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50">
      <div className="w-10 h-10 border-4 border-gray-500 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
