import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.scss";

const DialogPreview = (props) => {
    const link = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={link} className={c.dialogPreview} activeClassName={c.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogPreview;