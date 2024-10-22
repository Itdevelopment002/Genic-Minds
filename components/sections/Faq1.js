import { useState } from "react";
const Faq1 = () => {
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
      <section className="faqs-section style-two">
        <div className="auto-container">
          <div className="row">
            <div className="faq-column col-xl-6 col-lg-12 col-md-12 order-4">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Questions & answers</span>
                  <h2>See Frequently Asked Questions</h2>
                </div>

                <ul className="accordion-box wow fadeInRight">
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 1 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(1)}
                    >
                      What services does GenicMinds offer?{" "}
                      <i className="icon fa fa-angle-down"></i>
                    </div>
                    <div
                      className={
                        isActive.key == 1
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                          GenicMinds specializes in e-governance, Internet of
                          Things (IoT), e-learning, data analytics, and
                          e-commerce. We provide tailored solutions in these
                          areas to meet the unique needs of our clients.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 2 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(2)}
                    >
                      Who are GenicMinds' typical clients? 
                      {" "}
                      <i className="icon fa fa-angle-down"></i>
                    </div>
                    <div
                      className={
                        isActive.key == 2
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                        We serve a diverse range of clients across B2G (Business to Government), B2B (Business to Business), and B2C (Business to Consumer) segments, including government institutions, corporations, educational organizations, and individual consumers.

                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 3 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(3)}
                    >
                      How does GenicMinds approach project development? {" "}
                      <i className="icon fa fa-angle-down"></i>
                    </div>
                    <div
                      className={
                        isActive.key == 3
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                        We follow a client-centric approach, beginning with an in-depth understanding of your specific challenges and goals. Our team then collaborates with you throughout the project lifecycle to ensure successful implementation and results.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 4 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(4)}
                    >
                      Can GenicMinds help with digital transformation? {" "}
                      <i className="icon fa fa-angle-down"></i>
                    </div>
                    <div
                      className={
                        isActive.key == 4
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                        Yes! We specialize in helping organizations navigate their digital transformation journeys by providing innovative solutions that enhance efficiency, streamline processes, and improve customer engagement.
                        </div>
                      </div>
                    </div>
                    
                  </li>
                  <li className="accordion block">
                    <div
                      className={
                        isActive.key == 5 ? "acc-btn active" : "acc-btn"
                      }
                      onClick={() => handleClick(5)}
                    >
                     How can I get in touch with GenicMinds? 
                     {" "}
                      <i className="icon fa fa-angle-down"></i>
                    </div>
                    <div
                      className={
                        isActive.key == 5
                          ? "acc-content current"
                          : "acc-content"
                      }
                    >
                      <div className="content">
                        <div className="text">
                        You can contact us through our website's contact form, email us directly, or reach out via phone. Our team will be happy to assist you with any inquiries or project discussions.

                        </div>
                      </div>
                    </div>
                    
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="image-column col-xl-6 col-lg-12 col-md-12 mb-xl-0">
              <div className="inner-column">
                <figure className="image">
                  <img src="images/resource/faq.jpg" alt="" />
                </figure>
                <div className="info-box">
                  <div className="inner">
                    <span className="icon flaticon-business-063-diamond"></span>
                    <h3 className="title">
                      Your Trusted Partner in <br />
                      Cutting-Edge IT Solutions
                    </h3>
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
export default Faq1;
