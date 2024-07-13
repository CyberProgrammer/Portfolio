import './showcase.css'
import './card.css'

import ConnectPreview from '@assets/images/cards/connect.avif'
import TaskTeamPreview from '@assets/images/cards/task-team.avif';
import ACSimulatorPreview from '@assets/images/cards/ac-sim.avif'
import GithubIcon from '@assets/icons/github.svg';
import YoutubeIcon from '@assets/icons/youtube.svg';
import LinkIcon from '@assets/icons/play.svg';
import {useEffect, useState} from "react";
import SearchInput from "../../components/search/searchInput.tsx";
import FilterButton from "../../components/button/filterButton.tsx";

interface Project{
    title: string,
    gitHubLink: string,
    description: string,
    preview: string,
    hasDemo: boolean,
    demoLink: string,
    hasVideo: boolean,
    videoLink: string,
    technologies: string[]
}
const Showcase = () => {
    const data: Project[] = [
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
            videoLink: "https://youtu.be/iyYNWgCp3C0",
            technologies: ["React", "TypeScript", "Node.js", "SQL"],
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
            videoLink: "",
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
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
            videoLink: "",
            technologies: ["React", "TypeScript", "Python"],
        }
    ]

    const getAllUniqueTechnologies = (projects: Project[]): string[] => {
        const technologiesSet = new Set<string>();
        projects.forEach((project) => {
            project.technologies.forEach((tech) => {
                technologiesSet.add(tech);
            });
        });
        return Array.from(technologiesSet);
    };


    const uniqueTechnologies  = getAllUniqueTechnologies(data);

    const [projectList] = useState(data);
    const [filteredProjects, setFilteredProjects] = useState(data);
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterTechOpen, setIsFilterTechOpen] = useState(false);

    const handleSearchQuery = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilterMenu = () => {
        console.log("Currently: ", isFilterTechOpen);
        setIsFilterTechOpen(!isFilterTechOpen);
    }

    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
    const handleTechnologyChange = (tech: string) => {
        setSelectedTechnologies((prevSelected) => {
            if (prevSelected.includes(tech)) {
                return prevSelected.filter((selectedTech) => selectedTech !== tech);
            } else {
                return [...prevSelected, tech];
            }
        });
    };

    useEffect(() => {
        // Filter by search, then by technology and return the remaining projects
        const filtered = projectList.filter((project) => {
            const matchesSearchQuery = project.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSelectedTechnologies = selectedTechnologies.length === 0 || selectedTechnologies.every((tech) => project.technologies.includes(tech));
            return matchesSearchQuery && matchesSelectedTechnologies;
        });
        setFilteredProjects(filtered);
    }, [searchQuery, selectedTechnologies, projectList]);

    return(
        <>
            <div className={"section-header"}>
                <h1>Latest Creations</h1>
            </div>
            <div className={"card-container"}>
                <p className={"alert-msg"}>Currently working on hosting live project demos</p>
                <div className={"filter-container"}>
                    <SearchInput searchQuery={searchQuery} setSearchQuery={handleSearchQuery}/>
                    <div className={"technology-filter-container"}>
                        <div className={"tech-filter"}>
                            <FilterButton text={"Filters"} className={"filter-button"} onClick={handleFilterMenu} />
                            { isFilterTechOpen && (
                                <div className={"filter-menu"}>
                                    {uniqueTechnologies.map((tech, index) => (
                                        <label key={index} className={"label"}>
                                            <input
                                                type="checkbox"
                                                value={tech}
                                                onChange={() => handleTechnologyChange(tech)}
                                            />
                                            {tech}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {filteredProjects.map((project, index) => (
                    <div key={index} className={`card`}>
                        <div className={"card-header"}>
                            <h2 className={"card-title"}>
                                {project.title}
                            </h2>
                            <div className={"card-links"}>
                                {project.hasVideo && (
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
                        <div className={"tech-stack"}>
                            <p className={"title"}>Technologies:</p>
                            { project.technologies.map((tech, techIndex) => (
                                <p className={"tech"} key={techIndex}>{tech},</p>
                            ))}
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