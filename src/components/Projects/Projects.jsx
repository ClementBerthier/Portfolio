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

    const handleMouseLeave = () => {
        setHovered(false);
        setHoveredId(null);
    };

    return (
        <section className="projects" id="projects">
            <h1 className="title">Mes Derniers Projets</h1>
            <div className="grid-container">
                {projects.map((project) => (
                    <div className="grid-item" key={project.id}>
                        <a
                            className="project-link"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="project-image"
                                src={project.path}
                                alt={project.name}
                                overlay={project.description}
                                id={project.id}
                                onMouseEnter={handleMouseEnter}
                            />
                            {hovered && Number(hoveredId) === project.id ? (
                                <p
                                    className="image-text active"
                                    key={project.id}
                                >
                                    {project.description}
                                </p>
                            ) : (
                                <p className="image-text" key={project.id}>
                                    {project.description}
                                </p>
                            )}
                        </a>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="button">En voir plus</button>
            </div>
        </section>
    );
};
