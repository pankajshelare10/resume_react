
import { FaGraduationCap, FaUser, FaCode,  FaCertificate, FaTrophy, FaBriefcase, FaHeart, FaStar } from "react-icons/fa6"
import { FaDiagramProject } from "react-icons/fa6";

function Resume () {

    return (

        <div className="resume">
            
            <div className="resume-header">

            <h2>Pankaj Shelare</h2>
            <h3>Associate Software Engineer</h3>
            <p>Passionate web developer focused on building modern responsive and user-friendly websites.</p>
            <a href="resume.pdf" className="download">Download Resume</a>

            </div>


            <div className="resume-section">
            {/*education cards*/}
            <h2>
                 <FaGraduationCap /> EDUCATION</h2>
            <div className="education-grid">

                
                 

                <div className="education-card">

                    <span><FaBriefcase /> SSC Qualified</span>
                    <p>New English High School, Nagpur</p>
                    <h5>2018-2019</h5>
                    <h6>Completed secondary education with a future dream of web developer.</h6>
                    < br />
                   </div> 

                    <div className="education-card">
                    <span><FaBriefcase /> HSC Qualified</span>
                    <p>New English Jr. College, Nagpur</p>
                    <h5>2019-2021</h5>
                    <h6>Completed higher secondary education with a focus on developing strong fundamentals on Science & Technology. </h6>
                    <br />
                </div>

                <div className="education-card">
                    <span> <FaBriefcase /> BCA Graduation</span>
                    <p>RTM Nagpur University</p>
                    <h5>2023-2026</h5>
                    <h6>Studied and researched on computer applications along with dfferent programming languages.</h6>
                </div>
            </div>

            </div>

        
                {/*Experience*/}

            <div className="resume-section">
                <h2><FaBriefcase /> Experience</h2>

                <div className="experience-grid">

                    <div className="experience-card">
                        <h3>Web Developement</h3>
                        <span>Projects & Practical experience</span>

                        <ul>

                            <li>Developed responsive websites using HTML, CSS and JavaScript</li>
                            <li>Created reusable React components for different web projects.</li>
                            <li>Implemented React Router for multi-page navigation.</li>
                            <li>Designed responsive layoutt for dekstop, tablet and mobile devices.</li>
                            <li>Used Git and GitHub for source code management and project collaboration.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*projects*/}

             <div className="resume-section">

                <h2><FaDiagramProject /> Projects</h2>

                <div className="project-resume-card">

                    <h3>Property Listing Websites</h3>
                    <p>A responsive property listing webites that allows users to explore different properties through
                        a clean and user-friendly interface.
                    </p>

                    <strong>Technologies</strong>
                    <span>HTML, CSS, Javascript & React JS</span>
                </div>

                <div className="project-resume-card">

                    <h3>College Website</h3>
                    <p>An informative and detailed college website featuring different services, classes, and knowledge.</p>

                    <strong>Technologies</strong>
                    <span>HTML, CSS & JavaScript</span>
                </div>

                <div className="project-resume-card">

                    <h3>Maintainance Service Website</h3>
                    <p>A professional website for annual maintainance services, featuring cards, responsive navigation and 
                        customer-focused content.
                    </p>

                    <strong>Technologies</strong>
                    <span>HTML, CSS & JavaScript</span>
                </div>
             </div>

             {/* Certification*/}
            
            <div className="resume-section">

                <h2><FaCertificate /> Certifiucations & Learnings</h2>

                <ul className="certi-list">
                    <li>Web Developments Fundamentals</li>
                    <li>JavaScript Programming</li>
                    <li>React JS Development</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>

            {/* Achievements*/}

            <div className="resume-section">
                <h2><FaTrophy /> Achievements</h2>

                    <ul className="achi-list">
                        <li>Built multiple responsive projects</li>
                        <li>Developed using React and moder tecnologies.</li>
                        <li>Continuously improving frontend development skills</li>
                        <li>Practicing real-world UI/UX implementation</li>
                    </ul>
            </div>

            {/*Personal Strenghts*/}

            <div className="resume-section">

                <h2><FaStar /> Interests</h2>

                <p className="intr-li">Web Developmemnt | UI Design | Learning New Technologies | Building Project | Technology Trends</p>
            </div>
        </div>
    )
}

export default Resume;