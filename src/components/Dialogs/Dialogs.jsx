import c from "./Dialogs.module.scss";
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogRow from "./DialogRow/DialogRow";


const Dialogs = () => {
    const dialogs = [
        {"id": 1, "name": "Andrey"},
        {"id": 2, "name": "Sasha"},
        {"id": 3, "name": "Vasya"},
        {"id": 4, "name": "Dasha"},
    ];

    const DialogsPreviews = dialogs.map(i => <DialogPreview id={i.id} name={i.name} />);
    
    const messages = [
        {"text": "Hey!"},
        {"text": "How r u?"},
        {"text": "c ya!"},
    ];

    const messagesHtml = messages.map(i => <DialogRow message={i.text} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsList}>
                {DialogsPreviews}
            </div>
            <div className="dialog">
                {messagesHtml}
            </div>
        </div>
    )
}

export default Dialogs;