import Link from "next/link"
const Location2 = () => {
    return (
        <>
        <section className="locations-section-two">
            <div className="auto-container">
                <div className="row">
                    <div className="location-block-two col-xl-3 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <h5 className="title">Newyork</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, New York</li>
                                <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><Link href="tel:+926668889999">+92 666 888 9999</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="location-block-two col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <h5 className="title">Washington</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, New York</li>
                                <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><Link href="tel:+926668889999">+92 666 888 9999</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="location-block-two col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <h5 className="title">Boston</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, New York</li>
                                <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><Link href="tel:+926668889999">+92 666 888 9999</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="location-block-two col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <h5 className="title">Chicago</h5>
                            <ul className="info-list">
                                <li>66 Road Broklyn Street, New York</li>
                                <li><Link href="mailto:needhelp@company.com">needhelp@company.com</Link></li>
                                <li><Link href="tel:+926668889999">+92 666 888 9999</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Location2