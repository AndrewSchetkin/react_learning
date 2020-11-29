import c from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {message: "Hello world!", likesCnt: 1},
        {message: "I am learning React", likesCnt: 6},
        {message: "How are you?", likesCnt: 4},
    ];
    const postsHtml = posts.map(p => <Post message={p.message} likesCnt={p.likesCnt} />);

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