import { useContext, useRef } from "react";
import "../../styles/Home.scss";
import { Context } from "../Context/Context.jsx";

//TODO: ajouter un bouton pour desactivé a l'envie le shadow du text

//TODO: regler le probleme du shadow quand la souris passe sur le header

export const Home = () => {
    const { isClicked, setIsClicked } = useContext(Context);

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
        calcShadow(event);
    };

    const handleClick = () => {
        setIsClicked(true);
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
            <div className="option">option</div>
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
