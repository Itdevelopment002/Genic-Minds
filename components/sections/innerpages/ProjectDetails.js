import Link from "next/link";

export default function ProjectDetails() {
  return (
    <>
      {/* Project Details Start */}
      <section class="project-details">
        <div class="container">
          <div class="project-details__content">
            <div class="row">
              <div class="col-xl-8 col-lg-8">
                <div class="project-details__content-left">
                  <h3 class="">Learn About Our Initiative</h3>
                  <p class="">
                    This project focuses on leveraging technology to ensure the safety and protection of children and women. By creating a centralized platform, we aim to streamline case management processes and provide faster assistance to those in need. Our approach integrates modern tools for better collaboration across agencies and ensures that every case is handled with care and confidentiality.
                  </p>
                  <p class="mb-5">
                    Through this initiative, we aim to bridge the gap between various governmental and non-governmental organizations, enabling them to work together efficiently. The platform's easy-to-use interface and secure database ensure that sensitive information remains protected while helping stakeholders make informed decisions. Our ultimate goal is to create a safer environment where timely action can be taken for those at risk.
                  </p>

                  <h3 class="">Project Challenges</h3>
                  <p class="mb-5">
                    One of the key challenges is integrating multiple stakeholders while maintaining data privacy and confidentiality. Additionally, designing a user-friendly system that can be easily adopted by a wide range of organizations, from local authorities to national agencies, has been a crucial focus. Ensuring real-time communication and collaboration across different teams is another challenge we're tackling.
                  </p>

                  <h3 class="">Impact of Project</h3>
                  <p class="">
				  The platform will revolutionize the process of reporting and managing cases related to child and women welfare by improving efficiency and streamlining operations. By offering a centralized hub for case management, organizations will have access to real-time data, enabling them to take swift actions based on accurate information. The enhanced transparency and collaboration between various stakeholders ensure that cases are handled effectively, minimizing delays and improving outcomes.


                  </p>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4">
                <div class="project-details__content-right">
                  <div class="project-details__details-box">
                    <div class="project-details__bg-shape"></div>
                    <ul class="list-unstyled project-details__details-list">
                      <li>
                        <p class="project-details__client">Date</p>
                        <h4 class="project-details__name">1st October, 2024</h4>
                      </li>
                      <li>
                        <p class="project-details__client">Client</p>
                        <h4 class="project-details__name">Women and Child Welfare Department</h4>
                      </li>
                      <li>
                        <p class="project-details__client">Website</p>
                        <h4 class="project-details__name">www.childsafety.org</h4>
                      </li>
                      <li>
                        <p class="project-details__client">Location</p>
                        <h4 class="project-details__name">Noida, India</h4>
                      </li>
                      <li>
                        <p class="project-details__client">Value</p>
                        <h4 class="project-details__name">Confidential</h4>
                      </li>
                      <li>
                        <div class="project-details__social">
                          <Link href="#">
                            <i class="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i class="fab fa-facebook"></i>
                          </Link>
                          <Link href="#">
                            <i class="fab fa-linkedin"></i>
                          </Link>
                          <Link href="#">
                            <i class="fab fa-instagram"></i>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="project-details__pagination-box">
                  <ul class="project-details__pagination list-unstyled clearfix">
                    <li class="next">
                      <div class="icon">
                        <Link href="#" aria-label="Previous">
                          <i class="lnr lnr-icon-arrow-left"></i>
                        </Link>
                      </div>
                      <div class="content">Previous</div>
                    </li>
                    <li class="count">
                      <Link href="#"></Link>
                    </li>
                    <li class="count">
                      <Link href="#"></Link>
                    </li>
                    <li class="count">
                      <Link href="#"></Link>
                    </li>
                    <li class="count">
                      <Link href="#"></Link>
                    </li>
                    <li class="previous">
                      <div class="content">Next</div>
                      <div class="icon">
                        <Link href="#" aria-label="Next">
                          <i class="lnr lnr-icon-arrow-right"></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details End */}
    </>
  );
}
