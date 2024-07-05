import './showcase.css'
import './card.css'

import ConnectPreview from '@assets/images/cards/connect.jpg'
import TaskTeamPreview from '@assets/images/cards/task-team.png';
import ACSimulatorPreview from '@assets/images/cards/ac-sim.png'

import LinkIcon from '@assets/icons/web-link.svg';

const Showcase = () => {

    return(
        <>
            <div className={"section-header"}>
                <h1>Latest Creations</h1>
            </div>
            <div className={"card-container"}>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <h2 className={"card-title"}>Connect Messenger</h2>
                        <button className={"card-button"}>
                            <p>Live Demo</p>
                            <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                        </button>
                    </div>
                    <p className={"card-description"}>This is an example of a short description.
                        The purpose is to demonstrate what the capabilities and main objective is.</p>
                    <img className={"card-img"} src={ConnectPreview} alt={"img"}/>
                </div>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <h2 className={"card-title"}>Task Team</h2>
                        <button className={"card-button"}>
                            <p>Live Demo</p>
                            <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                        </button>
                    </div>
                    <p className={"card-description"}>This is an example of a short description.
                        The purpose is to demonstrate what the capabilities and main objective is.</p>
                    <img className={"card-img"} src={TaskTeamPreview} alt={"img"}/>
                </div>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <h2 className={"card-title"}>A/C Simulation</h2>
                        <button className={"card-button"}>
                            <p>Live Demo</p>
                            <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                        </button>
                    </div>
                    <p className={"card-description"}>This is an example of a short description.
                        The purpose is to demonstrate what the capabilities and main objective is.</p>
                    <img className={"card-img"} src={ACSimulatorPreview} alt={"img"}/>
                </div>
            </div>
        </>
    )
}

export default Showcase;