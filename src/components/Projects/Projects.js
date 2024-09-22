import React from "react";
import ReactPicture from "../../pic/logo512.png";
import NextPicture from "../../pic/nextjs-icon-2048x1234-pqycciiu.png";
import ASP from "../../pic/asp.net.png";
import BasicPicture from "../../pic/HTML,CSS,JS.png"
import AndroidPicture from "../../pic/android studio.png"

const projects = [
    {
        Image: ReactPicture,
        name: "MoneyRecord",
        description: "MoneyRecord is a mobile appliacation designed to help you effortlessly track and manage your personal finances. It’s a personal project I developed using React Native to keep a detailed record of my own financial transactions.",
        githubLink: "https://github.com/Leeyungsen/MoneyRecord.git",
    },
    {
        Image: ReactPicture,
        name: "Finder",
        description: "Finder is a software engineering project that uses React js as the framework. it is a web based app that specialize in searching accommodation for uni students and office workers.",
        githubLink: "https://github.com/sjsh23/Finder.git",
    },
    {
        Image: NextPicture,
        name: "Galaxy Cinema",
        description: "Galaxy Cinema is a web based application that specialize in ordering movie tickets. It is an Binus's IT Division advanced bootcamp group project and uses Next js framework.",
        githubLink: "https://github.com/dhirojap/cinema.git",
    },
    {
        Image: ASP,
        name: "Warehouse Backend",
        description: "This is a backend for Warehouse i developed this using ASP.NET.",
        githubLink: "https://github.com/Leeyungsen/Warehouse_backend.git",
    },
    {
        Image: BasicPicture,
        name: "Warehouse",
        description: "Warehouse is a web base application to check stock of goods. It is an Binus's IT Division basic bootcamp project and ueses HTML, CSS, JS.",
        githubLink: "https://github.com/Leeyungsen/Warehouse.git",
    },
    {
        Image: AndroidPicture,
        name: "Mobile Calculator",
        description: "Mobile Calculator is a mobile calculator application, and this is my first mobile application. It’s a personal project I developed using android studio.",
        githubLink: "https://github.com/Leeyungsen/Calculator_java.git",
    },
];

const Projects = () => {
return (
    <section id="projects" className="py-5 bg-light">
        <div className="container">
            <h2 className="text-center">My Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <img
                            src={project.Image}
                            className="card-img-top"
                            alt={project.name}
                            style={{ height: "200px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                >
                                View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
};

export default Projects;
