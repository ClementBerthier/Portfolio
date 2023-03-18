import './Home.scss'

function Home() {
    const title = "In Construction"
    const titleArray = title.split(/(?!^)/u)
    console.log("titleArray = ", titleArray);
 
  return (
    <div className="home">
        <div className="left">
            <h1 className='home_title'>
                {titleArray.map((letter, index) => {
                    return (
                        <span key={index} className={`letter_${index}`}>
                            {letter}
                        </span>
                    )
                })}
            </h1>
        </div>
        <div className="center">

        </div>
        <div className="right">
            <h1 className="home_title">About Me</h1>
        </div>
    </div>
  )
}

export default Home
