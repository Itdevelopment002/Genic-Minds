import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(/images/background/2.jpg)" }}
        ></div>
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <Link href="/">
                      <img src="images/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="text">
                  To be pioneer in building innovative products & solutions and re-define excellence in the realms of IT Services. Together we envision a future where technology transforms lives and thrives in a Digital World
                  </div>
                  <ul className="social-icon-two">
                    

                  <li>
                      <Link href="https://www.facebook.com/people/Genicminds/61565754714365/">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com/people/Genicminds/61565754714365/">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                   
                    <li>
                      <Link href="https://www.instagram.com/genic_minds?utm_source=qr&igsh=dXI3eXI2cml2NTFy
">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <h3 className="widget-title">Explore</h3>
                  <ul className="user-links">
                    <li>
                      <Link href="/page-about">About Company</Link>
                    </li>
                    <li>
                      <Link href="/news-grid">Join us</Link>
                    </li>
                    <li>
                      <Link href="/page-service-details">Services</Link>
                    </li>
                    {/* <li><Link href="/page-projects">Our Projects</Link></li> */}
                    <li>
                      <Link href="/page-contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget contact-widget">
                  <h3 className="widget-title">Contact</h3>
                  <div className="widget-content">
                    <div className="text">
                      Urbtech Trade Centre Tower A Office No 1402 14th floor
                      Plot B-35, Sector 132 Noida 201301 Uttar Pradesh, India.
                    </div>
                    <ul className="contact-info">
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        <Link href="mailto:needhelp@yourdomain.com">
                        genicminds@gmail.com

                        </Link>
                        <br />
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        <Link href="mailto:needhelp@yourdomain.com">
                        info@genicminds.in

                        </Link>
                        <br />
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        <Link href="mailto:needhelp@yourdomain.com">
                        sales@genicminds.in

                        </Link>
                        <br />
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>{" "}
                        <Link href="mailto:needhelp@yourdomain.com">
                        support@genicminds.in
                        </Link>
                        <br />
                      </li>
                      {/* <li><i className="fa fa-phone-square"></i> <Link href="tel:+926668880000">+91 987 888 5230</Link><br/></li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <h3 className="widget-title">India Presence</h3>
                  <ul className="user-links">
                    <li> Noida, NCR</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>Solapur</li>
                    <li>Raipur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
