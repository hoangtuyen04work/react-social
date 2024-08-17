import Item from '../navItem/Item';
import './Navleft.scss';
import { useNavigate } from 'react-router-dom';
import { getFriends } from '../../services/apiServices';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Navleft = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(useSelector(state => state.user.user.id));

    const [listFriends, setListFriends] = useState([]);
    const [offset, setOffset] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getAddFriends = async (offset) => {
        let data = await getFriends(id, offset);
        if (data && data.code === 1000) {
            if (data.data.length > 0) {
                setListFriends(prev => [...prev, ...data.data]);
            } else {
                setHasMore(false);
            }
        } else {
            alert("Can't get data from server", data.code);
        }
    };

    useEffect(() => {
        getAddFriends(offset);
    }, [offset]);

    const handleItemClick = (id) => {
        navigate(`/profile/${id}`);
    };

    const handleScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        if (scrollTop + clientHeight >= scrollHeight && hasMore) {
            setOffset(prev => prev + 1);
        }
    };

    return (
        <div className="nav-left" onScroll={handleScroll}>
            <div className="title">
                Friends
            </div>
            <div className="list-item">
                {listFriends.map((friend, index) => (
                    <Item key={friend.id} id={friend.id} onClick={() => handleItemClick(friend.id)} />
                ))}
            </div>
        </div>
    );
};

export default Navleft;
