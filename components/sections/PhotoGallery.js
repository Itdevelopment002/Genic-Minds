import Link from "next/link";

const PhotoGallery = () => {
  // Array of image sources (added more images)
  const images = [
    "images/photogallery/clb1.png", // First image
    "images/photogallery/clb2.png", // Second image
    "images/photogallery/clb3.png", // Third image
    "images/photogallery/clb0.png", // Fourth image
    "images/photogallery/clb5.png", // Fifth image
    "images/photogallery/clb6.png", // Sixth image
    "images/photogallery/clb7.png", // Seventh image
    "images/photogallery/clb8.png", // Eighth image
    "images/photogallery/clb9.png"  // Ninth image
  ];

  return (
    <section className="photo-gallery-section">
      <div className="auto-container">
        <div className="sec-title text-center" style={{ marginBottom: '30px' }}>
          <span className="sub-title" style={{ marginTop: '60px' }}>Photo Gallery</span>
          <h2>Celebrating Our Moments</h2>
        </div>
        <div className="row" style={{ marginBottom: '70px' }}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div 
              className="news-block-three col-lg-4 col-md-6 wow fadeInUp" 
              key={index} 
              style={{ marginBottom: '30px' }} // Reduced margin for consistency
            >
              <div 
                className="inner-box" 
                style={{ width: '350px', height: '400px', overflow: 'hidden', margin: 'auto', display: 'flex', flexDirection: 'column' }} // Flexbox for consistent layout
              >
                <div className="image-box" style={{ flex: '1', overflow: 'hidden' }}> {/* Use flex to ensure consistent height */}
                  <figure className="image" style={{ height: '100%', margin: 0 }}>
                    <Link href={`photo-details/${index + 1}`}>
                      <img 
                        src={images[index % images.length]} // Cycle through the images
                        alt={`Celebration Event ${index + 1}`} 
                        style={{ borderRadius: '8px', width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </Link>
                  </figure>
                  <span className="date" style={{ display: 'block', marginTop: '5px', fontSize: '0.9rem', color: '#777' }}>
                    Date Here
                  </span>
                </div>
                <div className="content-box" style={{ height: '80px', padding: '10px 0' }}>
                  <h4 className="title" style={{ margin: '0', textAlign: 'center' }}>
                    <Link href={`photo-details/${index + 1}`}>
                      Celebration Event {index + 1}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
