import Post from "../../components/posts/post/Post";


const Profile = () => {
    return (
        <div className="profile">
            <div className="info">
                <div className="avatar__profile">
                    <img src="/image-2.jpg"/>
                </div>
                <div className="name__profile">
                    Hoang Huu Tuyen
                </div>
                <div className="info">
                    <div className="userId">
                        UserId
                    </div>
                    <div className="date-of-birth">
                        22-2-2002
                    </div>
                    <div className="number-follower">
                        Have 52424 people follower
                    </div>
                    <div className="number-following">
                        Have 52424 people following
                    </div>
                </div>
            </div>
            <div className="posts">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Profile;