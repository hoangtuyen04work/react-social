import { Navigate } from 'react-router-dom';
import {
    useNavigate
} from 'react-router-dom';
import Item from '../navItem/Item';
import './Navright.scss'

const Navright = () => {
    const navigate = useNavigate();
    const handleItemClick = (id) => {
        // navigate(`/message`);
        // navigate(`/profile/${id}`);
    }
    return (
        <div className="nav-right">
            <div className="title">
                Message
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
export default Navright;