import WaveHand from '@assets/icons/wave.svg'

interface Link {
    id: number;
    text: string;
    path: string;
}

interface Params{
    isActive: number,
    setIsActive: (num: number) => void,
    links: Link[];
}
const DesktopLinks = ({isActive, setIsActive, links}: Params) => {

    const handleLinkClick = (index: number) => {
        setIsActive(index);
    };

    return (
        <>
            <div className={"nav-center"}>
                <ul className={"links"}>
                    {links.map((link, index) => (
                        <li key={index} onClick={() => handleLinkClick(index)} className={
                            `${index === 0 ? 'start-list' : ''} ${index === links.length - 1 ? 'end-list' : ''} ${isActive === index ? 'selected' : ''} nav-item`
                        }>
                            <a href={link.path}>
                                <p>{link.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={"nav-right"}>
                <ul className={"contact-link"}>
                    <li className={`contact-item ${isActive === 3 ? 'selected' : ''}`}>
                        <div className={"contact-link-div"}>
                            <div className={"text-div"}>
                                <p>Lets talk</p>
                            </div>
                            <div className={"icon-div"}>
                                <img className={'icon'} src={WaveHand} alt={"Icon"}/>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default DesktopLinks;