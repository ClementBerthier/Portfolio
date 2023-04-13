import { projects } from "../../assets/data/projects";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "semantic-ui-react";
import { useState } from "react";

export const Projects = () => {
    const [mouseEnter, setMouseEnter] = useState(false);

    const handleMouseEnter = () => {
        setMouseEnter(true);
    };

    const handleMouseLeave = () => {
        setMouseEnter(false);
    };

    console.log("ishovered", mouseEnter);

    return (
        <section className="projects" id="projects">
            <div className="title-container">
                <h1 className="title">Mes Derniers Projets</h1>
            </div>
            <div className="carousel-container">
                <Carousel showThumbs={false} showIndicators={false}>
                    {projects.map((project) => (
                        <div
                            className="image-container"
                            key={project.id}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className="image-project"
                                src={project.path}
                                alt={project.name}
                            />

                            <div
                                className={`info-container ${
                                    !mouseEnter ? "hidden" : ""
                                }`}
                            >
                                <div className="title-container">
                                    <h3 className="info-title">
                                        {project.name}
                                    </h3>
                                    <span className="number">
                                        {project.id}/{projects.length}
                                    </span>
                                </div>
                                <div className="description">
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <Button className="seeMore">en voir +</Button>
        </section>
    );
};
