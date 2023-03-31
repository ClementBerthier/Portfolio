import { useState } from "react";
import { projects } from "../../assets/data/projects";
import "../../styles/Projects.scss";

export const Projects = () => {
    const [hovered, setHovered] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);

    const handleMouseEnter = (event) => {
        const idProject = event.target.id;
        setHovered(true);
        setHoveredId(idProject);
    };
    console.log("hover", hoveredId);

    const handleMouseLeave = () => {
        setHovered(false);
        setHoveredId(null);
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
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="project-image"
                                src={project.path}
                                alt={project.name}
                                id={index}
                                overlay={project.description}
                            />
                            {hovered && hoveredId == index ? (
                                <p className="image-text active">
                                    {project.description}
                                </p>
                            ) : (
                                <p className="image-text ">
                                    {project.description}
                                </p>
                            )}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
