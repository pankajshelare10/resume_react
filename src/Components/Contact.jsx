import { FaPen, FaPhoneAlt } from "react-icons/fa";
import { FaClock, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Contact() {

    return(
        
        <div className="section-container">
            <h2 className="section-title">Let's Work Together</h2>
            <p>Have a project in mind? I'm available for freelance work. Let's discuss how I can help bring your ideas to life!</p>

            <div className="contact-grid">
                
                <div className="contact-card">
                    <h3>Get In Touch</h3>
                    <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
                    <br />
                    <p><b><FaEnvelope /> Email:</b>pankajshelare32@gmail.com</p>
                    <p><b><FaPhoneAlt /> Phone:</b>+91 8329846804</p>
                    <p><b><FaLocationDot /> Location:</b>Nagpur, Maharashtra, India - 400010</p>
                    <p><b><FaClock /> Working Hours</b>Mon-Fri, 10AM-6PM</p>
                    <br />
                    <p><b><FaPen /> Response Time:</b>I usually reply within 24 hours.</p>
                </div>

                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119080.23492213771!2d79.00126389614414!3d21.14215468292073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1786448245986!5m2!1sen!2sin" 
                    width="800" height="250" style={{border:0}} allowfullscreen="" loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>

            </div>
        </div>
    )
}

export default Contact;