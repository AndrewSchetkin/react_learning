import c from "./Post.module.scss";

const Post = () => {
    return (
        <div className={c.item}>
            <span><img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt=""/></span>
            <span>Post 1</span>
        </div>
    )
}

export default Post;