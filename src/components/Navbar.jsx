import classes from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#" className={`${classes.item} ${classes.active}`}>Profile</a></li>
                <li><a href="#" className={classes.item}>Messages</a></li>
                <li><a href="#" className={classes.item}>News</a></li>
                <li><a href="#" className={classes.item}>Music</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;