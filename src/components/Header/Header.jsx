import "../../styles/Header.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src="/images/logo-test.jpg" alt="logo" />
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
