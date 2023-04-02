import "../../styles/Portfolio.scss";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { Header } from "../Header/Header.jsx";
import { Home } from "../Home/Home.jsx";
import { Projects } from "../Projects/Projects.jsx";
import { Contact } from "../Contact/Contact.jsx";

export const Portfolio = () => {
    return (
        <div>
            <Header />
            <Home />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
};
