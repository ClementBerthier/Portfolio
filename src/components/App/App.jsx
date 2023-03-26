import { Routes, Route } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import "../../styles/App.scss";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
        </Routes>
    );
}

export default App;
