import './styles/footer.css';

import GithubSquare from '@assets/icons/github-square.svg';
import Linkedin from '@assets/icons/linkedin.svg';

const Footer = () => {
    return (
        <div id={"footer"}>
            <div className={"footer-container"}>
                <div className={"footer-links"}>
                    <a href={"https://github.com/CyberProgrammer"} target="_blank" rel="noopener noreferrer">
                        <img className={"footer-img"} src={GithubSquare} alt={"logo"}/>
                    </a>
                    <a href={"https://linkedin.com/in/tylerserpa"} target="_blank" rel="noopener noreferrer">
                        <img className={"footer-img"} src={Linkedin} alt={"logo"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;