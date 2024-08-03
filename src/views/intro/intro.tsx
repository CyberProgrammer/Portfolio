
import './intro.css';

const Intro = () => {
    return(
        <>
            <div className={"intro-section"}>
                <div className={"section-header"}>
                    <h1 className={"text-1"}>Nice to meet you!</h1>
                    <h1 className={"text-2"}>My name is Tyler Serpa</h1>
                </div>
                <div className={"section-content"}>
                    <div className={"intro"}>
                        <p>
                            Aspiring software developer specializing in the React ecosystem.
                            Building responsive interfaces and utilizing backend services with Node.js.
                            Motivated to solve problems and bring solutions to life.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;