import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../public/css/bootstrap.min.css';  // Local Bootstrap
import '../public/css/style.css';
import '../public/css/responsive.css';
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Import Bootstrap JS dynamically for client-side rendering
        if (typeof document !== "undefined") {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <div className="preloader">
                    <span className="loader"></span>
                </div>
            )}
        </>
    );
}

export default MyApp;
