import { useState } from "react";
import { projects } from "../../assets/data/projects";
import "../../styles/Projects.scss";

export const Projects = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="projects" id="projects">
            <h1 className="title">Mes Derniers Projets</h1>
            <div className="grid-container">
                {projects.map((project, index) => (
                    <div className="grid-item">
                        <a
                            className="project-link"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            <img
                                className="project-image"
                                src={project.path}
                                alt={project.name}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
