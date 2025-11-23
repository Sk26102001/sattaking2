// import React, { useState, useMemo } from "react";

// // --- स्थिर डेटा और कॉन्फ़िगरेशन ---
// const MONTHS = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // 20 games list
// const ALL_GAMES = [
//   "DISAWAR",
//   "PUNJAB SUPER",
//   "KUBER",
//   "JD DURGA",
//   "DL BAZAAR",
//   "SATYAM",
//   "FARIDABAD",
//   "GHAZIABAD",
//   "DL-NIGHT",
//   "GALI",
//   "GALI2",
//   "NEW FIROZBAD",
//   "GALI3",
//   "SHAHABAD",
//   "RAJENDRA",
//   "MALVIYA",
//   "NAVI MUMBAI",
//   "GHAZIABAD-2",
//   "FARIDABAD-2",
//   "GALI EAST",
// ];

// // --- काल्पनिक रिजल्ट टाइम डेटा ---
// // प्रत्येक गेम के लिए एक निश्चित रिजल्ट टाइम (Simulated Result Time)
// const GAME_TIMES = {
//     "DISAWAR": "05:00 AM",
//     "SHREE GANESH": "03:15 PM",
//     "KUBER": "06:00 PM",
//     "JD DURGA": "04:30 PM",
//     "DL BAZAAR": "08:30 PM",
//     "SATYAM": "09:30 PM",
//     "FARIDABAD": "06:15 PM",
//     "GHAZIABAD": "08:15 PM",
//     "DL-NIGHT": "10:00 PM",
//     "GALI": "11:30 PM",
//     "KURUKSHETRA": "07:30 PM",
//     "NEW FIROZBAD": "05:45 PM",
//     "GALI3": "09:45 PM",
//     "SHAHABAD": "04:00 PM",
//     "RAJENDRA": "02:30 PM",
//     "MALVIYA": "07:00 PM",
//     "NAVI MUMBAI": "06:30 PM",
//     "GHAZIABAD-2": "08:45 PM",
//     "FARIDABAD-2": "05:30 PM",
//     "GALI EAST": "11:00 PM",
// };


// // Extended sample results for November 2025 (Original 10 games have data, new 10 are "--" for now)
// const SAMPLE_RESULTS_NOV_2025_FULL = {
//   DISAWAR: ["--", "37", "89", "29", "92", "68", "94", "85", "08", "67", "51", "37", "53", "55", "20", "51", "28", "41", "75", "60", "24", "83", "--", "--", "--", "--", "--", "--", "--", "--"],
//   "SHREE GANESH": ["95", "67", "06", "80", "66", "52", "52", "89", "40", "66", "80", "50", "49", "56", "75", "97", "32", "06", "17", "12", "71", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   KUBER: ["52", "91", "63", "29", "80", "63", "14", "97", "56", "84", "29", "91", "00", "53", "89", "09", "43", "17", "72", "68", "83", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   "JD DURGA": ["88", "64", "51", "54", "84", "69", "73", "44", "03", "45", "70", "18", "12", "89", "67", "38", "66", "03", "35", "90", "67", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   "DL BAZAAR": ["88", "91", "87", "57", "94", "16", "53", "07", "78", "73", "23", "29", "78", "33", "24", "49", "95", "77", "45", "48", "74", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   SATYAM: ["56", "23", "91", "04", "78", "62", "35", "19", "47", "80", "63", "21", "55", "94", "07", "86", "32", "15", "79", "40", "68", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   FARIDABAD: ["26", "08", "28", "74", "02", "60", "05", "17", "41", "54", "15", "44", "20", "90", "23", "66", "52", "68", "46", "41", "30", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   GHAZIABAD: ["89", "69", "35", "20", "92", "06", "08", "79", "04", "02", "51", "37", "27", "60", "49", "68", "02", "61", "20", "03", "35", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   "DL-NIGHT": ["48", "91", "23", "80", "01", "74", "84", "12", "50", "78", "36", "97", "41", "67", "42", "95", "80", "13", "66", "27", "49", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   GALI: ["40", "75", "07", "79", "80", "73", "19", "53", "32", "64", "57", "05", "13", "45", "93", "46", "14", "85", "14", "24", "11", "--", "--", "--", "--", "--", "--", "--", "--", "--"],
//   // 10 additional games with all "--" for November 2025
//   GALI2: Array(30).fill("--"),
//   "NEW FIROZBAD": Array(30).fill("--"),
//   KURUKSHETRA: Array(30).fill("--"),
//   "SHAHABAD": Array(30).fill("--"),
//   RAJENDRA: Array(30).fill("--"),
//   MALVIYA: Array(30).fill("--"),
//   "NAVI MUMBAI": Array(30).fill("--"),
//   "GHAZIABAD-2": Array(30).fill("--"),
//   "FARIDABAD-2": Array(30).fill("--"),
//   "GALI EAST": Array(30).fill("--"),
// };

// // Build a full dataset object keyed by year and month.
// const DATA = {
//   "2025": MONTHS.reduce((acc, month) => {
//     acc[month] = {};
//     Object.keys(SAMPLE_RESULTS_NOV_2025_FULL).forEach((game) => {
//       // Only November 2025 uses the explicit sample results
//       acc[month][game] = month === "November" ? SAMPLE_RESULTS_NOV_2025_FULL[game] : Array(30).fill("--");
//     });
//     return acc;
//   }, {}),
// };

// // Helper: generate a single two-digit string 00-99
// const randomTwoDigit = () => Math.floor(Math.random() * 100).toString().padStart(2, "0");

// // --- REACT COMPONENT ---
// export default function Chart3() {
//   const now = new Date();
//   const todayDate = now.getDate(); 
//   const currentMonthName = MONTHS[now.getMonth()];
//   const currentYearStr = String(now.getFullYear());

//   const [selectedMonth, setSelectedMonth] = useState(currentMonthName);
//   const [selectedYear, setSelectedYear] = useState(currentYearStr);
//   const [search, setSearch] = useState("");

//   // Auto-generate year options from 2025 up to current year
//   const startYear = 2025;
//   const yearOptions = useMemo(() => {
//     return Array.from({ length: Number(currentYearStr) - startYear + 1 }, (_, i) => String(startYear + i));
//   }, [currentYearStr]);

//   // Determine the day index for today (0-29)
//   const todayDayIndex = todayDate - 1; 

//   // Determine whether a given month/year is in the past
//   const isMonthInPast = (yearStr, monthName) => {
//     const y = Number(yearStr);
//     const monthIndex = MONTHS.indexOf(monthName);
    
//     if (y < now.getFullYear()) return true;
//     if (y > now.getFullYear()) return false;
    
//     // same year — month strictly less than current month is past
//     return monthIndex < now.getMonth();
//   };

//   // Determine the list of games to process (always use ALL_GAMES)
//   const games = ALL_GAMES;

//   // Derived table data: for each game produce 30 values
//   const tableData = useMemo(() => {
//     const isPast = isMonthInPast(selectedYear, selectedMonth);

//     return games.map((game) => {
//       const hasExplicit = DATA[selectedYear] && DATA[selectedYear][selectedMonth] && DATA[selectedYear][selectedMonth][game];
//       let row = hasExplicit ? DATA[selectedYear][selectedMonth][game] : Array(30).fill("--");

//       return row.map((val, dayIndex) => {
        
//         if (isPast) {
//           return val === "--" ? randomTwoDigit() : val;
//         }

//         if (selectedYear === currentYearStr && selectedMonth === currentMonthName) {
//           // Future or Today
//           if (dayIndex >= todayDayIndex) {
//              return "--";
//           }
//         }
        
//         // Future Month/Year
//         if (!isPast && (Number(selectedYear) > Number(currentYearStr) || MONTHS.indexOf(selectedMonth) > now.getMonth())) {
//             return "--";
//         }

//         // Past day of current month, if '--', fill with random
//         if (dayIndex < todayDayIndex && val === "--") {
//             return randomTwoDigit();
//         }
        
//         return val;
//       });
//     });
//   }, [games, selectedMonth, selectedYear, currentYearStr, currentMonthName, todayDayIndex, now]);


//   const filteredGames = useMemo(() => {
//     if (!search.trim()) return games;
//     return games.filter((g) => g.toLowerCase().includes(search.toLowerCase()));
//   }, [games, search]);
  
//   // Map filtered games back to the correct data row index
//   const filteredTableData = useMemo(() => {
//       const gameIndices = filteredGames.map(game => games.indexOf(game));
//       return gameIndices.map(index => tableData[index]);
//   }, [filteredGames, games, tableData]);


//   function handlePrint() {
//     window.print();
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 text-gray-800">
//       <div className="max-w-full mx-auto">
//         <header className="flex flex-col items-center mb-6 bg-white p-4 rounded-lg shadow-md">
//           <h1 className="text-3xl font-extrabold text-red-600 border-b-2 border-red-600 pb-1">RESULT CHART</h1>

//           <div className="mt-4 flex flex-wrap items-center gap-4 w-full justify-center">
            
//             {/* Date Selectors */}
//             <div className="flex items-center gap-3">
//               <select
//                 value={selectedMonth}
//                 onChange={(e) => setSelectedMonth(e.target.value)}
//                 className="border border-gray-300 rounded px-3 py-2 shadow-sm text-base font-semibold"
//               >
//                 {MONTHS.map((m) => (
//                   <option key={m} value={m}>{m}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedYear}
//                 onChange={(e) => setSelectedYear(e.target.value)}
//                 className="border border-gray-300 rounded px-3 py-2 shadow-sm text-base font-semibold"
//               >
//                 {yearOptions.map((y) => (
//                   <option key={y} value={y}>{y}</option>
//                 ))}
//               </select>

//               <button onClick={() => alert(`Showing results for ${selectedMonth} ${selectedYear}`)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-indigo-700 transition duration-150">Show</button>
//             </div>

//             {/* Filter and Print */}
//             <div className="flex items-center gap-3">
//               <input
//                 placeholder="Filter games..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="border border-gray-300 rounded px-3 py-2 shadow-sm text-base w-48"
//               />
//               <button onClick={handlePrint} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-amber-600 transition duration-150">🖨️ Print</button>
//             </div>
//           </div>
//         </header>

//         {/* Table — table-fixed is crucial for preventing horizontal scroll */}
//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           <table className="w-full table-fixed border-collapse text-sm">
//             <thead>
//               <tr className="bg-red-500 text-white shadow-lg">
//                 {/* चौड़ाई वापस w-32 सेट की गई */}
//                 <th className="w-32 text-left px-2 py-3 font-bold text-base border-r border-red-400 sticky left-0 bg-red-500 z-20">GAME</th>
//                 {Array.from({ length: 30 }).map((_, i) => (
//                   <th key={i} className="p-1 text-center border-l border-red-400 font-extrabold text-xs w-[2.5%]">{i + 1}</th> 
//                 ))}
//               </tr>
//             </thead>

//             <tbody>
//               {filteredGames.map((game, gameIndex) => (
//                 <tr key={game} className="hover:bg-red-50 even:bg-white odd:bg-gray-100">
//                   {/* चौड़ाई w-32 सेट की गई और टाइम जोड़ा गया */}
//                   <td className="w-32 border-y border-r border-gray-300 px-2 py-1 align-top break-words sticky left-0 bg-white z-10 shadow-sm">
//                     <div className="font-extrabold text-red-600 text-sm leading-tight">{game}</div>
//                     <div className="font-medium text-xs text-gray-700 leading-tight mt-0.5">{GAME_TIMES[game]}</div>
//                   </td>
//                   {filteredTableData[gameIndex].map((val, idx) => (
//                     <td 
//                       key={idx} 
//                       className={`text-center border-x border-gray-200 p-0.5 align-top font-bold text-gray-700 text-xs ${val !== '--' && 'bg-yellow-50/50'}`}
//                     >
//                       {val}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {filteredGames.length === 0 && (
//             <div className="p-4 text-center text-lg font-semibold text-gray-500">No games match your filter.</div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }
// import React, { useState, useMemo } from "react";

// // --- स्थिर डेटा और कॉन्फ़िगरेशन ---
// const MONTHS = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December",
// ];

// // ✅ आपकी 20 FINAL GAMES LIST
// const ALL_GAMES = [
//   "FARIDABAD",
//   "SHREE GANESH",
//   "GHAZIABAD",
//   "GALI",
//   "GALI2",
//   "DISAWAR",
//   "DAY DELHI",
//   "KURUKSHETRA",
//   "SHRI HARI",
//   "RAJSHRI",
//   "JAIPUR DAY",
//   "SUNDRAM",
//   "CHAR MINAR",
//   "PESHAWER",
//   "JAI MAHALAXMI",
//   "TAJ",
//   "NEWFARIDABAD",
//   "KUBBER",
//   "JD DURGA",
//   "DL BAZAAR",
// ];

// // --- प्रत्येक गेम के लिए टाइम ---
// const GAME_TIMES = {
//   "FARIDABAD": "06:00 PM",
//   "SHREE GANESH": "03:15 PM",
//   "GHAZIABAD": "08:30 PM",
//   "GALI": "11:30 PM",
//   "GALI2": "10:45 PM",
//   "DISAWAR": "05:00 AM",
//   "DAY DELHI": "02:30 PM",
//   "KURUKSHETRA": "07:30 PM",
//   "SHRI HARI": "04:00 PM",
//   "RAJSHRI": "05:45 PM",
//   "JAIPUR DAY": "03:00 PM",
//   "SUNDRAM": "06:45 PM",
//   "CHAR MINAR": "08:15 PM",
//   "PESHAWER": "09:30 PM",
//   "JAI MAHALAXMI": "07:00 PM",
//   "TAJ": "11:00 AM",
//   "NEWFARIDABAD": "05:30 PM",
//   "KUBBER": "06:20 PM",
//   "JD DURGA": "04:30 PM",
//   "DL BAZAAR": "08:30 PM",
// };

// // --- November 2025 sample data (बाकी सब "--")
// const SAMPLE_RESULTS_NOV_2025_FULL = {};

// ALL_GAMES.forEach((game) => {
//   SAMPLE_RESULTS_NOV_2025_FULL[game] = Array(30).fill("--");
// });

// // Build a full dataset object keyed by year and month.
// const DATA = {
//   "2025": MONTHS.reduce((acc, month) => {
//     acc[month] = {};
//     ALL_GAMES.forEach((game) => {
//       acc[month][game] = month === "November"
//         ? SAMPLE_RESULTS_NOV_2025_FULL[game]
//         : Array(30).fill("--");
//     });
//     return acc;
//   }, {}),
// };

// // Two-digit number generator
// const randomTwoDigit = () =>
//   Math.floor(Math.random() * 100)
//     .toString()
//     .padStart(2, "0");

// // --- REACT COMPONENT ---
// export default function Chart3() {
//   const now = new Date();
//   const todayDate = now.getDate();
//   const currentMonthName = MONTHS[now.getMonth()];
//   const currentYearStr = String(now.getFullYear());

//   const [selectedMonth, setSelectedMonth] = useState(currentMonthName);
//   const [selectedYear, setSelectedYear] = useState(currentYearStr);
//   const [search, setSearch] = useState("");

//   const startYear = 2025;
//   const yearOptions = useMemo(() => {
//     return Array.from(
//       { length: Number(currentYearStr) - startYear + 1 },
//       (_, i) => String(startYear + i)
//     );
//   }, [currentYearStr]);

//   const todayDayIndex = todayDate - 1;

//   const isMonthInPast = (yearStr, monthName) => {
//     const y = Number(yearStr);
//     const m = MONTHS.indexOf(monthName);
//     if (y < now.getFullYear()) return true;
//     if (y > now.getFullYear()) return false;
//     return m < now.getMonth();
//   };

//   const games = ALL_GAMES;

//   const tableData = useMemo(() => {
//     const isPast = isMonthInPast(selectedYear, selectedMonth);

//     return games.map((game) => {
//       const hasExplicit =
//         DATA[selectedYear] &&
//         DATA[selectedYear][selectedMonth] &&
//         DATA[selectedYear][selectedMonth][game];

//       let row = hasExplicit
//         ? DATA[selectedYear][selectedMonth][game]
//         : Array(30).fill("--");

//       return row.map((val, dayIndex) => {
//         if (isPast) return val === "--" ? randomTwoDigit() : val;

//         if (
//           selectedYear === currentYearStr &&
//           selectedMonth === currentMonthName
//         ) {
//           if (dayIndex >= todayDayIndex) return "--";
//         }

//         if (
//           Number(selectedYear) > Number(currentYearStr) ||
//           MONTHS.indexOf(selectedMonth) > now.getMonth()
//         )
//           return "--";

//         if (dayIndex < todayDayIndex && val === "--")
//           return randomTwoDigit();

//         return val;
//       });
//     });
//   }, [games, selectedMonth, selectedYear, currentYearStr, currentMonthName]);

//   const filteredGames = useMemo(() => {
//     if (!search.trim()) return games;
//     return games.filter((g) =>
//       g.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [games, search]);

//   const filteredTableData = useMemo(() => {
//     const gameIndices = filteredGames.map((g) => games.indexOf(g));
//     return gameIndices.map((i) => tableData[i]);
//   }, [filteredGames, games, tableData]);

//   function handlePrint() {
//     window.print();
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 text-gray-800">
//       <div className="max-w-full mx-auto">
//         <header className="flex flex-col items-center mb-6 bg-white p-4 rounded-lg shadow-md">
//           <h1 className="text-3xl font-extrabold text-red-600 border-b-2 border-red-600 pb-1">
//             RESULT CHART
//           </h1>

//           <div className="mt-4 flex flex-wrap items-center gap-4 w-full justify-center">
//             <div className="flex items-center gap-3">
//               <select
//                 value={selectedMonth}
//                 onChange={(e) => setSelectedMonth(e.target.value)}
//                 className="border px-3 py-2 rounded font-semibold"
//               >
//                 {MONTHS.map((m) => (
//                   <option key={m}>{m}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedYear}
//                 onChange={(e) => setSelectedYear(e.target.value)}
//                 className="border px-3 py-2 rounded font-semibold"
//               >
//                 {yearOptions.map((y) => (
//                   <option key={y}>{y}</option>
//                 ))}
//               </select>

//               <button
//                 onClick={() =>
//                   alert(`Showing results for ${selectedMonth} ${selectedYear}`)
//                 }
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Show
//               </button>
//             </div>

//             <div className="flex items-center gap-3">
//               <input
//                 placeholder="Filter games..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="border px-3 py-2 rounded w-48"
//               />
//               <button
//                 onClick={handlePrint}
//                 className="bg-amber-500 text-white px-4 py-2 rounded-lg"
//               >
//                 🖨️ Print
//               </button>
//             </div>
//           </div>
//         </header>

//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           <table className="w-full table-fixed border-collapse text-sm">
//             <thead>
//               <tr className="bg-red-500 text-white">
//                 <th className="w-32 px-2 py-3 text-left sticky left-0 bg-red-500 z-20">
//                   GAME
//                 </th>
//                 {Array.from({ length: 30 }).map((_, i) => (
//                   <th key={i} className="p-1 text-center">
//                     {i + 1}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody>
//               {filteredGames.map((game, gameIndex) => (
//                 <tr key={game} className="hover:bg-red-50">
//                   <td className="w-32 px-2 py-1 sticky left-0 bg-white z-10">
//                     <div className="font-bold text-red-600">{game}</div>
//                     <div className="text-xs text-gray-700">
//                       {GAME_TIMES[game]}
//                     </div>
//                   </td>

//                   {filteredTableData[gameIndex].map((val, idx) => (
//                     <td key={idx} className="text-center p-1 text-xs">
//                       {val}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {filteredGames.length === 0 && (
//             <div className="p-4 text-center text-lg text-gray-500">
//               No games match your filter.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

/* Chart3.jsx — Desktop जैसा EXACT UI, Mobile पर Smooth Scroll */

import React, { useState, useMemo } from "react";

// --- स्थिर डेटा और कॉन्फ़िगरेशन ---
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// === आपके 20 नए गेम यहाँ ===
const ALL_GAMES = [
  "FARIDABAD",
  "SHREE GANESH",
  "GHAZIABAD",
  "GALI",
  "GALI2",
  "DISAWAR",
  "DAY DELHI",
  "KURUKSHETRA",
  "SHRI HARI",
  "RAJSHRI",
  "JAIPUR DAY",
  "SUNDRAM",
  "CHAR MINAR",
  "PESHAWER",
  "JAI MAHALAXMI",
  "TAJ",
  "NEWFARIDABAD",
  "KUBBER",
  "JD DURGA",
  "DL BAZAAR",
];

// --- टाइम डेटा ---
const GAME_TIMES = {
  "FARIDABAD": "06:15 PM",
  "SHREE GANESH": "03:15 PM",
  "GHAZIABAD": "08:15 PM",
  "GALI": "11:30 PM",
  "GALI2": "11:45 PM",
  "DISAWAR": "05:00 AM",
  "DAY DELHI": "02:30 PM",
  "KURUKSHETRA": "07:30 PM",
  "SHRI HARI": "04:20 PM",
  "RAJSHRI": "06:50 PM",
  "JAIPUR DAY": "05:40 PM",
  "SUNDRAM": "09:15 PM",
  "CHAR MINAR": "07:10 PM",
  "PESHAWER": "08:40 PM",
  "JAI MAHALAXMI": "04:55 PM",
  "TAJ": "06:45 PM",
  "NEWFARIDABAD": "05:30 PM",
  "KUBBER": "06:00 PM",
  "JD DURGA": "04:30 PM",
  "DL BAZAAR": "08:30 PM",
};

// सभी गेम के लिए 30 days की "--" लिस्ट
const EMPTY_30 = Array(30).fill("--");

// November 2025 डेटा (बाकी महीने में auto random)
const SAMPLE = {};
ALL_GAMES.forEach((g) => {
  SAMPLE[g] = EMPTY_30; // आपकी इच्छा पर फुल data भी डाल सकता हूँ
});

// DATA STRUCTURE
const DATA = {
  "2025": MONTHS.reduce((acc, m) => {
    acc[m] = {};
    ALL_GAMES.forEach((g) => {
      acc[m][g] = m === "November" ? SAMPLE[g] : EMPTY_30;
    });
    return acc;
  }, {}),
};

// Random generator
const randomTwoDigit = () =>
  Math.floor(Math.random() * 100).toString().padStart(2, "0");

// --- COMPONENT ---
export default function Chart3() {
  const now = new Date();
  const todayDate = now.getDate();
  const currentMonthName = MONTHS[now.getMonth()];
  const currentYearStr = String(now.getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(currentMonthName);
  const [selectedYear, setSelectedYear] = useState(currentYearStr);
  const [search, setSearch] = useState("");

  // YEARS
  const yearOptions = useMemo(() => {
    return Array.from(
      { length: Number(currentYearStr) - 2025 + 1 },
      (_, i) => String(2025 + i)
    );
  }, [currentYearStr]);

  const todayDayIndex = todayDate - 1;

  const isMonthInPast = (y, m) => {
    const year = Number(y);
    const monthIndex = MONTHS.indexOf(m);
    if (year < now.getFullYear()) return true;
    if (year > now.getFullYear()) return false;
    return monthIndex < now.getMonth();
  };

  const games = ALL_GAMES;

  const tableData = useMemo(() => {
    const past = isMonthInPast(selectedYear, selectedMonth);

    return games.map((g) => {
      const base =
        DATA[selectedYear]?.[selectedMonth]?.[g] || Array(30).fill("--");

      return base.map((v, i) => {
        if (past) return v === "--" ? randomTwoDigit() : v;

        if (selectedYear === currentYearStr && selectedMonth === currentMonthName) {
          if (i >= todayDayIndex) return "--";
        }

        if (
          Number(selectedYear) > Number(currentYearStr) ||
          MONTHS.indexOf(selectedMonth) > now.getMonth()
        ) {
          return "--";
        }

        if (i < todayDayIndex && v === "--") return randomTwoDigit();
        return v;
      });
    });
  }, [games, selectedMonth, selectedYear, currentYearStr, currentMonthName]);

  const filteredGames = useMemo(() => {
    if (!search.trim()) return games;
    return games.filter((g) =>
      g.toLowerCase().includes(search.toLowerCase())
    );
  }, [games, search]);

  const filteredTableData = useMemo(() => {
    return filteredGames.map((g) => tableData[games.indexOf(g)]);
  }, [filteredGames, games, tableData]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-gray-800">

      <div className="max-w-full mx-auto">

        {/* HEADER */}
        <header className="flex flex-col items-center mb-6 bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-extrabold text-red-600 border-b-2 border-red-600 pb-1">
            RESULT CHART
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 w-full justify-center">

            <div className="flex items-center gap-3">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 shadow-sm font-semibold"
              >
                {MONTHS.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 shadow-sm font-semibold"
              >
                {yearOptions.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <input
                placeholder="Filter games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 shadow-sm w-48"
              />
            </div>
          </div>
        </header>

        {/* ============================== */}
        {/* RESPONSIVE TABLE WRAPPER */}
        {/* ============================== */}
        <div className="bg-white shadow-xl rounded-xl overflow-x-auto">
          <div className="min-w-[1400px]"> {/* Desktop width force (mobile scroll) */}
            <table className="w-full table-fixed border-collapse text-sm">
              <thead>
                <tr className="bg-red-500 text-white">
                  <th className="w-32 sticky left-0 bg-red-500 px-2 py-3 border-r font-bold text-base">
                    GAME
                  </th>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <th
                      key={i}
                      className="p-1 text-center border-l border-red-400 font-bold text-xs"
                    >
                      {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredGames.map((g, gi) => (
                  <tr key={g} className="hover:bg-red-50 even:bg-white odd:bg-gray-100">
                    <td className="w-32 sticky left-0 bg-white z-10 border-r border-gray-300 px-2 py-1">
                      <div className="font-extrabold text-red-600 text-sm">{g}</div>
                      <div className="text-xs text-gray-700">{GAME_TIMES[g]}</div>
                    </td>
                    {filteredTableData[gi].map((v, d) => (
                      <td
                        key={d}
                        className={`text-center border-x border-gray-200 p-1 font-bold text-xs ${
                          v !== "--" ? "bg-yellow-50/50" : ""
                        }`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
