import ImgThirdSection from "../opnionAssist/photo1711052824.webp"
import Img0ThirdSection from "../opnionAssist/photo1711052824 (1).webp"

import Img3ThirdSection from "../opnionAssist/photo1711052824 (4).webp"
import Img4ThirdSection from "../opnionAssist/photo1711052824 (5).webp"
import Img5ThirdSection from "../opnionAssist/photo1711052824 (6).webp"
import Img6ThirdSection from "../opnionAssist/photo1711052824 (7).webp"
import Img7ThirdSection from "../opnionAssist/photo1711052824 (8).webp"
import Img8ThirdSection from "../opnionAssist/photo1711052824 (9).webp"
import Img9ThirdSection from "../opnionAssist/photo1711052824 (10).webp"
import Img10ThirdSection from "../opnionAssist/photo1711052824 (11).webp"



import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const SwiperOpnion = () => {
    const [direction, setDirection] = useState('ltr');

    // Function to handle direction change
    const handleDirectionChange = () => {
        // Determine the new direction based on the current direction
        const newDirection = direction === 'rtl' ? 'ltr' : 'rtl';
        // Set the new direction
        setDirection(newDirection);
    };

    return (
        <>
            {/* Set the dir attribute dynamically */}
            <div dir={direction}>
               
                <Swiper
                    breakpoints={{
                        200: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        984: { slidesPerView: 3, spaceBetween: 10 }
                    }}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={ImgThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img0ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img3ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img4ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img5ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img6ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img7ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img8ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img9ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Box-img">
                            <img className="" src={Img10ThirdSection} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SwiperOpnion;
