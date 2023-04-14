import { data } from "../../assets/data/data";
import { logoSkillsFrontend } from "../../assets/data/logoSkillsFrontend.js";
import { logoSkillsBackend } from "../../assets/data/logoSkillsBackend.js";
import { logoSkillsOther } from "../../assets/data/logoSkillsOther.js";
import { Header, Modal, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../styles/AboutMe.scss";
import "../../styles/modal_css.scss";
import { useContext, useState } from "react";
import { Context } from "../Context/Context.jsx";

export const AboutMe = () => {
    const { context, setContext } = useContext(Context);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        const id = event.target.id;
        setContext({ ...context, binderId: Number(id) });
    };

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
                        <a
                            href="/#binder"
                            id="3"
                            className="contact-link"
                            onClick={handleClick}
                        >
                            contacter
                        </a>{" "}
                    </p>
                </div>
            </div>
            <div className="bottom-container">
                <div className="timeline">
                    {data.map((data) => (
                        <Modal
                            size="small"
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
                            <Header
                                content={
                                    <h1 className="modal-title">{data.role}</h1>
                                }
                                className="header-modal"
                            />
                            <Modal.Content>
                                <div className="info-container">
                                    <p className="info">{data.description}</p>
                                    <p className="info">{data.date}</p>
                                    <p className="info">{data.school}</p>
                                    <p className="info"> {data.place}</p>
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
                                    key={logo.id}
                                >
                                    <Popup
                                        position="top center"
                                        size="huge"
                                        className="popup"
                                        content={logo.name}
                                        trigger={
                                            <img
                                                className="logoFront"
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
                                    key={logo.id}
                                >
                                    <Popup
                                        position="top center"
                                        size="huge"
                                        className="popup"
                                        content={logo.name}
                                        trigger={
                                            <img
                                                className="logoBack"
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
                                    key={logo.id}
                                >
                                    <Popup
                                        position="top center"
                                        size="huge"
                                        className="popup"
                                        content={logo.name}
                                        trigger={
                                            <img
                                                className="logoTools"
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
