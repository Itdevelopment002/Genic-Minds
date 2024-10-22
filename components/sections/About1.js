import Link from "next/link";
const About1 = () => {
  return (
    <>
      <section className="about-section-six pt-0 pb-70">
        <div className="features-section pull-up pt-0">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row justify-content-center">
                <div className="service-block-three col wow fadeInUp">
                  <div className="inner-box">
                    <i className="icon flaticon-business-002-graph"></i>
                    <h6 className="title">
                      <Link href="page-service-details">
                        Product <br />
                        Development
                      </Link>
                    </h6>
                    <div className="text">
                    Transforming innovative ideas into successful products through a comprehensive end-to-end development process.
                    </div>{" "}
                    {/* Updated text */}
                  </div>
                </div>

                <div
                  className="service-block-three col wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="inner-box">
                    <i className="icon flaticon-business-010-startup"></i>
                    <h6 className="title">
                      <Link href="page-service-details">
                        Tech <br />
                        Innovation
                      </Link>
                    </h6>
                    <div className="text">
                    Driving technological advancements that empower businesses to stay ahead of the competition and embrace digital transformation.
                    </div>
                  </div>
                </div>

                <div
                  className="service-block-three col wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="inner-box">
                    <i className="icon flaticon-business-030-settings"></i>
                    <h6 className="title">
                      <Link href="page-service-details">Marketing</Link>
                    </h6>
                    <div className="text">
                    Strategic marketing solutions that drive engagement and boost growth.


                    </div>
                  </div>
                </div>

                <div
                  className="service-block-three col wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="inner-box">
                    <i className="icon flaticon-business-045-stationery"></i>
                    <h6 className="title">
                      <Link href="page-service-details">
                        Tech Product
                        <br />
                        Development
                      </Link>
                    </h6>
                    <div className="text">
                    Turning ideas into viable products through research, design, development, and testing to meet user needs.

                    </div>
                  </div>
                </div>

                <div
                  className="service-block-three col wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  <div className="inner-box">
                    <i className="icon flaticon-business-054-graph"></i>
                    <h6 className="title">
                      <Link href="page-service-details">
                        Future <br />
                        Technologies
                      </Link>
                    </h6>
                    <div className="text">
                      Data-driven insights for smarter decisions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <div className="text mt-0">
                  GenicMinds is an innovative IT product, services, and consulting company based in Noida, Uttar Pradesh, India. The company specialises in various market-facing units, including e-governance, Internet of Things (IoT), e-learning, data analytics, and e-commerce. These sectors enable GenicMinds to serve a diverse range of clients across B2G (Business to Government), B2B (Business to Business), and B2C (Business to Consumer) segments.
                  </div>
                </div>

                <div className="content-box">
                  <div className="about-block-four">
                    <i className="icon flaticon-business-018-startup"></i>
                    <h5 className="title">Our Vision</h5>
                    <div className="text">
                      To be pioneer in building innovative products & solutions
                      and re-define excellence in the realms of IT Services.
                      Together we envision a future where technology transforms
                      lives and thrives in a Digital World
                    </div>
                  </div>

                  <div className="about-block-four">
                    <i className="icon flaticon-business-027-world"></i>
                    <h5 className="title">Our Mission</h5>
                    <div className="text">
                      We leverage technology to deliver tailored digital
                      experiences as IT Solutions that enable businesses &
                      institutions to enhance their brand presence, effectively
                      engage their customers, ensure Data Security, achieve
                      measurable results and realise full potential in their
                      core business.{" "}
                    </div>
                  </div>

                  {/* <ul className="list-style-three">
                        <li>Web & Mobile App Development</li>
                        <li>E-learning and E-Governance Solutions</li>
                        <li>IoT Implementation</li>
                        <li>E-commerce Development</li>
                        <li>UI/UX Design</li>
                        <li>Data Science</li>
                    </ul> */}
                </div>

                <div className="btm-box">
                  <Link href="page-about" className="theme-btn btn-style-three">
                    <span className="btn-title">Discover More</span>
                  </Link>
                </div>
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
    </>
  );
};
export default About1;
