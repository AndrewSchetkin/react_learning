import c from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
            </div>
            <div>
                ava + desc
            </div>
            <div>
                My posts
                <div>New post</div>
                <div className="posts">
                    <div className={c.item}>Post 1</div>
                    <div className={c.item}>Post 2</div>
                </div>
            </div>
        </div>
        );
}

export default Profile