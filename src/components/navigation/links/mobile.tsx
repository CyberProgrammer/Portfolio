
import './mobile.css';
import {useState} from "react";
import MobileMenuIcon from "@assets/icons/menu.svg";
const MobileLinks = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<number>(0);

    const links =
        [
            { text: "Intro", path: "#intro-section" },
            { text: "About", path: "#about-section" },
            { text: "Showcase", path: "#showcase-section" },
            { text:"Contact", path:"/contact" },
        ];

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
                            <a href={link.path}>
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