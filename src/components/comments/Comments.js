import { useState } from 'react';
import './Comments.scss'
import SmallAvatar from '../avatar/SmallAvatar';
import { IoCloseOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
const Comments = ({id, onClose}) => {
    const [comments, setComments] = useState([
        { sender: "Sender Oke", text: "comment Hello fsdkjhfkdshfjkshdfksjhdfkjsdhfksdhfjkshfks", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke", text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment dfsxxcvxcvcvxcvxvxvxcdfsfdsfsdfsdfsdfsdfsf", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke", text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },
        { sender: "Sender Oke",text: "comment", commenterId: 1 },

    ])
    const [onComment, setOnComment] = useState(true);

    return (
        <div className="comments-container">
            <div className="comments-header">
                <div className="comment-title">
                    Comments
                </div>
                <div className="header__closes" onClick={onClose}>
                        <IoCloseOutline />
                </div>
            </div>
            <div className="comments-body">
                {
                    comments.map((cmt, index) => (
                        <div className="comment-container">
                            <div className="comment__avatar">
                                <SmallAvatar/>
                            </div>
                            <div div className = "comment-comments" >
                                <div className="comment__sender">
                                    {cmt.sender}
                                </div>
                                <div className="comment__content">
                                    {cmt.text}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="comments-footer">
                <input className="comment-add" placeholder='Put your comment' />
                <div className="send">
                    <IoMdSend />
                </div>
            </div>
        </div> 
    )
}
export default Comments;