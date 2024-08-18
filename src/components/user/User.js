import Avatar from '../avatar/Avata';
import './User.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReload } from '../../context/ReloadContext';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserFriends } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
const User = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState(props.id);
    const navigate = useNavigate();
    const handleOnclickAvatar = () => {
        navigate(`/profile?id=${id}`)
    }
    const [isFriend, setIsFriend] = useState(false);
    useEffect(() => {

        const checkIsFriend = async (id2) => {
            const data = await isFriend(id, id2);
            if (data && data.code === 1000) {
                if (data.data === true) {
                    setIsFriend(true)
                }
                else {
                    setIsFriend(false)
                }
            }
            else {
                alert("can't get data now")
            }

            alert("can't get data now")
        }
    })
    

    return (
        <div className="user__find">
            <div className="user__avatar">
                <Avatar/>
            </div>
            <div className="user__infor">
                <div className="user__name">
                    UserName
                </div>
                <div className="user__id">
                    UserId
                </div>
            </div>
            <div className="friend">
                {
                    isFriend ? 
                        <FaUserFriends />
                        :
                        <IoIosPersonAdd />
                }
            </div>
        </div>
    )
}

export default User;
