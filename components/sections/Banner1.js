import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
    modules: [EffectFade, Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    navigation: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    loop: true,
};

const Banner1 = () => {
    return (
        <>
            <section className="main-slider">
                <div className="outer-box">
                    <Swiper {...swiperOptions} className="owl-carousel">
                        <SwiperSlide className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}></div>
                            <div className="overlay" style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark overlay for contrast
                                position: 'absolute', // Position it absolutely
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 5 // Ensure it's above the background image
                            }}></div>
                            <div className="auto-container content-box pt-40 pb-150" style={{ position: 'relative', zIndex: 10 }}>
                                <div className="row">
                                    <div className="content-column col-lg-7 col-md-12 col-sm-12 pt-100">
                                        <span className="title animate-1" style={{ fontSize: '20px' }}>Comprehensive Digital Solutions</span>
                                        <h1 className="animate-2 pt-40" style={{ fontSize: '60px' }}>
                                            Your Partner in <br />
                                            <span className="color1" style={{
                                                background: "linear-gradient(to right, white, #1b6eb3, white)",
                                                WebkitBackgroundClip: "text",
                                                color: "transparent"
                                            }}>
                                                Cutting-Edge IT Solutions

                                            </span>
                                        </h1>
                                        {/* Original button background style */}
                                        <div className="" style={{
                                           
                                            padding: '20px',
                                            borderRadius: '8px'
                                        }}>
                                            <div className="btn-box mt-50">
                                                <div className="btn-outer">
                                                    <Link href="page-contact" className="theme-btn btn-style-one animate-3">
                                                        <span className="btn-title">Get Started</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: 'url(/images/main-slider/2.jpg)' }}></div>
                            <div className="overlay" style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay for contrast
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 5 // Ensure it's above the background image
                            }}></div>
                            <div className="auto-container content-box pt-40 pb-150" style={{ position: 'relative', zIndex: 10 }}>
                                <div className="row">
                                    <div className="content-column col-lg-7 col-md-12 col-sm-12 pt-100">
                                        <span className="title animate-1" style={{ fontSize: '20px' }}>Your Vision, Our Expertise</span>
                                        <h1 className="animate-2 pt-40" style={{ fontSize: '60px' }}>
                                        Developing Digital Solutions that <br /><span className="color1"> Drive Impact</span>
                                        </h1>
                                        {/* Original button background style */}
                                        <div className="transparent-bg" style={{
                                            // Light background for button section
                                            padding: '20px',
                                            borderRadius: '8px'
                                        }}>
                                            <div className="btn-box mt-50">
                                                <div className="btn-outer">
                                                    <Link href="page-contact" className="theme-btn btn-style-one animate-3">
                                                        <span className="btn-title">Get Started Today</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Banner1;
