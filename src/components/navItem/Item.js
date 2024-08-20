import './Item.scss'
import Avatar from '../avatar/Avata';
import { useEffect, useInsertionEffect, useState } from 'react';
import { getUserInfo } from '../../services/apiServices';
import { useNavigate } from 'react-router-dom';


const Item = ({ id}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    const handleClick = () => {
        navigate(`/profile?id=${id}`)
    };
    useEffect(() => {
        const getInfo = async() => {
            let data = await getUserInfo(id)
            if (data && data?.code === 1000) {
                setUserName(data.data.userName)
            }
        }
        getInfo();
    }, [])

    return (
        <div className="item" onClick={handleClick}>
            <Avatar />
            {userName}
        </div>
    );
};

export default Item;