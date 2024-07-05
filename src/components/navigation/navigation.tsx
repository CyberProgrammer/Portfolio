import './styles/navigation.css'

import DesktopLinks from "./links/desktop.tsx";
import {useMediaQuery} from "react-responsive";
import MobileMenu from "./mobile_menu.tsx";
import React from "react";

interface Params{
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation = ({menuOpen, setMenuOpen}:Params) => {
    const isMobile = useMediaQuery({ maxWidth: "500px" });

    return(
        <>
            <div className={"navigation"}>
                <div className={"nav-left"}>
                    <h2>Logo</h2>
                </div>
                {!isMobile && (
                    <DesktopLinks />
                )}

                {isMobile && (
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                )}
            </div>
        </>
    )
}

export default Navigation;