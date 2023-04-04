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
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Context.Provider value={{ isClicked, setIsClicked }}>
            <div>
                <Header />
                <Home />
                <AboutMe />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </Context.Provider>
    );
};
