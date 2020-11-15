import classes from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="/profile/" className={`${classes.item} ${classes.active}`}>Profile</a></li>
                <li><a href="/dialogs/" className={classes.item}>Messages</a></li>
                <li><a href="/news/" className={classes.item}>News</a></li>
                <li><a href="/music/" className={classes.item}>Music</a></li>
                <li><a href="/settings/" className={classes.item}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;