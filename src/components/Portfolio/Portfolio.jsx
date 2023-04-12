import "../../styles/Portfolio.scss";
import "../../styles/keyframes.scss";
import { Header } from "../Header/Header.jsx";
import { Home } from "../Home/Home.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Context } from "../Context/Context.jsx";
import { useState } from "react";
import { Binder } from "../Binder/Binder.jsx";

export const Portfolio = () => {
    const [loaderFinish, setloaderFinish] = useState(false);

    return (
        <Context.Provider value={{ loaderFinish, setloaderFinish }}>
            <div className="portfolio">
                <Header />
                <Home />
                {loaderFinish ? (
                    <>
                        <Binder />
                        <Footer />
                    </>
                ) : null}
            </div>
        </Context.Provider>
    );
};
