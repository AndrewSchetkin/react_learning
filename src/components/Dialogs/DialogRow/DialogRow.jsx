import c from "./../Dialogs.module.scss";

const DialogRow = (props) => {
    return <div className={c.dialog__row}>{props.message}</div>
}

export default DialogRow;