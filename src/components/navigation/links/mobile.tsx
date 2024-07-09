import './mobile.css';
import {useEffect, useState} from "react";
import MobileMenuIcon from "@assets/icons/menu.svg";
import {useLocation, useNavigate} from "react-router-dom";
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
const MobileLinks = ({isActive, setIsActive, links}: Params) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (index: number) => {
        if(index != 3 && location.pathname === '/contact'){
            navigate('/');
        }
        setIsActive(index);
        closeMenu();
    };

    const closeMenu = () => {
        setMenuOpen(false);
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

    const determineSelected = (index:number) => {
        if (index !== 3 && location.pathname !== '/contact' && isActive === index) return true;
        if (index === 3 && location.pathname === '/contact') return true;
        return false;
    };

    return (
        <div className="nav-mobile-container">
            <div className="nav-mobile-menu">
                <img id="nav-menu-icon" src={MobileMenuIcon} alt="Menu Icon" onClick={toggleMenu}/>
            </div>
            <div className={`nav-mobile-links ${menuOpen ? 'show-nav' : ''}`}>
                <ul className="nav-mobile-links-list">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className={"mobile-nav-item"}
                            onClick={() => handleLinkClick(index)}
                        >
                            <a
                                href={link.path}
                                className={classNames({ 'mobile-active': determineSelected(index) })}
                            >
                                <p className="nav-link-text">
                                    {link.text}
                                </p>
                            </a>
                        </li>
                        ))}
                </ul>
            </div>
        </div>

    )
}

export default MobileLinks;