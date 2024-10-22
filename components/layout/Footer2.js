import Link from "next/link"

export default function Footer2() {
    return (
        <>
        <footer className="main-footer style-two">
            <div className="bg bg-pattern-4"></div>
            <div className="anim-icons">
                <span className="icon icon-circle-1 bounce-x"></span>
                <span className="icon icon-circle-2 bounce-x"></span>
                <span className="icon icon-circle-2 bounce-x"></span>
                <span className="icon icon-object-3 bounce-y"></span>
            </div>
            <div className="widgets-section">
                <div className="auto-container">
    
                    <div className="row">
    
                        <div className="footer-column col-xl-3 col-lg-4 col-md-12">
                            <div className="footer-widget about-widget">
                                <div className="logo"><Link href="#"><img src="images/logo-3.png" alt=""/></Link></div>
                                <h6 className="widget-title">Follow</h6>
                                <ul className="social-icon-one">
                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget services-widget">
                                <h6 className="widget-title">Services</h6>
                                <ul className="user-links">
                                    <li><Link href="#">Product Design</Link></li>
                                    <li><Link href="#">Business Consulting</Link></li>
                                    <li><Link href="#">Custome Service</Link></li>
                                    <li><Link href="#">Brand Identity</Link></li>
                                    <li><Link href="#">SEO Optimization</Link></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-widget contact-widget">
                                <h6 className="widget-title">Contact</h6>
                                <ul className="user-links">
                                    <li>785 Main Street, 2nd Block <br/>melbourne, australia</li>
                                    <li><Link href="mailto:support@gmail.com">support@gmail.com</Link></li>
                                    <li><Link href="tel:+00012345688">+000 (123) 456 88</Link></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="footer-column col-xl-3 col-lg-12 col-md-12">
                            <div className="footer-widget newsletter-widget">
                                <h6 className="widget-title">Newsletter</h6>
                                <div className="subscribe-form">
                                    <h4 className="title">Get Every Single Update to <br/>Join Our Newsletter</h4>
                                    <form method="post" action="#">
                                        <div className="form-group">
                                            <input type="email" name="email" className="email" placeholder="Email Address" required=""/>
                                            <i className="icon fa fa-envelope"></i>
                                        </div>
                                        <button type="button" className="theme-btn submit-btn"><span className="btn-title">Sing Up <i className="fa fa-angle-double-right"></i></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
    
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">Copy@ 2023 <Link href="/">Roket.</Link> All Rights reserved</div>
    
                        <ul className="footer-links">
                            <li><Link href="#">Setting & Privacy</Link></li>
                            <li><Link href="#">Faqs</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
