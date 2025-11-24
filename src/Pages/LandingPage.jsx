// // src/Pages/LandingPage.jsx (या HomePage.jsx)

// import React from 'react';

// import MarqueeText from "../Components/MarqueeText.jsx";
// import Hero from "../Components/Hero.jsx";
// import Home from "../Components/Home.jsx";
// import SattaKingChart from "../Components/SattaKingChart.jsx";
// import OnlineKhaiwal from "../Components/OnlineKhaiwal.jsx";
// import DataPage from "../Components/DataPage.jsx";
// import Sample from "../Components/Sample.jsx";
// import Add2 from "../Components/Add2.jsx";

// import Footer from "../Components/Footer.jsx";

// export default function LandingPage() {
//     return (
//         <>
//             <MarqueeText />
//             <Hero />
//             <Home/>
//             <SattaKingChart /> 
//             <OnlineKhaiwal />
//             <DataPage/>
//             <Sample />
//             <Add2 />
//             {/* <FinalChart /> */}
               
//             <Footer/> 
//         </>
//     );
// }
// LandingPage.jsx

import React from 'react';

import Home from "../Components/Home.jsx";
// import SattaKingChart from "../Components/SattaKingChart.jsx";
import OnlineKhaiwal from "../Components/OnlineKhaiwal.jsx";
import DataPage from "../Components/DataPage.jsx";
import Sample from "../Components/Sample.jsx";
import Add2 from "../Components/Add2.jsx";
import Footer from "../Components/Footer.jsx";
import MarqueeText from "../Components/MarqueeText.jsx";
import Hero from "../Components/Hero.jsx";
import Chart3 from '../Components/Chart3.jsx';
import WhatsappOnlineChat from '../Components/WhatsappOnlineChat.jsx';

export default function LandingPage() {
    return (
        <>
           <MarqueeText />
           <Hero />
        
           <Home />
           <Sample />
           <OnlineKhaiwal />
           <DataPage />
          
           <Add2 />

           <Chart3 />

           <Footer />
           <WhatsappOnlineChat />
        </>
    );
}
