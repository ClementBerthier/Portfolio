import "../../styles/Binder.scss";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { Projects } from "../Projects/Projects.jsx";

//TODO: lié les boutons avec les sections
export const Binder = () => {
    return (
        <div className="binder" id="binder">
            <div className="binder-container">
                <div className="binder-tab">
                    <div className="aboutMe-tab">
                        <span className="text">A Propos</span>
                    </div>
                    <div className="project-tab">
                        <span className="text">Projets</span>
                    </div>
                    <div className="contac-tab">
                        <span className="text">Contact</span>
                    </div>
                </div>

                <div className="info-container">
                    {/*<AboutMe />*/}
                    {/*<Projects />*/}
                    {<Contact />}
                </div>
            </div>
        </div>
    );
};
