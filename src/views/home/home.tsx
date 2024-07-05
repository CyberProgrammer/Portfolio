import Navigation from "../../components/navigation/navigation.tsx";

import './home.css'
import Intro from "../intro/intro.tsx";
import About from "../about/about.tsx";
import Showcase from "../showcase/showcase.tsx";
const Home = () => {

    return (
        <div id={"app"}>
            <Navigation />
            <div className={"content"}>
                <div id={"intro-section"} className={"content-intro"}>
                    <Intro />
                </div>
                <div id={"about-section"} className={"content-about"}>
                   <About />
                </div>
                <div id={"showcase-section"} className={"content-showcase"}>
                    <Showcase />
                </div>
            </div>
        </div>
    )
}

export default Home;