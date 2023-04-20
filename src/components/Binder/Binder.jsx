import { useContext, useEffect } from "react";
import "../../styles/Binder.scss";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { Projects } from "../Projects/Projects.jsx";
import { Context } from "../Context/Context.jsx";

//TODO: binder tab pas de demarcation sur les bordure

export const Binder = () => {
    const { context, setContext } = useContext(Context);

    useEffect(() => {
        setContext({ ...context, binderId: 1 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = (event) => {
        const id = event.target.id;
        console.log(id);
        setContext({ ...context, binderId: Number(id) });
    };
    return (
        <div className="binder" id="binder">
            <div className="binder-container">
                <div className="binder-tab">
                    {context.binderId !== 0 ? (
                        <>
                            {" "}
                            <div
                                className={`aboutMe-tab ${
                                    context.binderId === 1 ? "selected" : ""
                                }`}
                                id="1"
                                onClick={handleClick}
                            >
                                <span
                                    className="text"
                                    id="1"
                                    onClick={handleClick}
                                >
                                    {" "}
                                    A Propos
                                </span>
                            </div>
                            <div
                                className={`project-tab ${
                                    context.binderId === 2 ? "selected" : ""
                                }`}
                                id="2"
                                onClick={handleClick}
                            >
                                <span
                                    className="text"
                                    id="2"
                                    onClick={handleClick}
                                >
                                    Projets
                                </span>
                            </div>
                            <div
                                className={`contact-tab ${
                                    context.binderId === 3 ? "selected" : ""
                                }`}
                                id="3"
                                onClick={handleClick}
                            >
                                <span
                                    className="text"
                                    id="3"
                                    onClick={handleClick}
                                >
                                    Contact
                                </span>
                            </div>{" "}
                        </>
                    ) : null}
                </div>

                <div className="info-container">
                    {context.binderId === 1 ? (
                        <AboutMe />
                    ) : context.binderId === 2 ? (
                        <Projects />
                    ) : context.binderId === 3 ? (
                        <Contact />
                    ) : null}
                </div>
            </div>
        </div>
    );
};
