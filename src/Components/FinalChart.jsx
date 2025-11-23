// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// import React from 'react';

// // --- Helper Function: Generate Random 15-day Data ---
// // 15 दिनों के लिए 00 से 99 तक यादृच्छिक परिणाम उत्पन्न करता है
// const generateRandomResults = (count = 15) => {
//     const results = [];
//     for (let i = 0; i < count; i++) {
//         // कुछ स्थानों पर '--' जोड़ना ताकि डेटा वास्तविक लगे (पिछले 3 दिनों को छोड़कर)
//         if (Math.random() < 0.1 && i < count - 3) {
//             results.push('--');
//         } else {
//             // दो अंकों की संख्या (00 से 99) उत्पन्न करना
//             const num = Math.floor(Math.random() * 100);
//             results.push(String(num).padStart(2, '0'));
//         }
//     }
//     return results;
// };



// // --- Helper Function: Generate Dates ---
// // आज से शुरू होकर पिछले 15 दिनों की तारीखें उत्पन्न करें
// const getDates = (count) => {
//     const dates = [];
//     for (let i = 0; i < count; i++) {
//         const d = new Date();
//         d.setDate(d.getDate() - i); 
//         // केवल तारीख का अंक (e.g., 10, 25)
//         const formattedDate = d.getDate(); 
//         dates.push(formattedDate);
//     }
//     return dates.reverse(); 
// };

// const dateHeaders = getDates(15);
// const LATEST_RESULT_INDEX = dateHeaders.length - 1; 

// // --- Market Data ---
// // LIVE/NEXT सेक्शन में अधिक डेटा दिखाने के लिए कुछ मार्केट्स को '--' पर सेट किया गया है।
// const marketData = [
//     // मैंने Shri Ganesh को यहाँ जोड़ा है, जैसा कि पहले किया था
//     { name: 'SHRI GANESH', results: generateRandomResults().map(r => r === '--' ? '00' : r), time: '04:30 PM' },
    
//     // --- Original Markets ---
//     { name: 'NEW DELHI DARBAR', results: [10, 16, 45, 88, 12, 54, 30, 99, 11, 78, 65, 33, 21, 56, '17'], time: '08:30 PM' },
//     // GHAZIABAD NIGHT को LIVE सेक्शन के लिए Pending रखा गया है
//     { name: 'GHAZIABAD NIGHT', results: [1, '--', 76, 23, 67, 34, 11, 89, 22, 56, 44, 77, 30, 90, '--'], time: '08:30 PM' }, 
//     { name: 'DAILY MIX', results: [6, 25, 10, 34, 56, 78, 90, 12, 34, 56, 78, 90, 11, 23, '45'], time: '08:15 PM' },
//     { name: 'WHITE GOLD', results: [4, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, '80'], time: '08:15 PM' },
//     { name: 'UP BAZAR', results: [45, 85, 32, 12, 43, 65, 87, 10, 29, 48, 67, 86, 54, 32, '11'], time: '08:15 PM' },
//     { name: 'PARIS BAZAR', results: [20, 64, 98, 76, 54, 32, 10, 55, 66, 77, 88, 99, 11, 22, '33'], time: '08:00 PM' },
//     { name: 'TODAY BAZAAR', results: [7, 10, 20, 30, 40, 50, 60, 70, 80, 90, 11, 22, 33, 44, '55'], time: '08:00 PM' },
//     { name: 'ROYAL DELHI', results: [26, '--', 13, 24, 35, 46, 57, 68, 79, 80, 91, 12, 23, 34, '45'], time: '08:00 PM' },
    
//     // --- New Markets ---
//     { name: 'RAM BAZAR', results: generateRandomResults(), time: '01:30 AM' },
//     // इन 5 मार्केट्स को NEXT सेक्शन में दिखाने के लिए Pending रखा गया है
//     { name: 'UTTAR PRADESH', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '01:40 AM' },
//     { name: 'BIKANER SUPER', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '02:20 AM' },
//     { name: 'DESAWAR', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '05:00 AM' },
//     { name: 'DISAWAR 2', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '05:25 AM' },
//     { name: 'NEELKANTH', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '07:20 PM' },
    
//     { name: 'STAR NIGHT', results: generateRandomResults(), time: '07:20 PM' },
//     { name: 'SHRI LAXMI', results: generateRandomResults(), time: '07:30 PM' },
//     { name: 'UTTAM NAGAR', results: generateRandomResults(), time: '07:30 PM' },
//     { name: 'DUBAI BAZAR', results: generateRandomResults(), time: '07:30 PM' },
//     { name: 'GURU MANGAL', results: generateRandomResults(), time: '01:30 PM' },
//     { name: 'BAGAD', results: generateRandomResults(), time: '01:30 PM' },
//     { name: 'SUPER KING', results: generateRandomResults(), time: '01:45 PM' },
//     { name: 'MATKA SONE KA', results: generateRandomResults(), time: '01:55 PM' },
//     { name: 'U.P. KING', results: generateRandomResults(), time: '02:00 PM' },
//     { name: 'RAJDHANI JAIPUR', results: generateRandomResults(), time: '02:00 PM' },
//     { name: 'AGRA BAZAR', results: generateRandomResults(), time: '02:00 PM' },
//     { name: 'BIHAR KING', results: generateRandomResults(), time: '02:30 PM' },
//     { name: 'JANTA CITY', results: generateRandomResults(), time: '02:00 PM' },
//     { name: 'SHREE GANGA NAGAR', results: generateRandomResults(), time: '02:10 PM' },
//     { name: 'DELHI DREAM', results: generateRandomResults(), time: '02:15 PM' },
//     { name: 'PLAY BAZAAR', results: generateRandomResults(), time: '02:15 PM' },
//     { name: 'SUPER TAJ', results: generateRandomResults(), time: '02:25 PM' },
//     { name: 'KALKA BAZAR', results: generateRandomResults(), time: '02:30 PM' },
//     { name: 'SAVERA', results: generateRandomResults(), time: '02:30 PM' },
//     { name: 'SUPER DELHI', results: generateRandomResults(), time: '02:30 PM' },
//     { name: 'DELHI CITY', results: generateRandomResults(), time: '02:30 PM' },
//     { name: 'BURJ KHALIFA - BK', results: generateRandomResults(), time: '02:35 PM' },
//     { name: 'MOHALI', results: generateRandomResults(), time: '03:00 PM' },
//     { name: 'DELHI STAR', results: generateRandomResults(), time: '07:45 PM' },
//     { name: 'DHAN KUBER', results: generateRandomResults(), time: '07:55 PM' },
//     { name: 'NEW SAHIBABAD', results: generateRandomResults(), time: '08:00 PM' },
//     { name: 'SAWARIYA SETH', results: generateRandomResults(), time: '08:00 PM' },
//     { name: 'GALI DISAWAR MIX', results: generateRandomResults(), time: '08:15 PM' },
// ];

// // Component to render a single row
// const navigate = useNavigate();

// const MarketRow = ({ market, marketIndex, sectionType, latestIndex }) => {
//     const isLive = sectionType === 'LIVE';
//     const isNext = sectionType === 'NEXT';
    
//     // Row background (subtle color)
//     const rowClasses = isLive ? 'bg-red-50 hover:bg-red-100' : isNext ? 'bg-yellow-50 hover:bg-yellow-100' : 'hover:bg-blue-50';

//     // Column background
//     const bgColor = isLive ? 'bg-red-100' : isNext ? 'bg-yellow-100' : 'bg-white';
    
//     // Check if the current market is the one designated as LIVE NOW
//     const isCurrentlyLiveRow = isLive && market.results[latestIndex] === '--';

//     return (
//         <tr key={marketIndex} className={`transition duration-150 ${rowClasses}`}>
            
//             {/* Market Name & Record Chart (Combined Column) */}
//             <td className={`px-2 py-2 text-sm font-medium text-gray-900 border-r border-gray-200 ${bgColor} max-w-[120px] truncate`}>
//                 <div className="flex flex-col">
//                     {/* Market Name */}
//                     <div className="font-extrabold text-base text-gray-800 leading-tight">
//                         {market.name}
//                     </div>
                    
//                     {/* Record Chart Link - New Line and Blue Text */}
//          <div
//   onClick={() => navigate(`/record/${market.name}`)}
//   className="text-sm text-blue-700 font-bold cursor-pointer hover:text-blue-900 transition-colors mt-1"
// >
//   Record Chart
// </div>


//                 </div>
                
//                 {/* LIVE NOW indicator for the specific market within the LIVE section */}
//                 {isCurrentlyLiveRow && (
//                     <div className="text-[10px] text-red-700 font-extrabold flex items-center mt-1">
//                         <div className="w-1.5 h-1.5 bg-red-700 rounded-full mr-1 animate-pulse"></div>
//                         RESULT PENDING
//                     </div>
//                 )}
//             </td>

//             {/* Draw Time (Separate Column) */}
//             <td className={`px-1 py-2 text-center text-xs text-gray-500 font-semibold border-r border-gray-200 ${bgColor} w-16`}>
//                 {market.time}
//             </td>

//             {/* Results - Allowed to shrink */}
//             {market.results.map((result, resultIndex) => (
//                 <td
//                     key={resultIndex}
//                     className={`px-1 py-2 text-center text-sm font-extrabold transition duration-100 ease-in-out w-8 ${
//                         resultIndex === latestIndex 
//                             ? 'bg-indigo-50 text-indigo-800' // Highlight last result column
//                             : 'text-gray-700'
//                     } border-r border-gray-100`}
//                 >
//                     {/* MODIFICATION: Display '❌❌' if result is '--' and it's the latest index */}
//                     {resultIndex === latestIndex && result === '--' 
//                         ? <span className="text-red-600">❌❌</span> 
//                         : result
//                     }
//                 </td>
//             ))}
//         </tr>
//     );
// };


// const FinalChart = () => {
    
//     // 1. सभी पेंडिंग मार्केट्स (जिनका परिणाम '--' है) को फ़िल्टर करें
//     const pendingMarkets = marketData.filter(market => market.results[LATEST_RESULT_INDEX] === '--');
    
//     // 2. पेंडिंग मार्केट्स को LIVE और NEXT में विभाजित करें
//     const liveMarkets = pendingMarkets.slice(0, 1); // पहला पेंडिंग मार्केट LIVE के लिए
//     const nextUpcomingMarkets = pendingMarkets.slice(1); // बाकी पेंडिंग मार्केट्स NEXT के लिए
    
//     // 3. सभी कम्पलीटेड मार्केट्स (जिनका परिणाम आ चुका है) को REST के लिए फ़िल्टर करें
//     // नोट: मैंने SHRI GANESH को marketData में सबसे ऊपर जोड़ा है, वह REST में दिखाई देगा।
//     const restMarkets = marketData.filter(market => market.results[LATEST_RESULT_INDEX] !== '--');

//     const totalColumns = dateHeaders.length + 2; // Market Name (1) + Time (1) + Dates (15)

//     // Component for full-width section header
//     const SectionHeaderRow = ({ title, bgColorClass }) => (
//         <tr className={bgColorClass}>
//             {/* Sticky/Fixed positioning removed from inner td */}
//             <td colSpan={totalColumns} className="py-2 text-center text-xl font-extrabold text-white">
//                 {title}
//             </td>
//         </tr>
//     );


//     return (
//         <div className="p-2 sm:p-4 bg-gray-50 font-sans min-h-screen"> 
//             {/* Header Section */}
//             <div className="mb-4 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
//                 <h1 className="text-2xl font-extrabold text-center">
//                     परिणाम चार्ट: पिछले {dateHeaders.length} दिन
//                 </h1>
//                 <p className="text-center text-sm mt-1 opacity-90">LIVE, NEXT, और REST मार्केट</p>
//             </div>

//             {/* Table Container - Removed overflow-x-auto */}
//             <div className="shadow-2xl rounded-xl border border-gray-200 overflow-x-hidden">
//                 <table className="w-full divide-y divide-gray-200 table-fixed">
//                     {/* Table Head - Dates */}
//                     <thead className="bg-gray-800 text-white top-0 z-20">
//                         <tr>
//                             {/* Market Name Header */}
//                             <th className="px-2 py-3 text-left text-xs font-semibold tracking-wider w-32 border-r border-gray-700 rounded-tl-xl bg-gray-800">
//                                 मार्केट नाम / Record
//                             </th>
//                             {/* Time Header */}
//                             <th className="px-1 py-3 text-center text-xs font-semibold tracking-wider w-16 border-r border-gray-700 bg-gray-800">
//                                 समय
//                             </th>
//                             {/* Date Headers - Allowed to shrink */}
//                             {dateHeaders.map((date, index) => (
//                                 <th
//                                     key={index}
//                                     className={`px-1 py-3 text-center text-[10px] font-semibold tracking-wider w-8 ${index === LATEST_RESULT_INDEX ? 'bg-indigo-600' : 'bg-gray-700'}`}
//                                 >
//                                     {date}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>

//                     <tbody className="bg-white divide-y divide-gray-100">
                        
//                         {/* -------------------- LIVE Markets -------------------- */}
//                         {liveMarkets.length > 0 && <SectionHeaderRow title="LIVE NOW" bgColorClass="bg-red-700" />}
//                         {liveMarkets.map((market, marketIndex) => (
//                             <MarketRow 
//                                 key={market.name}
//                                 market={market} 
//                                 marketIndex={marketIndex} 
//                                 sectionType={'LIVE'}
//                                 latestIndex={LATEST_RESULT_INDEX}
//                             />
//                         ))}

//                         {/* -------------------- NEXT Markets -------------------- */}
//                         {nextUpcomingMarkets.length > 0 && <SectionHeaderRow title="NEXT UPCOMING" bgColorClass="bg-orange-600" />}
//                         {nextUpcomingMarkets.map((market, marketIndex) => (
//                             <MarketRow 
//                                 key={market.name}
//                                 market={market} 
//                                 marketIndex={marketIndex} 
//                                 sectionType={'NEXT'}
//                                 latestIndex={LATEST_RESULT_INDEX}
//                             />
//                         ))}
                        
//                         {/* -------------------- REST Markets -------------------- */}
//                         {restMarkets.length > 0 && <SectionHeaderRow title="REST OF RESULTS" bgColorClass="bg-gray-700" />}
//                         {restMarkets.map((market, marketIndex) => (
//                             <MarketRow 
//                                 key={market.name}
//                                 market={market} 
//                                 marketIndex={marketIndex} 
//                                 sectionType={'REST'}
//                                 latestIndex={LATEST_RESULT_INDEX}
//                             />
//                         ))}

//                     </tbody>
//                 </table>
//             </div>
            
//             {/* Footer / Info */}
//             <div className="mt-6 text-xs text-gray-400 text-center">
              
//             </div>
//         </div>
//     );
// };
// export default FinalChart;


// -----------------------------------------------------------------
// A. हेल्पर फ़ंक्शन और मॉक डेटा (सभी कंपोनेंट्स के लिए साझा)
// -----------------------------------------------------------------

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import React from 'react';

// --- Helper Function: Generate Random 15-day Data ---
// 15 दिनों के लिए 00 से 99 तक यादृच्छिक परिणाम उत्पन्न करता है
const generateRandomResults = (count = 15) => {
    const results = [];
    for (let i = 0; i < count; i++) {
        // कुछ स्थानों पर '--' जोड़ना ताकि डेटा वास्तविक लगे (पिछले 3 दिनों को छोड़कर)
        if (Math.random() < 0.1 && i < count - 3) {
            results.push('--');
        } else {
            // दो अंकों की संख्या (00 से 99) उत्पन्न करना
            const num = Math.floor(Math.random() * 100);
            results.push(String(num).padStart(2, '0'));
        }
    }
    return results;
};


// --- Helper Function: Generate Dates ---
// आज से शुरू होकर पिछले 15 दिनों की तारीखें उत्पन्न करें
const getDates = (count) => {
    const dates = [];
    for (let i = 0; i < count; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i); 
        // केवल तारीख का अंक (e.g., 10, 25)
        const formattedDate = d.getDate(); 
        dates.push(formattedDate);
    }
    return dates.reverse(); 
};

const dateHeaders = getDates(15);
const LATEST_RESULT_INDEX = dateHeaders.length - 1; 

// --- Market Data ---
// LIVE/NEXT सेक्शन में अधिक डेटा दिखाने के लिए कुछ मार्केट्स को '--' पर सेट किया गया है।
const marketData = [
    // मैंने Shri Ganesh को यहाँ जोड़ा है, जैसा कि पहले किया था
    { name: 'SHRI GANESH', results: generateRandomResults().map(r => r === '--' ? '00' : r), time: '04:30 PM' },
    
    // --- Original Markets ---
    { name: 'NEW DELHI DARBAR', results: [10, 16, 45, 88, 12, 54, 30, 99, 11, 78, 65, 33, 21, 56, '17'], time: '08:30 PM' },
    // GHAZIABAD NIGHT को LIVE सेक्शन के लिए Pending रखा गया है
    { name: 'GHAZIABAD NIGHT', results: [1, '--', 76, 23, 67, 34, 11, 89, 22, 56, 44, 77, 30, 90, '--'], time: '08:30 PM' }, 
    { name: 'DAILY MIX', results: [6, 25, 10, 34, 56, 78, 90, 12, 34, 56, 78, 90, 11, 23, '45'], time: '08:15 PM' },
    { name: 'WHITE GOLD', results: [4, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, '80'], time: '08:15 PM' },
    { name: 'UP BAZAR', results: [45, 85, 32, 12, 43, 65, 87, 10, 29, 48, 67, 86, 54, 32, '11'], time: '08:15 PM' },
    { name: 'PARIS BAZAR', results: [20, 64, 98, 76, 54, 32, 10, 55, 66, 77, 88, 99, 11, 22, '33'], time: '08:00 PM' },
    { name: 'TODAY BAZAAR', results: [7, 10, 20, 30, 40, 50, 60, 70, 80, 90, 11, 22, 33, 44, '55'], time: '08:00 PM' },
    { name: 'ROYAL DELHI', results: [26, '--', 13, 24, 35, 46, 57, 68, 79, 80, 91, 12, 23, 34, '45'], time: '08:00 PM' },
    
    // --- New Markets ---
    { name: 'RAM BAZAR', results: generateRandomResults(), time: '01:30 AM' },
    // इन 5 मार्केट्स को NEXT सेक्शन में दिखाने के लिए Pending रखा गया है
    { name: 'UTTAR PRADESH', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '01:40 AM' },
    { name: 'BIKANER SUPER', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '02:20 AM' },
    { name: 'DESAWAR', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '05:00 AM' },
    { name: 'DISAWAR 2', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '05:25 AM' },
    { name: 'NEELKANTH', results: generateRandomResults().map((r, i) => i === LATEST_RESULT_INDEX ? '--' : r), time: '07:20 PM' },
    
    { name: 'STAR NIGHT', results: generateRandomResults(), time: '07:20 PM' },
    { name: 'SHRI LAXMI', results: generateRandomResults(), time: '07:30 PM' },
    { name: 'UTTAM NAGAR', results: generateRandomResults(), time: '07:30 PM' },
    { name: 'DUBAI BAZAR', results: generateRandomResults(), time: '07:30 PM' },
    { name: 'GURU MANGAL', results: generateRandomResults(), time: '01:30 PM' },
    { name: 'BAGAD', results: generateRandomResults(), time: '01:30 PM' },
    { name: 'SUPER KING', results: generateRandomResults(), time: '01:45 PM' },
    { name: 'MATKA SONE KA', results: generateRandomResults(), time: '01:55 PM' },
    { name: 'U.P. KING', results: generateRandomResults(), time: '02:00 PM' },
    { name: 'RAJDHANI JAIPUR', results: generateRandomResults(), time: '02:00 PM' },
    { name: 'AGRA BAZAR', results: generateRandomResults(), time: '02:00 PM' },
    { name: 'BIHAR KING', results: generateRandomResults(), time: '02:30 PM' },
    { name: 'JANTA CITY', results: generateRandomResults(), time: '02:00 PM' },
    { name: 'SHREE GANGA NAGAR', results: generateRandomResults(), time: '02:10 PM' },
    { name: 'DELHI DREAM', results: generateRandomResults(), time: '02:15 PM' },
    { name: 'PLAY BAZAAR', results: generateRandomResults(), time: '02:15 PM' },
    { name: 'SUPER TAJ', results: generateRandomResults(), time: '02:25 PM' },
    { name: 'KALKA BAZAR', results: generateRandomResults(), time: '02:30 PM' },
    { name: 'SAVERA', results: generateRandomResults(), time: '02:30 PM' },
    { name: 'SUPER DELHI', results: generateRandomResults(), time: '02:30 PM' },
    { name: 'DELHI CITY', results: generateRandomResults(), time: '02:30 PM' },
    { name: 'BURJ KHALIFA - BK', results: generateRandomResults(), time: '02:35 PM' },
    { name: 'MOHALI', results: generateRandomResults(), time: '03:00 PM' },
    { name: 'DELHI STAR', results: generateRandomResults(), time: '07:45 PM' },
    { name: 'DHAN KUBER', results: generateRandomResults(), time: '07:55 PM' },
    { name: 'NEW SAHIBABAD', results: generateRandomResults(), time: '08:00 PM' },
    { name: 'SAWARIYA SETH', results: generateRandomResults(), time: '08:00 PM' },
    { name: 'GALI DISAWAR MIX', results: generateRandomResults(), time: '08:15 PM' },
];

// Component to render a single row
// const navigate = useNavigate(); // ❌ यह गलत था और हटा दिया गया है

const MarketRow = ({ market, marketIndex, sectionType, latestIndex }) => {
    // ✅ हुक को कंपोनेंट के अंदर कॉल किया गया है
    const navigate = useNavigate();
    
    const isLive = sectionType === 'LIVE';
    const isNext = sectionType === 'NEXT';
    
    // Row background (subtle color)
    const rowClasses = isLive ? 'bg-red-50 hover:bg-red-100' : isNext ? 'bg-yellow-50 hover:bg-yellow-100' : 'hover:bg-blue-50';

    // Column background
    const bgColor = isLive ? 'bg-red-100' : isNext ? 'bg-yellow-100' : 'bg-white';
    
    // Check if the current market is the one designated as LIVE NOW
    const isCurrentlyLiveRow = isLive && market.results[latestIndex] === '--';

    return (
        <tr key={marketIndex} className={`transition duration-150 ${rowClasses}`}>
            
            {/* Market Name & Record Chart (Combined Column) */}
            <td className={`px-2 py-2 text-sm font-medium text-gray-900 border-r border-gray-200 ${bgColor} max-w-[120px] truncate`}>
                <div className="flex flex-col">
                    {/* Market Name */}
                    <div className="font-extrabold text-base text-gray-800 leading-tight">
                        {market.name}
                    </div>
                    
                    {/* Record Chart Link - New Line and Blue Text */}
         <div
  onClick={() => navigate(`/record/${market.name}`)}
  className="text-sm text-blue-700 font-bold cursor-pointer hover:text-blue-900 transition-colors mt-1"
>
  Record Chart
</div>


                </div>
                
                {/* LIVE NOW indicator for the specific market within the LIVE section */}
                {isCurrentlyLiveRow && (
                    <div className="text-[10px] text-red-700 font-extrabold flex items-center mt-1">
                        <div className="w-1.5 h-1.5 bg-red-700 rounded-full mr-1 animate-pulse"></div>
                        RESULT PENDING
                    </div>
                )}
            </td>

            {/* Draw Time (Separate Column) */}
            <td className={`px-1 py-2 text-center text-xs text-gray-500 font-semibold border-r border-gray-200 ${bgColor} w-16`}>
                {market.time}
            </td>

            {/* Results - Allowed to shrink */}
            {market.results.map((result, resultIndex) => (
                <td
                    key={resultIndex}
                    className={`px-1 py-2 text-center text-sm font-extrabold transition duration-100 ease-in-out w-8 ${
                        resultIndex === latestIndex 
                            ? 'bg-indigo-50 text-indigo-800' // Highlight last result column
                            : 'text-gray-700'
                    } border-r border-gray-100`}
                >
                    {/* MODIFICATION: Display '❌❌' if result is '--' and it's the latest index */}
                    {resultIndex === latestIndex && result === '--' 
                        ? <span className="text-red-600">❌❌</span> 
                        : result
                    }
                </td>
            ))}
        </tr>
    );
};


const FinalChart = () => {
    
    // 1. सभी पेंडिंग मार्केट्स (जिनका परिणाम '--' है) को फ़िल्टर करें
    const pendingMarkets = marketData.filter(market => market.results[LATEST_RESULT_INDEX] === '--');
    
    // 2. पेंडिंग मार्केट्स को LIVE और NEXT में विभाजित करें
    const liveMarkets = pendingMarkets.slice(0, 1); // पहला पेंडिंग मार्केट LIVE के लिए
    const nextUpcomingMarkets = pendingMarkets.slice(1); // बाकी पेंडिंग मार्केट्स NEXT के लिए
    
    // 3. सभी कम्पलीटेड मार्केट्स (जिनका परिणाम आ चुका है) को REST के लिए फ़िल्टर करें
    // नोट: मैंने SHRI GANESH को marketData में सबसे ऊपर जोड़ा है, वह REST में दिखाई देगा।
    const restMarkets = marketData.filter(market => market.results[LATEST_RESULT_INDEX] !== '--');

    const totalColumns = dateHeaders.length + 2; // Market Name (1) + Time (1) + Dates (15)

    // Component for full-width section header
    const SectionHeaderRow = ({ title, bgColorClass }) => (
        <tr className={bgColorClass}>
            {/* Sticky/Fixed positioning removed from inner td */}
            <td colSpan={totalColumns} className="py-2 text-center text-xl font-extrabold text-white">
                {title}
            </td>
        </tr>
    );


    return (
        <div className="p-2 sm:p-4 bg-gray-50 font-sans min-h-screen"> 
            {/* Header Section */}
            <div className="mb-4 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
                <h1 className="text-2xl font-extrabold text-center">
                    परिणाम चार्ट: पिछले {dateHeaders.length} दिन
                </h1>
                <p className="text-center text-sm mt-1 opacity-90">LIVE, NEXT, और REST मार्केट</p>
            </div>

            {/* Table Container - Removed overflow-x-auto */}
            <div className="shadow-2xl rounded-xl border border-gray-200 overflow-x-hidden max-height-[900px]">
                <table className="w-full divide-y divide-gray-200 table-fixed">
                    {/* Table Head - Dates */}
                    <thead className="bg-gray-800 text-white top-0 z-20">
                        <tr>
                            {/* Market Name Header */}
                            <th className="px-2 py-3 text-left text-xs font-semibold tracking-wider w-32 border-r border-gray-700 rounded-tl-xl bg-gray-800">
                                मार्केट नाम / Record
                            </th>
                            {/* Time Header */}
                            <th className="px-1 py-3 text-center text-xs font-semibold tracking-wider w-16 border-r border-gray-700 bg-gray-800">
                                समय
                            </th>
                            {/* Date Headers - Allowed to shrink */}
                            {dateHeaders.map((date, index) => (
                                <th
                                    key={index}
                                    className={`px-1 py-3 text-center text-[10px] font-semibold tracking-wider w-8 ${index === LATEST_RESULT_INDEX ? 'bg-indigo-600' : 'bg-gray-700'}`}
                                >
                                    {date}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-100">
                        
                        {/* -------------------- LIVE Markets -------------------- */}
                        {liveMarkets.length > 0 && <SectionHeaderRow title="LIVE NOW" bgColorClass="bg-red-700" />}
                        {liveMarkets.map((market, marketIndex) => (
                            <MarketRow 
                                key={market.name}
                                market={market} 
                                marketIndex={marketIndex} 
                                sectionType={'LIVE'}
                                latestIndex={LATEST_RESULT_INDEX}
                            />
                        ))}

                        {/* -------------------- NEXT Markets -------------------- */}
                        {nextUpcomingMarkets.length > 0 && <SectionHeaderRow title="NEXT UPCOMING" bgColorClass="bg-orange-600" />}
                        {nextUpcomingMarkets.map((market, marketIndex) => (
                            <MarketRow 
                                key={market.name}
                                market={market} 
                                marketIndex={marketIndex} 
                                sectionType={'NEXT'}
                                latestIndex={LATEST_RESULT_INDEX}
                            />
                        ))}
                        
                        {/* -------------------- REST Markets -------------------- */}
                        {restMarkets.length > 0 && <SectionHeaderRow title="REST OF RESULTS" bgColorClass="bg-gray-700" />}
                        {restMarkets.map((market, marketIndex) => (
                            <MarketRow 
                                key={market.name}
                                market={market} 
                                marketIndex={marketIndex} 
                                sectionType={'REST'}
                                latestIndex={LATEST_RESULT_INDEX}
                            />
                        ))}

                    </tbody>
                </table>
            </div>
            
            {/* Footer / Info */}
            <div className="mt-6 text-xs text-gray-400 text-center">
              
            </div>
        </div>
    );
};
export default FinalChart;