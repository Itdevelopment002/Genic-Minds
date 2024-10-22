import Link from 'next/link';

const NewsGrid = () => {
  const jobOpenings = [
    {
      title: "Full Stack Java Developer",
      date: "28 OCT",
      image: "images/resource/news-1.jpg",
      description: "Join us to create stunning web applications using React.",
      link: "job-full-stack-java-developer"
    },
    {
      title: "Frontend Developer",
      date: "28 OCT",
      image: "images/resource/news-2.jpg",
      description: "Build interactive user interfaces with modern frameworks.",
      link: "job-frontend-developer"
    },
    {
      title: "Backend Developer",
      date: "28 OCT",
      image: "images/resource/news-3.jpg",
      description: "Develop server-side applications and RESTful APIs.",
      link: "job-backend-developer"
    },
    {
      title: "UI/UX Designer",
      date: "28 OCT",
      image: "images/resource/news-1.jpg",
      description: "Design intuitive user experiences and visually appealing interfaces.",
      link: "job-uiux-designer"
    },
    {
      title: "DevOps Engineer",
      date: "28 OCT",
      image: "images/resource/news-2.jpg",
      description: "Manage infrastructure and automate deployment processes.",
      link: "job-devops-engineer"
    },
    {
      title: "Data Scientist",
      date: "28 OCT",
      image: "images/resource/news-3.jpg",
      description: "Analyze data and create predictive models.",
      link: "job-data-scientist"
    },
    {
      title: "Machine Learning Engineer",
      date: "28 OCT",
      image: "images/resource/news-1.jpg",
      description: "Develop machine learning algorithms and systems.",
      link: "job-ml-engineer"
    },
    {
      title: "Software Tester",
      date: "28 OCT",
      image: "images/resource/news-2.jpg",
      description: "Ensure software quality through rigorous testing.",
      link: "job-software-tester"
    },
    {
      title: "Project Manager",
      date: "28 OCT",
      image: "images/resource/news-3.jpg",
      description: "Oversee project execution and coordinate team efforts.",
      link: "job-project-manager"
    },
    {
      title: "Systems Analyst",
      date: "28 OCT",
      image: "images/resource/news-1.jpg",
      description: "Analyze and improve IT systems to enhance business efficiency.",
      link: "job-systems-analyst"
    },
    {
      title: "Network Administrator",
      date: "28 OCT",
      image: "images/resource/news-2.jpg",
      description: "Maintain and troubleshoot network systems.",
      link: "job-network-administrator"
    },
    {
      title: "Content Writer",
      date: "28 OCT",
      image: "images/resource/news-3.jpg",
      description: "Create engaging content for various platforms.",
      link: "job-content-writer"
    },
  ];

  return (
    <>
      <section>
        <div className="container pb-90 pt-2">
          <div className="row">
            {jobOpenings.map((job, index) => (
              <div className="news-block col-lg-4 col-md-6 col-sm-12 pt-5 " key={index}>
                <div className="inner-box ">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={job.link}>
                        <img src={job.image} alt={job.title} />
                      </Link>
                    </figure>
                    <span className="date"><b>{job.date.split(' ')[0]}</b> {job.date.split(' ')[1]}</span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li><i className="fa fa-user"></i> {job.title}</li>
                    </ul>
                    <h6><Link href={job.link}>{job.description}</Link></h6>
                  </div>
                  <div className="bottom-box">
                    <Link href={job.link} className="apply-now">Apply Now <i className="fa fa-long-arrow-alt-right"></i></Link>
                    <div className="comments"><i className="fa fa-comments"></i> 02</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
    </>
  );
};

export default NewsGrid;
