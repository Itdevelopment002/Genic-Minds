import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
  },
};
const About = () => {
  return (
    <>
      <section className="about-section-six pt-0 " style={{ marginBottom: 0 }}>
        <div className="features-section pull-up pt-0"></div>
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">About Genic Minds</span>
                  <h2>Providing Cutting-Edge Business Solutions</h2>
                  <div className="text">
                    GenicMinds is an innovative IT product, services, and
                    consulting company based in Noida, Uttar Pradesh, India. The
                    company specialises in various market-facing units,
                    including e-governance, Internet of Things (IoT),
                    e-learning, data analytics, and e-commerce. These sectors
                    enable GenicMinds to serve a diverse range of clients across
                    B2G (Business to Government), B2B (Business to Business),
                    and B2C (Business to Consumer) segments.
                    <br />
                    <br />
                    By leveraging cutting-edge technologies and innovative
                    solutions, GenicMinds helps institutions and companies
                    transform their operations and realise their ambitions.
                    Their offerings are designed to empower organisations to
                    build a more resilient, efficient, secure, and sustainable
                    future.
                    <br />
                    <br />
                    For instance, in e-governance, GenicMinds provides solutions
                    that streamline public services, enhance transparency, and
                    improve citizen engagement. In the realm of IoT, the company
                    develops smart solutions that connect devices and optimize
                    processes, leading to greater operational efficiency. Their
                    e-learning platforms facilitate modern education and
                    training, making learning accessible and engaging for a
                    wider audience.
                  </div>
                </div>

                {/* <div className="btm-box">
                  <Link href="page-about" className="theme-btn btn-style-three">
                    <span className="btn-title">Discover More</span>
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <figure className="image wow fadeIn">
                    <img src="images/resource/men.png" alt="" />
                  </figure>
                  <div className="completed-projects">
                    <strong>90+</strong>
                    <div className="text">PROJECTS DONE</div>
                  </div>
                  <div className="experience bounce-y">
                    <strong>11</strong>
                    <div className="text">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section-six pt-0 pb-70 "
        style={{ marginTop: 0 }}
      >
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-1 order-lg-1 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <div className="text">
                    Through data analytics, GenicMinds enables organisations to
                    harness the power of their data, driving informed
                    decision-making and uncovering insights that propel growth.
                    Meanwhile, their e-commerce solutions are designed to
                    enhance online shopping experiences, support digital
                    transformation, and expand market reach.
                    <br />
                    <br />
                    Overall, GenicMinds is committed to helping its clients stay
                    ahead of the competition by providing tailored solutions
                    that address their unique challenges and opportunities in
                    today’s fast-paced digital landscape.
                  </div>
                </div>

                <div className="content-box">
                  <div className="about-block-four">
                    <i className="icon flaticon-business-018-startup"></i>
                    <h5 className="title">End to End Development</h5>
                    <div className="text">
                      Comprehensive solutions in web and mobile app development.
                    </div>
                  </div>

                  <div className="about-block-four">
                    <i className="icon flaticon-business-027-world"></i>
                    <h5 className="title">Custom Software Solutions</h5>
                    <div className="text">
                      Tailored software development to meet your unique business
                      requirements.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12 order-2 order-lg-2">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <figure className="image wow fadeIn">
                    <img src="images/resource/men.png" alt="" />
                  </figure>
                  <div className="completed-projects">
                    <strong>90+</strong>
                    <div className="text">PROJECTS DONE</div>
                  </div>
                  <div className="experience bounce-y">
                    <strong>11</strong>
                    <div className="text">
                      Years of <br />
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center light">
            <span className="sub-title">Services we’re offering</span>
            <h2>
              We’re Dedicated to Serve <br />
              you All Time
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-049-presentation"></i>
                <h6 className="title">
                  <Link href="page-service-details">
                    Digital Transformation
                  </Link>
                </h6>
              </div>
            </div>
            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-011-dollar"></i>
                <h6 className="title">
                  <Link href="page-service-details">
                    Application Development
                  </Link>
                </h6>
              </div>
            </div>
            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-061-meeting"></i>
                <h6 className="title">
                  <Link href="page-service-details">UI/UX Design</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-030-settings"></i>
                <h6 className="title">
                  <Link href="page-service-details">Data Science</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-054-graph"></i>
                <h6 className="title">
                  <Link href="page-service-details">IOT</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-020-hierarchy"></i>
                <h6 className="title">
                  <Link href="page-service-details">AI/ML</Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-011-dollar"></i>
                <h6 className="title">
                  <Link href="page-service-details">Graphic Design</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-049-presentation"></i>
                <h6 className="title">
                  <Link href="page-service-details">E-Learning</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-061-meeting"></i>
                <h6 className="title">
                  <Link href="page-service-details">Web Development</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-030-settings"></i>
                <h6 className="title">
                  <Link href="page-service-details">E-Governance</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-054-graph"></i>
                <h6 className="title">
                  <Link href="page-service-details">E-commerce Solutions</Link>
                </h6>
              </div>
            </div>

            <div className="feature-block-two dark col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <i className="icon flaticon-business-020-hierarchy"></i>
                <h6 className="title">
                  <Link href="page-service-details">Product Development</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="project-section style-two pb-0">
        <div className="auto-container">
          <div className="sec-title light">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title">recently Completed work</span>
                <h2>
                  Transforming and Enriching <br />
                  Leading Tech Solutions
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="text">
                  Our projects focus on delivering content and solutions that
                  are not just authentic but crafted with clear intent. We are
                  dedicated to creating meaningful experiences that deeply
                  engage our audience, prioritizing transparency and
                  dependability throughout the journey.
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .project-block {
              position: relative;
              overflow: hidden;
            }

            .content-box {
              position: absolute;
              bottom: 0;
              background: rgba(0, 0, 0, 0.9);
              color: white;
              width: 100%;
              padding: 10px;
              opacity: 0;
              transition: opacity 0.3s ease;
              text-align: left;
            }

            .project-block:hover .content-box {
              opacity: 1;
            }

            .image-box img {
              transition: transform 0.3s ease;
            }

            .project-block:hover .image-box img {
              transform: scale(1.1);
            }
          `}</style>

<div className="carousel-outer">
  <Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme">
    <SwiperSlide>
      <div className="project-block">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <Link href="images/resource/proj1.png" className="lightbox-image">
                <img src="images/resource/proj1.png" alt="Maac Solapur Project" />
              </Link>
            </figure>
            <Link href="page-project-details.html" className="icon">
              <i className="fa fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <div className="content-box">
            <h4 className="title">
              <Link href="page-project-details.html">Maac Solapur</Link>
            </h4>
            <p>
              Maya Academy of Advanced Cinematics (MAAC) is the media & entertainment education brand of Aptech Ltd., a global learning solutions provider since 1986.
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="project-block">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <Link href="images/resource/proj2.png" className="lightbox-image">
                <img src="images/resource/proj2.png" alt="Pragati Fiber Project" />
              </Link>
            </figure>
            <Link href="page-project-details.html" className="icon">
              <i className="fa fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <div className="content-box">
            <h4 className="title text-white">Pragati Fiber</h4>
            <p>
              Pragati Steel Fabrication & Fibers is an ISO 9001-2015 certified manufacturer in Solapur, specializing in children playground and open-air gym equipment.
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="project-block">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <Link href="images/resource/proj3.png" className="lightbox-image">
                <img src="images/resource/proj3.png" alt="Farm Tech Trade Project" />
              </Link>
            </figure>
            <Link href="page-project-details.html" className="icon">
              <i className="fa fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <div className="content-box">
            <h4 className="title text-white">Farm Tech Trade</h4>
            <p>
              Our team works with farmers, helping alleviate their distress and increase confidence in farming through innovative approaches.
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="project-block">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <Link href="images/resource/proj4.png" className="lightbox-image">
                <img src="images/resource/proj4.png" alt="Farm to Fork Project" />
              </Link>
            </figure>
            <Link href="page-project-details.html" className="icon">
              <i className="fa fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <div className="content-box">
            <h4 className="title text-white">Farm to Fork</h4>
            <p>
              Farm to Fork is a B2B e-commerce application for managing the demand and supply chain of farm produce.
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="project-block">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <Link href="images/resource/proj5.png" className="lightbox-image">
                <img src="images/resource/proj5.png" alt="Hello Goa Project" />
              </Link>
            </figure>
            <Link href="page-project-details.html" className="icon">
              <i className="fa fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <div className="content-box">
            <h4 className="title text-white">Hello Goa</h4>
            <p>
              A comprehensive booking platform for hotels, villas, casinos, clubs, and more in Goa.
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</div>

        </div>
      </section> */}

      <section className="team-section-two pb-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Our team expert</span>
            <h2>Foundations of Success</h2>
          </div>

          <div
            id="teamCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {/* Team Member 1 */}
                  <div
                    className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    style={{
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    data-wow-delay="400ms"
                  >
                    <div
                      className="inner-box"
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="info-box">
                        <h5 className="name">
                          <Link href="page-team-details.html">Abhay Swami</Link>
                        </h5>
                        <span className="designation">C.E.O and Founder</span>
                        <span>15+ Years of Experience</span>

                        <div className="social-links">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="image-box"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <figure className="image">
                          <Link href="page-team-details.html">
                            <img
                              src="/images/pillars/AbhaySwami.png"
                              alt="Abhay Swami"
                              style={{ maxHeight: "80%", width: "auto" }}
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>

                  {/* Team Member 2 */}
                  <div
                    className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    style={{
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    data-wow-delay="1500ms"
                  >
                    <div
                      className="inner-box"
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="info-box">
                        <h5 className="name">
                          <Link href="page-team-details.html">
                            Priyanka Swami
                          </Link>
                        </h5>
                        <span className="designation">M.D</span>
                        <span>9+ years of experience</span>
                        <div className="social-links">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="image-box"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <figure className="image">
                          <Link href="page-team-details.html">
                            <img
                              src="/images/pillars/PriyankaSwami.png"
                              alt="Priyanka Swami"
                              style={{ maxHeight: "80%", width: "auto" }}
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>

                  {/* Team Member 3 */}
                  <div
                    className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    style={{
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    data-wow-delay="1500ms"
                  >
                    <div
                      className="inner-box"
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="info-box">
                        <h5 className="name">
                          <Link href="page-team-details.html">
                            Sandeep Dutta
                          </Link>
                        </h5>
                        <span className="designation">Senior V.P</span>
                        <span>29+ years of Experience</span>
                        <div className="social-links">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="image-box"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <figure className="image">
                          <Link href="page-team-details.html">
                            <img
                              src="/images/pillars/SandeepDutta.png"
                              alt="Sandeep Dutta"
                              style={{ maxHeight: "80%", width: "auto" }}
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* Team Member 4 */}
                  <div
                    className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    style={{
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    data-wow-delay="1200ms"
                  >
                    <div
                      className="inner-box"
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="info-box">
                        <h5 className="name">
                          <Link href="page-team-details.html">
                            Abhash Singh
                          </Link>
                        </h5>
                        <span className="designation">Senior IT Head</span>
                        <span>14+ years of Experience</span>
                        <div className="social-links">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="image-box"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <figure className="image">
                          <Link href="page-team-details.html">
                            <img
                              src="/images/pillars/AbhashSingh.png"
                              alt="Abhash Singh"
                              style={{ maxHeight: "80%", width: "auto" }}
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Carousel Item */}
              <div className="carousel-item">
                <div className="row">
                  {/* Team Member 5 */}

                  {/* Add more team members as needed */}
                  <div
                    className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                    style={{
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    data-wow-delay="800ms"
                  >
                    <div
                      className="inner-box"
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="info-box">
                        <h5 className="name">
                          <Link href="page-team-details.html">Gaurav Tibe</Link>
                        </h5>
                        <span className="designation">
                          Sr. Business Dev. Manager
                        </span>
                        <span>6+ years of Experience</span>
                        <div className="social-links">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="image-box"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <figure className="image">
                          <Link href="page-team-details.html">
                            <img
                              src="/images/pillars/GauravTibe.png"
                              alt="Gaurav Tibe"
                              style={{ maxHeight: "80%", width: "auto" }}
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#teamCarousel"
              data-bs-slide="prev"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                width: "20px",
                height: "40px",
                borderRadius: "50%",
                border: "none" /* Remove border */,
                display: "flex" /* Center the icon */,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent" /* Remove background */,
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{
                  backgroundColor:
                    "rgba(0, 0, 0, 0.5)" /* Dark color for visibility */,
                  borderRadius: "50%" /* Optional for rounded edges */,
                  width: "20px" /* Adjust width of the icon */,
                  height: "20px" /* Adjust height of the icon */,
                }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#teamCarousel"
              data-bs-slide="next"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                width: "20px",
                height: "40px",
                borderRadius: "50%",
                border: "none" /* Remove border */,
                display: "flex" /* Center the icon */,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent" /* Remove background */,
              }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{
                  backgroundColor:
                    "rgba(0, 0, 0, 0.5)" /* Dark color for visibility */,
                  borderRadius: "50%" /* Optional for rounded edges */,
                  width: "20px" /* Adjust width of the icon */,
                  height: "20px" /* Adjust height of the icon */,
                }}
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* <button className="carousel-control-prev" style={} type="button" data-bs-target="#teamCarousel" data-bs-slide="prev" style={{ top: '50%', transform: 'translateY(-50%)', width: '40px', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '50%' }}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#teamCarousel" data-bs-slide="next" style={{ top: '50%', transform: 'translateY(-50%)', width: '40px', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '50%' }}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>*/}
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
