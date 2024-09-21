import React from "react";
import { FaEnvelope, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
return (
    <section id="contact" className="py-5">
    <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <p className="lead text-center">Feel free to reach out via any of the platforms below!</p>
        <div className="row justify-content-center">
        <div className="col-md-6 text-center">
            <ul className="list-unstyled">
            <li className="mb-3">
                <a href="frederickmaxwellee02@gmail.com" className="text-dark">
                <FaEnvelope size={30} /> Email: frederickmaxwellee02@gmail.com
                </a>
            </li>
            <li className="mb-3">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaLinkedin size={30} /> linkedin: Frederick Maxwellee
                </a>
            </li>
            <li className="mb-3">
                <a href="https://www.instagram.com/lee_yungsen/" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaInstagram size={30} /> Instagram: lee_yungsen
                </a>
            </li>
            <li className="mb-3">
                <a href="https://github.com/Leeyungsen?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaGithub size={30} /> github: Leeyungsen
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </section>
);
};

export default Contact;
