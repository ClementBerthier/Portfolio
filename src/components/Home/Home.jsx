import "../../styles/Home.scss";

function Home() {
    return (
        <div className="home">
            <h1 className="home_title">Bienvenue sur mon Portfolio</h1>
            <h2 className="home_subtitle">Je suis Clément Berthier</h2>
            <p className="home_description">
                Développeur fullstack Web et Web Mobile
            </p>
            <button className="home_button">en savoir +</button>
        </div>
    );
}

export default Home;
