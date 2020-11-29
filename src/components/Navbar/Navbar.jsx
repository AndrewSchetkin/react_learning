import s from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    const navLinksHtml = props.navbarLinks.map((item, index) => 
        <li key={index}>
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