import { Routes, Route } from "react-router-dom";
import { Portfolio } from "../Portfolio/Portfolio";
import "../../styles/App.scss";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
        </Routes>
    );
};
