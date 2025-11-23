// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import FinalChart from "./FinalChart.jsx";
// import Hero from "./Hero.jsx";
// import Footer from "./Footer.jsx";

// // ---------------------------
// // SAME SHARED HELPERS
// // ---------------------------

// const MOCK_CURRENT_DATE = new Date(2025, 10, 20);

// const getDeterministicResult = (gameName, year, month, day, offset = 0) => {
//   const gameSeed =
//     gameName.charCodeAt(0) + gameName.charCodeAt(gameName.length - 1);
//   const seed = year * 10000 + (month + 1) * 100 + day + gameSeed + offset;
//   const num = Math.floor(Math.abs(Math.sin(seed)) * 10000);
//   return String(num % 100).padStart(2, "0");
// };

// const getDynamicRecordChartData = (mainGameName, currentDate) => {
//   const baseRegionalDrawData = [
//     { name: "DESAWAR", time: "05:00 AM", resultWed: "75", resultThu: "60" },
//     { name: "FARIDABAD", time: "06:00 PM", resultWed: "46", resultThu: "41" },
//     {
//       name: "NEW SAHIBABAD",
//       time: "08:00 PM",
//       resultWed: "77",
//       resultThu: "21",
//     },
//     { name: "GHAZIABAD", time: "09:25 PM", resultWed: "20", resultThu: "XX" },
//     { name: "GALI", time: "11:25 PM", resultWed: "14", resultThu: "XX" },
//   ];

//   const dynamicRegionalDrawData = baseRegionalDrawData.map((item) => {
//     if (item.name === "NEW SAHIBABAD") {
//       return { ...item, name: mainGameName };
//     }
//     return item;
//   });

//   const dynamicChartData = [];
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const today = MOCK_CURRENT_DATE;
//   const isCurrentMonth =
//     year === today.getFullYear() && month === today.getMonth();
//   const todayDay = today.getDate();

//   for (let day = 1; day <= daysInMonth; day++) {
//     const row = {
//       date: String(day).padStart(2, "0"),
//       DSWR: getDeterministicResult("DSWR", year, month, day, 10),
//       FRBD: getDeterministicResult("FRBD", year, month, day, 20),
//       [mainGameName]: getDeterministicResult(mainGameName, year, month, day, 30),
//       GZBD: getDeterministicResult("GZBD", year, month, day, 40),
//       GALI: getDeterministicResult("GALI", year, month, day, 50),
//     };

//     if (isCurrentMonth && day > todayDay) {
//       row.DSWR = "XX";
//       row.FRBD = "XX";
//       row[mainGameName] = "XX";
//       row.GZBD = "XX";
//       row.GALI = "XX";
//     }

//     dynamicChartData.push(row);
//   }

//   return { dynamicRegionalDrawData, dynamicChartData };
// };


// // ---------------------------
// // MAIN PAGE (ROUTER READY)
// // ---------------------------
// export default function GameRecordPage() {
  
//   const { gameName } = useParams();        // ← URL से ले रहे हैं
//   const navigate = useNavigate();

//   const [currentDate, setCurrentDate] = useState(MOCK_CURRENT_DATE);

//   const [regionalDrawData, setRegionalDrawData] = useState([]);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const { dynamicRegionalDrawData, dynamicChartData } =
//       getDynamicRecordChartData(gameName, currentDate);

//     setRegionalDrawData(dynamicRegionalDrawData);
//     setChartData(dynamicChartData);
//   }, [gameName, currentDate]);

//   const goPrevMonth = () => {
//     const d = new Date(currentDate);
//     d.setMonth(d.getMonth() - 1);
//     setCurrentDate(d);
//   };

//   const goNextMonth = () => {
//     const d = new Date(currentDate);
//     d.setMonth(d.getMonth() + 1);
//     setCurrentDate(d);
//   };

//   const monthNames = [
//     "January","February","March","April","May","June",
//     "July","August","September","October","November","December",
//   ];

//   return (
//     <>
//       <Hero />
//     <div className="p-4 bg-gray-50 min-h-screen font-sans">
      
//       {/* HEADER */}
//       <div className="bg-blue-700 text-white p-4 rounded-xl shadow-lg">
//         <div className="flex justify-between items-center">
//           <h1 className="text-xl font-extrabold">{gameName} RECORD CHART</h1>

//           <button
//             onClick={() => navigate("/")} 
//             className="bg-white text-blue-700 px-3 py-1 rounded-lg shadow font-semibold"
//           >
//             ← Back
//           </button>
//         </div>
//         <p className="text-white text-sm opacity-90 mt-1">
//           Month-wise record chart with deterministic results
//         </p>
//       </div>

//       {/* MONTH SELECTOR */}
//       <div className="mt-4 flex justify-center items-center gap-4">
//         <button onClick={goPrevMonth} className="bg-gray-200 px-3 py-1 rounded-lg">
//           ◀ Prev
//         </button>

//         <div className="text-lg font-bold">
//           {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//         </div>

//         <button onClick={goNextMonth} className="bg-gray-200 px-3 py-1 rounded-lg">
//           Next ▶
//         </button>
//       </div>

//       {/* 5-ROW TABLE */}
//       <div className="mt-6 bg-white shadow-lg rounded-xl p-2 overflow-x-auto">
//         <table className="w-full text-center">
//           <thead className="bg-gray-800 text-white text-xs">
//             <tr>
//               <th>Market</th>
//               <th>Time</th>
//               <th>Wed</th>
//               <th>Thu</th>
//             </tr>
//           </thead>
//           <tbody>
//             {regionalDrawData.map((row, i) => (
//               <tr key={i} className="border-b text-sm">
//                 <td className="font-bold py-2">{row.name}</td>
//                 <td>{row.time}</td>
//                 <td className="font-extrabold">{row.resultWed}</td>
//                 <td className="font-extrabold">{row.resultThu}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* BIG MONTHLY CHART */}
//       <div className="mt-6 bg-white shadow-xl rounded-xl overflow-x-auto">
//         <table className="w-full text-center text-sm">
//           <thead className="bg-blue-700 text-white">
//             <tr>
//               <th>Date</th>
//               <th>DSWR</th>
//               <th>FRBD</th>
//               <th>{gameName}</th>
//               <th>GZBD</th>
//               <th>GALI</th>
//             </tr>
//           </thead>

//           <tbody>
//             {chartData.map((row, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-2 font-bold">{row.date}</td>
//                 <td className="font-extrabold">{row.DSWR}</td>
//                 <td className="font-extrabold">{row.FRBD}</td>
//                 <td className="font-extrabold text-blue-700">{row[gameName]}</td>
//                 <td className="font-extrabold">{row.GZBD}</td>
//                 <td className="font-extrabold">{row.GALI}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <p className="text-center text-xs text-gray-400 mt-4">
//         (XX means future result not generated)
//       </p>
//       <FinalChart />
//       <Footer />
//     </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FinalChart from "./FinalChart.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import Footer2 from "./Footer2.jsx";

// ---------------------------
// SHARED HELPERS (MODIFIED)
// ---------------------------

// वास्तविक आज की तारीख और समय
const TODAY_REAL = new Date(); 

const getDeterministicResult = (gameName, year, month, day, offset = 0) => {
  const gameSeed =
    gameName.charCodeAt(0) + gameName.charCodeAt(gameName.length - 1);
  const seed = year * 10000 + (month + 1) * 100 + day + gameSeed + offset;
  const num = Math.floor(Math.abs(Math.sin(seed)) * 10000);
  return String(num % 100).padStart(2, "0");
};

const getDynamicRecordChartData = (mainGameName, currentDate) => {
  const baseRegionalDrawData = [
    { name: "DESAWAR", time: "05:00 AM", resultWed: "75", resultThu: "60" },
    { name: "FARIDABAD", time: "06:00 PM", resultWed: "46", resultThu: "41" },
    {
      name: "NEW SAHIBABAD",
      time: "08:00 PM",
      resultWed: "77",
      resultThu: "21",
    },
    { name: "GHAZIABAD", time: "09:25 PM", resultWed: "20", resultThu: "XX" },
    { name: "GALI", time: "11:25 PM", resultWed: "14", resultThu: "XX" },
  ];

  const dynamicRegionalDrawData = baseRegionalDrawData.map((item) => {
    if (item.name === "NEW SAHIBABAD") {
      return { ...item, name: mainGameName };
    }
    return item;
  });

  const dynamicChartData = [];
  const chartYear = currentDate.getFullYear();
  const chartMonth = currentDate.getMonth();
  const daysInMonth = new Date(chartYear, chartMonth + 1, 0).getDate();

  const today = TODAY_REAL; 
  
  // 🟢 महत्वपूर्ण: पूरे चार्ट की तुलना आज की तारीख से करें 🟢
  // तुलना के लिए एक 'चार्ट डेट' ऑब्जेक्ट बनाएं
  const chartDateCompare = new Date(chartYear, chartMonth, 1);
  const todayDateCompare = new Date(today.getFullYear(), today.getMonth(), 1);

  // यदि प्रदर्शित किया जाने वाला महीना (chartDateCompare) आज के महीने (todayDateCompare) से आगे है,
  // तो पूरे महीने में XX होगा।
  const isFutureMonth = chartDateCompare > todayDateCompare;
  // यदि प्रदर्शित किया जाने वाला महीना आज का महीना है।
  const isCurrentMonth = chartYear === today.getFullYear() && chartMonth === today.getMonth();

  const todayDay = today.getDate(); // 21 (for example)

  for (let day = 1; day <= daysInMonth; day++) {
    const row = {
      date: String(day).padStart(2, "0"),
      DSWR: getDeterministicResult("DSWR", chartYear, chartMonth, day, 10),
      FRBD: getDeterministicResult("FRBD", chartYear, chartMonth, day, 20),
      [mainGameName]: getDeterministicResult(mainGameName, chartYear, chartMonth, day, 30),
      GZBD: getDeterministicResult("GZBD", chartYear, chartMonth, day, 40),
      GALI: getDeterministicResult("GALI", chartYear, chartMonth, day, 50),
    };

    /**
     * 🟢 XX Logic: XX लगाने के लिए दो स्थितियाँ हैं:
     * 1. यदि यह आज के महीने से आगे का कोई महीना है (isFutureMonth).
     * 2. यदि यह वर्तमान महीना है और दिन आज की तारीख से बड़ा है (isCurrentMonth && day > todayDay).
     */
    if (isFutureMonth || (isCurrentMonth && day > todayDay)) {
      row.DSWR = "XX";
      row.FRBD = "XX";
      row[mainGameName] = "XX";
      row.GZBD = "XX";
      row.GALI = "XX";
    }

    dynamicChartData.push(row);
  }

  return { dynamicRegionalDrawData, dynamicChartData };
};


// ---------------------------
// MAIN PAGE (ROUTER READY)
// ---------------------------
export default function GameRecordPage() {
  
  const { gameName } = useParams();      
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(TODAY_REAL);

  const [regionalDrawData, setRegionalDrawData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const { dynamicRegionalDrawData, dynamicChartData } =
      getDynamicRecordChartData(gameName, currentDate);

    setRegionalDrawData(dynamicRegionalDrawData);
    setChartData(dynamicChartData);
  }, [gameName, currentDate]);

  const goPrevMonth = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() - 1);
    setCurrentDate(d);
  };

  const goNextMonth = () => {
    const d = new Date(currentDate);
    d.setMonth(d.getMonth() + 1);
    setCurrentDate(d);
  };

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  
  // आज की तारीख का उपयोग करके यह निर्धारित करना कि क्या 'Next' बटन को अक्षम करना चाहिए
  const isCurrentMonth = 
    currentDate.getFullYear() === TODAY_REAL.getFullYear() && 
    currentDate.getMonth() === TODAY_REAL.getMonth();


  return (
    <>
      <Hero />
    <div className="p-4 bg-gray-50 min-h-screen font-sans">
      
      {/* HEADER */}
      <div className="bg-blue-700 text-white p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-extrabold">{gameName} RECORD CHART</h1>

          <button
            onClick={() => navigate("/")} 
            className="bg-white text-blue-700 px-3 py-1 rounded-lg shadow font-semibold"
          >
            ← Back
          </button>
        </div>
        <p className="text-white text-sm opacity-90 mt-1">
          Month-wise record chart with deterministic results
        </p>
      </div>

      {/* MONTH SELECTOR */}
      <div className="mt-4 flex justify-center items-center gap-4">
        <button onClick={goPrevMonth} className="bg-gray-200 px-3 py-1 rounded-lg">
          ◀ Prev
        </button>

        <div className="text-lg font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>

        <button 
          onClick={goNextMonth} 
          disabled={isCurrentMonth} // वर्तमान महीने के बाद 'Next' बटन अक्षम करें
          className={`px-3 py-1 rounded-lg font-bold ${isCurrentMonth ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-gray-200'}`}
        >
          Next ▶
        </button>
      </div>

      {/* 5-ROW TABLE (Regional Draw Times) */}
      <div className="mt-6 bg-white shadow-lg rounded-xl p-2 overflow-x-auto">
        <table className="w-full text-center">
          <thead className="bg-gray-800 text-white text-xs">
            <tr>
              <th>Market</th>
              <th>Time</th>
              <th>Wed</th>
              <th>Thu</th>
            </tr>
          </thead>
          <tbody>
            {regionalDrawData.map((row, i) => (
              <tr key={i} className="border-b text-sm">
                <td className="font-bold py-2">{row.name}</td>
                <td>{row.time}</td>
                <td className="font-extrabold">{row.resultWed}</td>
                <td className="font-extrabold">{row.resultThu}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BIG MONTHLY CHART */}
      <div className="mt-6 bg-white shadow-xl rounded-xl overflow-x-auto">
        <table className="w-full text-center text-sm">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th>Date</th>
              <th>DSWR</th>
              <th>FRBD</th>
              <th>{gameName}</th> 
              <th>GZBD</th>
              <th>GALI</th>
            </tr>
          </thead>

          <tbody>
            {chartData.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 font-bold">{row.date}</td>
                <td className="font-extrabold">{row.DSWR}</td>
                <td className="font-extrabold">{row.FRBD}</td>
                <td className="font-extrabold text-blue-700">{row[gameName]}</td> 
                <td className="font-extrabold">{row.GZBD}</td>
                <td className="font-extrabold">{row.GALI}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        (XX means future result not generated)
      </p>
      <FinalChart />
      <Footer2/>
    </div>
    </>
  );
}