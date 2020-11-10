import c from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <div>New post</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div><button>Send</button></div>
            </div>
            <div className="posts">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;