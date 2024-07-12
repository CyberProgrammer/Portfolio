import WaveHand from '@assets/icons/wave.svg'
import classNames from 'classnames';
import useHashLocation from "@utils/useHashLocation.tsx";

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

    // Uses location hash to determine selected nav-link
    useHashLocation({setIsActive});

    return (
        <>
            <div className={"nav-center"}>
                <ul className={"links"}>
                    {links.map((link, index) => (
                        <li
                            key={index}
                            onClick={() => handleLinkClick(index)}
                            className={classNames('nav-item', {
                                'start-list': index === 0,
                                'end-list': index === links.length - 1,
                                'selected': isActive === index
                            })}
                        >
                            <a href={link.path}>
                                <p>{link.text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={"nav-right"}>
                <a className={"contact-link"} onClick={() => handleLinkClick(3)} href={"#footer"}>
                    <div className={`contact-item ${isActive === 3 ? 'selected' : ''}`}>
                        <div className={"contact-link-div"}>
                            <div className={"text-div"}>
                                <p>Lets talk</p>
                            </div>
                            <div className={"icon-div"}>
                                <img className={'icon'} src={WaveHand} alt={"Icon"}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default DesktopLinks;