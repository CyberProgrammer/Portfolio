import './styles/navigation.css'

import DesktopLinks from "./links/desktop.tsx";
import {useMediaQuery} from "react-responsive";
import MobileLinks from "./links/mobile.tsx";
import Logo from '@assets/logos/Logo.svg'

interface Params{
    isActive: number,
    setIsActive: (num: number) => void,
}
const Navigation = ({isActive, setIsActive}:Params) => {
    const isMobile = useMediaQuery({ maxWidth: "700px" });

    const links = [
        { id: 0, text: "Intro", path: "#intro-section" },
        { id: 1, text: "About", path: "#about-section" },
        { id: 2, text: "Showcase", path: "#showcase-section" },
    ];

    const mobile_links = [
        { id: 0, text: "Intro", path: "#intro-section" },
        { id: 1, text: "About", path: "#about-section" },
        { id: 2, text: "Showcase", path: "#showcase-section" },
        { id: 3, text:"Contact", path:"/contact" },
    ];

    return(
        <>
            <div className={'navigation'}>
                <div className={'nav-left'}>
                    <img id={'logo'} src={Logo} alt={'Logo'} />
                </div>
                {!isMobile && (
                    <DesktopLinks
                        isActive={isActive}
                        setIsActive={setIsActive}
                        links={links}
                    />
                )}
                {isMobile && (
                    <MobileLinks
                        isActive={isActive}
                        setIsActive={setIsActive}
                        links={mobile_links}
                    />
                )}
            </div>
        </>
    )
}

export default Navigation;