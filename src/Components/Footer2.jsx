import React from 'react';

export default function Footer2() {
  return (
    <div className="bg-orange-600/70 py-6 mt-8 flex flex-col items-center justify-center text-white">
      {/* 411 ONLINE Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md mb-4
                         transform transition-transform duration-200 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75">
        411 ONLINE
      </button>
      
      {/* Copyright Text */}
      <p className="text-sm">
        © 2023 Copyright <span className="font-semibold">Sattaking786.com</span>
      </p>
    </div>
  );
}