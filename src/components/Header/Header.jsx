import "../../styles/Header.scss";

function Header() {
    return (
        <div className="header">
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
                <a className="link" href="#project">
                    Projets
                </a>
                <a className="link" href="#game">
                    Game
                </a>
                <a className="link" href="#contact">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Header;
