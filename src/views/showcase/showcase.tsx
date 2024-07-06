import './showcase.css'
import './card.css'

import ConnectPreview from '@assets/images/cards/connect.jpg'
import TaskTeamPreview from '@assets/images/cards/task-team.png';
import ACSimulatorPreview from '@assets/images/cards/ac-sim.png'

import LinkIcon from '@assets/icons/direct-right.svg';

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
                            <p>Demo</p>
                            <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                        </button>
                    </div>
                    <p className={"card-description"}>
                        A full-stack messaging system designed to meet the diverse communication needs of users,
                        whether for individual conversations or team collaborations.
                        This system is currently a work in progress, aiming to provide a robust
                        and efficient platform for real-time communication.
                    </p>
                    <img className={"card-img"} src={ConnectPreview} alt={"img"}/>
                </div>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <h2 className={"card-title"}>Task Team</h2>
                        <button className={"card-button"}>
                            <p>Demo</p>
                            <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                        </button>
                    </div>
                    <p className={"card-description"}>
                        The inspiration of this task came about at my current workplace.
                        When a service ticket is created, they take the old school approach and write down
                        information on a paper ticket. I wanted to create a solution that allows managers to
                        create tickets(tasks) and be able to push them to either a team or individual.
                    </p>
                    <img className={"card-img"} src={TaskTeamPreview} alt={"img"}/>
                </div>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <h2 className={"card-title"}>A/C Simulation</h2>
                        <button className={"card-button"}>
                            <p>Demo</p>
                            <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                        </button>
                    </div>
                    <p className={"card-description"}>
                        The plan for this project is to simulate an A/C System. The end goal of this project is to integrate and simulate
                        condensers and air handlers into the system that are controlled via the thermostat.
                        This project has the potential to simulate various components at different levels of complexity.
                        Electrical simulation would also be a big achievement to stride towards.
                    </p>
                    <img className={"card-img"} src={ACSimulatorPreview} alt={"img"}/>
                </div>
            </div>
        </>
    )
}

export default Showcase;