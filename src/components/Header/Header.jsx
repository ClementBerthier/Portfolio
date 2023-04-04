import { useContext } from "react";
import "../../styles/Header.scss";
import { Context } from "../Context/Context.jsx";

export const Header = () => {
    const { isClicked, setIsClicked } = useContext(Context);

    const hidden = isClicked ? "" : "hidden";

    return (
        <header className={`header + ${hidden}`}>
            <div className="logo-container">
                <img className="logo" src="/images/logohead.png" alt="logo" />
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
