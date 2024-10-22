import Link from "next/link";

const ProjectGrid = () => {
	const projects = [
		{
			image: "/images/projects/myanimal.png",
			title: "My Animal",
			description: "My Animal is a creative design project focused on animal welfare. It aims to raise awareness and promote engagement with wildlife conservation efforts.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/egale-eye.png",
			title: "Eagle Eye",
			description: "Eagle Eye is a cutting-edge surveillance project that enhances security through innovative design and technology. It aims to provide real-time monitoring and analysis.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/pragati.png",
			title: "Pragati Project",
			description: "The Pragati Project focuses on empowering communities through skill development and educational programs, fostering growth and self-sufficiency.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/maac.png",
			title: "MAAC",
			description: "MAAC is an initiative to promote art and creativity among youth. It offers workshops and resources to nurture artistic talents.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/hrms.png",
			title: "HRMS",
			description: "The HRMS project streamlines human resource management, offering an integrated solution for employee engagement and productivity tracking.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/pnm.png",
			title: "PNM",
			description: "PNM focuses on project management solutions that enhance team collaboration and efficiency in achieving project goals.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/ftt.png",
			title: "Farm to Table",
			description: "Farm to Table connects local farmers with consumers, promoting sustainable practices and fresh produce delivery.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/gkm.png",
			title: "GKM",
			description: "GKM aims to provide innovative solutions for modern governance, enhancing citizen engagement and transparency in processes.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/f2f.png",
			title: "Fork to Fork",
			description: "Fork to Fork is a food network initiative aimed at reducing food waste and promoting local food systems through community collaboration.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/e-learning.png",
			title: "E-Learning",
			description: "E-Learning provides accessible online education resources, enabling learners to acquire new skills and knowledge from anywhere.",
			detailsPage: "/page-project-details",
		},
		{
			image: "/images/projects/hello-goa.png",
			title: "Hello Goa",
			description: "Hello Goa is a travel project that promotes tourism in Goa, showcasing its culture, heritage, and beautiful landscapes.",
			detailsPage: "/page-project-details",
		},
	];

	return (
		<section>
			<div className="container">
				<div className="row g-3">
					{projects.map((project, index) => (
						<div key={index} className="col-lg-4 col-md-6 col-sm-12 p-4">
							<div
								className="project-block"
								style={{
									border: '2px solid black',
									borderRadius: '8px',
									height: '400px',
									transition: 'none', // Disable transitions for hover effects
								}}
							>
								<div className="inner-box" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
									<div
										className="image-box"
										style={{
											flex: '1',
											height: '200px',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											overflow: 'hidden',
											cursor: 'default', // Make it clear there's no hover effect
										}}
									>
										<figure className="image" style={{ height: '100%', width: '100%' }}>
											<Link href={project.image} className="lightbox-image">
												<img
													src={project.image}
													alt={project.title}
													style={{
														height: '100%',
														width: '100%',
														objectFit: 'cover',
														pointerEvents: 'none',
														transition: 'none', // Disable transitions on images
													}}
												/>
											</Link>
										</figure>
									</div>
									<div className="content-box" style={{ flex: '1', padding: "10px", backgroundColor:"#000000d6" , color:"white" }}>
										<h4 className="title  " style={{color:"#51c2c0"}} >
											<Link href={project.detailsPage}>{project.title}</Link>
										</h4>
										
										<p className=" text-white pt-2">{project.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectGrid;
