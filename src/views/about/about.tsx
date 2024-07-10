
import './about.css'

const About = () => {

    return(
        <>
            <div className={"section-header"}>
                <h1 className={"about-text"}>About me</h1>
            </div>
            <div className={"section-content"}>
                <div className={"about-text"}>
                    <p className={"about-paragraph"}> Growing up I always gravitated towards technology and creative crafts. Building my first PC was a pivotal moment for me.
                        I quickly realized it wasn't just about assembling components but understanding how each
                        part worked together. I often found myself helping friends and family fix problems which honed my problem-solving skills and allowed me to
                        apply my technical knowledge.
                    </p>
                    <p className={"about-paragraph"}>
                        When I discovered that I could combine my love for technology and creativity
                        by developing software, my passion ignited.
                        Learning to code opened up a world of possibilities, allowing me to
                        bring my ideas to life in ways I had never imagined.
                        I started with small projects, like building simple websites, and gradually took on more complex challenges.
                        I am excited looking forward to leveraging my skills and curiosity to help make an impact in any way I can.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;