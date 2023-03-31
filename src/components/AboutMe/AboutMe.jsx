import { useState } from "react";
import { data } from "../../assets/data/data";
import { logoSkillsFrontend } from "../../assets/data/logoSkillsFrontend.js";
import { logoSkillsBackend } from "../../assets/data/logoSkillsBackend.js";
import { logoSkillsOther } from "../../assets/data/logoSkillsOther.js";
import "semantic-ui-css/semantic.min.css";
import "../../styles/AboutMe.scss";
import { Popup } from "semantic-ui-react";

export const AboutMe = () => {
    const [dataTimeline, setDataTimeline] = useState(data);
    const skillsSection = [
        {
            name: "Frontend",
            variable: logoSkillsFrontend,
        },
        {
            name: "Backend",
            variable: logoSkillsBackend,
        },
        {
            name: "Autres",
            variable: logoSkillsOther,
        },
    ];

    return (
        <div className="aboutMe" id="aboutMe">
            <div className="presentation">
                <div className="picture-container">
                    <img
                        className="picture"
                        src="./images/portrait.png"
                        alt="Portait picture"
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
                        pas à me <a href="">contacter</a>
                    </p>
                </div>
            </div>
            <div className="timeline">
                <h1 className="title">Mon Parcours</h1>
                <div className="content">
                    {dataTimeline.map((data, index) => {
                        return (
                            <div className="box" key={index}>
                                <p className="description">
                                    {data.description}
                                </p>
                                <p className="school">{data.school}</p>
                                <p className="place">{data.place}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="line"></div>

                <div className="years">
                    {dataTimeline.map((data, index) => {
                        return (
                            <div className="box-container">
                                <div className="box" key={index}>
                                    <p>{data.date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="skills">
                <h1 className="title">Mes Compétences</h1>
                <div className="skills-box">
                    {skillsSection.map((section) => {
                        return (
                            <div className={section.name.toLowerCase()}>
                                <h2 className="title">{section.name}</h2>
                                <div className="logo-box">
                                    {section.variable.map((logo, index) => {
                                        return (
                                            <a
                                                className="logo-link"
                                                href={logo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={index}
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
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
