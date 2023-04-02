import { logoFooter } from "../../assets/data/logoFooter.js";
import "../../styles/Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="box">
                <div className="box-top">
                    <div className="myName">Clement Berthier</div>
                    <div className="link">
                        <div className="logo-container">
                            {logoFooter.map((logo) => (
                                <a href={logo.url} key={logo.id}>
                                    <img
                                        src={logo.path}
                                        alt={logo.name}
                                        className="logo"
                                        title={logo.name}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        © 2023 - All Rights Reserved. Réalisé par Clément
                        Berthier
                    </p>
                </div>
            </div>
        </footer>
    );
};
