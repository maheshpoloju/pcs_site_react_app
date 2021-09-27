import React from 'react'
import './index.css'



const fullstactServices = [
  "Building and consuming REST web services",
  "Modern front-end JavaScript(ES5, ES6) development",
  "Modern JS frameworks like ReactJS, Angular, Vue",
  "Backend frameworks like NodeJs,Python, Java for developing web services",
  "SQL and/or NoSQL databases",
  "Using Git, Bitbucket and other source control systems",
]
const devopsServices = [
  "Strong knowledge of Linux systems and internals like Kernel, Memory, Process, Threads, Static / Shared Libraries, IPC, Signals",
  "Strong knowledge of cloud platforms like AWS and microservices architecture",
  "Use of Docker, Ansible, Artifactory, Maven, Git and Jenkins technology",
  "Expertise in scripting languages like: Python, Ruby, Perl",
  "Strong knowledge of storage and networking",
]
const mobileServices = [
  "Expertise in native Android and iOS",
  "Strong knowledge of Java for Android and Swift for iOS",
  "Expertise in Hybrid App development using React Native, Redux",
  "Expertise in integrating with RESTful APIs",
  "Very strong UX expertise across the team",
  "Deep understanding of life cycle of mobile development",
]
const dataEngServices = [
  "Expertise in designing and building dimensional data models to improve accessibility, efficiency, and quality of data",
  "Expertise in designing and developing ETL data pipelines",
  "Database development expertise with Relational or MPP/distributed systems such as Oracle/Teradata/Vertica/Hadoop",
  "Expertise in performance tuning of SQLs and writing Advanced SQLs",
  "Expertise in developing Big Data/Hadoop applications using java, Spark, Hive, Oozie, Kafka, and Map Reduce",
]
const mlServices = [
  "Use of big data technologies such as SQL, Hadoop or Spark",
  "Capabilities for providing end to end machine learning solution",
  "Experience with Information Retrieval, Recommendation Systems or Natural Language Processing",
  "Experience with machine learning frameworks such as Scikit-Learn, Keras, Tensorflow",
  "Use of data visualization tools such as D3, Tableau",
]
const qaServices = [
  "Strong experience in QA tools like Selenium, TestingWhiz, TestNG and others",
  "Strong knowledge of JAVA for creating automation scripts",
  "Expertise in developing test plans, test cases, assessing risk, and defects managements",
]


const Services = () => (
	<section id="services" className="services mt-5">
    	<div className="container" data-aos="fade-up" data-aos-delay="200">
			<div className='row'>
				<div className='col-xl-12 text-center mb-4'>
					<div className='service-title'>
						<h3 className='sections-head'>what we do</h3>
						<h2 className='sections-title'>Services</h2>
						<div className='small-separator'></div>
        			</div>
        			<p className="services-title-description">
						We at Perfect and Complete Solutions constantly evolve our
						strategies and develop new methods to serve our customers better
						and ensure that they always stay top in the market ahead of their
						competitors.
					</p>
    			</div>
			</div>
        	<div className="row gy-4">
          		<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
					<div className="service-box blue">
						{/* <i className="ri-discuss-line icon"></i> */}
						<h3>FULL STACK</h3>
						<ul className="services-container text-start">
						{fullstactServices.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
          		</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
					<div className="service-box orange">
						{/* <i className="ri-discuss-line icon"></i> */}
						<h3>DEV OPS</h3>
						<ul className="services-container text-start">
						{devopsServices.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box green">
					{/* <i className="ri-discuss-line icon"></i> */}
						<h3>MOBILE</h3>
						<ul className="services-container text-start">
						{mobileServices.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box red">
					{/* <i className="ri-discuss-line icon"></i> */}
						<h3>DATA ENGINEER</h3>
						<ul className="services-container text-start">
						{dataEngServices.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box purple">
					{/* <i className="ri-discuss-line icon"></i> */}
						<h3>AI, ML & DATA SCIENCE</h3>
						<ul className="services-container text-start">
						{mlServices.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
					</div>
				</div>

				<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
					<div className="service-box pink">
						{/* <i className="ri-discuss-line icon"></i> */}
						<h3>QUALITY ASSURANCE</h3>
						<ul className="services-container text-start">
						{qaServices.map(service => (
							<li className="service-description">{service}</li>
						))
						}
						</ul>
						{/* <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a> */}
					</div>
				</div>
        	</div>
      	</div>
    </section>
)
export default Services
