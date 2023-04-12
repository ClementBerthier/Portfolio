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
            <div className="timeline">
                {data.map((data) => (
                    <Modal
                        closeIcon
                        open={open}
                        trigger={
                            <div>
                                <time className="time"></time>
                                <p className="description"></p>
                            </div>
                        }
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                    >
                        <Header icon="archive" content="Archive Old Messages" />
                        <Modal.Content>
                            <p>
                                Your inbox is getting full, would you like us to
                                enable automatic archiving of old messages?
                            </p>
                        </Modal.Content>
                    </Modal>
                ))}
            </div>
        </section>
    );
};
