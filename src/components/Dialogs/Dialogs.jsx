import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.scss";

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

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsList}>
                <DialogPreview id="1" name="Andrey"/>
                <DialogPreview id="2" name="Sasha"/>
                <DialogPreview id="3" name="Vasya"/>
                <DialogPreview id="4" name="Dasha"/>
            </div>
            <div className="dialog">
                <div className="dialog__row">Hey!</div>
                <div className="dialog__row">How r u?</div>
                <div className="dialog__row">c ya!</div>
            </div>
        </div>
    )
}

export default Dialogs;