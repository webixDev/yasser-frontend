import { useDispatch, useSelector } from "react-redux";
import { AllServices } from "../Store/ServicesSlice";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

import LoadApi from "../comp/LoadApi"
import ErrorApi from "../comp/ErrorAPi"

const Services = () => {
    const { Services,loading,error } = useSelector((state) => state.Services);
 
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(AllServices());
    }, [dispatch]);


    const { t } = useTranslation();

    return (
        <>
            <div className="Services Blog-Margin">
                <div className="Cards">
           {error?<ErrorApi/>: loading?<LoadApi/>:     <div className="Two-Card">
                     {Services?.map((service)=> (
                       <div key={service._id} className="Box-one" data-aos="flip-right" data-aos-duration="1000">
                            <h1 >{service.mainTitle}</h1>
                            <ul>
                             <li>{service.titleOne}</li>

                             <li>{service.titleTwo}</li>

                             <li>{service.titleThree}</li>

                             <li>{service.titleFour}</li>
                              <li className="price-service">السعر {service.price}</li>
                         </ul>
                         </div>
                     ))}
                        
         
        
                 </div>}
                </div>
                <div className="Contact">
                    <h1>{t("تواصل معنا الان")}</h1>
                    <div className="Icon-Serv">
                   <a href="
https://wa.me/+201125752800"> <i className="fa-brands fa-whatsapp"></i></a>
                   <a href="https://www.facebook.com/profile.php?id=100091518327460&mibextid=ZbWKwL"> <i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="Call-me">
                        <h4>{t("او علي ارقامنا")}</h4>
                        <div className="Box-Call-1">
                             <a href="https://wa.me/+201125752800">
                             <i className="fa-brands fa-whatsapp"></i>
                             <p>01125752800</p> 
                             </a>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services


/*

<div className="Two-Card">
                        <div className="Box-one" data-aos="flip-right" data-aos-duration="1000">
                            <h1>الباقه الاولي</h1>
                            <ul>
                                <li>تحفيظ القرآن الكريم</li>
                                
                                <li>تجويد القرآن الكريم </li>
                               
                                <li>علم النحو والصرف</li>
                                
                                <li>القواعد القرآنية</li>
                       
                            </ul>
                        </div>
                        <div className="Box-Two" data-aos="flip-right" data-aos-duration="1000">
                            <h1>الباقه الثانيه</h1>
                            <ul>
                            <li>تحفيظ القرآن الكريم</li>
                                
                                <li>تجويد القرآن الكريم </li>
                               
                                <li>علم النحو والصرف</li>
                                
                                <li>القواعد القرآنية</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Card-one" data-aos="flip-right" data-aos-duration="1000">
                        <div className="Content">
                        <h1>الباقه الثالثه</h1>
                        <ul>
                        <li>تحفيظ القرآن الكريم</li>
                                
                                <li>تجويد القرآن الكريم </li>
                               
                                <li>علم النحو والصرف</li>
                                
                                <li>القواعد القرآنية</li>
                        </ul>
                        </div>
                         </div>
*/