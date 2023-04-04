import { useContext } from "react";
import "../../styles/Home.scss";
import { Context } from "../Context/Context.jsx";

export const Home = () => {
    const { isClicked, setIsClicked } = useContext(Context);

    const hidden = isClicked ? "" : "hidden";
    const hiddenButton = isClicked ? "hidden" : "";

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <section className="home" id="home">
            <div className="trigger-container">
                <button
                    className={`trigger ${hiddenButton}`}
                    onClick={handleClick}
                >
                    Clic
                </button>
            </div>
            <div className={`home-container ${hidden}`}>
                <h1 className="title">Bienvenue sur mon Portfolio</h1>
                <h2 className="subtitle">Je suis Clément Berthier</h2>
                <p className="description">
                    Développeur fullstack Web et Web Mobile
                </p>
                <button className="button">en savoir +</button>
            </div>
        </section>
    );
};
