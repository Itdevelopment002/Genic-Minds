import Link from "next/link";

const Team1 = () => {
    return (
        <section className="team-section">
            <div className="anim-icons">
                <span className="icon icon-lines bounce-x"></span>
                <span className="icon icon-dots bounce-y"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Our team expert</span>
                    <h2>Foundations of Success</h2>
                </div>

                <div className="row">
                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="page-team-details">
                                        <img src="/images/pillars/AbhashSingh.png" alt="Abhash Singh" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link href="page-team-details">Abhash Singh</Link>
                                </h5>
                                <span className="designation">Lead Developer</span>
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="page-team-details">
                                        <img src="/images/pillars/AbhaySwami.png" alt="Abhay Swami" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link href="page-team-details">Abhay Swami</Link>
                                </h5>
                                <span className="designation">Project Manager</span>
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="page-team-details">
                                        <img src="/images/pillars/GauravTibe.png" alt="Gaurav Tibe" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link href="page-team-details">Gaurav Tibe</Link>
                                </h5>
                                <span className="designation">Senior Developer</span>
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="page-team-details">
                                        <img src="/images/pillars/PriyankaSwami.png" alt="Priyanka Swami" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link href="page-team-details">Priyanka Swami</Link>
                                </h5>
                                <span className="designation">UI/UX Designer</span>
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="page-team-details">
                                        <img src="/images/pillars/SandeepDutta.png" alt="Sandeep Dutta" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="info-box">
                                <h5 className="name">
                                    <Link href="page-team-details">Sandeep Dutta</Link>
                                </h5>
                                <span className="designation">Operations Head</span>
                                <div className="social-links">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team1;
