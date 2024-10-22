import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: true
    };
const Banner2 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="banner-section">

                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="sub-title animate-1">Solutions for your businesses</span>
                                    <h1 className="title animate-2">Innovative Tech <br/>Solutions</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="page-about." className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                        <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i>watch video</a>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}></div>
                            <div className="auto-container">
                                <div className="content-box">
                                    <span className="sub-title animate-1">Solutions for your businesses</span>
                                    <h1 className="title animate-2">Innovative Tech <br/>Solutions</h1>
                                    <div className="btn-box animate-3">
                                        <Link href="page-about." className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                        <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play"></i>watch video</a>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Banner2