import { Navigate } from 'react-router-dom';
import {
    useNavigate
} from 'react-router-dom';
import Item from '../navItem/Item';
import './Navright.scss'
import { useEffect, useState } from 'react';
import Message from '../message/Message';


const Navright = () => {

    const [showMessage, setShowMessage] = useState(false);
    const [messageId, setMessageId] = useState();
    const handleCloseMessage = () => {
        setShowMessage(false);
    }
    const handleItemClick = async (id) => {
        setShowMessage(true);
    }

    useEffect(() => {
        
    }, [])
    
    return (
        <div className="nav-right">
            <div className="title">
                Notice
            </div>
            <div className="list-item">
                {/* <Item id = "1" onClick={handleItemClick}/> */}

            </div>
            {showMessage &&
                <Message id= {messageId} onClose={handleCloseMessage}></Message>
            }
        </div>
    )
}
export default Navright;