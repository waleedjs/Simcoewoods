/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
      <div className="bg-white max-w-3xl mx-auto p-10 rounded-lg shadow-sm text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 opacity-20">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</p>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Oops! It looks like the page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <button className="py-3 px-8 rounded-md font-semibold bg-black text-white hover:bg-gray-900 transition duration-200">
            Return to Home
          </button>
        </Link>

        {/* Optional Contact Info */}
        <p className="text-sm text-gray-500 mt-6">
          Need help? at <Link href="/#contact" className="text-teal-600 hover:underline">Contact us</Link>
        </p>
      </div>
    </div>
  );
}