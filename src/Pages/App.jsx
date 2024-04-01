import { useDispatch, useSelector } from "react-redux";
import { AllBlog } from "../Store/BlogsSlice";
import { visitorsIp } from "../Store/AnalysisSlice";
import { useEffect } from "react";

import "../App.css";
import img1 from "../Assist/First-Section.jpeg";
import img2 from "../Assist/bg.da5f502892f862ed1de2.png";

// import imgMain from "../Assist/mainLogo.jpeg"
import Ser1 from "../Assist/Ser1.svg";
import Ser2 from "../Assist/Ser2.svg";
import Ser3 from "../Assist/Ser3.svg";
import Ser4 from "../Assist/Ser4.svg";
import Ser5 from "../Assist/Ser5.svg";
import Ser6 from "../Assist/Ser6.svg";

import logoyasser from "../Assist/yasserLogo.png";
import sec2main from "../Assist/sec2main.jpeg";
import { useNavigate, Link } from "react-router-dom";

import CountUp from "react-countup";
import SwiperOpnion from "../swiper-js/Swiper-Opnion";

import { useTranslation, initReactI18next } from "react-i18next";

// import img5 from "../Assist/img-Section-Two1.jpg"
const App = () => {
  const navigate = useNavigate();

  const { blogs } = useSelector((state) => state.Blogs);

  const dispatch = useDispatch();
  const LastThreeItems = blogs?.data.slice(-3);

  useEffect(() => {
    // document.body.dir = "rtl"

    dispatch(AllBlog());
    dispatch(visitorsIp());
  }, [dispatch]);

  const { t } = useTranslation();

  return (
    <>
      <div className="App ">
        <div className="First-Section PaddingFullApp">
          <div className="Img-Center-Bg">
            <img className="  Img-First-Section " src={img2} alt="" />
            <span className=""></span>
          </div>
          <div className="Content">
            <div className="Txt">
              <img src={logoyasser} alt="" />

              <p className=" animate__animated animate__bounce">
                {t("switchLanguage")}
              </p>
              <button
                onClick={() => {
                  navigate("/AboutMe");
                }}
              >
                {t("تواصل معانا")}
              </button>
            </div>
            <div className="Img-Cover">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="Secound-Section PaddingFullApp  ">
          <div
            className="Box-img"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="Box-Img-1">
              <img className="img-fluid" src={sec2main} alt="" />
            </div>
          </div>
          <div className="Box-Txt">
            <h4 data-aos="fade-down-right" data-aos-duration="1000">
              {t("ماذا عنا")}
            </h4>
            <h2 data-aos="fade-down-right" data-aos-duration="1000">
              {t(`اهلا بكم في مركز `)}
              <span> {t("خيركم")} </span>
              {t("لتحفيظ القران الكريم")}
            </h2>
            <p data-aos="fade-down-right" data-aos-duration="1000">
              {t("نحن نقدم خدمات تحفيظ القران الكريم")}
            </p>
            <div
              className="Box"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <button
                onClick={() => {
                  navigate("/Services");
                }}
              >
                {t("اكتشف اكثر")}
              </button>
              <div className="Txt">
                <a
                  href="
https://wa.me/+201125752800"
                >
                  <p>{t("تحدث معانا")}: 01125752800</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Third-Section PaddingFullApp ">
        <span></span>
          <div className="Head-Txt text-center">
            <h5>{t("اركان الاسلام")}</h5>
            <h3>{t("اركان الاسلام الخمسه")}</h3>
          </div>
          <div className="Img-Section-Third">
            <div className="Container-Box">
              <SwiperD />
            </div>
          </div>
        </div> */}
        <div className="Four-Section PaddingFullApp ">
          <div className="Head-Txt text-center">
            <h5>{t("خدمتنا")}</h5>
            <h2>{t("خدمات مركز")}</h2>
            <h3>{t("خيركم")}</h3>
          </div>
          <div className="Content">
            <div className="Cards">
              <div className="Box-Card-1 ">
                <div
                  className="Card-1"
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <img src={Ser1} alt="" />
                  <h2>{t("تحفيظ القرآن الكريم")}</h2>
                  <p>
                    {t(
                      "نعمل علي تدريب الطلاب على تحفيظ القرآن والمراجعة المنتظمة"
                    )}
                  </p>
                </div>
                <div
                  className="Card-2"
                  data-aos="flip-right"
                  data-aos-duration="2000"
                >
                  <img src={Ser2} alt="" />
                  <h2>{t("تجويد القرآن الكريم")}</h2>
                  <p>
                    {t(
                      "نعمل ع تدريس قواعد التجويد والمخارج الصوتية لتحسين جودة التلاوة"
                    )}
                  </p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div
                  className="Card-1"
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                >
                  <img src={Ser3} alt="" />
                  <h2>{t("علم النحو والصرف")}</h2>
                  <p>
                    {t(
                      "تُعنى بتعليم النحو والصرف لفهم بنية الجمل والكلمات في القرآن"
                    )}
                  </p>
                </div>
                <div
                  className="Card-2"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <img src={Ser4} alt="" />
                  <h2>{t("القواعد القرآنية")}</h2>
                  <p>
                    {t("نقوم بتعليم القواعد القرآنية لفهم النصوص بشكل أفضل")}
                  </p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div
                  className="Card-1"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src={Ser5} alt="" />
                  <h2>{t("نور البيان والقاعدة النورانية")}</h2>
                  <p>
                    {t("تم تصميم هذه الدورة كخطوة أولى في تعلم القرآن للأطفال")}
                  </p>
                </div>
                <div
                  className="Card-2"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src={Ser6} alt="" />
                  <h2>{t("الأخلاق والتربية الإسلامية")}</h2>
                  <p>
                    {t(
                      "تسعى إلى تعزيز القيم والأخلاق الإسلامية خلال عملية التحفيظ"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Five-Section PaddingFullApp ">
          <div className="Box-Txt">
            <h2>{t("مركز خيركم")}</h2>
            <h3>{t("لتحفيظ القرآن الكريم")}</h3>
            <p>
              {t(
                "نعمل من اجل تطوير القيم والأخلاق وتحفيظ القرآن الكريم واحكام التجويد وتعليم نور البيان والقاعدة النورانية"
              )}
            </p>
            <button
              onClick={() => {
                navigate("/AboutMe");
              }}
            >
              {t("اعرف اكثر")}
            </button>
          </div>
        </div>
        <div className="Center-Opnion-Section">
          <div className="Content">
            <div className="Head-Txt text-center">
              <h5>{t("اراء بعض طلابنا")}</h5>
              <h3>{t("مركز خيركم لتحفيظ القرآن الكريم")}</h3>
            </div>
            <SwiperOpnion />
          </div>
        </div>
        <div className="Six-Section PaddingFullApp ">
          <div className="Head-Txt">
            <h4>{t("المدونه")}</h4>
            <h1>{t("اخر المقالات والاحداث")}</h1>
          </div>
          <div className="Cards">
            {LastThreeItems?.map((blog) => (
              <div className="Card" key={blog._id}>
                <div className="Box-Img">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${blog.img}`}
                    alt=""
                  />
                </div>
                <Link to={`/BlogOne/${blog._id}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <div className="End-Txt">
                  <Link to={`/BlogOne/${blog._id}`}>
                    <span></span>
                    <p>اقرا اكثر</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Seven-Section PaddingFullApp ">
          <div className="Content">
            <div className="Box">
              <div className="Txt">
                <h3>{t("حصص")}</h3>
                <p>
                  <CountUp start={0} end={1000} duration={30} />+
                </p>
              </div>
              <div className="Txt">
                <h3>{t("معلم")}</h3>
                <p>
                  <CountUp start={0} end={40} duration={50} />+
                </p>
              </div>
              <div className="Txt">
                <h3>{t("طالب")}</h3>
                <p>
                  <CountUp start={0} end={650} duration={40} />+
                </p>
              </div>
            </div>
            <div className="Box">
              <div className="Txt">
                <h3>{t("منسق")}</h3>
                <p>
                  <CountUp start={0} end={25} duration={60} />+
                </p>
              </div>
              <div className="Txt">
                <h3>{t("اجازات")}</h3>

                <p>
                  <CountUp start={0} end={45} duration={30} />+
                </p>
              </div>
              <div className="Txt">
                <h3>{t("المتفوقين")}</h3>
                <p>
                  <CountUp start={0} end={200} duration={50} />+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Pop-up-F">
          <a href="https://wa.me/+201125752800">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="Pop-up-C">
          <a
            href="
https://www.facebook.com/profile.php?id=100091518327460&mibextid=ZbWKwL"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
