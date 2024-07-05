import {Link, useLocation} from "react-router-dom";

const DesktopLinks = () => {
    const location = useLocation();

    // Checks if link is selected
    const isActive = (path: string): boolean => {
        return location.pathname === path;
    };

    const links =
        [
            {text:"Home", path:"/"},
            {text:"About Me", path:"/about"},
            {text:"Showcase", path:"/showcase"},
            {text:"Contact", path:"/contact"},
        ];

    return (
        <div className={"nav-right"}>
            <ul className={"links"}>
                {links.map((link, index) => (
                    <li key={index} className={`nav-item ${isActive(link.path) ? 'selected' : ''}`}>
                        <Link to={link.path}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DesktopLinks;