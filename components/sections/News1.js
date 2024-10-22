import Link from "next/link";

const News1 = () => {
  // Array of images for the news section
  const images = [
    "/images/photogallery/clb1.png", // First image
    "/images/photogallery/clb2.png", // Second image
    "/images/photogallery/clb3.png", // Third image
  ];

  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Celebrations & Events</span>
            <h2>Photo Gallery</h2>
          </div>
          <div className="row">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className="news-block-three col-lg-4 col-md-6 wow fadeInUp"
                key={index}
                style={{ marginBottom: "30px" }}
              >
                <div className="inner-box" style={{ height: "400px", display: 'flex', flexDirection: 'column' }}> {/* Set fixed height here */}
                  <div className="image-box" style={{ flex: '1', overflow: 'hidden' }}> {/* Use flex to ensure consistent height */}
                    <figure className="image" style={{ height: '100%', margin: 0 }}>
                      <Link href={`news-details/${index + 1}`}>
                        <img
                          src={images[index % images.length]} // Cycle through images
                          alt={`News Event ${index + 1}`}
                          style={{ borderRadius: "8px", width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Link>
                    </figure>
                    <span
                      className="date"
                      style={{
                        display: "block",
                        marginTop: "5px",
                        fontSize: "0.9rem",
                        color: "#777",
                      }}
                    >
                      {index === 0 ? "31 Aug, 2023" : index === 1 ? "30 Sep, 2023" : "31 Oct, 2023"}
                    </span>
                  </div>
                  <div className="content-box" style={{ height: "80px", padding: '10px 0' }}>
                    <h4 className="title" style={{ margin: '0', textAlign: 'center' }}>
                      <Link href={`news-details/${index + 1}`}>
                        {index === 0
                          ? "Award ceremony"
                          : index === 1
                          ? "Team Building Weekend Retreat"
                          : "Annual Office Celebration Gala"}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/photo-gallery">
              <button
                className="btn"
                style={{ backgroundColor: "#51c2c0", color: "white" }}
              >
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default News1;
