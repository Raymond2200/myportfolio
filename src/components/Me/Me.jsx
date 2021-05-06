import './Me.css'

function Me(props) {
    return(
        <div className='me'>
            <div className='whoText'>
                <h1 className="name">Raymond<br/>&nbsp;&nbsp;&nbsp;&nbsp; Casgrain</h1>
                <h2 className="career"> FULL-STACK DEVELOPER</h2>
            </div>
            <img className="meImg" src="https://i.imgur.com/UMB5cGG.jpg"/>
        </div>
    )
}

export default Me