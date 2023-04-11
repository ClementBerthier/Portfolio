import { useContext, useState } from "react";
import "../../styles/Header.scss";
import { Context } from "../Context/Context.jsx";

//TODO: rendre plus fluide la transition entre les couleur du texte au hover du header

export const Header = () => {
    const { loaderFinish } = useContext(Context);
    const [isHovered, setIsHovered] = useState(false);

    const hidden = loaderFinish ? "" : "hidden";

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <header
            className={`header + ${hidden}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="logo-container">
                {isHovered ? (
                    <img
                        className="logo"
                        src="/images/logoheadHovered.png"
                        alt="logo"
                    />
                ) : (
                    <img
                        className="logo"
                        src="/images/logohead.png"
                        alt="logo"
                    />
                )}
            </div>
            <div className="link-container">
                <a className="link" href="#home">
                    Accueil
                </a>
                <a className="link" href="#aboutMe">
                    A Propos
                </a>
                <a className="link" href="#projects">
                    Projets
                </a>
                {/* <a className="link" href="#game">
                    Game
                </a> */}
                <a className="link" href="#contact">
                    Contact
                </a>
            </div>
        </header>
    );
};
