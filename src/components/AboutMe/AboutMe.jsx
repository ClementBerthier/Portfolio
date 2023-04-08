import { data } from "../../assets/data/data";
import { logoSkillsFrontend } from "../../assets/data/logoSkillsFrontend.js";
import { logoSkillsBackend } from "../../assets/data/logoSkillsBackend.js";
import { logoSkillsOther } from "../../assets/data/logoSkillsOther.js";
import { Popup } from "semantic-ui-react";
import { useEffect, useRef } from "react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/AboutMe.scss";

//TODO: rendre responsive le bandeau

export const AboutMe = () => {
    const skillsSection = [
        {
            id: 1,
            name: "Frontend",
            variable: logoSkillsFrontend,
        },
        {
            id: 2,
            name: "Backend",
            variable: logoSkillsBackend,
        },
        {
            id: 3,
            name: "Autres",
            variable: logoSkillsOther,
        },
    ];

    const presentationRef = useRef(null);

    const handleScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage =
            scrollTop / document.documentElement.scrollHeight;
        const maxOffset = 218; // Vous pouvez ajuster cette valeur pour augmenter ou diminuer l'amplitude du mouvement
        const offsetX = maxOffset * scrollPercentage;

        presentationRef.current.style.setProperty("--offsetX", `${-offsetX}vw`);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="aboutMe" id="aboutMe">
            <div
                className="presentation"
                ref={presentationRef}
                onScroll={handleScroll}
            >
                <div className="img-container">
                    <img
                        className="portrait"
                        src="./images/portrait.png"
                        alt="Portrait"
                    />
                </div>
                <div className="description">
                    <p>
                        Je suis un développeur Web à la recherche d'une
                        alternance en tant que concepteur/développeur
                        d'applications. Je suis passionné par les sciences et la
                        technologie, mais surtout curieux d'apprendre de
                        nouvelles choses. J'ai de l'expérience en Frontend et
                        Backend où j'ai pu travailler en autonomie comme en
                        équipe. J'ai aussi de l'expérience en gestion de projet.
                        Si vous cherchez quelqu'un d'enthousiaste et toujours
                        prêt à relever de nouveaux défis, je serais ravi de
                        pouvoir échanger avec vous et vous rencontrer. N'hésitez
                        pas à me{" "}
                        <a href="/" className="contact-link">
                            contacter
                        </a>{" "}
                        {/* //TODO mettre le vrai lien  */}
                    </p>
                </div>
            </div>
            <div className="timeline">
                <h1 className="title">Mon Parcours</h1>
                <div className="content">
                    {data.map((data) => (
                        <div className="box" key={data.id}>
                            <p className="description">{data.description}</p>
                            <p className="school">{data.school}</p>
                            <p className="place">{data.place}</p>
                        </div>
                    ))}
                </div>
                <div className="line"></div>

                <div className="years">
                    {data.map((data) => (
                        <div className="box-container" key={data.id}>
                            <div className="box">
                                <p>{data.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills">
                <h1 className="title">Mes Compétences</h1>
                <div className="skills-box">
                    {skillsSection.map((section) => (
                        <div
                            className={section.name.toLowerCase()}
                            key={section.id}
                        >
                            <h2 className="title">{section.name}</h2>
                            <div className="logo-box">
                                {section.variable.map((logo) => (
                                    <a
                                        className="logo-link"
                                        href={logo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={logo.id}
                                    >
                                        <Popup
                                            className="popup"
                                            trigger={
                                                <img
                                                    className="logo"
                                                    src={logo.path}
                                                    alt={logo.name}
                                                />
                                            }
                                            content={logo.name}
                                            size="huge"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
