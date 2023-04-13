import { projects } from "../../assets/data/projects";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="title-container">
                <h1 className="title">Mes Derniers Projets</h1>
            </div>
            <div className="carousel-container">
                <Carousel showThumbs={false} showIndicators={false}>
                    {projects.map((project) => (
                        <div className="image-container" key={project.id}>
                            <img
                                className="image-project"
                                src={project.path}
                                alt={project.name}
                            />
                            {/* <div>
                                <h3>{project.name}</h3>
                                <span>
                                    {project.id}/{projects.length}
                                </span>
                                <p>{project.description}</p>
                            </div> */}
                        </div>
                    ))}
                </Carousel>
            </div>
            <button>en voir +</button>
        </section>
    );
};
