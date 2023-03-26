import "../../styles/Header.scss";

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <img className="logo" src="/image/logo-test.jpg" alt="logo" />
            </div>
            <div className="header_link">
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
