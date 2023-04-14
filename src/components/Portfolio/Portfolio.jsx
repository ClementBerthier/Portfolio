import "../../styles/Portfolio.scss";
import "../../styles/keyframes.scss";
import { Header } from "../Header/Header.jsx";
import { Home } from "../Home/Home.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Context } from "../Context/Context.jsx";
import { useState } from "react";
import { Binder } from "../Binder/Binder.jsx";

export const Portfolio = () => {
    const [context, setContext] = useState(false);

    return (
        <Context.Provider value={{ context, setContext }}>
            <div className="portfolio">
                <Header />
                <Home />
                {context.loaderFinish ? (
                    <>
                        <Binder />
                        <Footer />
                    </>
                ) : null}
            </div>
        </Context.Provider>
    );
};
