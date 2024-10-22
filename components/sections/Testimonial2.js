import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Testimonial2 = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
	<>
	<section className="testimonial-section">
		<div className="auto-container">
			<div className="sec-title">
				<span className="sub-title">Our feedbakcs</span>
				<h2>What They’re Talking<br/> About Us</h2>
			</div>

			<div className="testimonials">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					autoPlay={1500}
					loop={true}
					thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="swiper-container testimonial-content">
					<SwiperSlide>
						<div className="testimonial-block swiper-slide">
							<div className="row">
								<div className="content-column col-lg-6 col-md-12">
									<div className="icon-box">
										<span className="icon icon-quote"></span>
										<div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
									</div>
									<div className="text">This is due to their excellent service, competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen.</div>
									<div className="info-box">
										<h4 className="name">Mike Hardson</h4>
										<span className="designation">Senior Designer</span>
									</div>
								</div>
								<div className="image-column col-lg-6 col-md-12">
									<figure className="image"><img src="images/resource/testimonial-1.png" alt=""/></figure>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block swiper-slide">
							<div className="row">
								<div className="content-column col-lg-6 col-md-12">
									<div className="icon-box">
										<span className="icon icon-quote"></span>
										<div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
									</div>
									<div className="text">This is due to their excellent service, competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen.</div>
									<div className="info-box">
										<h4 className="name">Mike Hardson</h4>
										<span className="designation">Senior Designer</span>
									</div>
								</div>
								<div className="image-column col-lg-6 col-md-12">
									<figure className="image"><img src="images/resource/testimonial-1.png" alt=""/></figure>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial-block swiper-slide">
							<div className="row">
								<div className="content-column col-lg-6 col-md-12">
									<div className="icon-box">
										<span className="icon icon-quote"></span>
										<div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
									</div>
									<div className="text">This is due to their excellent service, competitive pricing and customer support. It’s refresing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen.</div>
									<div className="info-box">
										<h4 className="name">Mike Hardson</h4>
										<span className="designation">Senior Designer</span>
									</div>
								</div>
								<div className="image-column col-lg-6 col-md-12">
									<figure className="image"><img src="images/resource/testimonial-1.png" alt=""/></figure>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				autoPlay={1500}
				slidesPerView={3}
				direction= 'vertical'
				freeMode={true}
				loop={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="swiper-container testimonial-thumbs">
				<SwiperSlide className="swiper-slide testimonial-thumb">
					<figure className="image"><img src="images/resource/testi-thumb-2.jpg" alt=""/></figure>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide testimonial-thumb">
					<figure className="image"><img src="images/resource/testi-thumb-1.jpg" alt=""/></figure>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide testimonial-thumb">
					<figure className="image"><img src="images/resource/testi-thumb-3.jpg" alt=""/></figure>
				</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
	</>
	);
};
export default Testimonial2
