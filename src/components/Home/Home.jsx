import { useContext, useRef, useState } from "react";
import { Context } from "../Context/Context.jsx";
import "../../styles/Home.scss";
import "semantic-ui-css/semantic.min.css";
import { Checkbox } from "semantic-ui-react";

//TODO: ajouter un bouton pour desactivé a l'envie le shadow du text

//TODO: regler le probleme du shadow quand la souris passe sur le header

export const Home = () => {
    const { isClicked, setIsClicked } = useContext(Context);
    const [shadowActived, setShadowActived] = useState(false);

    const hidden = isClicked ? "" : "hidden";
    const hiddenButton = isClicked ? "hidden" : "";

    const titleRef = useRef();
    const subtitleRef = useRef();
    const descriptionRef = useRef();

    const elements = [titleRef, subtitleRef, descriptionRef];

    const calcShadow = (event) => {
        elements.forEach((element) => {
            const rect = element.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const offsetX = -(x - rect.width / 2) / 10;
            const offsetY = -(y - rect.height / 2) / 10;
            const shadow = `${offsetX}px ${offsetY}px 10px rgba(0, 0, 0, 0.5)`;

            element.current.style.textShadow = shadow;
        });
    };
    const handleMouseMove = (event) => {
        if (shadowActived) {
            calcShadow(event);
        } else {
            elements.forEach((element) => {
                element.current.style.textShadow = "";
            });
        }
    };

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleClickShadow = () => {
        setShadowActived(!shadowActived);
    };

    return (
        <section className="home" id="home" onMouseMove={handleMouseMove}>
            <div className="trigger-container">
                <button
                    className={`trigger ${hiddenButton}`}
                    onClick={handleClick}
                >
                    Clic
                </button>
            </div>
            <div className="option-container">
                <span className="title">Option</span>
                <div className="option-content">
                    <span>Ombres</span>
                    <Checkbox toggle onClick={handleClickShadow} />
                </div>
            </div>
            <div className={`home-container ${hidden}`}>
                <h1 ref={titleRef} className="title">
                    Bienvenue sur mon Portfolio
                </h1>
                <h2 ref={subtitleRef} className="subtitle">
                    Je suis Clément Berthier
                </h2>
                <p ref={descriptionRef} className="description">
                    Développeur fullstack Web et Web Mobile
                </p>
            </div>
        </section>
    );
};
