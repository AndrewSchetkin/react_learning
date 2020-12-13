import React from "react";
import c from "./Dialogs.module.scss";
import DialogPreview from "./DialogPreview/DialogPreview";
import DialogRow from "./DialogRow/DialogRow";


const Dialogs = (props) => {
    const DialogsPreviews = props.state.users.map((i, index) => <DialogPreview id={i.id} name={i.name} key={index} />);
    const messagesHtml = props.state.messages.map((i, index) => <DialogRow message={i.text} key={index} />);

    let createNewMsg = React.createRef();

    let newMsg = () => {
        let text = createNewMsg.current.value;
        console.log(text);
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsList}>
                {DialogsPreviews}
            </div>
            <div className={c.dialog}>
                {messagesHtml}
                <div>
                    <textarea name="" id="" cols="30" rows="10" ref={createNewMsg}></textarea>
                    <br/>
                    <button onClick={newMsg}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;