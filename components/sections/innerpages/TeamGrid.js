import Link from "next/link"

const TeamGrid = () => {
    return (
        <>
        <section class="">
            <div class="container pb-70">
                <div class="row">
                    <div class="team-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box mb-md-30">
                            <div class="image-box">
                                <figure class="image"><Link href="page-team-details"><img src="images/resource/team-1.jpg" alt=""/></Link></figure>
                            </div>
                            <div class="info-box">
                                <h5 class="name"><Link href="page-team-details">Kevin Martin</Link></h5>
                                <span class="designation">designer</span>
                                <ul class="social-links">
                                    <li><Link href="#"><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link href="#"><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link href="#"><span class="fab fa-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div class="team-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box mb-md-30">
                            <div class="image-box">
                                <figure class="image"><Link href="page-team-details"><img src="images/resource/team-2.jpg" alt=""/></Link></figure>
                            </div>
                            <div class="info-box">
                                <h5 class="name"><Link href="page-team-details">Aleesha Brown</Link></h5>
                                <span class="designation">co founder</span>
                                <ul class="social-links">
                                    <li><Link href="#"><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link href="#"><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link href="#"><span class="fab fa-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div class="team-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <div class="image-box">
                                <figure class="image"><Link href="page-team-details"><img src="images/resource/team-3.jpg" alt=""/></Link></figure>
                            </div>
                            <div class="info-box">
                                <h5 class="name"><Link href="page-team-details">Sarah Albert</Link></h5>
                                <span class="designation">developer</span>
                                <ul class="social-links">
                                    <li><Link href="#"><span class="fab fa-twitter"></span></Link></li>
                                    <li><Link href="#"><span class="fab fa-facebook-f"></span></Link></li>
                                    <li><Link href="#"><span class="fab fa-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default TeamGrid
