// import React from "react";

// export default function Sample() {
//   const data = [
//     { title: "MUMBAI STAR", time: "09:10am", result: "75", tag: "SATTA KING" },
//     { title: "KASHMIR", time: "08:30am", result: "54", tag: "SATTAKING" },
//     { title: "KANPUR NIGHT", time: "02:10pm", result: "86", tag: "SATTA-KING" },
//     { title: "NAYA SAVERA", time: "12:30am", result: "34", tag: "SATTA BLACK" },
//     { title: "GALI", time: "11:10pm", result: "13", tag: "BLACK SATTA" },
//     { title: "MADHYA-P", time: "10:30pm", result: "98", tag: "SATTA GAME" },
//     { title: "HERO-01", time: "10:10pm", result: "76", tag: "SATTA" },
//     { title: "DELHI MARKET", time: "09:30pm", result: "53", tag: "SATTA MATKA" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F4EEC7] font-inter">

//       {/* Top Header */}
//       <div className="bg-[#8B2E18] text-white text-center py-3 font-bold text-lg shadow-md">
//         :: Sample Result Online ::
//       </div>

//       {/* Main Result Section */}
//       <div className="bg-[#002D9F] text-center text-white py-4 shadow-xl">
//         <h1 className="text-2xl font-bold tracking-wide">MAIN RESULT</h1>
//         <p className="mt-1 text-yellow-300 font-semibold">(Time 05:10am)</p>
//         <p className="mt-2 text-white text-xl font-bold">
//           {`{ 55 }`} <span className="text-red-400">NEW</span> [ ]
//         </p>
//       </div>

//       {/* Grid Data Rendering */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 py-6 px-4">
//         {data.map((item, index) => (
//           <div key={index} className="text-center p-3 border-b border-gray-300 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 mx-2">
//             <h2 className="text-green-700 font-extrabold text-xl">{item.title}</h2>
//             <p className="text-gray-700 text-sm">(Time {item.time})</p>
//             <p className="text-black mt-1 text-lg font-bold">
//               {`{ ${item.result} } `}
//               <span className="text-red-600">NEW</span> [ ]
//             </p>
//             <p className="text-black font-semibold mt-1">{item.tag}</p>
//           </div>
//         ))}
//       </div>

//       {/* Fixed Footer Icon
//       <div className="fixed bottom-6 right-6 z-10">
//         <div className="w-16 h-16 bg-blue-500 rounded-full shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-105 transition duration-300">
//           <span className="text-white text-3xl">✈</span>
//         </div>
//       </div> */}

//     </div>
//   );
// }
// import React from "react";

// export default function Sample() {
//   const data = [
//     { title: "FARIDABAD", time: "09:10am", result: "75", tag: "SATTA KING 786" },
//     { title: "SHREE GANESH", time: "08:30am", result: "54", tag: "SATTAKING 786" },
//     { title: "GHAZIABAD", time: "02:10pm", result: "86", tag: "SATTA-KING 786" },
//     { title: "GALI", time: "12:30am", result: "34", tag: "SATTA-KING 786" },
//     { title: "GALI2", time: "11:10pm", result: "13", tag: "SATTA-KING 786" },
//     { title: "DISAWAR", time: "10:30pm", result: "98", tag: "SATTA-KING 786" },
//     { title: "DAY DELHI", time: "10:10pm", result: "76", tag: "SATTA-KING 786" },
//     { title: "KURUKSHETRA", time: "09:30pm", result: "53", tag: "SATTA-KING 786" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F4EEC7]">

//       {/* ---- MULTI COLOR BLINK TEXT (NO SHADOW) ---- */}
//       <style>
//         {`
//           @keyframes textBlink {
//             0%   { color: #ff0000; }
//             25%  { color: #ffea00; }
//             50%  { color: #00ff11; }
//             75%  { color: #00c3ff; }
//             100% { color: #ff00ea; }
//           }

//           .text-blink {
//             animation: textBlink 2s infinite linear;  /* Slow Smooth Blink */
//             font-weight: 700;
//           }
//         `}
//       </style>

//       {/* ---- HEADER ---- */}
//       <div className="bg-[#8B2E18] text-white text-center py-3 font-bold text-lg">
//         :: Sample Result Online ::
//       </div>

//       {/* ---- MAIN RESULT ---- */}
//       <div className="bg-[#002D9F] text-center text-white py-1">
//         <h1 className="text-2xl font-bold tracking-wide">MAIN RESULT</h1>
//         <p className="mt-1 text-yellow-300 font-semibold">(Time 05:10am)</p>

//         <p className="mt-2 text-white text-xl font-bold">
//           {`{ 55 } `}
//           <span className="text-blink">NEW</span> [ ]
//         </p>
//       </div>

//       {/* ---- RESULTS LIST ---- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 py-6 px-4">
//         {data.map((item, index) => (
//           <div key={index} className="text-center p-3 border-b border-gray-300">
            
//             <h2 className="text-green-700 font-bold text-xl">{item.title}</h2>
//             <p className="text-gray-700 text-sm">(Time {item.time})</p>

//             <p className="text-black mt-1 text-lg font-bold">
//               {`{ ${item.result} } `}
//               <span className="text-blink">NEW</span> [ ]
//             </p>

//             <p className="text-black font-semibold mt-1">{item.tag}</p>
//           </div>
//         ))}
//       </div>

//       <div className="fixed bottom-6 right-6 z-10">
//   <a
//     href="https://wa.me/7068892978" 
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <div className="w-16 h-16 bg-green-500 rounded-full shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-105 transition duration-300">
//       {/* WhatsApp Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 32 32"
//         className="w-9 h-9 fill-white"
//       >
//         <path d="M16.001 3.2c-7.045 0-12.8 5.754-12.8 12.8 0 2.259.589 4.462 1.708 6.4l-1.792 6.4 6.579-1.728c1.855.988 3.94 1.509 6.101 1.509h.004c7.045 0 12.8-5.755 12.8-12.8S23.046 3.2 16.001 3.2zm0 23.467h-.003a10.61 10.61 0 01-5.396-1.475l-.386-.23-3.907 1.028 1.056-3.78-.252-.395a10.62 10.62 0 01-1.68-5.76c0-5.873 4.78-10.654 10.654-10.654 5.872 0 10.653 4.781 10.653 10.654 0 5.873-4.781 10.654-10.653 10.654zm5.861-7.947c-.321-.161-1.89-.93-2.184-1.036-.293-.108-.507-.162-.72.161-.213.321-.826 1.035-1.013 1.248-.187.214-.374.24-.694.08-.32-.161-1.351-.498-2.574-1.59-.952-.848-1.594-1.896-1.78-2.216-.187-.321-.02-.494.14-.654.144-.143.32-.374.48-.561.161-.187.214-.321.32-.534.106-.214.053-.4-.027-.561-.08-.161-.72-1.79-.987-2.453-.26-.626-.527-.54-.72-.54-.187-.013-.4-.013-.614-.013-.214 0-.56.08-.853.4-.293.32-1.12 1.095-1.12 2.668 0 1.573 1.147 3.087 1.307 3.307.16.214 2.254 3.44 5.46 4.82.763.33 1.358.527 1.822.674.765.243 1.46.209 2.013.127.614-.093 1.89-.773 2.157-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.214-.614-.374z"/>
//       </svg>
//     </div>
//   </a>
// </div>
// <div className="fixed bottom-23 right-5 z-10">
//   <a
//     href="https://wa.me/91XXXXXXXXXX"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <div className="w-18 h-18 bg-red-600 rounded-full shadow-xl flex items-center justify-center cursor-pointer transform hover:scale-105 transition duration-300">

//       {/* Blinking ONLINE PLAY Text */}
//       <span className="text-white text-xs font-bold animate-pulse text-center leading-tight">
//         ONLINE<br/>PLAY
//       </span>

//     </div>
//   </a>
// </div>

//     </div>
//   );
// }

import React from "react";

export default function Sample() {
  const data = [
    { title: "FARIDABAD", time: "09:10am", result: "75", tag: "SATTA KING 786" },
    { title: "SHREE GANESH", time: "08:30am", result: "54", tag: "SATTAKING 786" },
    { title: "GHAZIABAD", time: "02:10pm", result: "86", tag: "SATTA-KING 786" },
    { title: "GALI", time: "12:30am", result: "34", tag: "SATTA-KING 786" },
    { title: "GALI2", time: "11:10pm", result: "13", tag: "SATTA-KING 786" },
    { title: "DISAWAR", time: "10:30pm", result: "98", tag: "SATTA-KING 786" },
    { title: "DAY DELHI", time: "10:10pm", result: "76", tag: "SATTA-KING 786" },
    { title: "KURUKSHETRA", time: "09:30pm", result: "53", tag: "SATTA-KING 786" },
  ];

  return (
    <div className="min-h-screen bg-[#F4EEC7]">

      {/* ---- MULTI COLOR BLINK TEXT (NO SHADOW) ---- */}
      <style>
        {`
          @keyframes textBlink {
            0%   { color: #ff0000; }
            25%  { color: #ffea00; }
            50%  { color: #00ff11; }
            75%  { color: #00c3ff; }
            100% { color: #ff00ea; }
          }

          .text-blink {
            animation: textBlink 2s infinite linear;  /* Slow Smooth Blink */
            font-weight: 700;
          }
        `}
      </style>

      {/* ---- HEADER ---- */}
      <div className="bg-[#8B2E18] text-white text-center py-3 font-bold text-lg">
        :: Sample Result Online ::
      </div>

      {/* ---- MAIN RESULT ---- */}
      <div className="bg-[#002D9F] text-center text-white py-1">
        <h1 className="text-2xl font-bold tracking-wide">MAIN RESULT</h1>
        <p className="mt-1 text-yellow-300 font-semibold">(Time 05:10am)</p>

        <p className="mt-2 text-white text-xl font-bold">
          {`{ 55 } `}
          <span className="text-blink">NEW</span> [ ]
        </p>
      </div>

      {/* ---- RESULTS LIST ---- */}
      {/* **परिवर्तन यहाँ है: grid-cols-1 md:grid-cols-2 को grid-cols-2 से बदला गया** */}
      <div className="grid grid-cols-2 gap-y-6 py-6 px-4"> 
        {data.map((item, index) => (
          <div key={index} className="text-center p-3 border-b border-gray-300">
            
            <h2 className="text-green-700 font-bold text-xl">{item.title}</h2>
            <p className="text-gray-700 text-sm">(Time {item.time})</p>

            <p className="text-black mt-1 text-lg font-bold">
              {`{ ${item.result} } `}
              <span className="text-blink">NEW</span> [ ]
            </p>

            <p className="text-black font-semibold mt-1">{item.tag}</p>
          </div>
        ))}
      </div>

     

    </div>
  );
}