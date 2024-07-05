import Navigation from "../../components/navigation/navigation.tsx";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import MobileLinks from "../../components/navigation/links/mobile.tsx";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const isMobile = useMediaQuery({ maxWidth: "500px" });

    return (
        <div id={"app"}>
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className={"content"}>
                <div className={"content-header"}>
                    {isMobile && (
                        <MobileLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    )}

                    {!menuOpen && (
                        <h1>Home</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;