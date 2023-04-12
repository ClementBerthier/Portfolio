import { data } from "../../assets/data/data";
import { logoSkillsFrontend } from "../../assets/data/logoSkillsFrontend.js";
import { logoSkillsBackend } from "../../assets/data/logoSkillsBackend.js";
import { logoSkillsOther } from "../../assets/data/logoSkillsOther.js";
import { Button, Header, Modal, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/AboutMe.scss";
import { useState } from "react";

export const AboutMe = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="aboutMe" id="aboutMe">
            <div className="presentation">
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
            <div className="bottom-container">
                <div className="timeline">
                    {data.map((data) => (
                        <Modal
                            className="modal-timeline"
                            closeIcon
                            key={data.id}
                            open={open === data.id}
                            trigger={
                                <div className="trigger-container">
                                    <time className="time">{data.date}</time>
                                    <p className="description">{data.role}</p>
                                </div>
                            }
                            onClose={() => setOpen(null)}
                            onOpen={() => setOpen(data.id)}
                        >
                            <Header content={data.role} />
                            <Modal.Content>
                                <div>
                                    <p>{data.description}</p>
                                    <p>{data.date}</p>
                                    <p>{data.school}</p>
                                    <p>{data.place}</p>
                                </div>
                            </Modal.Content>
                        </Modal>
                    ))}
                </div>
                <div className="skills">
                    <div className="frontend">
                        <h1 className="title">Frontend</h1>
                        <div className="logo">
                            {logoSkillsFrontend.map((logo) => (
                                <a
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Popup
                                        position="top center"
                                        size="huge"
                                        className="popup"
                                        content={logo.name}
                                        trigger={
                                            <img
                                                className="logoFront"
                                                key={logo.id}
                                                src={logo.path}
                                                alt={logo.name}
                                            />
                                        }
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="backend">
                        <h1 className="title">Backend</h1>
                        <div className="logo">
                            {logoSkillsBackend.map((logo) => (
                                <a
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Popup
                                        position="top center"
                                        size="huge"
                                        className="popup"
                                        content={logo.name}
                                        trigger={
                                            <img
                                                className="logoBack"
                                                key={logo.id}
                                                src={logo.path}
                                                alt={logo.name}
                                            />
                                        }
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="tools">
                        <h1 className="title">Outils</h1>
                        <div className="logo">
                            {logoSkillsOther.map((logo) => (
                                <a
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Popup
                                        position="top center"
                                        size="huge"
                                        className="popup"
                                        content={logo.name}
                                        trigger={
                                            <img
                                                className="logoTools"
                                                key={logo.id}
                                                src={logo.path}
                                                alt={logo.name}
                                            />
                                        }
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
