import c from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.postsContainer}>
            My posts
            <div>
                <div>New post</div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div><button>Send</button></div>
            </div>
            <div className={c.posts}>
                <Post message="Hello world!" likesCnt="1" />
                <Post message="I am learning React" likesCnt="5" />
                <Post message="How are you?" likesCnt="0" />
            </div>
        </div>
    )
}

export default MyPosts;