"use client";

import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-4 border-gray-400 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
export const metadata = {
  title: "Loading",
  description: "Loading page for Simcoe Woods",
};