import "./Home.scss";

function Home() {
    const title = "En Développement";
    const titleArray = title.split(/(?!^)/u);
    console.log("titleArray = ", titleArray);

    return (
        <div className="home">
            <div className="home_presentation">
                <h1 className="title">Bienvenue sur mon portefolio</h1>
                <h2 className="name">Je suis Clément Berthier</h2>
                <p>Dévellopeur Web et Mobile</p>
                <p>Découvrez moi à travers de mon site</p>
            </div>
            <div className="home_choice">
                <div className="left">
                    <h1> Une petite envie de jouer ?</h1>
                    <h2 className="choice_title">
                        {titleArray.map((letter, index) => {
                            return (
                                <span key={index} className={`letter_${index}`}>
                                    {letter}
                                </span>
                            );
                        })}
                    </h2>
                </div>
                <div className="center"></div>
                <div className="right">
                    <h1>Allons a l'essentiel</h1>
                    <h2 className="choice_title">A propos de moi</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
