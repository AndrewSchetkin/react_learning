import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts myPosts={props.myPosts} />
        </div>
    )
}

export default Profile;