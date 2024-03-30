import logo from "../Assist/mainLogo.jpeg"
import { useState } from "react"
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';


const Header = ()=> {


  const [menu,setmenu] = useState(false)


  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  
    document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
    
  };
  return (
    <>

  <div className="Header">
      <div className="Box">
        <div className="Box-Img">
          <img src={logo} alt="LogoHeader" />
        </div>
        <div className="Center-Txt">
          <ul>
            <li>
            <NavLink to={"/"}>{t('الرئيسيه')}</NavLink>
            </li>
            <li>
            <NavLink to={"/Blog"}>
            {t('المدونه')}</NavLink>
            </li>
            <li>
            <NavLink to={"/Services"}>
            {t('الباقات')}</NavLink>
            </li>
            <li>
            <NavLink to={"/AboutMe"}>
            {t('ماذا عنا')}</NavLink>
            </li>
          </ul>
          
        </div>
        <div className="Box-Icon">
        <i className="fa-solid fa-mosque fa-bounce"></i>
        <button onClick={() => switchLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
        {i18n.language === 'ar' ? 'to English' : 'تغيير للعربية'}
      </button>
        <div onClick={()=> {setmenu(!menu)}} className="menu">
        <i className="fa-solid fa-bars"></i>
        </div>
        </div>
      </div>
    </div>
    <div className={menu? "Menu-Res open":"Menu-Res"}>
      <div className="Content">
        <h1>مركز خيركم </h1>
        <i  onClick={()=> setmenu(false)} className="fa-solid fa-xmark"></i>
      </div>
          <div className="Box-txt">
          <ul>
            <li>
            <NavLink onClick={()=> setmenu(false)}  to={"/"}>{t('الرئيسيه')}</NavLink>
            </li>
            <li>
            <NavLink onClick={()=> setmenu(false)} to={"/Blog"}>{t('المدونه')}</NavLink>
            </li>
            <li>
            <NavLink onClick={()=> setmenu(false)}  to={"/Services"}>{t('الباقات')}</NavLink>
            </li>
            <li>
            <NavLink onClick={()=> setmenu(false)}  to={"/AboutMe"}>{t('ماذا عنا')}</NavLink>
            </li>
          </ul>
          </div>
    </div>
    </>
  )
}

export default Header



/*
    <div className="Icon-Head">


    </div>
    
            <a className="nav-link active" aria-current="page" href="#">الرئيسيه</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">تواصل معنا</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">المدونه</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الخدمات</a>
    
    */ 