import './styles/navigation.css'

import DesktopLinks from "./links/desktop.tsx";
import {useMediaQuery} from "react-responsive";
import MobileLinks from "./links/mobile.tsx";
import Logo from '@assets/logos/Logo.svg'


const Navigation = () => {
    const isMobile = useMediaQuery({ maxWidth: "700px" });

    return(
        <>
            <div className={"navigation"}>
                <div className={"nav-left"}>
                    <img id={"logo"} src={Logo} alt={'Logo'} />
                </div>
                {!isMobile && (
                    <DesktopLinks />
                )}

                {isMobile && (
                    <MobileLinks />
                )}
            </div>
        </>
    )
}

export default Navigation;