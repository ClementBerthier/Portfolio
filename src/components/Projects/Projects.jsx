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
    console.log(typeof hoveredId);

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
                            key={project.id}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="project-image"
                                src={project.path}
                                alt={project.name}
                                overlay={project.description}
                                id={project.id}
                            />
                            {/*//TODO: Fixer le probleme de l'image 4 qui affiche le hover de l'image 0*/}
                            {hovered && Number(hoveredId) === project.id ? (
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
            <div className="button-container">
                <button className="button">En voir plus</button>
            </div>
        </div>
    );
};
