import Link from "next/link";

export default function Animalprojectdetails() {
  return (
    <>
      {/* Animal Project Details Start */}
      <section className="project-details">
        <div className="container">
          <div className="project-details__content">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="project-details__content-left">
                  <h3 className="">Smart Neckband for Livestock Monitoring</h3>
                  <p className="">
                    A smart neckband is a wearable device designed to monitor livestock activity, health, and fertility, particularly in dairy cattle. This wireless & GSM-based device is typically worn around the neck of the animal and is equipped with various sensors that monitor health and behavior, measuring key reproductive parameters such as body temperature, heart rate, activity level, and rumination patterns.
                  </p>
                  <p className="mb-5">
                    The data collected by the smart neckband is transmitted to the farmer's smartphone or computer, allowing real-time tracking and monitoring of the animal's reproductive health. This real-time data ensures timely interventions for health-related issues, optimizing the overall well-being and productivity of the livestock. Additionally, it helps farmers manage herd fertility cycles more efficiently.
                  </p>

                  <h3 className="">Advanced Features and Benefits</h3>
                  <p className="mb-5">
                    In addition to monitoring reproductive health, the smart neckband provides insights into the general health and behavior of livestock. It tracks daily activity levels, eating habits, and resting periods, helping farmers detect early signs of illness or stress. The integration with cloud services enables historical data analysis, predicting health trends and optimizing farm management strategies.
                  </p>

                  <h3 className="">Future of Livestock Management</h3>
                  <p className="">
                    With the rise of precision agriculture, devices like the smart neckband represent the future of livestock management. These technologies enable data-driven decision-making, enhancing farm productivity while reducing costs associated with manual monitoring and unexpected veterinary expenses. As technology evolves, additional features such as GPS tracking, environmental monitoring, and AI-driven analytics will likely be incorporated, making livestock management even more efficient.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="project-details__content-right">
                  <div className="project-details__details-box">
                    <div className="project-details__bg-shape"></div>
                    <ul className="list-unstyled project-details__details-list">
                      <li>
                        <p className="project-details__client">Date</p>
                        <h4 className="project-details__name">10th October, 2024</h4>
                      </li>
                      <li>
                        <p className="project-details__client">Client</p>
                        <h4 className="project-details__name">Agriculture & Livestock Monitoring Department</h4>
                      </li>
                      <li>
                        <p className="project-details__client">Website</p>
                        <h4 className="project-details__name">www.livestockmonitor.com</h4>
                      </li>
                      <li>
                        <p className="project-details__client">Location</p>
                        <h4 className="project-details__name">Pune, India</h4>
                      </li>
                      <li>
                        <p className="project-details__client">Value</p>
                        <h4 className="project-details__name">Confidential</h4>
                      </li>
                      <li>
                        <div className="project-details__social">
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-facebook"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-linkedin"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-xl-12">
                <div className="project-details__pagination-box">
                  <ul className="project-details__pagination list-unstyled clearfix">
                    <li className="next">
                      <div className="icon">
                        <Link href="#" aria-label="Previous">
                          <i className="lnr lnr-icon-arrow-left"></i>
                        </Link>
                      </div>
                      <div className="content">Previous</div>
                    </li>
                    <li className="count">
                      <Link href="#"></Link>
                    </li>
                    <li className="count">
                      <Link href="#"></Link>
                    </li>
                    <li className="count">
                      <Link href="#"></Link>
                    </li>
                    <li className="count">
                      <Link href="#"></Link>
                    </li>
                    <li className="previous">
                      <div className="content">Next</div>
                      <div className="icon">
                        <Link href="#" aria-label="Next">
                          <i className="lnr lnr-icon-arrow-right"></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Animal Project Details End */}
    </>
  );
}
