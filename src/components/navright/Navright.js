import { Navigate } from 'react-router-dom';
import {
    useNavigate
} from 'react-router-dom';
import Item from '../navItem/Item';
import './Navright.scss'
import { useState } from 'react';
import Message from '../message/Message';


const Navright = () => {

    const [showMessage, setShowMessage] = useState(false);
    const [messageId, setMessageId] = useState();
    const handleCloseMessage = () => {
        //get message from backend
        //data after get from backend//
        // setMessages(...messages, test)
        // setMessages({})
        setShowMessage(false);
    }

    const handleItemClick = async (id) => {
        // setMessages(...messages, fakeData)
        setShowMessage(true);
        // navigate(`/message`);
        // navigate(`/profile/${id}`);
    }
    
    return (
        <div className="nav-right">
            <div className="title">
                Message
            </div>
            <div className="list-item">
                <Item id = "1" onClick={handleItemClick}/>
                <Item id = "2" onClick={handleItemClick}/>
                <Item id = "3" onClick={handleItemClick}/>
                <Item id = "4" onClick={handleItemClick}/>
                <Item id = "5" onClick={handleItemClick}/>
                <Item id = "6" onClick={handleItemClick}/>
                <Item id = "7" onClick={handleItemClick}/>
                <Item id = "8" onClick={handleItemClick}/>
                <Item id = "9" onClick={handleItemClick}/>
                <Item id = "10" onClick={handleItemClick}/>
                <Item id = "11" onClick={handleItemClick}/>
                <Item id = "12" onClick={handleItemClick}/>
            </div>
            {showMessage &&
                <Message id= {messageId} onClose={handleCloseMessage}></Message>
            }
        </div>
    )
}
export default Navright;