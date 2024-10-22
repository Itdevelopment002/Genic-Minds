import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
};

const testimonials = [
    {
        content: `Infoigy’s team delivered exceptional results over two years. Their leadership and collaboration were invaluable.`,
        author: 'Ceryx Digital',
    },
    {
        content: `We’ve been consistently impressed with Infoigy’s service quality and expertise.`,
        author: 'Gaon Ki Mandi',
    },
    {
        content: `Great feedback on the recent projects! Your hard work truly paid off.`,
        author: 'Pearson',
    },
    {
        content: `Working with your team was fantastic. Their skills ensured we met tight deadlines.`,
        author: 'Shibu, Aptara',
    },
    {
        content: `Infoigy created a website that exceeded our expectations, ensuring smooth communication throughout.`,
        author: 'Maac Solapur',
    },
    {
        content: `Our experience with Infoigy was remarkable; their support made everything effortless.`,
        author: 'Laxmi Developer',
    },
];

const Testimonial1 = () => {
    return (
        <>
            <section className="testimonial-section-four pb-0">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-xl-5 col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Client Feedback</span>
                                    <h2>What Our Clients Are Saying</h2>
                                    <div className="text">Discover why our clients love working with us!</div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-column col-xl-7 col-lg-6 col-md-12">
                            <div className="carousel-outer">
                                <div className="testimonial-bg" style={{ backgroundImage: 'url(/images/resource/testimonial-bg.png)' }}></div>
                                
                                <Swiper {...swiperOptions} className="testimonial-carousel-four owl-carousel owl-theme">
                                    {testimonials.map((testimonial, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="testimonial-block-four">
                                                <div className="inner-box">
                                                    <div className="content-box">
                                                        <span className="icon icon-quote"></span>
                                                        <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                                        <div className="text">{testimonial.content}</div>
                                                    </div>
                                                    <div className="info-box">
                                                        
                                                        <h5 className="name"> {testimonial.author}</h5>
                                                        <span className="designation"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial1;
