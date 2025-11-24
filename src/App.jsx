// import React from "react";
// import NavbarClone from "./Components/NavbarClone.jsx";
// import Hero from "./Components/Hero.jsx";
// import SattaKingChart from "./Components/SattaKingChart.jsx";
// import OnlineKhaiwal from "./Components/OnlineKhaiwal.jsx";
// import FinalChart from "./Components/FinalChart.jsx";
// import Footer from "./Components/Footer.jsx";
// import Add2 from "./Components/Add2.jsx";
// import DataPage from "./Components/DataPage.jsx";
// import Sample from "./Components/Sample.jsx";
// import MarqueeText from "./Components/MarqueeText.jsx";
// import Home from "./Components/Home.jsx";


// export default function MyNewComponent() {
//   return (
//     <div className="w-full overflow-hidden, App">
      
//      <NavbarClone />
//    <MarqueeText />
    
//       <Hero />
//       <Home/>

    

    
//        <SattaKingChart />  

 
//       <OnlineKhaiwal />
//      <DataPage/>
//      <Sample />
//     <Add2 />
//       <FinalChart />
//         <Footer/> 
      
    

//     </div>
//   );
// }
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Components/NavbarClone";

// import AdminLogin from "./Pages/AdminLogin";
// import Record from "./Pages/Record";
// import PlayOnline from "./Pages/PlayOnline";
// import Posting from "./Pages/Posting";
// import Register from "./Pages/Register";
// import MarqueeText from "./Components/MarqueeText.jsx";
// import Hero from "./Components/Hero.jsx";
// import Home from "./Components/Home.jsx";
// import SattaKingChart from "./Components/SattaKingChart.jsx";
// import OnlineKhaiwal from "./Components/OnlineKhaiwal.jsx";
// import DataPage from "./Components/DataPage.jsx";
// import Sample from "./Components/Sample.jsx";
// import Add2 from "./Components/Add2.jsx";
// import FinalChart from "./Components/FinalChart.jsx";
// import Footer from "./Components/Footer.jsx";


// export default function App() {
//   const location = useLocation();

//   // jaha navbar hide karna hai
//   const hideNavbarRoutes = ["/admin-login", "/login",  "/register"];

//   // current URL ko lowercase me convert kar diya
//   const hideNavbar = hideNavbarRoutes.includes(
//     location.pathname.toLowerCase()
//   );

//   return (
//     <>
//       {/* Navbar hide/show */}
//       {!hideNavbar && <Navbar />}

//       <Routes>
//         <Route path="/admin-login" element={<AdminLogin />} />
//             <Route path="/record" element={<Record />} />
//              <Route path="/play-online" element={<PlayOnline />} />
//              <Route path="/posting" element={<Posting />} />
//              <Route path="/register" element={<Register />} />
//       </Routes>
//      <MarqueeText />
//       <Hero />
      
//       <Home/>

    

    
//     <SattaKingChart />  

 
//       <OnlineKhaiwal />
//     <DataPage/>
//      <Sample />
//     <Add2 />
//      <FinalChart />
//        <Footer/>  
//     </> 
  
   
//   );
// }

// src/App.jsx - CORRECTED

// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Components/NavbarClone";

// import AdminLogin from "./Pages/AdminLogin";
// import Record from "./Pages/Record";
// import PlayOnline from "./Pages/PlayOnline";
// import Posting from "./Pages/Posting";
// import Register from "./Pages/Register";
// import User from "./Pages/User";
// import LandingPage from "./Pages/LandingPage.jsx";
// import FinalChart from "./Components/FinalChart";
// import GameRecordPage from "./Components/GameRecordPage.jsx";





// export default function App() {
//   const location = useLocation();

//   const hideNavbarRoutes = ["/admin-login", "/register", "/record" ];
//   const hideNavbar = hideNavbarRoutes.includes(location.pathname.toLowerCase()) || 
//    location.pathname.toLowerCase().startsWith("/record/");

 

//   return (
//     <>
//       {!hideNavbar && <Navbar />}


      


//       <Routes>

//         {/* 👉 NOW / SHOWS LANDING PAGE */}
//         <Route path="/" element={<LandingPage />} />

//         {/* 👉 /landing SHOWS ONLY FINALCHART */}
//         <Route path="/landing" element={<FinalChart />} />

//         <Route path="/record/:gameName" element={<GameRecordPage />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/play-online" element={<PlayOnline />} />
//         <Route path="/posting" element={<Posting />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<User />} />
//       </Routes>
//     </>
//   );
// }



// App.jsx

// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./Components/NavbarClone";

// import AdminLogin from "./Pages/AdminLogin";
// import Record from "./Pages/Record";
// import PlayOnline from "./Pages/PlayOnline";
// import Posting from "./Pages/Posting";
// import Register from "./Pages/Register";

// import LandingPage from "./Pages/LandingPage"; 
// import FinalChart from "./Components/FinalChart";
// import GameRecordPage from "./Components/GameRecordPage";

// export default function App() {
//   const location = useLocation();
//   const navigate = useNavigate(); 

//   // किन routes पर navbar छुपानी है
//   const hideNavbarRoutes = ["/admin-login", "/login", "/register"];

//   const hideNavbar = hideNavbarRoutes.includes(
//     location.pathname.toLowerCase()
//   );

//   // ⬇⬇ Game Routing Functions for FinalChart & GameRecordPage ⬇⬇
//   const navigateToGame = (gameName) => {
//     navigate(`/game/${gameName}`);
//   };

//   const navigateToHome = () => {
//     navigate("/");
//   };

//   return (
//     <>
//       {/* Navbar hide/show */}
//       {!hideNavbar && <Navbar />}

//       <Routes>

//         {/* HOME + Landing all sections */}
//         <Route path="/" element={<LandingPage />} />

//         {/* FinalChart Page (if you ever want direct access) */}
//         <Route 
//           path="/games"
//           element={<FinalChart navigateToGame={navigateToGame} />} 
//         />

//         {/* Game Record Page */}
//         <Route 
//           path="/game/:name" 
//           element={<GameRecordPage navigateToHome={navigateToHome} />} 
//         />

//         {/* Other pages */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/record" element={<Record />} />
//         <Route path="/play-online" element={<PlayOnline />} />
//         <Route path="/posting" element={<Posting />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </>
//   );
// } 
// import React from 'react'
// import Chart3 from './Components/Chart3.jsx'

// export default function App() {
//   return (
//     <div>
//       <Chart3/>
//     </div>
//   )
// }

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/NavbarClone";

import AdminLogin from "./Pages/AdminLogin";
import Record from "./Pages/Record";
import PlayOnline from "./Pages/PlayOnline";
import Posting from "./Pages/Posting";
import Register from "./Pages/Register";
import LandingPage from "./Pages/LandingPage.jsx";
import User from "./Pages/User.jsx";
import TermAndServices from "./Components/TermAndServices.jsx";
import DisclaimerBar from "./Components/DisclaimerBar.jsx";

export default function App() {
  const location = useLocation();

  const hideNavbarRoutes = ["/sattaking2/admin-login", "/sattaking2/register", "/sattaking2/terms-services"];

  const hideNavbar = hideNavbarRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <DisclaimerBar />}

      <Routes>
        <Route path="/sattaking2" element={<LandingPage />} />
        <Route path="/sattaking2/admin-login" element={<AdminLogin />} />
        <Route path="/sattaking2/record" element={<Record />} />
        <Route path="/sattaking2/play-online" element={<PlayOnline />} />
        <Route path="/sattaking2/posting" element={<Posting />} />
        <Route path="/sattaking2/register" element={<Register />} />
        <Route path="/sattaking2/login" element={<User />} />
        <Route path="/sattaking2/terms-services" element={<TermAndServices />} />
      </Routes>
    </>
  );
}
