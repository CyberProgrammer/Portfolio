import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";



import './home.css';
import './background-image.css';
import '../../App.css';

import { preloadImage } from '@utils/preloadBackground.ts';
import Intro from "../intro/intro.tsx";
import About from "../about/about.tsx";
import Navigation from "../../components/navigation/navigation.tsx";
import Showcase from "../showcase/showcase.tsx";
const Home = () => {
    const [isActive, setIsActive] = useState<number>(0);

    const [isBackgroundImageLoaded, setIsBackgroundImageLoaded] = useState(false);

    useEffect(() => {
        preloadImage('./clouds.avif')
            .then(() => setIsBackgroundImageLoaded(true))
            .catch((error) => console.error('Error loading image:', error));
    }, []);

    const { ref: introRef, inView: introInView } = useInView({
        threshold: 0.2,
    });

    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.6,
    });

    const { ref: showcaseRef, inView: showcaseInView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if(!aboutInView && !showcaseInView) setIsActive(0);
        else if(aboutInView && !showcaseInView) setIsActive(1);
        else if(!aboutInView && showcaseInView) setIsActive(2);
    }, [introInView, aboutInView, showcaseInView]);

    return (
        <div id={"app"} ref={introRef}>
            <Navigation isActive={isActive} setIsActive={setIsActive} />
            <div className={"content"}>
                <div id={"intro-section"} className={`content-intro ${isBackgroundImageLoaded ? `background-image` : ``}`}>
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