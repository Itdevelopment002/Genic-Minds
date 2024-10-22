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
const Project1 = () => {
  return (
    <>
      <section className="project-section style-two pb-0">
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

          <div className="carousel-outer">
            <Swiper
              {...swiperOptions}
              className="project-carousel owl-carousel owl-theme"
            >
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          href="page-project-details-animal"
                         
                        >
                          <img src="images/resource/proj1.png" alt="" />
                        </Link>
                      </figure>
                      <Link href="page-project-details.html" className="icon">
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                    <div className="content-box">
								<h4 className="title text-white"><Link href="page-project-details.html">MyAnimal</Link></h4>
								{/* <span className="cat">DESIGN / IDEAS</span> */}
							</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          href="images/resource/proj2.png" 
                          className="lightbox-image"
                        >
                          <img src="images/resource/proj2.png" alt="" />
                        </Link>
                      </figure>
                      <Link href="page-project-details.html" className="icon">
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                    <div className="content-box">
								<h4 className="title text-white"><Link href="page-project-details.html">HRMS</Link></h4>
						
							</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          href="images/resource/proj3.png"
                          className="lightbox-image"
                        >
                          <img src="images/resource/proj3.png" alt="" />
                        </Link>
                      </figure>
                      <Link href="page-project-details.html" className="icon">
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                    <div className="content-box">
								<h4 className="title text-white"><Link href="page-project-details.html">Gao ki Mandi</Link></h4>
								{/* <span className="cat">DESIGN / IDEAS</span> */}
							</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          href="images/resource/proj4.png"
                          className="lightbox-image"
                        >
                          <img src="images/resource/proj4.png" alt="" />
                        </Link>
                      </figure>
                      <Link href="page-project-details.html" className="icon">
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                    <div className="content-box">
								<h4 className="title text-white"><Link href="page-project-details.html">Pragati Fiber</Link></h4>
								
							</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link
                          href="images/resource/proj5.png"
                          className="lightbox-image"
                        >
                          <img src="images/resource/proj5.png" alt="" />
                        </Link>
                      </figure>
                      <Link href="page-project-details.html" className="icon">
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                    <div className="content-box">
								<h4 className="title text-white"><Link href="page-project-details.html">Salgem Farm</Link></h4>
							
							</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project1;
