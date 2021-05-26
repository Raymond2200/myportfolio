import './Nav.css';
import {scrollToElement} from "react-scroll-hooks";

function Nav(props) {

    return (
        <div className="nav">
            <ul>
                <li><a href="https://github.com/Raymond2200"><img className="navImg" src="https://i.imgur.com/Vu0sWdk.png" target="_blank"/></a></li>
                <li className="linked">About</li>
                <li className="linked">Projects</li>
                <li className="linked">Contact</li>
                <li><a href="https://www.linkedin.com/in/raymondcasgrain/"><img className="navImg2" src="https://i.imgur.com/JtxJz8Y.png" target="_blank"/></a></li>
            </ul>
        </div>
    )
}

export default Nav