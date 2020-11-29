import c from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="" />
            </div>
            <div className={c.portfolioDescription}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;