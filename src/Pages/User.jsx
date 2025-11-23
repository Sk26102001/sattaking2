// import React, { useState } from "react";

// export default function User() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#8F0031] to-[#A50B3E]">

//       {/* Center Login Box */}
//       <div className="flex justify-center items-center flex-col px-4 pt-16">
//         <h1 className="text-3xl font-bold text-white mb-10 tracking-wide">
//           LOGIN
//         </h1>

//         {/* Form Container */}
//         <div className="w-full max-w-2xl space-y-6">

//           {/* Mobile Number */}
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             className="w-full p-4 rounded-md bg-white text-gray-700 outline-none shadow"
//           />

//           {/* Password Field */}
//           <div className="w-full relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full p-4 pr-12 rounded-md bg-white text-gray-700 outline-none shadow"
//             />

//             {/* Eye Icon */}
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-4 text-gray-500 cursor-pointer text-xl"
//             >
//               {showPassword ? "👁" : "👁‍🗨"}
//             </span>
//           </div>

//           {/* Login Button */}
//           <div className="flex justify-center">
//             <button className="bg-white text-black font-semibold px-10 py-3 rounded-full shadow-lg hover:scale-105 transition">
//               LOGIN
//             </button>
//           </div>

//           {/* Register */}
//           <p className="text-center text-white font-medium">
//             Don't have Account?{" "}
//             <a href="/register" className="text-blue-300 font-semibold">
//               Register Here
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="bg-[#D8A450] py-6 text-center">

//         {/* Online badge */}
//         <div className="flex justify-center mb-2">
//           <span className="bg-red-600 text-white text-xs px-4 py-1 rounded">
//             19 ONLINE
//           </span>
//         </div>

//         <p className="text-white font-semibold tracking-wide">
//           © 2023 Copyright: <span className="font-bold">GALI2.com</span>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function User() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background: "linear-gradient(to bottom right, #e8f4ff, #cfe8ff)"
      }}
    >

      {/* Center Login Box */}
      <div className="flex justify-center items-center flex-col px-4 pt-16">
        <h1 className="text-3xl font-bold text-black mb-10 tracking-wide">
          LOGIN
        </h1>

        {/* Form Container */}
        <div className="w-full max-w-2xl space-y-6">

          {/* Mobile Number */}
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-4 rounded-md bg-white text-gray-700 outline-none shadow"
          />

          {/* Password Field */}
          <div className="w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-4 pr-12 rounded-md bg-white text-gray-700 outline-none shadow"
            />

            {/* Eye Icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-600 cursor-pointer text-xl"
            >
              {showPassword ? "👁" : "👁‍🗨"}
            </span>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:scale-105 transition">
              LOGIN
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-black font-medium">
            Don't have Account?{" "}
            <a href="/register" className="text-blue-700 font-semibold">
              Register Here
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#D8A450] py-6 text-center">

        {/* Online Badge */}
        <div className="flex justify-center mb-2">
          <span className="bg-red-600 text-white text-xs px-4 py-1 rounded">
            19 ONLINE
          </span>
        </div>

        <p className="text-white font-semibold tracking-wide">
          © 2023 Copyright: <span className="font-bold">GALI2.com</span>
        </p>
      </div>
    </div>
  );
}
