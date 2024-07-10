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
import Footer from "../../components/footer/footer.tsx";

interface Params{
    isActive: number,
    setIsActive: (num: number) => void,
}
const Home = ({isActive, setIsActive}: Params) => {

    const [isBackgroundImageLoaded, setIsBackgroundImageLoaded] = useState(false);

    useEffect(() => {
        preloadImage('clouds.avif')
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
        threshold: 0.3,
    });

    const { ref: footerRef, inView: footerInView } = useInView({
        threshold: 0.2,
    });
    useEffect(() => {
        if(introInView && !aboutInView && !showcaseInView && !footerInView) setIsActive(0);
        else if(aboutInView && !showcaseInView && !footerInView) setIsActive(1);
        else if(showcaseInView && !aboutInView && !footerInView) setIsActive(2);
        else if(footerInView) setIsActive(3);
    }, [introInView, aboutInView, showcaseInView, footerInView, setIsActive]);

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
            <div ref={footerRef}>
                <Footer />
            </div>
        </div>
    )
}

export default Home;