import { useReload } from "../../context/ReloadContext";
import Posts from "../../components/posts/Posts";
import { useLocation  } from 'react-router-dom';
import { useState } from "react";
import { getUserInfo} from  '../../services/apiServices'; 
import { useEffect } from "react";

const Profile = () => {
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [numberFriend, setNumberFriend] = useState(0);
    const [numberFollower, setNumberFollower] = useState(0);
    const { postsKey } = useReload();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const [dob, setDob] = useState("");

    useEffect(() => {
        const getData = async () => {
            let data = await getUserInfo(id);
            if (data && data.code === 1000) {
                setUserName(data.data.userName);
                setUserId(data.data.userId);
                setNumberFollower(data.data.numberFollower);
                setNumberFriend(data.data.numberFriend);
            }
        }
        getData();
    }, [])

    return (
        <div className="profile">
            <div className="info">
                <div className="avatar__profile">
                    <img src="/image-2.jpg"/>
                </div>
                <div className="name__profile">
                    {userName}
                </div>
                <div className="info">
                    <div className="userId">
                        {userId}
                    </div>
                    <div className="date-of-birth">
                        {dob}
                    </div>
                    <div className="number-follower">
                        {numberFollower}  follower
                    </div>
                    <div className="number-following">
                        {numberFriend}  friend
                    </div>
                </div>
            </div>
            <div className="posts">
                <Posts key={postsKey} showHeader={false} profileid={id} isProfile={true} />
            </div>
        </div>
    )
}

export default Profile;