import './mobile.css';
import {useState} from "react";
import MobileMenuIcon from "@assets/icons/menu.svg";

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
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (index: number) => {
        setIsActive(index);
        closeMenu();
    };

    //
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="nav-mobile-container">
            <div className="nav-mobile-menu">
                <img id="nav-menu-icon" src={MobileMenuIcon} alt="Menu Icon" onClick={toggleMenu}/>
            </div>
            <div className={`nav-mobile-links ${menuOpen ? 'show-nav' : ''}`}>
                <ul className="nav-mobile-links-list">
                    {links.map((link, index) => (
                        <li key={index} className={"mobile-nav-item"} onClick={() => handleLinkClick(index)}>
                            <a href={link.path} className={isActive === index ? 'mobile-active' : ''}>
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