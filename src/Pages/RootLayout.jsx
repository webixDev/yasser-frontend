// import {useEffect} from "react";
import { Outlet,useLocation } from "react-router-dom";


import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


import Header from "../comp/Header"
import Footer from "../comp/Footer"
import AdminHeader from "../comp/AdminHeader"
// import Footer from "../comp/Footer"

// translate 


// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       ar: {
//         translation: translationAR,
//       },
//       en: {
//         translation: translationEN,
//       },
//     },
//     lng: 'ar',
//     fallbackLng: 'ar',
//     interpolation: {
//       escapeValue: true,
//     },
//   });



const RootLayout = () => {
  const location = useLocation();
  const Headers = location.pathname.includes("/admin")  ? < AdminHeader/> : <Header />;
  const Fotters = location.pathname.includes("/admin")  ? "" : <Footer />;
  
    useEffect(() => {
      Aos.init();
    }, []);


 
    
  return (
    <>
      {Headers  }
      <Outlet />
      {Fotters} 
    </>
  );
};

export default RootLayout;
