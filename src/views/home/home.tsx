import Navigation from "../../components/navigation/navigation.tsx";

import './home.css'
import Intro from "../intro/intro.tsx";
import About from "../about/about.tsx";
import Showcase from "../showcase/showcase.tsx";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
const Home = () => {
    const [isActive, setIsActive] = useState<number>(0);

    const { ref: introRef, inView: introInView } = useInView({
        threshold: 0.5,
    });

    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.5,
    });

    const { ref: showcaseRef, inView: showcaseInView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if(introInView && !aboutInView && !showcaseInView) setIsActive(0);
        else if(!introInView && aboutInView && !showcaseInView) setIsActive(1);
        else if(!introInView && !aboutInView && showcaseInView) setIsActive(2);
    }, [introInView, aboutInView, showcaseInView]);

    return (
        <div id={"app"}>
            <Navigation isActive={isActive} setIsActive={setIsActive}/>
            <div className={"content"}>
                <div id={"intro-section"} ref={introRef} className={"content-intro"}>
                    <Intro />
                </div>
                <div id={"about-section"} ref={aboutRef} className={"content-about"}>
                   <About />
                </div>
                <div id={"showcase-section"} ref={showcaseRef} className={"content-showcase"}>
                    <Showcase />
                </div>
            </div>
        </div>
    )
}

export default Home;