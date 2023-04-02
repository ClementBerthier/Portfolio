import "../../styles/Home.scss";

export const Home = () => {
    return (
        <section className="home" id="home">
            <h1 className="title">Bienvenue sur mon Portfolio</h1>
            <h2 className="subtitle">Je suis Clément Berthier</h2>
            <p className="description">
                Développeur fullstack Web et Web Mobile
            </p>
            <button className="button">en savoir +</button>
        </section>
    );
};
