import './Buzz.css'

function Buzz(props) {
    return(
        <div className="mooseCont">
            <h2 className="mooseTitle">Buzz</h2>
            <h3>The project</h3>
            <p className="mooseText">Buzz is an app designed for mobile use by a team of Full Stack Developers and User Experience Designers. It’s main feature revolves around being able to look up and add specific coffee reviews for coffee lovers. To be able to do so users must first create an account. Once done they will be able to add specific coffees to store and add associated reviews. </p>
            <a className="linked" href="https://secret-river-35567.herokuapp.com/ranquotes" target="_blank">The Site</a>
            <a className="linked" href="https://github.com/Raymond2200/Project2" target="_blank">The Code</a>
            <h3>Technologies Involved</h3>
            <div className="skillContainer">
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/heroku.png" alt="1"/><p className="skillTxt">Heroku</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/css3.png" alt="1"/><p className="skillTxt">CSS</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/sxqbXcf.png" alt="1"/><p className="skillTxt">Django</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://img.icons8.com/plasticine/100/000000/github.png" alt="1"/><p className="skillTxt">GitHub</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/4KGqaPU.png" alt="1"/><p className="skillTxt">Yelp API</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/postgreesql.png" alt="1"/><p className="skillTxt">PostgreSQL</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/amazon-s3.png" alt="1"/><p className="skillTxt">AWS S3</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/python.png" alt="1"/><p className="skillTxt">Python 3</p></div>
            </div>
            <div className="moosePics">
                <img className="mooseImg" src="https://i.imgur.com/GSht3DQ.png" />
                <img className="mooseImg" src="https://i.imgur.com/TfTfetx.png" />
                <img className="mooseImg" src="https://i.imgur.com/npkAj48.png" />
                <img className="mooseImg" src="https://i.imgur.com/ydDaTJt.png" />
            </div>
        </div>  
    )
}

export default Buzz