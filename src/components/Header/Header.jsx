import { useContext } from "react";
import "../../styles/Header.scss";
import { Context } from "../Context/Context.jsx";

export const Header = () => {
    const { context, setContext } = useContext(Context);

    const hidden = context.loaderFinish ? "" : "hidden";

    const handleClick = (event) => {
        const id = event.target.id;
        setContext({ ...context, binderId: Number(id), openBurger: false });
    };

    const handleShowBurger = () => {
        setContext({ ...context, openBurger: !context.openBurger });
    };
    return (
        <header
            className={`header ${hidden} ${
                context.openBurger ? "showNav" : "hideNav"
            }`}
        >
            <div className="logo-container">
                {context.openBurger ? (
                    <img
                        className="logo"
                        src="/images/logoheadbeige.png"
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
                <a className="link" href="#home" id="0" onClick={handleClick}>
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
            <button className={`burger-button`} onClick={handleShowBurger}>
                <span
                    className={`burger-bar ${
                        context.openBurger ? "open" : "close"
                    }`}
                ></span>
            </button>
        </header>
    );
};
