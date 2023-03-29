import { useState } from "react";
import data from "../../assets/data/data";
import "../../styles/AboutMe.scss";

function AboutMe() {
    const [dataTimeline, setDataTimeline] = useState(data);

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
                    Je suis un développeur Web à la recherche d'une alternance
                    en tant que concepteur/développeur d'applications. Je suis
                    passionné par les sciences et la technologie, mais surtout
                    curieux d'apprendre de nouvelles choses. J'ai de
                    l'expérience en Frontend et Backend où j'ai pu travailler en
                    autonomie comme en équipe. J'ai aussi de l'expérience en
                    gestion de projet. Si vous cherchez quelqu'un d'enthousiaste
                    et toujours prêt à relever de nouveaux défis, je serais ravi
                    de pouvoir échanger avec vous et vous rencontrer. N'hésitez
                    pas à me <a href="">contacter</a> .
                </div>
            </div>
            <div className="timeline">
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
                <div className="line arrow"></div>

                <div className="years">
                    {dataTimeline.map((data, index) => {
                        return (
                            <div className="box" key={index}>
                                <p>{data.date}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="slideshow">
                <div></div>
            </div>
        </div>
    );
}

export default AboutMe;
