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
	breakpoints:{
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
	}
};
const Project2 = () => {
	return (
	<>
	<section className="project-section alternate">
		<div className="auto-container">
			<div className="sec-title text-center">
				<span className="sub-title">recently Completed work</span>
				<h2>Transforming and Enriching  <br/>Leading Tech Solutions</h2>
			</div>

			<div className="carousel-outer">
				<Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme">
					<SwiperSlide>
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="images/resource/project-1.jpg" className="lightbox-image"><img
												src="images/resource/project-1.jpg" alt=""/></Link></figure>
									<Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="images/resource/project-2.jpg" className="lightbox-image"><img
												src="images/resource/project-2.jpg" alt=""/></Link></figure>
									<Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link href="page-project-details">Smart Visions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="images/resource/project-3.jpg" className="lightbox-image"><img
												src="images/resource/project-3.jpg" alt=""/></Link></figure>
									<Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link href="page-project-details">Platform Integration</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="images/resource/project-4.jpg" className="lightbox-image"><img
												src="images/resource/project-4.jpg" alt=""/></Link></figure>
									<Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link href="page-project-details">Web Development</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project-block">
							<div className="inner-box">
								<div className="image-box">
									<figure className="image"><Link href="images/resource/project-1.jpg" className="lightbox-image"><img
												src="images/resource/project-1.jpg" alt=""/></Link></figure>
									<Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
								</div>
								<div className="content-box">
									<h4 className="title"><Link href="page-project-details">Tech Solutions</Link></h4>
									<span className="cat">DESIGN / IDEAS</span>
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
export default Project2