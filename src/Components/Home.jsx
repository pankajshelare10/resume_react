
import { FaCediSign, FaChartBar, FaCode, FaFile, FaPen, FaRocket } from 'react-icons/fa6';
import Hero from './Hero'
import { FaProjectDiagram } from 'react-icons/fa';

function Home () {

    return (

        <div>

            <Hero />

            <section className="section-container">
                <h2 className='section-title'>About Me</h2>

                <div className="card">
                    <h3>Who Am I?</h3>
                    <p>I'm Pankaj Shelare, a self-taught Web Developer based in Maharashtra, India.
                        My journey in take started 1 year ago with a curiosity to build things for the web. 
                        Since then, I have worked in 30+ projects. My approach combines clean code, creative design
                        and bussiness strategy.<br />
                        <p> When I'm not coding you will find e learnig new technologies, contributing to open source. 
                            I'm always open to new opportunities and exciting project. Let's build someting together! </p>
                    </p>
                </div>
            </section>

            <section className="section-container">
                <h2 className="section-title"> Why Work With Me?</h2>

                <div className="grid">

                    <div className="card">
                        <h3><FaRocket /> Fast Delievry</h3>
                        <p>I understand deadlines. Most projects are delivered on time with updates and communication.</p>
                    </div>

                    <div className="card">
                        <h3><FaCode /> Clean Code</h3>
                        <p>I write maintainable, scalable and well-documented code that any developer can code with in the future.</p>
                    </div>

                    <div className="card">
                        <h3><FaChartBar /> Responsive Design</h3>
                        <p>Your website will look perfect on all devices -mobile,tablet, and dekstop. Mobile-first approach guaranteed.</p>
                    </div>
                </div>
            </section>

           

                
            </div>
        
    )
}

export default Home;