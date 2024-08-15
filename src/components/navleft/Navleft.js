import Item from '../navItem/Item';
import './Navleft.scss'
import { Navigate } from 'react-router-dom';
import {
    useNavigate
} from 'react-router-dom';
const Navleft = () => {
    const navigate = useNavigate();
    const handleItemClick = async (id) => {
        navigate("/profile");
        // navigate(`/profile/${id}`);
    }
    return (
        <div className="nav-left">
            <div className="title">
                Friends
            </div>
            <div className="list-item">
                <Item id="1" onClick={handleItemClick}/>
                <Item id="2" onClick={handleItemClick}/>
                <Item id="3" onClick={handleItemClick}/>
                <Item id="4" onClick={handleItemClick}/>
                <Item id="5" onClick={handleItemClick}/>
                <Item id="6" onClick={handleItemClick}/>
                <Item id="7" onClick={handleItemClick}/>
                <Item id="8" onClick={handleItemClick}/>
                <Item id="9" onClick={handleItemClick}/>
                <Item id="10" onClick={handleItemClick}/>
            </div>
        </div>
    )
}
export default Navleft;