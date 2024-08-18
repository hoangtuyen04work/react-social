import { useReload } from "../../context/ReloadContext";
import Posts from "../../components/posts/Posts";


const Profile = () => {
    const { postsKey } = useReload();
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
                <Posts key={postsKey} showHeader={false} />
            </div>
        </div>
    )
}

export default Profile;