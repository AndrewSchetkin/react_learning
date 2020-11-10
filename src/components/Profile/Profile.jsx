import MyPosts from "./MyPosts/MyPosts";
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
            <MyPosts />
        </div>
    )
}

export default Profile;