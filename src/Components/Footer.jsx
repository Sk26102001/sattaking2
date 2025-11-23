import React from "react";

const Footer = () => {
  const topLinks = ["ABOUT US", "DISCLAIMER", "PRIVACY POLICY", "SITEMAP"];

  const tags = [
    "Satta King", "Satta King darbar", "Gali Result", "Faridabad Satta Result",
    "Gaziyabad Satta king", "Disawer Result", "Satta King 2018", "Satta King 2019",
    "Satta King 2020", "Satta King 2021", "Satta King 2022", "Satta King 2023",
    "Satta King 2024", "Satta King 2025", "Satta King Record Chart", "Satta Leak number",
    "Satta King 786", "Satta King leak", "UP game Satta", "Satta Live Result",
    "VIP Satta King", "Satta Smart King", "Satta king online", "Satta king blog",
    "Delhi Satta king", "Delhi Bazar", "UP game king"
  ];

  return (
    <div className="w-full bg-black text-center py-10 mt-0 mb-0">
      
      {/* Top Red Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {topLinks.map((item, i) => (
          <button
            key={i}
            className="bg-red-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Yellow Tags */}
      <div className="flex justify-center flex-wrap gap-3 max-w-6xl mx-auto mb-10">
        {tags.map((item, i) => (
          <span
            key={i}
            className="bg-yellow-300 px-4 py-1 font-semibold rounded cursor-pointer hover:bg-yellow-400"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 w-full my-8"></div>

      {/* Copyright */}
      <p className="text-white text-sm pb-0 mb-0">
        Copyright © 2018-2023 - Satta King Fix No.
      </p>

    </div>
  );
};

export default Footer;