import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Update the paths to your client logos
const cardsData = [
  "/images/clientlogo/hrms.jpg", 
  "/images/clientlogo/aptara.png",
  "/images/clientlogo/ftii.jpg",
  "/images/clientlogo/ceryx.jpg",
  "/images/clientlogo/yashodhara.jpg",
  "/images/clientlogo/pearl-garden.jpg",
  "/images/clientlogo/fbl.jpg",
  "/images/clientlogo/umed.jpg",
  "/images/clientlogo/mahalaxmisaras.png",
  "/images/clientlogo/pragati.jpg",
  "/images/clientlogo/ftt.jpg",
  "/images/clientlogo/gaonkimandi.jpg",
  "/images/clientlogo/ftf.jpg",
];

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 4 },
    1350: { slidesPerView: 5 },
  }
};

const Clients2 = () => {
  return (
    <>
      <section className="clients-section">
        <div className="auto-container">
          
          <div className="sponsors-outer">
            <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme">
              {cardsData.map((image, index) => (
                <SwiperSlide className="slide-item" key={index}>
                  <Link href="#">
                    <img src={image} alt={`Client ${index + 1}`} style={{ width: '80%', height: 'auto', maxWidth: '120px', objectFit: 'contain' }} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients2;
