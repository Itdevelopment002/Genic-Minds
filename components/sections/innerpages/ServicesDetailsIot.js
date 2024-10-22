import Link from 'next/link';
import { useState } from 'react';

const ServicesDetailsIot = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* Start Services Details Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-list">
                    <ul>
                      <li>
                        <Link href="page-service-details" className="current">
                          <i className="fas fa-angle-right"></i>
                          <span> Application Development</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> AI/ML</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> IoT</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> Data Science</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> UI/UX</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> Web Development</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> Graphic Design</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> E-Learning</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> E-Commerce</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span> E-Governance</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget banner-widget">
                  <div className="widget-content" style={{ backgroundImage: 'url(/images/resource/contact.jpg)' }}>
                    <div className="shape" style={{ backgroundImage: 'url(/images/resource/overlay-shape.png)' }}></div>
                    <div className="content-box">
                      <div className="icon-box">
                        <i className="lnr lnr-icon-pie-chart"></i>
                      </div>
                      <h3>IoT Solutions</h3>
                      <Link href="page-contact" className="theme-btn btn-style-one">
                        <span className="btn-title"> Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Services Details Sidebar */}

            {/* Start Services Details Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
              
                <h2 className="mt-4">IoT Solutions</h2>
                <p>
                  The Internet of Things (IoT) enables devices to communicate with each other over the internet, 
                  transforming how businesses operate. Our IoT solutions help organizations integrate smart 
                  devices into their operations, allowing for real-time data collection and decision-making.
                </p>
                <p>
                  From home automation to industrial IoT, we provide customized solutions to fit your needs. 
                  Our team excels in implementing IoT systems that connect devices, manage data, and automate 
                  processes, bringing efficiency, security, and scalability to your business.
                </p>
                <div className="content">
                  <div className="text">
                    <h3>Why Choose Our IoT Solutions?</h3>
                    <p>
                      We specialize in delivering robust IoT architectures that are secure, scalable, and easy to manage. 
                      With experience across various industries, we ensure seamless integration with your existing systems, 
                      improving operational efficiency and reducing costs.
                    </p>
                  </div>
                  <div className="feature-list">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Smart Device Integration</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Data Collection & Management</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Industrial IoT Solutions</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Automation & Control Systems</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Cloud & Edge Computing</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Security & Privacy</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End Services Details Content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailsIot;
