// import React from "react";

// // Data array renamed from DataPage to sattaData to avoid component naming conflict
// const sattaData = [
//   {
//     title: "CHAR MINAR",
//     time: "04:00 AM",
//     numbers: "{ 55 } ➡ [ 20 ]",
//     sectionTitle: "CHARMINAR SATTA CHART",
//   },
//   {
//     items: [
//       {
//         name: "DISAWER",
//         time: "05:10 AM",
//         numbers: "{ 55 } ➡ [ 20 ]",
//         footer: "DISAWER SATTA KING",
//       },
//       {
//         name: "SHRI HARI",
//         time: "11:00 AM",
//         numbers: "{ 71 } ➡ [ 36 ]",
//         footer: "SATTA RESULT",
//       },
//     ],
//   },
//   {
//     items: [
//       {
//         name: "RAJSHRI",
//         time: "01:30 PM",
//         numbers: "{ 78 } ➡ [ 32 ]",
//         footer: "SATTA KING LEAK",
//       },
//       {
//         name: "JAIPUR DAY",
//         time: "12:45 PM",
//         numbers: "{ 77 } ➡ [ 98 ]",
//         footer: "SATTA RESULT",
//       },
//     ],
//   },
//   {
//     title: "SUNDRAM",
//     time: "02:15 PM",
//     numbers: "{ 63 } ➡ [ ]",
//     sectionTitle: "SATTA LEAK NUMBER",
//   },
//   {
//     items: [
//       {
//         name: "DELHI DREAM",
//         time: "02:40 PM",
//         numbers: "{ 58 } ➡ [ ]",
//         footer: "DELHI DREAM",
//       },
//       {
//         name: "PESHAWER",
//         time: "03:05 PM",
//         numbers: "{ 65 } ➡ [ ]",
//         footer: "PESHAWER SATTA KING",
//       },
//     ],
//   },
//   {
//     items: [
//       {
//         name: "JAI MAHALAXMI",
//         time: "02:30 PM",
//         numbers: "{ 28 } ➡ [ 46 ]",
//         footer: "JAI MAHALAXMI",
//       },
//       {
//         name: "TAJ",
//         time: "03:15 PM",
//         numbers: "{ } ➡ [ ]",
//         footer: "TAJ SATTA CHART",
//       },
//     ],
//   },
// ];

// // Component renamed to DataPage as requested
// export default function DataPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-4 font-inter">
//       {/* Title */}
//       <h1 className="text-center text-white text-3xl font-extrabold mb-6 drop-shadow-[0_0_10px_cyan]">
//         🔥 SATTA RESULT BOARD 🔥
//       </h1>

//       {/* Main Data Rendering */}
//       {sattaData.map((row, index) => (
//         <div key={index} className="mb-8">

//           {/* 🔶 SINGLE HEADER BLOCK */}
//           {row.title && (
//             <>
//               <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-5 text-3xl shadow-xl font-extrabold border border-black rounded-t-xl">
//                 {row.title}
//                 <p className="text-sm mt-1">( {row.time} )</p>
//                 <p className="text-xl mt-1">{row.numbers}</p>
//               </div>

//               <div className="bg-black text-yellow-400 text-center font-bold py-3 border border-gray-900 rounded-b-xl shadow-md tracking-wide">
//                 {row.sectionTitle}
//               </div>
//             </>
//           )}

//           {/* 🔷 GRID ITEMS */}
//           {row.items && (
//             <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-700 rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm mt-2">
//               {row.items.map((item, i) => (
//                 <div
//                   key={i}
//                   // Added border-l for separation on mobile
//                   className={`p-6 relative text-white transition-all duration-300 ${
//                     i === 0 ? 'md:border-r border-gray-700' : ''
//                   } ${
//                     i === 1 && row.items.length === 2 ? 'md:border-l border-gray-700' : ''
//                   }`}
//                 >
//                   <p className="text-blue-300 font-bold text-2xl">{item.name}</p>
//                   <p className="text-red-400 text-sm mt-1">( {item.time} )</p>
//                   <p className="text-green-300 text-lg font-semibold mt-1">{item.numbers}</p>

//                   <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-2 mt-4 text-sm font-semibold rounded-md shadow-inner">
//                     {item.footer}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


import React from "react";

// DATA
const data = [
  {
    title: "CHAR MINAR",
    time: "04:00 AM",
    numbers: "{ 55 } ➡ [ 20 ]",
    sectionTitle: "CHARMINAR SATTA CHART",
  },
  {
    items: [
      {
        name: "DISAWER",
        time: "05:10 AM",
        numbers: "{ 55 } ➡ [ 20 ]",
        footer: "DISAWER SATTA KING",
      },
      {
        name: "SHRI HARI",
        time: "11:00 AM",
        numbers: "{ 71 } ➡ [ 36 ]",
        footer: "SATTA RESULT",
      },
    ],
  },
  {
    items: [
      {
        name: "RAJSHRI",
        time: "01:30 PM",
        numbers: "{ 78 } ➡ [ 32 ]",
        footer: "SATTA KING LEAK",
      },
      {
        name: "JAIPUR DAY",
        time: "12:45 PM",
        numbers: "{ 77 } ➡ [ 98 ]",
        footer: "SATTA RESULT",
      },
    ],
  },
  {
    title: "SUNDRAM",
    time: "02:15 PM",
    numbers: "{ 63 } ➡ [🔜 ]",
    sectionTitle: "SATTA LEAK NUMBER",
  },
  {
    items: [
      {
        name: "DELHI DREAM",
        time: "02:40 PM",
        numbers: "{ 58 } ➡ [🔜 ]",
        footer: "DELHI DREAM",
      },
      {
        name: "PESHAWER",
        time: "03:05 PM",
        numbers: "{ 65 } ➡ [ 🔜]",
        footer: "PESHAWER SATTA KING",
      },
    ],
  },
  {
    items: [
      {
        name: "JAI MAHALAXMI",
        time: "02:30 PM",
        numbers: "{ 28 } ➡ [ 46 ]",
        footer: "JAI MAHALAXMI",
      },
      {
        name: "TAJ",
        time: "03:15 PM",
        numbers: "{ } ➡ [🔜 ]",
        footer: "TAJ SATTA CHART",
      },
    ],
  },
];

// BLINKING "🔜" LOGIC WITHOUT WHITE SHADOW
const renderNumbers = (num) => {
  // Detect [🔜] inside brackets
  const bracketedSoon = num.match(/\[\s*🔜\s*\]/);

  if (bracketedSoon) {
    const beforeBracket = num.split(bracketedSoon[0])[0];
    return (
      <>
        {beforeBracket}
        [
        <span
          className="rainbow-blink text-2xl md:text-3xl font-black animate-rainbow-pop"
          style={{ display: "inline-block", margin: "0 2px", verticalAlign: "middle" }}
        >
          🔜
        </span>
        ]
      </>
    );
  }
  // Detect plain 🔜 not in brackets
  const justSoon = num.match(/🔜/);
  if (justSoon) {
    const clean = num.replace(/🔜/, "");
    return (
      <>
        {clean}
        <span
          className="rainbow-blink text-2xl md:text-3xl font-black animate-rainbow-pop"
          style={{ display: "inline-block", margin: "0 2px", verticalAlign: "middle" }}
        >
          🔜
        </span>
      </>
    );
  }
  // Regular text
  return num;
};

export default function DataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-4">
      {/* ANIMATION CSS */}
      <style>
        {`
          @keyframes rainbowBlink {
            0% { color: #ff3c3c; }
            20% { color: #27ff55; }
            40% { color: #40e7ff; }
            60% { color: #ff47e4; }
            80% { color: #fff902; }
            100% { color: #ff3c3c; }
          }
          .rainbow-blink {
            animation: rainbowBlink 1.2s infinite alternate;
            font-weight: bold;
            transition: filter 0.2s;
          }
          @keyframes rainbow-pop {
            0%,100% { transform: scale(1);}
            50% { transform: scale(1.17);}
          }
          .animate-rainbow-pop {
            animation: rainbow-pop 1.2s infinite alternate cubic-bezier(.21,1.19,.53,1.06);
          }
        `}
      </style>

      {/* Title */}
      <h1 className="text-center text-white text-3xl font-extrabold mb-6 drop-shadow-[0_0_10px_cyan]">
        🔥 SATTA RESULT BOARD 🔥
      </h1>

      {/* Data Loop */}
      {data.map((row, index) => (
        <div key={index} className="mb-8">
          {/* Header Block */}
          {row.title && (
            <>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-5 text-3xl shadow-xl font-extrabold border border-black rounded-t-xl">
                {row.title}
                <p className="text-sm mt-1">( {row.time} )</p>
                <p className="text-xl mt-1">{renderNumbers(row.numbers)}</p>
              </div>
              <div className="bg-black text-yellow-400 text-center font-bold py-3 border border-gray-900 rounded-b-xl shadow-md tracking-wide">
                {row.sectionTitle}
              </div>
            </>
          )}

          {/* Item Grid - Centered */}
          {row.items && (
            <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-700 rounded-xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-xl mt-2">
              {row.items.map((item, i) => (
                <div
                  key={i}
                  className="p-6 border-r last:border-r-0 border-gray-700 hover:bg-white/20 transition-all duration-300 flex flex-col items-center"
                >
                  <p className="text-blue-300 font-bold text-2xl text-center">{item.name}</p>
                  <p className="text-red-400 text-sm mt-1 text-center">( {item.time} )</p>
                  <p className="text-green-300 text-lg font-semibold mt-1 text-center">
                    {renderNumbers(item.numbers)}
                  </p>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-2 mt-4 text-sm font-semibold rounded-md shadow-inner w-full">
                    {item.footer}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
