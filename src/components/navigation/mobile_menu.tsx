
import MobileMenuIcon from "@assets/icons/menu.svg"

import './links/mobile.css';
import React from "react";

interface Params{
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileMenu = ({menuOpen, setMenuOpen}:Params) => {
    // Function to toggle menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mobile-menu">
            <img id={"menu-icon"} src={MobileMenuIcon} alt={"Icon"} onClick={toggleMenu}/>
        </div>
    )
}

export default MobileMenu;