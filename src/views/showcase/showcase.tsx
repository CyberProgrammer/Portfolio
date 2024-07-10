import './showcase.css'
import './card.css'

import ConnectPreview from '@assets/images/cards/connect.avif'
import TaskTeamPreview from '@assets/images/cards/task-team.avif';
import ACSimulatorPreview from '@assets/images/cards/ac-sim.avif'
import GithubIcon from '@assets/icons/github.svg';
import YoutubeIcon from '@assets/icons/youtube.svg';
import LinkIcon from '@assets/icons/play.svg';

const Showcase = () => {
    const data = [
        {
            title: "Connect Messenger",
            gitHubLink: "https://github.com/CyberProgrammer/Connect-Messenger",
            description: "A full-stack messaging system designed to meet the diverse " +
                "communication needs of users whether for individual conversations or team collaborations. " +
                "This system aims to provide a robust " +
                "and efficient platform for real-time communication. ",
            preview: ConnectPreview,
            hasDemo: false,
            demoLink: "",
            hasVideo: true,
            videoLink: "https://youtu.be/iyYNWgCp3C0"
        },
        {
            title: "Task Team",
            gitHubLink: "https://github.com/CyberProgrammer/Task-Team",
            description: "The inspiration of this task came about at my current workplace. " +
                "When a service ticket is created, they take the old school approach and write down " +
                "information on a paper ticket. I wanted to create a solution that allows managers to " +
                "create tickets (tasks) and be able to push them to either a team or individuals. ",
            preview: TaskTeamPreview,
            hasDemo: false,
            demoLink: "",
            hasVideo: false,
            videoLink: ""
        },
        {
            title: "A/C Simulation",
            gitHubLink: "https://github.com/CyberProgrammer/AC_Simulation",
            description: "The plan for this project is to simulate an A/C System. " +
                "The end goal of this project is to integrate and simulate condensers and air handlers into the system that are controlled via the thermostat. " +
                "This project has the potential to simulate various components at different levels of complexity. " +
                "Electrical simulation would also be a big achievement to stride towards. ",
            preview: ACSimulatorPreview,
            hasDemo: false,
            demoLink: "",
            hasVideo: false,
            videoLink: ""
        }
    ]

    return(
        <>
            <div className={"section-header"}>
                <h1>Latest Creations</h1>
            </div>
            <div className={"card-container"}>
                <p className={"alert-msg"}>Currently working on hosting live project demos</p>
                {data.map((project, index) => (
                    <div key={index} className={`card`}>
                        <div className={"card-header"}>
                            <h2 className={"card-title"}>
                                {project.title}
                            </h2>
                            <div className={"card-links"}>
                                { project.hasVideo && (
                                    <a className={"card-link"} href={project.videoLink}>
                                        <img className={"link-img"} src={YoutubeIcon} alt={"icon"}/>
                                    </a>
                                )}
                                <a className={"card-link"} href={project.gitHubLink}>
                                    <img className={"link-img"} src={GithubIcon} alt={"icon"}/>
                                </a>
                                { project.hasDemo && (
                                    <a className={"card-link"} href={''}>
                                        <p>Demo</p>
                                        <img className={"link-img"} src={LinkIcon} alt={"icon"}/>
                                    </a>
                                )}
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