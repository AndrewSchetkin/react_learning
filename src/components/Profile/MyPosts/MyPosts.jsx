import c from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsHtml = props.myPosts.map((p, index) => <Post message={p.message} likesCnt={p.likesCnt} key={index}/>);

    return (
        <div className={c.postsContainer}>
            My posts
            <div>
                <div>New post</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div><button>Send</button></div>
            </div>
            <div className={c.posts}>
                {postsHtml}
            </div>
        </div>
    )
}

export default MyPosts;