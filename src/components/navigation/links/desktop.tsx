import WaveHand from '@assets/icons/wave.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import classNames from 'classnames';

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
    const location = useLocation();
    const navigate = useNavigate();
    const handleLinkClick = (index: number) => {
        if(index != 3 && location.pathname === '/contact'){
            navigate('/');
        }
        setIsActive(index);
    };

    useEffect(() => {
        switch (location.hash){
            case '#intro-section':
                setIsActive(0);
                break;
            case '#about-section':
                setIsActive(1);
                break;
            case '#showcase-section':
                setIsActive(2);
                break;
            default:
                break;
        }
    }, [location, setIsActive]);

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
                                'selected': isActive === index && location.pathname !== '/contact'
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
                <ul className={"contact-link"} onClick={() => handleLinkClick(3)}>
                    <a href={"/contact"}>
                        <li className={`contact-item ${isActive === 3 || location.pathname === '/contact' ? 'selected' : ''}`}>

                            <div className={"contact-link-div"}>
                                <div className={"text-div"}>
                                    <p>Lets talk</p>
                                </div>
                                <div className={"icon-div"}>
                                    <img className={'icon'} src={WaveHand} alt={"Icon"}/>
                                </div>
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default DesktopLinks;