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
        description: "A project using React.js and Bootstrap.",
        githubLink: "https://github.com/Leeyungsen/MoneyRecord.git",
    },
    {
        Image: ReactPicture,
        name: "Finder",
        description: "A project using Node.js and Express.",
        githubLink: "https://github.com/sjsh23/Finder.git",
    },
    {
        Image: NextPicture,
        name: "Galaxy Cinema",
        description: "A project using Python and Flask.",
        githubLink: "https://github.com/dhirojap/cinema.git",
    },
    {
        Image: ASP,
        name: "Warehouse Backend",
        description: "A project using Python and Flask.",
        githubLink: "https://github.com/Leeyungsen/Warehouse_backend.git",
    },
    {
        Image: BasicPicture,
        name: "Warehouse",
        description: "A project using Python and Flask.",
        githubLink: "https://github.com/Leeyungsen/Warehouse.git",
    },
    {
        Image: AndroidPicture,
        name: "Mobile Calculator",
        description: "A project using Python and Flask.",
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
