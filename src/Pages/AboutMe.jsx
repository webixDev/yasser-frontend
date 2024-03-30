import { useState } from "react"
import { useDispatch } from "react-redux";

import { AddEmail } from "../Store/EmailSlice"

import Ser1 from "../Assist/Ser1.svg"
import Ser2 from "../Assist/Ser2.svg"
import Ser3 from "../Assist/Ser3.svg"
import Ser4 from "../Assist/Ser4.svg"
import Ser5 from "../Assist/Ser5.svg"
import Ser6 from "../Assist/Ser6.svg"
import { useTranslation } from 'react-i18next';


const AboutMe  = ()=> {

   const [name,setname] = useState()
   const [email,seteemail] = useState()
   const [country,setcountry] = useState()
   const [phone,setphone] = useState()
   const [age,setage] = useState()

   const dispatch = useDispatch();

      


    const submitForm = (event) => {
      event.preventDefault();
      const formData = {
        name,
        email,
        phone,
        country,
        age,         
      }; 

    dispatch(AddEmail(formData))
        .unwrap()
        .then((response) => {
            if (response.error) {
                alert("Please check your internet connection.");
            } else {
              setname("");
              seteemail("");
              setcountry("");
              setphone("");
              setage("");
         
              
              alert("Data has been sent successfully.");
              
            }
        })
        .catch((error) => {
            alert("An error occurred while sending data: " + (error.message || "Unknown error"));
        });
};
const { t } = useTranslation();

    return (
        <>
        <div className="About-Me Blog-Margin">
              <div className="Head-Txt">
                <h1>
                    {t("مركز خيركم لتحفيظ القرآن الكريم")}
                </h1>
              </div>
              <div className="Head-Txt">
              <h1>{t("تواصل معنا الان")}</h1>
              </div>
             <div className="RegAbout">
              <form onSubmit={submitForm}>
             <div className="Form-1">
                    <input  onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder={t("الاسم")}/>
                    <input  onChange={(e) => seteemail(e.target.value)} value={email} type="text" placeholder={t("الهدف من الاشتراك")}/>
                    <input  onChange={(e) => setphone(e.target.value)} value={phone} type="number" placeholder={t("رقم الهاتف")}/>
                    <input  onChange={(e) => setcountry(e.target.value)} value={country} type="text" placeholder={t("المدينه")}/>
                    <input  onChange={(e) => setage(e.target.value)} value={age} type="number" placeholder={t("السن")}/>
                    </div>
                 <div className="Sender">
                 <button type="submit">{t("ارسل البيانات")}</button>
                 </div>
    
              </form>
             </div>
              <div className="Four-Section PaddingFullApp ">
          <div className="Head-Txt text-center">
             <h5>{t("خدمتنا")}</h5>
            <h2>{t("خدمات مركز")}</h2>
            <h3>{t("خيركم")}</h3>
          </div>
          <div className="Content">
            <div className="Cards">
              <div className="Box-Card-1 " >
                <div className="Card-1"                          >
                  <img src={Ser1} alt="" />
                  <h2>{t("تحفيظ القرآن الكريم")}</h2>
                  <p>{t("نعمل علي تدريب الطلاب على تحفيظ القرآن والمراجعة المنتظمة")}</p>
                </div>
                <div className="Card-2">
                  <img src={Ser2} alt="" />
                  <h2>{t("تجويد القرآن الكريم")}</h2>
                  <p>{t("نعمل ع تدريس قواعد التجويد والمخارج الصوتية لتحسين جودة التلاوة")}</p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div className="Card-1">
                  <img src={Ser3} alt="" />
                  <h2 >{t("علم النحو والصرف")}</h2>
                  <p>{t("تُعنى بتعليم النحو والصرف لفهم بنية الجمل والكلمات في القرآن")}</p>
                </div>
                <div className="Card-2">
                  <img src={Ser4} alt="" />
                  <h2>{t("القواعد القرآنية")}</h2>
                  <p>{t("نقوم بتعليم القواعد القرآنية لفهم النصوص بشكل أفضل")}</p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div className="Card-1">
                  <img src={Ser5} alt="" />
                  <h2>{t("نور البيان والقاعدة النورانية")}</h2>
                  <p>{t("تم تصميم هذه الدورة كخطوة أولى في تعلم القرآن للأطفال")}</p>
                </div>
                <div className="Card-2">
                  <img src={Ser6} alt="" />
                  <h2>{t("الأخلاق والتربية الإسلامية")}</h2>
                  <p>{t("تسعى إلى تعزيز القيم والأخلاق الإسلامية خلال عملية التحفيظ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Services ">
              <div className="Contact">
              <h1>{t("تواصل معنا الان")}</h1>
                    <div className="Icon-Serv">
                   <a href="
https://wa.me/+201125752800"> <i className="fa-brands fa-whatsapp"></i></a>
                   <a href="
https://www.facebook.com/profile.php?id=100091518327460&mibextid=ZbWKwL"> <i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="Call-me">
                    <h4>{t("تواصل معنا الان")}</h4>
                        <div className="Box-Call-1">
                        <a href="https://wa.me/+201125752800">
                             <i className="fa-brands fa-whatsapp"></i>
                             <p>01125752800</p> 
                             </a>       
                        </div>
                     
                    </div>
                </div>
                </div>
        </div>
        </>
    )
    }
    
    export default AboutMe