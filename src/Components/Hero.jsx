// import { useState } from "react";

// export default function Hero() {
//   const buttons = [
//     "Discover more",
//     "Disawar Satta King",
//     "Gaziabad",
//     "Risk management courses",
//     "Fast Satta results",
//     "Historical lottery data",
//     "Regional draw information",
//     "Statistical analysis courses",
//     "Data visualization tools",
//     "Numerology readings",
//     "Satta King guide",
//   ];

//   const [openCard, setOpenCard] = useState(false);
//   const [activeButton, setActiveButton] = useState("");

//   return (
//     <div className="relative w-full flex flex-col items-center pt-10 px-4">

//       {/* Logo + Title INLINE LEFT */}
//       <div className="flex items-center justify-center gap-3 px-4">
//         <div className="mt-2">
//           <img 
//             src="logo.jpg" 
//             alt="logo"
//             className="w-20"
//           />
//         </div>

//         <h1 className="text-4xl font-extrabold tracking-wide">
//           <span className="font-black">SATTA-KING-786</span>
//           <span className="text-2xl">.com</span>
//         </h1>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl">
//         {buttons.map((b, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setActiveButton(b);
//               setOpenCard(true);
//             }}
//             className="px-4 py-2 bg-white shadow-sm border rounded-full text-blue-600 text-sm font-semibold hover:bg-gray-50 transition"
//           >
//             ➕ {b}
//           </button>
//         ))}
//       </div>

//       {/* Footer Text */}
//       <p className="max-w-4xl text-sm font-semibold text-gray-700 mt-10 leading-relaxed px-4">
//       Daily Superfast Satta King Result of 15th November 2026 And Leak Numbers for Gali, Desawar, Ghaziabad and Faridabad With Complete Old Satta King Chart of 2026–2025 From Satta King 786, Satta King Ghaziabad, Satta King Desawar, Satta King Gali, Satta King Faridabad.
      
//       </p>

//       {/* 🔥 RIGHT SLIDING CARD */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform 
//         transition-transform duration-300 p-6 z-50
//         ${openCard ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setOpenCard(false)}
//           className="absolute top-4 right-4 text-2xl text-gray-600"
//         >
//           ×
//         </button>

//         <h2 className="text-xl font-bold mb-4">{activeButton}</h2>

//         <p className="text-gray-700">
//           This is your card content for <b>{activeButton}</b>.  
//           You can add images, text, links, anything here!
//         </p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function Hero() {
  const buttons = [
    "Discover more",
    "Disawar Satta King",
    "Gaziabad",
    "Risk management courses",
    "Fast Satta results",
    "Historical lottery data",
    "Regional draw information",
    "Statistical analysis courses",
    "Data visualization tools",
    "Numerology readings",
    "Satta King guide",
  ];

  const [openCard, setOpenCard] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  return (
    <div className="relative w-full flex flex-col items-center pt-10 px-4">

      {/* ---------- LOGO + TITLE (Responsive) ---------- */}
      <div className="flex items-center justify-center gap-3 px-4 flex-wrap md:flex-nowrap">
        
        <img 
          src="logo.jpg"
          alt="logo"
          className="w-20 md:w-24"
        />

        <h1 className="font-extrabold tracking-wide text-center md:text-left">
          <span className="text-3xl md:text-4xl font-black">SATTA-KING-786</span>
          <span className="text-xl md:text-2xl">.com</span>
        </h1>

      </div>

      {/* ---------- BUTTON GROUP (Responsive Same UI) ---------- */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-4xl px-2">
        {buttons.map((b, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveButton(b);
              setOpenCard(true);
            }}
            className="
              px-4 py-2 
              bg-white shadow-sm border 
              rounded-full 
              text-blue-600 
              text-sm md:text-base
              font-semibold 
              hover:bg-gray-50 
              transition
              whitespace-nowrap
            "
          >
            ➕ {b}
          </button>
        ))}
      </div>

      {/* ---------- FOOTER TEXT ---------- */}
      <p className="max-w-4xl text-center text-sm md:text-base font-semibold text-gray-700 mt-10 leading-relaxed px-4">
        Daily Superfast Satta King Result of 15th November 2026 And Leak Numbers
        for Gali, Desawar, Ghaziabad and Faridabad With Complete Old Satta King
        Chart of 2026–2025 From Satta King 786, Satta King Ghaziabad, Satta King
        Desawar, Satta King Gali, Satta King Faridabad.
      </p>

      {/* ---------- RIGHT SLIDE CARD (Responsive) ---------- */}
      <div
        className={`
          fixed top-0 right-0 h-full 
          w-72 md:w-80
          bg-white shadow-2xl 
          transform transition-transform duration-300 
          p-6 z-50
          ${openCard ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpenCard(false)}
          className="absolute top-4 right-4 text-2xl text-gray-600"
        >
          ×
        </button>

        <h2 className="text-xl md:text-2xl font-bold mb-4">{activeButton}</h2>

        <p className="text-gray-700 text-sm md:text-base">
          This is your card content for <b>{activeButton}</b>.  
          You can add images, text, links, anything here!
        </p>
      </div>
    </div>
  );
}
