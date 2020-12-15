import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
                myPosts={props.state.myPosts} 
                addPost={props.addPost} 
                newMsgValue={props.state.newMsgValue}
                changePostMsg={props.changePostMsg}
            />
        </div>
    )
}

export default Profile;