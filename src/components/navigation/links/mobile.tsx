import {Link, useLocation} from "react-router-dom";
import MobileMenu from "@assets/icons/menu.svg"

import './mobile.css';
import React from "react";

interface Params{
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileLinks = ({menuOpen, setMenuOpen}:Params) => {

    const location = useLocation();

    // Checks if link is selected
    const isActive = (path: string): boolean => {
        return location.pathname === path;
    };

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
        <div className="mobile-links-container">
            <div className={"mobile-links"}>
                {menuOpen && (
                    <ul className="menu-links-mobile">
                        {links.map((link, index) => (
                            <li key={index} className={isActive(link.path) ? 'active' : ''}>
                                <Link className={"link-text"} to={link.path} onClick={closeMenu}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default MobileLinks;