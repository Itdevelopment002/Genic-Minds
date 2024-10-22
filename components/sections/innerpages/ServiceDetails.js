import Link from 'next/link';
import { useState } from 'react';

const serviceContent = {
  1: {
    title: "IoT",
    description:
      "We are at the forefront of the Internet of Things (IoT) revolution, delivering innovative solutions that connect devices, people, and systems to transform businesses. Our expertise spans across various industries, enabling organizations to harness the power of smart technologies for real-time data insights, improved operational efficiency, and enhanced decision-making. Our commitment to innovation, sustainability, and long-term partnership ensures that your business is prepared for the future. We provide continuous support, proactive monitoring, and customized solutions that deliver measurable results and a solid return on investment.",
    features: [
      "Device and Connectivity Management",
      "Cost-Effective Solutions",
      "Remote Monitoring and Management",
      "Future-Proof Technology",
      "Real-Time Data Processing",
      "AI-Driven Insights",
    ],
  },
  2: {
    title: "AI/ML",
    description:
      "We specialize in delivering innovative Artificial Intelligence (AI) and Machine Learning (ML) solutions designed to drive your business forward. Our mission is to empower organizations across various industries with intelligent systems that automate processes, unlock actionable insights, and enhance decision-making. With a team of data scientists and AI/ML experts, we bring cutting-edge technologies to solve real-world challenges. From predictive analytics and natural language processing to computer vision and deep learning, our custom AI/ML solutions are crafted to meet your unique business needs.",
    features: [
      "Data-Driven Insights for Smarter Decisions",
      "Expertise in Advanced AI & ML Technologies",
      "Scalable & Future-Ready Technologies",
      "Tailored Solutions for Every Business",
      "Real-Time Data Processing & Insights",
      "Customizable Dashboards & Reporting",
    ],
  },
  
  3: {
    title: "Data Science",
    description:
      "We offer end-to-end data science services, from data collection and preparation to model development and deployment. Whether you’re looking to enhance decision-making, optimize operations, predict future trends, or gain a competitive edge, we provide customized solutions that align with your business goals. We are passionate about transforming data into powerful insights that drive business success.",
    features: [
      "Problem-Solving Focus",
      "Explainable AI and Transparent Analytics",
      "Domain-Specific Algorithms",
      "Adaptive Learning Models",
      "Predictive and Prescriptive Analytics",
      "Customized Data Pipelines",
    ],
  },
  
  4: {
    title: "E-Learning",
    description:
      "We are redefining the future of education through innovative eLearning solutions that empower learners and organizations alike. Our platform offers a wide range of interactive, engaging, and personalized courses designed to meet the needs of today’s fast-paced, digital world. Whether you are an individual looking to enhance your skills or a business seeking to upskill your workforce, we provide flexible learning opportunities that fit your unique goals. We believe in making education accessible and enjoyable for everyone. That’s why our courses are delivered in bite-sized, easy-to-consume modules, allowing learners to study at their own pace, anytime, anywhere.",
    features: [
      "Offline Learning Capabilities",
      "Customizable Content for Enterprises",
      "Affordable and Scalable Solutions",
      "Interactive, Hands-On Learning",
      "Microlearning Modules for Busy Professionals",
      "Global Expertise with Local Customization",
    ],
  },
  
  5: {
    title: "E-Governance",
    description:
      "Our comprehensive e-governance services are designed to enhance government efficiency, improve service delivery, and strengthen citizen engagement. We develop user-friendly online platforms and mobile applications that allow citizens to access a wide range of government services, submit applications, and track their requests in real-time. Our systems facilitate secure online transactions for various government services, including tax payments, fines, and fees, making it easier for citizens to fulfill their obligations. Our solutions streamline the storage, retrieval, and management of government documents, improving efficiency and reducing the reliance on paper-based processes.",
    features: [
      "Comprehensive Service Offerings",
      "Robust Security Measures",
      "Focus on Transparency and Accountability",
      "Cost-Effective Solutions",
      "Commitment to Sustainability",
      "Innovative Technologies",
    ],
  },
  
  6: {
    title: "E-Commerce",
    description:
      "We are passionate about revolutionizing the online shopping experience. Our mission is to provide a seamless, convenient, and enjoyable platform where customers can find everything they need—from everyday essentials to unique specialty items—all in one place. We specialize in eCommerce, retail, and B2B and B2C app development, dedicated to showcasing your products in the most impactful way. Our solutions are designed to enhance visibility and drive engagement, ensuring your offerings stand out in the marketplace.",
    features: [
      "Extensive Product Range",
      "User-Friendly Shopping Experience",
      "Fast and Reliable Shipping",
      "Eco-Friendly Practices",
      "Innovative Technology Integration",
      "Commitment to Quality Assurance",
    ],
  },
  
  7: {
    title: "Application Development",
    description:
      "Our expertise in mobile app development is showcased through the innovative applications we’ve designed and developed for various industries. We understand that every idea is unique, and we are committed to transforming your vision into a tangible reality. The world is moving towards mobile, and so should you. Don’t let your idea stay just an idea. Partner with us, and together, we can create an app that stands out in the crowded marketplace and meets the demands of today’s mobile users. Our team is made up of experienced professionals who have successfully developed numerous mobile applications across diverse industries. This deep understanding allows us to navigate challenges effectively and leverage best practices.",
    features: [
      "Tailored Solutions",
      "Cutting-Edge Technology",
      "User-Centric Design",
      "Customized Solutions",
      "Quality Assurance",
      "Ongoing Support and Maintenance",
    ],
  },
  
  8: {
    title: "Web Development",
    description:
      "Our mission is to build user-friendly, responsive websites that not only reflect your brand identity but also provide an exceptional experience for your visitors. We leverage the latest technologies and industry best practices to create robust, scalable, and secure websites that drive engagement and conversions. With a team of skilled developers, designers, and strategists, we specialize in delivering customized web development services tailored to your unique needs and goals.",
    features: [
      "User-Centric Design Approach",
      "Innovative and Creative Solutions",
      "Customized Solutions for Your Business",
      "Integration with Third-Party Tools",
      "Local and Global Market Understanding",
      "Performance Optimization",
    ],
  },
  
  9: {
    title: "Graphic Design",
    description:
      "In a visually-driven world, effective graphic design is essential for capturing attention, communicating messages, and building brand identity. Our graphic design services are tailored to create stunning visuals that resonate with your audience and elevate your brand. We specialize in creating informative and visually engaging infographics that simplify complex data and concepts. These graphics help communicate information clearly and effectively.",
    features: [
      "Creative Expertise",
      "Client-Centric Approach",
      "Attention to Detail",
      "Comprehensive Services",
      "Timely Delivery",
      "Sustainable Practices",
    ],
  },
  10: {
    title: "UI/UX Design",
    description:
      "In today's digital landscape, user experience (UX) and user interface (UI) design are critical for the success of any application or website. Our UI/UX design services focus on creating intuitive, engaging, and visually appealing digital experiences that resonate with users. Enhancing the end-user experience of an application is essential for any forward-thinking business, as it creates a lasting impression. User Experience (UX) encompasses the design that facilitates interactions between users and the application. We are committed to understanding market trends and incorporating best practices in UX design, ensuring that our development activities provide you with the best possible experience when using our application. By prioritizing the needs of end-users, our UI/UX developers and experts work together to create a robust and scalable user experience.",
    features: [
      "User-Centric Approach",
      "Experienced Team",
      "Collaborative Process",
      "Proven Methodologies",
      "Attention to Detail",
      "Innovative Solutions",
    ],
  },

};


const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(1);

  const handleClick = (key) => {
    setActiveService(key);
  };

  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/* Start Services Details Sidebar */}
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-list">
                    <ul>
                      {Object.keys(serviceContent).map((key) => (
                        <li key={key}>
                          <Link href="#" onClick={() => handleClick(key)} className={activeService === parseInt(key) ? "current" : ""}>
                            <i className="fas fa-angle-right"></i>
                            <span>{serviceContent[key].title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget banner-widget">
                  <div className="widget-content" style={{ backgroundImage: 'url(/images/resource/contact.jpg)' }}>
                    <div className="shape" style={{ backgroundImage: 'url(/images/resource/overlay-shape.png)' }}></div>
                    <div className="content-box">
                      <div className="icon-box">
                        <i className="lnr lnr-icon-pie-chart"></i>
                      </div>
                      <h3>{serviceContent[activeService].title} Developer</h3>
                      <Link href="page-contact" className="theme-btn btn-style-one">
                        <span className="btn-title"> Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Services Details Sidebar */}

            {/* Start Services Details Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <h2 className="mt-4">{serviceContent[activeService].title}</h2>
                <p>{serviceContent[activeService].description}</p>
                <div className="content">
                  <div className="text">
                    <h3>Why Choose Us?</h3>
                    <p>
                    Our team is made up of experienced professionals who have successfully developed numerous projects across diverse industries. This deep understanding allows us to navigate challenges effectively and leverage best practices.
                    </p>
                  </div>
                  <div className="feature-list">
                    <div className="row clearfix">
                      {serviceContent[activeService].features.map((feature, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 column" key={index}>
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <h6 className="title">{feature}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <img src="/images/resource/service-details.jpg" alt={serviceContent[activeService].title} />

              </div>
            </div>
            {/* End Services Details Content */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
