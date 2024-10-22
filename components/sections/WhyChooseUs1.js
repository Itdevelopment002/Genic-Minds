import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const WhyChooseUs1 = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section className="why-choose-us-four">
            <div className="auto-container">
                <div className="row align-items-lg-center">
                    <div className="content-column col-xl-5 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Why Choose Genic Minds</span>
                                <h2>Your Trusted Partner in Technology</h2>
                                {/* <div className="text">
                                    At Genic Minds, we empower businesses through innovative solutions in app development, IoT, graphic design, and more. Our commitment to excellence and customer satisfaction sets us apart.
                                </div> */}
                            </div>
    
                            <div className="content-box pe-lg-5">
                                <div className="whychose-block-four">
                                    <i className="icon flaticon-business-018-startup"></i>
                                    <h5 className="title">Tailored Solutions</h5>
                                    <div className="text">We customize our services to meet your unique business needs, ensuring the perfect fit for your goals.</div>
                                </div>
    
                                <div className="whychose-block-four">
                                    <i className="icon flaticon-business-012-startup"></i>
                                    <h5 className="title">Expert Team</h5>
                                    <div className="text">Our team consists of industry experts dedicated to delivering high-quality results, from concept to execution.</div>
                                </div>

                                <div className="whychose-block-four">
                                    <i className="icon flaticon-business-006-target"></i>
                                    <h5 className="title">Affordable Excellence</h5>
                                    <div className="text">We offer competitive pricing without compromising on quality, making top-notch services accessible.</div>
                                </div>

                                <div className="whychose-block-four">
                                    <i className="icon flaticon-business-030-settings"></i>
                                    <h5 className="title">Continuous Support</h5>
                                    <div className="text">Our commitment doesn't end at delivery; we provide ongoing support to ensure your success.</div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="image-column col-xl-7 col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInRight">
                            <figure className="image overlay-anim">
                                <img src="images/background/bg2.jpg" alt="Genic Minds"/>
                                <div className="video-box video-box-home1 wow fadeInUp">
                                    <div className="content">
                                        <a onClick={() => setOpen(true)} className="play-now-two lightbox-image"><i className="icon fa fa-play"></i></a>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default WhyChooseUs1;
