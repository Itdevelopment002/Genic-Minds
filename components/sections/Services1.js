import Link from "next/link";

const Services1 = () => {
    return (
        <>
            <section className="services-section-four">
                <div className="anim-icons">
                    <span className="icon icon-lines-9-top bounce-x"></span>
                    <span className="icon icon-dots-9-top bounce-y"></span>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="sec-title col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <span className="sub-title">Services we offer</span>
                            <h2>We Provide Full Range Services</h2>
                        </div>

                        <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <Link href="page-service-details">
                                <div className="inner-box" style={{ cursor: 'pointer' }}>
                                    <div className="icon-box">
                                        <i className="icon flaticon-business-012-startup"></i>
                                    </div>
                                    <h5 className="title">IOT</h5>
                                    <div className="text">Empowering connections in a smart world.</div>
                                </div>
                            </Link>
                        </div>

                        <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <Link href="page-service-details">
                                <div className="inner-box" style={{ cursor: 'pointer' }}>
                                    <div className="icon-box">
                                        <i className="icon flaticon-business-046-like"></i>
                                    </div>
                                    <h5 className="title">Data Science</h5>
                                    <div className="text">Innovative apps tailored for your business needs.</div>
                                </div>
                            </Link>
                        </div>

                        <div className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <Link href="page-service-details">
                                <div className="inner-box" style={{ cursor: 'pointer' }}>
                                    <div className="icon-box">
                                        <i className="icon flaticon-business-006-target"></i>
                                    </div>
                                    <h5 className="title">E-Learning</h5>
                                    <div className="text">Unlock insights and drive informed decisions with AI/ML.</div>
                                </div>
                            </Link>
                        </div>

                        <div className="row wow fadeInUp" data-wow-delay="1400ms">
                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-054-graph"></i>
                                        </div>
                                        <h5 className="title">E-Governance</h5>
                                        <div className="text">Crafting intuitive experiences that delight users.</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-030-settings"></i>
                                        </div>
                                        <h5 className="title">IT Development</h5>
                                        <div className="text">Building responsive and scalable web solutions.</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-012-startup"></i>
                                        </div>
                                        <h5 className="title">Software Testing</h5>
                                        <div className="text">Visual storytelling that captivates and communicates.</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-002-graph"></i>
                                        </div>
                                        <h5 className="title">Social Media Marketing
                                        </h5>
                                        <div className="text">Transforming education through engaging online platforms.</div>
                                    </div>
                                </Link>
                            </div>

                           

                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-046-like"></i>
                                        </div>
                                        <h5 className="title">Digital Marketing</h5>
                                        <div className="text">Streamlining public services for a smarter future.</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-046-like"></i>
                                        </div>
                                        <h5 className="title">UI/UX </h5>
                                        <div className="text">Streamlining public services for a smarter future.</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                        <div className="icon-box">
                                            <i className="icon flaticon-business-046-like"></i>
                                        </div>
                                        <h5 className="title">Graphic Design</h5>
                                        <div className="text">Streamlining public services for a smarter future.</div>
                                    </div>
                                </Link>
                            </div>
                            {/* <div className="service-block-six col-lg-3 col-md-6 col-sm-12">
                                <Link href="page-service-details">
                                    <div className="inner-box" style={{ cursor: 'pointer' }}>
                                    <p>Get Your IT Technology Solutions</p>
                                    <h4>Don't Waste a Second! Call Us to Solve Your Any IT Solutions</h4>
                                    <Link href="page-contact" className="theme-btn btn-style-two"><span className="btn-title">Find your solution</span></Link>
                                    </div>
                                </Link>
                            </div> */}

                            {/* <div className="short-banner-six col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                                <div className="banner-inner">
                                    <p>Get Your IT Technology Solutions</p>
                                    <h4>Don't Waste a Second! Call Us to Solve Your Any IT Solutions</h4>
                                    <Link href="page-contact" className="theme-btn btn-style-two"><span className="btn-title">Find your solution</span></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services1;
