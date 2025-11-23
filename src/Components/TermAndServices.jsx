// const Term = ({ navigate }) => (
//     <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      
//       <div className="max-w-4xl mx-auto mb-6">
//           <button
//               // 'Disclaimer' पर वापस जाने के लिए navigate('Disclaimer') कॉल करें
//               onClick={() => navigate('Disclaimer')}
//               className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition duration-150 p-2 rounded-lg"
//               aria-label="Go back to disclaimer"
//           >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//               </svg>
//               Back to Disclaimer
//           </button>
//       </div>

//       <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 md:p-12 shadow-2xl rounded-lg">
//         <header className="mb-8 border-b border-gray-200 pb-4">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
//             Terms of Service
//           </h1>
//           <p className="text-sm text-gray-700">
//             <strong className="font-bold">Effective Date:</strong> November 24, 2024
//           </p>
//         </header>

//         {/* Sections of Terms of Service */}
//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">1. AGREEMENT TO TERMS</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">
//             These Terms of Service (“Terms”) constitute a legally binding agreement made between you ("the User") and the owners and operators of <strong className="text-red-600">Satta-786.com</strong> ("we," "us," or "our"), concerning your access to and use of the Services. By accessing the Services, you agree that you have read, understood, and agree to be bound by these Terms. 
//             <strong className="font-bold">If you do not agree, you are prohibited from using the Services and must discontinue use immediately.</strong>
//           </p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">2. DESCRIPTION OF THE SERVICES</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">
//             The services provided (collectively, "the Services") consist of an independent media platform and informational archive. Our function is to:
//           </p>
          
//           <ul className="list-disc ml-6 space-y-2 mb-4 text-gray-700">
//             <li>Aggregate, organize, and present publicly available data originating from <strong className="font-bold">offline, regional, or state-sanctioned public draws and announcements.</strong></li>
//             <li>Present this aggregated data for the purposes of <strong className="font-bold">journalistic analysis, public information, and statistical archiving.</strong></li>
//           </ul>

//           <p className="mb-4 text-gray-700 leading-relaxed">
//             You acknowledge and agree to the following:
//           </p>

//           <ul className="list-disc ml-6 space-y-2 mb-4 text-gray-700">
//             <li>The Services are provided for informational and historical reference only. <strong className="font-bold">The User agrees not to rely on the information on this Website for any personal or financial decision-making.</strong></li>
//             <li>The data provided is informational in nature. We do not guarantee the absolute accuracy, timeliness, or completeness of the data.</li>
//             <li>The Services are provided entirely free of charge. This is a <strong className="font-bold">non-transactional</strong> service, and we do not facilitate or accept any form of <strong className="font-bold">financial exchanges</strong> between users or third parties.</li>
//           </ul>
//         </section>
        
//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">3. PRIVACY POLICY</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">Our Privacy Policy, which is incorporated into these Terms, describes how we handle the information you may provide to us. By using the Services, you consent to the collection and use of this information as set forth in the Privacy Policy.</p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">4. USER ELIGIBILITY AND RESPONSIBILITY</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">The Services are intended for users who are of the legal age of majority in their jurisdiction. It is your <strong className="font-bold">sole and absolute responsibility</strong> to ensure that your access to and use of the Services is not in violation of any applicable local, state, or national law or regulation in your jurisdiction.</p>
//         </section>
        
//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">5. GOVERNING LAW AND JURISDICTION</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">These Terms and any dispute that arises between you and us will be governed by the laws of the State of Wyoming, USA, without regard to its conflict of law principles.</p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">6. INTELLECTUAL PROPERTY RIGHTS</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">The Services and their original content, features, and functionality are and will remain the exclusive property of us and our licensors.</p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">7. PROHIBITED CONDUCT</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">You agree not to misuse the Services, including but not limited to, scraping, interfering with the network, or using the data for any commercial purpose without our prior written consent.</p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">8. DISCLAIMERS; LIMITATION OF LIABILITY</h2>
//           <p className="mb-4 text-gray-700 leading-relaxed">
//             <strong className="font-extrabold text-black">THE SERVICES ARE PROVIDED "AS-IS" AND "AS-AVAILABLE" AT YOUR SOLE RISK.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES.
//           </p>
//           <p className="mb-4 text-gray-700 leading-relaxed">
//             <strong className="font-extrabold text-black">LIMITATION OF LIABILITY:</strong> IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
//           </p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">9. GENERAL TERMS</h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-700">
//             <li><strong className="font-bold">Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the Services.</li>
//             <li><strong className="font-bold">Severability:</strong> If any provision is held to be invalid, the remaining provisions will remain in full force.</li>
//             <li><strong className="font-bold">Revisions:</strong> We may revise these Terms from time to time.</li>
//           </ul>
//         </section>
//       </div>
//     </div>
// );
// export default Term;
// import React from "react";

// export default function TermsOfService() {
//   return (
//     <div className="w-full bg-gray-100 min-h-screen py-10">
//       <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm">

//         {/* Title */}
//         <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

//         <hr className="my-4" />

//         {/* Effective Date */}
//         <p className="font-semibold">
//           Effective Date: <span className="font-normal">November 24, 2024</span>
//         </p>

//         {/* SECTION 1 */}
//         <h2 className="text-2xl font-bold mt-8 mb-4">1. AGREEMENT TO TERMS</h2>

//         <p className="text-gray-800 leading-7 mb-4">
//           These Terms of Service (“Terms”) constitute a legally binding agreement
//           made between you ("the User") and the owners and operators of{" "}
//           <span className="bg-yellow-200 px-1 rounded">satta-king-fast.com</span>{" "}
//           ("we," "us," or "our"), concerning your access to and use of the
//           Services. By accessing the Services, you agree that you have read,
//           understood, and agree to be bound by these Terms.
//         </p>

//         <p className="font-semibold text-gray-900 leading-7">
//           If you do not agree, you are prohibited from using the Services and must discontinue use immediately.
//         </p>

//         {/* SECTION 2 */}
//         <h2 className="text-2xl font-bold mt-8 mb-4">2. DESCRIPTION OF THE SERVICES</h2>

//         <p className="text-gray-800 leading-7 mb-4">
//           The services provided (collectively, "the Services") consist of an independent
//           media platform and informational archive. Our function is to:
//         </p>

//         <ul className="list-disc ml-8 space-y-2 text-gray-800 leading-7">
//           <li>
//             Aggregate, organize, and present publicly available data originating from{" "}
//             <span className="font-semibold">offline, regional, or state-sanctioned public draws and announcements.</span>
//           </li>

//           <li>
//             Present this aggregated data for the purposes of{" "}
//             <span className="font-semibold">
//               journalistic analysis, public information, and statistical archiving.
//             </span>
//           </li>
//         </ul>

//         <p className="text-gray-800 leading-7 mt-4">
//           You acknowledge and agree to the following:
//         </p>

//         <ul className="list-disc ml-8 space-y-2 text-gray-800 leading-7">
//           <li>
//             The Services are provided for informational and historical reference only.
//           </li>
//           <li>
//             The information provided is not intended as advice of any kind.
//           </li>
//         </ul>

//         {/* SECTION 3 */}
//         <h2 className="text-2xl font-bold mt-8 mb-4">3. PRIVACY POLICY</h2>
//         <p className="text-gray-800 leading-7 mb-4">
//           Our Privacy Policy, which is incorporated into these Terms, describes how we handle the information you may provide to us. By using the Services, you consent to the collection and use of this information as set forth in the Privacy Policy.
//         </p>
//         {/* SECTION 4 */}
//         <h2 className="text-2xl font-bold mt-8 mb-4">4. USER ELIGIBILITY AND RESPONSIBILITY</h2>
//         <p className="text-gray-800 leading-7 mb-4">
//           The Services are intended for users who are of the legal age of majority in their jurisdiction. It is your
//         </p>
//         <p className="font-semibold text-gray-900 ">
//          sole and absolute responsibility
//         </p>
//         <p className="text-gray-800 leading-7 mb-4">
//           to ensure that your access to and use of the Services is not in violation of any applicable local, state, or national law or regulation in your jurisdiction.
//         </p>


//       </div>
//     </div>
//   );
// }
import React from "react";

export default function TermsOfService() {
  return (
    <div className="w-full bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

        <hr className="my-4" />

        {/* Effective Date */}
        <p className="font-semibold">
          Effective Date: <span className="font-normal">November 24, 2024</span>
        </p>

        {/* SECTION 1 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">1. AGREEMENT TO TERMS</h2>
        <p className="text-gray-800 leading-7 mb-4">
          These Terms of Service (“Terms”) constitute a legally binding agreement
          made between you ("the User") and the owners and operators of{" "}
          <span className="bg-yellow-200 px-1 rounded">Satta-king-786.com</span>{" "}
          ("we," "us," or "our"), concerning your access to and use of the
          Services. By accessing the Services, you agree that you have read,
          understood, and agree to be bound by these Terms.
        </p>

        <p className="font-semibold text-gray-900 leading-7">
          If you do not agree, you are prohibited from using the Services and must discontinue use immediately.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">2. DESCRIPTION OF THE SERVICES</h2>

        <p className="text-gray-800 leading-7 mb-4">
          The services provided (collectively, "the Services") consist of an independent
          media platform and informational archive. Our function is to:
        </p>

        <ul className="list-disc ml-8 space-y-2 text-gray-800 leading-7">
          <li>
            Aggregate, organize, and present publicly available data originating from{" "}
            <span className="font-semibold">offline, regional, or state-sanctioned public draws and announcements.</span>
          </li>

          <li>
            Present this aggregated data for{" "}
            <span className="font-semibold">
              journalistic analysis, public information, and statistical archiving.
            </span>
          </li>
        </ul>

        <p className="text-gray-800 leading-7 mt-4">
          You acknowledge and agree to the following:
        </p>

        <ul className="list-disc ml-8 space-y-2 text-gray-800 leading-7">
          <li>The Services are provided for informational and historical reference only.</li>
          <li>The information provided is not intended as advice of any kind.</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">3. PRIVACY POLICY</h2>
        <p className="text-gray-800 leading-7 mb-4">
          Our Privacy Policy, which is incorporated into these Terms, describes how we handle the information you may provide to us. 
          By using the Services, you consent to the collection and use of this information as set forth in the Privacy Policy.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">4. USER ELIGIBILITY AND RESPONSIBILITY</h2>

        <p className="text-gray-800 leading-7 mb-4">
          The Services are intended for users who are of the legal age of majority in their jurisdiction.
        </p>

        <p className="font-semibold text-gray-900">
          Sole and absolute responsibility
        </p>

        <p className="text-gray-800 leading-7 mb-4">
          to ensure that your access to and use of the Services is not in violation of any applicable law or regulation.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">
          5. GOVERNING LAW AND JURISDICTION
        </h2>

        <p className="text-gray-800 leading-7 mb-4">
          These Terms and any dispute that arises between you and us will be governed by the laws 
          of the State of Wyoming, USA, without regard to its conflict of law principles.
        </p>

        <p className="text-gray-800 leading-7 mb-4">
          You agree that all disputes related to these Terms or the Services will be brought exclusively 
          in the state and federal courts located in Cheyenne, Wyoming, USA. 
          You hereby consent to the personal jurisdiction and venue in such forums.
        </p>

        {/* SECTION 6 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">6. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p className="text-gray-800 leading-7 mb-4">
          The Services and their original content, features, and functionality are and will remain the 
          exclusive property of us and our licensors, protected by copyright, trademark, 
          and other laws of the United States and foreign countries.
        </p>

        {/* SECTION 7 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">7. PROHIBITED CONDUCT</h2>
        <p className="text-gray-800 leading-7 mb-4">
          You agree not to misuse the Services, including but not limited to scraping, interfering with the network, 
          or using the data for any commercial purpose without prior written consent.
        </p>

        {/* SECTION 8 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">8. DISCLAIMERS; LIMITATION OF LIABILITY</h2>

        <p className="text-gray-800 leading-7 mb-4 font-semibold">
          THE SERVICES ARE PROVIDED "AS-IS" AND "AS-AVAILABLE" AT YOUR SOLE RISK.
        </p>

        <p className="text-gray-800 leading-7 mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, 
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </p>

        <p className="text-gray-800 leading-7 mb-4">
          IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.  
          OUR AGGREGATE LIABILITY SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS (U.S. $100.00).
        </p>

        {/* SECTION 9 */}
        <h2 className="text-2xl font-bold mt-8 mb-4">9. GENERAL TERMS</h2>

        <p className="text-gray-800 leading-7 mb-2">
          <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us.
        </p>

        <p className="text-gray-800 leading-7 mb-2">
          <strong>Severability:</strong> If any provision is held invalid, the remaining provisions shall remain in effect.
        </p>

        <p className="text-gray-800 leading-7 mb-4">
          <strong>Revisions:</strong> We may revise these Terms from time to time. 
          Continued use of the Services means you accept the new Terms.
        </p>

      </div>
    </div>
  );
}
