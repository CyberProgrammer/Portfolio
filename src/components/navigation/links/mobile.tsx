
import './mobile.css';
import {useState} from "react";
import MobileMenuIcon from "@assets/icons/menu.svg";
const MobileLinks = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const isActive = false;
    const links =
        [
            {text:"Home", path:"/"},
            {text:"About Me", path:"/about"},
            {text:"Showcase", path:"/showcase"},
            {text:"Contact", path:"/contact"},
        ];

    // Function to toggle menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: Scroll to top when menu closes
    };

    return (
        <div className="nav-mobile-container">
            <div className="nav-mobile-menu">
                <img id="nav-menu-icon" src={MobileMenuIcon} alt="Menu Icon" onClick={toggleMenu}/>
            </div>
            <div className={`nav-mobile-links ${menuOpen ? 'show-nav' : ''}`}>
                <ul className="nav-mobile-links-list">
                    {links.map((link, index) => (
                        <li key={index} className={isActive ? 'nav-link-active' : ''}>
                            <p className="nav-link-text" onClick={closeMenu}>
                                {link.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default MobileLinks;