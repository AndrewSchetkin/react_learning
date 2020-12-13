import React from "react";
import c from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsHtml = props.myPosts.map((p, index) => <Post message={p.message} likesCnt={p.likesCnt} key={index}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(text);
    };

    return (
        <div className={c.postsContainer}>
            My posts
            <div>
                <div>New post</div>
                <textarea name="" id="" cols="30" rows="10" ref={newPostElement}></textarea>
                <div><button onClick={ addPost }>Send</button></div>
            </div>
            <div className={c.posts}>
                {postsHtml}
            </div>
        </div>
    )
}

export default MyPosts;