// const Disclaimer = ({ navigate }) => (
//     <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 flex items-start justify-center">
//       <div className="max-w-4xl mt-12 p-6 bg-[#FF6666] text-white text-center shadow-lg rounded-lg">
//         <p className="text-sm sm:text-base font-normal leading-relaxed">
//           <strong className="font-extrabold tracking-wide">
//             DISCLAIMER:
//           </strong> 
//           This website is an independent media portal for informational and journalistic purposes only. As a non-transactional service, we are not affiliated with any entity mentioned. Users are solely responsible for complying with all applicable laws in their jurisdiction. 
//           <a
//             href="#" 
//             // 'Terms' पेज पर नेविगेट करने के लिए navigate('Terms') कॉल करें
//             onClick={(e) => { e.preventDefault(); navigate('Terms'); }} 
//             className="text-blue-800 font-semibold underline ml-1 cursor-pointer hover:text-blue-900 transition duration-150 bg-transparent border-none p-0 inline"
//             aria-label="Read full terms of service"
//           >
//             Read More...
//           </a>
//         </p>
//       </div>
//     </div>
// );

// export default Disclaimer;
import React from "react";
import { Link } from "react-router-dom";   // <-- ADD THIS

export default function DisclaimerBar() {
  return (
    <div className="w-full bg-[#ff6b6b] text-white text-center py-3 px-4">
      <p className="text-sm md:text-base leading-relaxed">
        DISCLAIMER: This website is an independent media portal for informational and
        journalistic purposes only. As a non-transactional service, we are not affiliated
        with any entity mentioned. Users are solely responsible for complying with all
        applicable laws in their jurisdiction.{" "}
        
        <Link
          to="/terms-services"        // <-- ROUTE SAME AS App.jsx
          className="text-blue-800 underline font-semibold"
        >
          Read More...
        </Link>
      </p>
    </div>
  );
}