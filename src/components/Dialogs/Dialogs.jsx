import c from "./Dialogs.module.scss";
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogRow from "./DialogRow/DialogRow";


const Dialogs = (props) => {
    const DialogsPreviews = props.state.users.map((i, index) => <DialogPreview id={i.id} name={i.name} key={index} />);
    const messagesHtml = props.state.messages.map((i, index) => <DialogRow message={i.text} key={index} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsList}>
                {DialogsPreviews}
            </div>
            <div className={c.dialog}>
                {messagesHtml}
            </div>
        </div>
    )
}

export default Dialogs;