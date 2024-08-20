import Avatar from '../avatar/Avata';
import './User.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosPersonAdd } from "react-icons/io";
import { follow, getUserInfo, unfollow, checkFollowing } from '../../services/apiServices';
import { ImUserCheck } from "react-icons/im";

const User = ({idd}) => {
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    const [id2, setId2] = useState(idd);
    const navigate = useNavigate();
    const [id, setId] = useState(useSelector(state => state.user.user.id))
    const handleOnclickAvatar = () => {
        navigate(`/profile?id=${id2}`)
    }
    const [isFollowing, setIsFollowing] = useState(false);
    useEffect(() => {
        const checkFollowings = async () => {
            const data = await checkFollowing(id, idd);
            if (data && data.code === 1000) {
                if (data.data === true) {
                    setIsFollowing(true)
                }
                else {
                    setIsFollowing(false)
                }
            }
        }

        const getInfoUser = async () => {
            const data = await getUserInfo(id2);
            if (data && data.code === 1000) {
                setUserName(data.data.userName);
                setUserId(data.data.userId)
            }
        }

        checkFollowings();
        getInfoUser();
    }, []);

    const handleFollow = async () => {
        if (isFollowing === false) {
            await follow(id2)
        }
        else {
            console.log("unfollow", await unfollow(id2))
        }
        setIsFollowing(prev => !prev)
    }

    

    return (
        <div className="user__find">

            <div className="right">
            <div className = "user__avatar"onClick = {handleOnclickAvatar} >
                <Avatar/>
            </div>
            < div className = "user__infor" onClick = {handleOnclickAvatar} >
                <div className="user__name">
                    {userName}
                </div>
                <div className="user__id">
                    {userId}
                </div>
            </div>
            </div>
            <div key={isFollowing} className="friend" onClick={handleFollow}>
                {
                    isFollowing ? 
                        <ImUserCheck />
                        :
                        <IoIosPersonAdd />
                }
            </div>
        </div>
    )
}

export default User;
