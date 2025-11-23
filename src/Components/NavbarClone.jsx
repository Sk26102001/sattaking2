// import React from "react";
// import { Link } from "react-router-dom";

// export default function NavbarClone() {
//   return (
//     <nav className="bg-dark bg-black text-white py-5 px-6">
//       <div className="flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/">
//           <img
//             src="logo1.png"
//             width="80"
//             alt="Logo"
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* Menu Button (Mobile) */}
//         <button className="md:hidden text-white text-2xl">☰</button>

//         {/* Navbar Links */}
//         <ul className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase">

//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/play-online">
//               Play Online
//             </Link>
//           </li>

//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/record">
//               Record 
//             </Link>
//           </li>

//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/posting">
//               Posting
//             </Link>
//           </li>

//           {/* FIXED → lowercase link */}
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/admin-login">
//               Admin Login
//             </Link>
//           </li>

//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/login">
//               User
//             </Link>
//           </li>

//           <li>
//             <Link className="text-red-400 hover:text-red-500" to="/logout">
//               Logout
//             </Link>
//           </li>
//         </ul>

//         {/* Login & Register */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link
//             className="border border-orange-400 text-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 hover:text-white transition"
//             to="/login"
//           >
//             Login
//           </Link>

//           <Link
//             className="border border-orange-400 text-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 hover:text-white transition"
//             to="/register"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function NavbarClone() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-dark bg-black text-white py-5 px-6">
//       <div className="flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/">
//           <img
//             src="logo1.png"
//             width="80"
//             alt="Logo"
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white text-3xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>

//         {/* Desktop Navbar */}
//         <ul className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase">
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/play-online">
//               Play Online
//             </Link>
//           </li>
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/record">
//               Record
//             </Link>
//           </li>
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/posting">
//               Posting
//             </Link>
//           </li>
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/admin-login">
//               Admin Login
//             </Link>
//           </li>
//           <li>
//             <Link className="text-orange-400 hover:text-orange-500" to="/login">
//               User
//             </Link>
//           </li>
//           <li>
//             <Link className="text-red-400 hover:text-red-500" to="/logout">
//               Logout
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Login/Register */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link
//             className="border border-orange-400 text-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 hover:text-white transition"
//             to="/login"
//           >
//             Login
//           </Link>
//           <Link
//             className="border border-orange-400 text-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 hover:text-white transition"
//             to="/register"
//           >
//             Register
//           </Link>
//         </div>
//       </div>

//       {/* ---------------- MOBILE MENU ---------------- */}
//       {open && (
//         <div className="md:hidden mt-4">
//           <ul className="flex flex-col gap-4 text-sm font-semibold uppercase">
//             <li>
//               <Link className="text-orange-400" to="/" onClick={() => setOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="text-orange-400" to="/play-online" onClick={() => setOpen(false)}>
//                 Play Online
//               </Link>
//             </li>
//             <li>
//               <Link className="text-orange-400" to="/record" onClick={() => setOpen(false)}>
//                 Record
//               </Link>
//             </li>
//             <li>
//               <Link className="text-orange-400" to="/posting" onClick={() => setOpen(false)}>
//                 Posting
//               </Link>
//             </li>
//             <li>
//               <Link className="text-orange-400" to="/admin-login" onClick={() => setOpen(false)}>
//                 Admin Login
//               </Link>
//             </li>
//             <li>
//               <Link className="text-orange-400" to="/login" onClick={() => setOpen(false)}>
//                 User
//               </Link>
//             </li>
//             <li>
//               <Link className="text-red-400" to="/logout" onClick={() => setOpen(false)}>
//                 Logout
//               </Link>
//             </li>

//             {/* MOBILE Login/Register */}
//             <div className="flex flex-col gap-3 mt-3">
//               <Link
//                 className="border border-orange-400 text-orange-400 px-4 py-2 rounded-md"
//                 to="/login"
//                 onClick={() => setOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 className="border border-orange-400 text-orange-400 px-4 py-2 rounded-md"
//                 to="/register"
//                 onClick={() => setOpen(false)}
//               >
//                 Register
//               </Link>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarClone() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark bg-black text-white py-5 px-6">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src="logo1.png"
            width="80"
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase">
          <li>
            <Link className="text-orange-400 hover:text-orange-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-orange-400 hover:text-orange-500" to="/play-online">
              Play Online
            </Link>
          </li>
          <li>
            <Link className="text-orange-400 hover:text-orange-500" to="/record">
              Record
            </Link>
          </li>
          <li>
            <Link className="text-orange-400 hover:text-orange-500" to="/posting">
              Posting
            </Link>
          </li>
          <li>
            <Link className="text-orange-400 hover:text-orange-500" to="/admin-login">
              Admin Login
            </Link>
          </li>
          <li>
            <Link className="text-orange-400 hover:text-orange-500" to="/login">
              User
            </Link>
          </li>
          {/* LOGOUT SECTION REMOVED */}
          {/* <li>
            <Link className="text-red-400 hover:text-red-500" to="/logout">
              Logout
            </Link>
          </li> */}
        </ul>

        {/* Desktop Login/Register */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            className="border border-orange-400 text-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 hover:text-white transition"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="border border-orange-400 text-orange-400 px-4 py-1 rounded-md hover:bg-orange-500 hover:text-white transition"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {open && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold uppercase">
            <li>
              <Link className="text-orange-400" to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-orange-400" to="/play-online" onClick={() => setOpen(false)}>
                Play Online
              </Link>
            </li>
            <li>
              <Link className="text-orange-400" to="/record" onClick={() => setOpen(false)}>
                Record
              </Link>
            </li>
            <li>
              <Link className="text-orange-400" to="/posting" onClick={() => setOpen(false)}>
                Posting
              </Link>
            </li>
            <li>
              <Link className="text-orange-400" to="/admin-login" onClick={() => setOpen(false)}>
                Admin Login
              </Link>
            </li>
            <li>
              <Link className="text-orange-400" to="/login" onClick={() => setOpen(false)}>
                User
              </Link>
            </li>
            {/* LOGOUT SECTION REMOVED */}
            {/* <li>
              <Link className="text-red-400" to="/logout" onClick={() => setOpen(false)}>
                Logout
              </Link>
            </li> */}

            {/* MOBILE Login/Register */}
            <div className="flex flex-col gap-3 mt-3">
              <Link
                className="border border-orange-400 text-orange-400 px-4 py-2 rounded-md"
                to="/login"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                className="border border-orange-400 text-orange-400 px-4 py-2 rounded-md"
                to="/register"
                onClick={() => setOpen(false)}
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}