import { useContext, useState } from "react";
import "../../styles/Header.scss";
import { Context } from "../Context/Context.jsx";

//TODO: rendre plus fluide la transition entre les couleur du texte au hover du header

export const Header = () => {
    const { context, setContext } = useContext(Context);
    const [isHovered, setIsHovered] = useState(false);

    const hidden = context.loaderFinish ? "" : "hidden";

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (event) => {
        const id = event.target.id;
        setContext({ ...context, binderId: Number(id) });
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
                <a className="link" href="#binder" id="1" onClick={handleClick}>
                    A Propos
                </a>
                <a className="link" href="#binder" id="2" onClick={handleClick}>
                    Projets
                </a>
                <a className="link" href="#binder" id="3" onClick={handleClick}>
                    Contact
                </a>
            </div>
        </header>
    );
};
