import "./Projects.css"
import React, { useState } from 'react';
import Moose from "./Moose/Moose"

function Projects(props) {
    let current = useState(1)

    return(
        <div className="projBC">
            <h1 className="projTitle">My Projects</h1>
            <div className="projCards">
                <div className="projCard">
                    <img src="https://i.imgur.com/jDPXmXe.png"  className="projImg"/>
                    <div className="projCont">
                        <h2 className="projName">Moose Tracks</h2>
                        <p className="projTeam">Wildlife Spotting App</p>
                        <p className="projTeam">Team Based Project</p>
                    </div>
                </div>
                <div className="projCard">
                    <img src="https://i.imgur.com/cLDoFTE.png"  className="projImg"/>
                    <div className="projCont">
                        <h2 className="projName">Buzz</h2>
                        <p className="projTeam">Coffee Review App</p>
                        <p className="projTeam">Team Based Project</p>
                    </div>
                </div>
                <div className="projCard">
                    <img src="https://i.imgur.com/DaDX3H5.png"  className="projImg"/>
                    <div className="projCont">
                        <h2 className="projName">Quoter</h2>
                        <p className="projTeam">Quote Tracking App</p>
                        <p className="projTeam">Solo Project</p>
                    </div>
                </div>
            </div>
            <div className="projPres">
                <Moose />
            </div>
        </div>
    )
}

export default Projects