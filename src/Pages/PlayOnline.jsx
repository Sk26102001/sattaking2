// Satta786Footer.jsx

import OnlineKhaiwal from "../Components/OnlineKhaiwal.jsx";
import Add2 from "../Components/Add2.jsx";
import React from 'react';

const PlayOnline = () => {
  return (
    <>
  <OnlineKhaiwal />
     <Add2 />


    <div className="w-full bg-amber-700 p-8 flex flex-col items-center justify-center min-h-[150px] shadow-lg rounded-t-lg">
      
      {/* Satta786 Button/Badge */}
      <div className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md mb-4 cursor-pointer transform hover:scale-105 transition-all duration-200 ease-in-out text-sm md:text-base">
        Satta786
      </div>

      {/* Copyright Text */}
      <p className="text-white text-sm md:text-base font-semibold text-opacity-80">
        © 2023 Copyright Satta786.com
      </p>
    </div>
    </>
  );
};

export default PlayOnline;