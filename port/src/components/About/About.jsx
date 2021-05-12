import './About.css'

function About(props) {
    return (
        <div className="aboutBG">
            <div>
                <h1 className="aboutHead">About Me</h1>
                <p className="aboutTxt">Hello, my name is Raymond a recent graduate from the General Assembly Software Development immersive course. I am a <strong>full-stack developer</strong> who is an avid learner and challenge seeker.</p>
                <br/>
                <p className="aboutTxt">My background originates in finance and the capital markets which helps give me a strong flexibility when working with customer needs, as well as technical requirements. My transition to a software developer was initiated by me need to learn and be challenged. To that end I am constantly bringing my best and always seeking to improve his best. I am a question asker, but one that seeks to take his own initiative.</p>
                <br/>
                <p className="aboutTxt">I am currently completing a python machine learning course on Udemy and will be developing my skills with react native in the near future.</p>
            </div>
            <h2 className="aboutStr">Strong Skills</h2>
            <div>
                <div className="skillContainer"> <img src="https://img.icons8.com/color/96/000000/html-5--v2.png"/><p className="skillTxt">JavaScript</p></div>
                <div className="skillContainer"> <img src="https://img.icons8.com/color/96/000000/python.png"/><p className="skillTxt">Python 3</p></div>
                <div className="skillContainer"> <img src="https://img.icons8.com/color/96/000000/nodejs.png"/><p className="skillTxt">Node.js</p></div>
                <div className="skillContainer"> <img src="icons\html.svg"/><p className="skillTxt">HTML5</p></div>
            </div>
        </div>
    )
}

export default About