

import {Link} from 'react-router-dom'

function Projects () {
    const project = [

        {
            title: "Property Listings website",
            desc: "Its a platform whre users can easily browse, search and explore properties available for sale or rent. It provides property details, images, location, pricing and more.",
            image: "propertylistings.png",
            link:"https://property-listings-57xl.vercel.app/"
        },

          {
            title: "Personal Portfolio Website",
            desc: "Its showcasing website of my skills, projects, experience, achievements and contact information in a professional and visually appealing way.",
            image: "portfolio.png",
            link:"https://portfolio-react-wine-delta.vercel.app/"
        },

          {
            title: "College Website",
            desc: "College homepage i designed ehich provides essential information about the college, including courses, events, faculty and more.",
            image: "college.png",
            link:"https://rakhinagrale18.github.io/College-Website/"
        },

          {
            title: "Doctors Directory Website",
            desc: "Developed Doctor's directory webpage helps users find doctors by specialization, experience, location, and availability and contact information.",
            image: "clinic.png",
            link:"https://fathima14shaik-del.github.io/clinic-website/directory.html"
        },

          {
            title: "AMS Contract Website",
            desc: "An Annual MAintainance Service Contract webpage provides information about maintainance services for AC's, lifts, generators and more.",
            image: "ams.png",
            link:"https://pankajshelare10.github.io/ams_services/"
        },

          {
            title: "Staffing Agency Website",
            desc: "A Staffing Agency webpage connects employer with suitable candidates by showcasing job opportunities, recruitments services, staffing solutions and so on.",
            image: "staffing.png",
            link:"https://seela-chaithanya-sai.github.io/Staffing-Agency/contact.html"
        }
    ];


return (

    <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p>Here are some of my recent projects. Each project was carefully crafted to meet the client's requirements and provide the best user experiences.</p>

        <div className="portfolio-grid">

            {project.map((p,i)=> (
                <div className="portfolio-card" key={i}>
                    <img src={p.image}  />
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <Link to={p.link}>View project</Link>
                </div>
            ))}
        </div>
    </div>

)
}

export default Projects;