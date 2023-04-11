import "../../styles/Portfolio.scss";
import "../../styles/keyframes.scss";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { Header } from "../Header/Header.jsx";
import { Home } from "../Home/Home.jsx";
import { Projects } from "../Projects/Projects.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Context } from "../Context/Context.jsx";
import { useState } from "react";

export const Portfolio = () => {
    const [loaderFinish, setloaderFinish] = useState(false);

    return (
        <Context.Provider value={{ loaderFinish, setloaderFinish }}>
            <div className="portfolio">
                <Header />
                <Home />
                {loaderFinish ? (
                    <>
                        <AboutMe />
                        <Projects />
                        <Contact />
                        <Footer />
                    </>
                ) : null}
            </div>
        </Context.Provider>
    );
};
