import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Context/Context.jsx";
import "../../styles/Home.scss";
import "semantic-ui-css/semantic.min.css";
import { Checkbox, Progress } from "semantic-ui-react";

//TODO: regler le probleme du shadow quand la souris passe sur le header

//TODO: regler le decalage au 100% de la barre progress.

export const Home = () => {
    const { context, setContext } = useContext(Context);
    const [shadowActived, setShadowActived] = useState(false);
    const [optionHovered, setOptionHovered] = useState(false);
    const [currentV, setCurrentV] = useState(0.0);
    const [showProgress, setShowProgress] = useState(true);
    const [showHomeContainer, setShowHomeContainer] = useState(false);

    const hidden = showHomeContainer ? "" : "hidden";

    const titleRef = useRef();
    const subtitleRef = useRef();
    const descriptionRef = useRef();

    const elements = [titleRef, subtitleRef, descriptionRef];

    const calcShadow = (event) => {
        elements.forEach((element) => {
            const rect = element.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const offsetX = -(x - rect.width / 2) / 10;
            const offsetY = -(y - rect.height / 2) / 10;
            const shadow = `${offsetX}px ${offsetY}px 10px rgba(0, 0, 0, 0.5)`;

            element.current.style.textShadow = shadow;
        });
    };

    const handleMouseMove = (event) => {
        if (shadowActived) {
            calcShadow(event);
        } else {
            elements.forEach((element) => {
                element.current.style.textShadow = "";
            });
        }
    };

    const handleMouseEnter = () => {
        setOptionHovered(true);
    };

    const handleMouseLeave = () => {
        setOptionHovered(false);
    };

    const handleClickShadow = () => {
        setShadowActived(!shadowActived);
    };

    useEffect(() => {
        for (let i = 0; i < 101; i += 0.01) {
            setTimeout(() => {
                setCurrentV(i);
            }, 30 * i);
        }
    }, []);

    useEffect(() => {
        if (currentV >= 100) {
            setTimeout(() => {
                setShowProgress(false);
            }, 500);
            setTimeout(() => {
                setShowHomeContainer(true);
            }, 1000);
            setContext({ ...context, loaderFinish: true });
        } else {
            setShowProgress(true);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentV]);

    console.log("showProgress", showProgress);

    return (
        <section className="home" id="home" onMouseMove={handleMouseMove}>
            <div className="trigger-container">
                <button className={`trigger `}>
                    {showProgress ? (
                        <img
                            className="logo"
                            src="/images/logohead.png"
                            alt="logo"
                            style={{ opacity: currentV / 100 }}
                        />
                    ) : (
                        <img
                            className="logo"
                            src="/images/logohead.png"
                            alt="logo"
                            style={{
                                animation:
                                    "progress-opacity 1s ease-in-out forwards",
                            }}
                        />
                    )}
                    {showProgress ? (
                        <Progress
                            className="progress"
                            percent={Math.floor(currentV)}
                            progress
                            size="large"
                            color="blue"
                        />
                    ) : (
                        <Progress
                            className="progressFull"
                            percent={Math.floor(currentV)}
                            progress
                            size="large"
                            color="blue"
                        />
                    )}
                </button>
            </div>
            {!showProgress ? (
                <div
                    className="option-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="title">Options</span>
                    {optionHovered ? (
                        <div className="option-content">
                            <span>Ombres:</span>
                            {shadowActived ? (
                                <Checkbox
                                    toggle
                                    checked
                                    onClick={handleClickShadow}
                                />
                            ) : (
                                <Checkbox toggle onClick={handleClickShadow} />
                            )}
                        </div>
                    ) : null}
                </div>
            ) : null}

            <div className={`home-container ${hidden}`}>
                <h1 ref={titleRef} className="title">
                    Bienvenue{" "}
                    <span className="title-span">sur mon Portfolio</span>
                </h1>
                <h2 ref={subtitleRef} className="subtitle">
                    Je suis Clément Berthier
                </h2>
                <p ref={descriptionRef} className="description">
                    Développeur fullstack Web et Web Mobile
                </p>
            </div>
        </section>
    );
};
