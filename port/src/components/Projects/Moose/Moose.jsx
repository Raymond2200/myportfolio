import "./Moose.css"

function Moose(props) {
    return(
        <div>
            <h1 className="mooseTitle">Moose Tracks</h1>
            <h3>The project</h3>
            <p></p>
            <div className="moosePics">
                <img className="mooseImg" src="https://i.imgur.com/BD4V14b.png"/>
                <img className="mooseImg" src="https://i.imgur.com/ZCI0ASf.png"/>
                <img className="mooseImg" src="https://i.imgur.com/WfQPEne.png"/>
                <img className="mooseImg" src="https://i.imgur.com/hpnPx0I.png"/>
            </div>
        </div>  
    )
}

export default Moose