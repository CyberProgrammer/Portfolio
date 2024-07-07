import './showcase.css'
import './card.css'

import ConnectPreview from '@assets/images/cards/connect.avif'
import TaskTeamPreview from '@assets/images/cards/task-team.avif';
import ACSimulatorPreview from '@assets/images/cards/ac-sim.avif'
import GithubIcon from '@assets/icons/github.svg';
import LinkIcon from '@assets/icons/play.svg';

const Showcase = () => {

    const data = [
        {
            title: "Connect Messenger",
            gitHubLink: "https://github.com/CyberProgrammer/Connect-Messenger",
            description: "A full-stack messaging system designed to meet the diverse " +
                "communication needs of users whether for individual conversations or team collaborations. " +
                "This system is currently a work in progress, aiming to provide a robust " +
                "and efficient platform for real-time communication. ",
            preview: ConnectPreview
        },
        {
            title: "Task Team",
            gitHubLink: "https://github.com/CyberProgrammer/Task-Team",
            description: "The inspiration of this task came about at my current workplace. " +
                "When a service ticket is created, they take the old school approach and write down " +
                "information on a paper ticket. I wanted to create a solution that allows managers to " +
                "create tickets(tasks) and be able to push them to either a team or individual. ",
            preview: TaskTeamPreview,
        },
        {
            title: "A/C Simulation",
            gitHubLink: "https://github.com/CyberProgrammer/AC_Simulation",
            description: "The plan for this project is to simulate an A/C System. " +
                "The end goal of this project is to integrate and simulate condensers and air handlers into the system that are controlled via the thermostat. " +
                "This project has the potential to simulate various components at different levels of complexity. " +
                "Electrical simulation would also be a big achievement to stride towards. ",
            preview: ACSimulatorPreview
        }
    ]
    return(
        <>
            <div className={"section-header"}>
                <h1>Latest Creations</h1>
            </div>
            <div className={"card-container"}>
                { data.map((project, index) => (
                    <div key={index} className={"card"}>
                        <div className={"card-header"}>
                            <h2 className={"card-title"}>
                                {project.title}
                            </h2>
                            <div className={"card-links"}>
                                <button className={"link-button"}>
                                    <a href={project.gitHubLink}>
                                        <img className={"link-img"} src={GithubIcon} alt={"icon"}/>
                                    </a>
                                </button>
                                <button className={"card-button"}>
                                    <p>Demo</p>
                                    <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                                </button>
                            </div>
                        </div>
                        <p className={"card-description"}>
                            {project.description}
                        </p>
                        <img className={"card-img"} src={project.preview} alt={"img"}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Showcase;