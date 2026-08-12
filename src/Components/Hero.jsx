
import {Link} from 'react-router-dom';

function Hero() {

    return (

        <section className="hero">

            <div className="container">

                <h1>Hi, I'm <span>Pankaj</span> </h1>
                <p>A passionate Web Developer and Associate Software Engineer. Experienced in building modern websites, 
                    I specialize in HTML, CSS, JavaScript, React and creating responsive design. I create responsive and user-friendly websites
                    that converts visitors into customers.
                </p>
                 <div className="buttons">
                        <Link to="/projects" className="btn"> View My Work</Link>
                        <Link to="/contact" className="btn"> Contact Me</Link>
                    </div>
            </div>
        </section>
    )
}

export default Hero;