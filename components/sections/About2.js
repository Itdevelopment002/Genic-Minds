import Link from "next/link"
const About2 = () => {
    return (
        <>
        <section className="about-section-seven pt-0">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column offset-lg-1 col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">About Our Company</span>
                                <h2>We Execute Our ideas From The Start to Finish</h2>
                                <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a
                                tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                            </div>
    
                            <div className="content-box">
                                <div className="row">
                                    <div className="about-block-seven col-lg-6 col-md-6 col-sm-12">
                                        <h5 className="title"><i className="icon flaticon-business-020-hierarchy"></i> Expert Team Members </h5>
                                    </div>
                                    <div className="about-block-seven col-lg-6 col-md-6 col-sm-12">
                                        <h5 className="title"><i className="icon flaticon-business-002-graph"></i> Manage Tech Services </h5>
                                    </div>
                                </div>	
                                <div className="text">There are many of Ipsum but the have Aliq is notm hendr erit a augue insu image pellen simply free text</div>
                                <div className="btn-box d-flex justify-content-between">
                                    <div className="founder-info">
                                        <div className="thumb"><img src="images/resource/thumb-1.jpg" alt=""/></div>
                                        <h5 className="name">Kevin Martin</h5>
                                        <span className="designation">Co Founder</span>
                                    </div>
                                    <Link href="page-about" className="theme-btn btn-style-two"><span className="btn-title">Discover more</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="image-column col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-3.jpg" alt=""/>
                            </figure>
                            <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-4.jpg" alt=""/>
                            </figure>
                            <div className="experience">
                                <img src="images/resource/image-1.jpg" alt="" className="icon"/>
                                <strong>3600+</strong> Satisfied Client
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default About2