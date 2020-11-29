import s from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const navlinks = [
        { "title": "Profile", "link": "/profile/" },
        { "title": "Messages", "link": "/dialogs/" },
        { "title": "News", "link": "/news/" },
        { "title": "Music", "link": "/music/" },
        { "title": "Settings", "link": "/settings/" },
    ];

    const navLinksHtml = navlinks.map(item => 
        <li>
            <NavLink to={item.link} activeClassName={s.active} className={s.item}>{item.title}</NavLink>
        </li>
        );

    return (
        <nav className={s.nav}>
            <ul>
                { navLinksHtml }
            </ul>
        </nav>
    );
}

export default Navbar;