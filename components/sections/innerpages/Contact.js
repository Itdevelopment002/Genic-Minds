import { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  // State for managing the map URL and the selected location name
  const [mapUrl, setMapUrl] = useState('');
  const [locationName, setLocationName] = useState('');

  const [hoveredOffice, setHoveredOffice] = useState(null);

  // Location data with names and map URLs
  const locations = {
    noida: {
      name: 'Noida NCR',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.051288401103!2d77.3528301755814!3d28.54359168893411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff63f96e855%3A0x938d171839d13ed9!2sUrbtech%20Trade%20Centre%2C%20Tower%20A%2C%20Office%20No.%201402%2C%2014th%20Floor%2C%20Plot%20B-35%2C%20Sector%20132%2C%20Noida%20201301%20Uttar%20Pradesh%2C%20India.!5e0!3m2!1sen!2sus!4v1631540348943!5m2!1sen!2sus',
    },
    mumbai: {
      name: 'Mumbai',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.776492671026!2d72.9281!3d19.1185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf5547e0f4d7%3A0x46970945d3c6c5a8!2sGodrej%20%26%20Boyce%2C%20Gate%20No%202%2C%20Plant%20No.%206%2C%20LBS%20Marg%2C%20Vikhroli%20West%2C%20Mumbai%2C%20Maharashtra%20400079!5e0!3m2!1sen!2sus!4v1631540458391!5m2!1sen!2sus',
    },
    pune: {
      name: 'Pune',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3342235937633!2d73.9107!3d18.5196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1a1f9d9cd7%3A0xb1f8a8974a8071c9!2sKumar%20Primus%2C%20Sr.%20No.%20307%2C%20Solapur%20Road%2C%20Hadapsar%2C%20Pune%20Maharashtra%20411013!5e0!3m2!1sen!2sus!4v1631540458391!5m2!1sen!2sus',
    },
    solapur: {
      name: 'Solapur',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.745246135647!2d75.9064!3d17.6599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5df1d2e1cf9fb%3A0xe7931e19c867750!2sSolapur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1631540348943!5m2!1sen!2sus',
    },
    raipur: {
      name: 'Raipur',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.203143301523!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde92ad58753%3A0x98b5cdbf5c2991e3!2sSuryadeep%20Tower%2C%20Ring%20Road%20No.%201%2C%20Satnam%20Nagar%2C%20Telibandha%2C%20Raipur%2C%20Chhattisgarh%2C%20India!5e0!3m2!1sen!2sus!4v1631540458391!5m2!1sen!2sus',
    },
  };

  // Function to set the URL of the iframe and the location name
  const showMap = (locationKey) => {
    const location = locations[locationKey];
    setMapUrl(location.url);
    setLocationName(location.name);
  };

  return (
    <>
      {/* Your contact form section remains the same */}
 <section className="contact-details">
        <div className="container pt-110 pb-110">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us an email</span>
                <h2>Feel free to write</h2>
              </div>
              {/* Contact Form */}
              <form id="contact_form" name="contact_form" action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                </div>
                <div className="mb-3">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="theme-btn btn-style-one me-2" data-loading-text="Please wait...">
                    <span className="btn-title">Send message</span>
                  </button>
                  <button type="reset" className="theme-btn btn-style-one">
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title mb-30">
                  <span className="sub-title">Reach out now!</span>
                  <h2>We’re here to help</h2>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text">
                      <h6>Delhi NCR</h6>
                      <span>
                        Urbtech Trade Centre <br />
                        Tower A, Office No 1402, 14th floor <br />
                        Plot B-35, Sector 132, Noida 201301 <br />
                        Uttar Pradesh, India.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6>Contact</h6>
                      <Link href="tel:+91980089850">+91 980*******</Link>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6>Email</h6>
                      <Link href="mailto:infoigy@gmail.com">info@genicminds.in</Link> 
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section-four">
        <div className="auto-container">
          <div className="row">
            <div className="sec-title col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <span className="sub-title">Our Presence in India</span>
              <h2>Our Presence Across India</h2>
              <h6 style={{ color: "#51c2c0" }}>5 Offices </h6>
            </div>

            {/* Noida NCR Location */}
            <div
              className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
              onClick={() => showMap('noida')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-location fas fa-map-marker-alt"></i> {/* Location logo */}
                </div>
                <h5 className="title">Noida NCR</h5>
                <div className="text">
                  Urbtech Trade Centre, Tower A Office No 1402, 14th floor, Plot B-35, Sector 132, Noida 201301 Uttar Pradesh, India.
                </div>
              </div>
            </div>

            {/* Mumbai Location */}
            <div
              className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
              onClick={() => showMap('mumbai')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-location fas fa-map-marker-alt"></i>
                </div>
                <h5 className="title">Mumbai</h5>
                <div className="text">
                  Godrej & Boyce, Gate No 2, Plant No. 6, LBS Marg, Opposite Vikhroli Bus Depot, Vikhroli West, Mumbai, Maharashtra 400079
                </div>
              </div>
            </div>

            {/* Pune Location */}
            <div
              className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="1200ms"
              onClick={() => showMap('pune')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-location fas fa-map-marker-alt"></i>
                </div>
                <h5 className="title">Pune</h5>
                <div className="text">
                  1st Floor, Office no- 101, Kumar Primus, Sr. No. 307, Solapur Road, Hadapsar, Pune, Maharashtra 411013 India
                </div>
              </div>
            </div>

            {/* Solapur Location */}
            <div
              className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="1600ms"
              onClick={() => showMap('solapur')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-location fas fa-map-marker-alt"></i>
                </div>
                <h5 className="title">Solapur</h5>
                <div className="text">
                  CTS No. 9626/1/A, Office No. 3, 3rd Floor, D-Mart Road, Old Employment Chowk, Solapur 413001, Maharashtra, India
                </div>
              </div>
            </div>

            {/* Raipur Location */}
            <div
              className="service-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="2000ms"
              onClick={() => showMap('raipur')}
              style={{ cursor: 'pointer' }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-location fas fa-map-marker-alt"></i>
                </div>
                <h5 className="title">Raipur</h5>
                <div className="text">
                  5th Floor, Suryadeep Tower, Ring Road No 1, Satnam Nagar, Telibandha, Raipur 492001, Chhattisgarh India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section for embedding Google Maps */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            {mapUrl && (
              <>
                <h3>{locationName}</h3>
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
