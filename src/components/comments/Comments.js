import { useEffect, useState } from 'react';
import './Comments.scss'
import SmallAvatar from '../avatar/SmallAvatar';
import { IoCloseOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { getAllComment, addComment, countComment } from '../../services/apiServices';
import { useSelector } from 'react-redux';
const Comments = ({ id, onClose, addComments }) => {
    const navigate = useNavigate();
    const [comments, setComments] = useState([])
    const [content, setContent] = useState('');
    const [userName, setUserName] = useState(useSelector(state => state.user.user.userName));

    useEffect(() => {
        const getData = async () => {
            let data = await getAllComment(id);
            if (data && data.code === 1000) {
                setComments(data.data)
            }
        }
        
        
        getData();
    }, [])
    const handleUploadComment = async () => {
        if (content.trim()) { // Check if the comment is not empty
            try {
                let data = await addComment(id, content);
                console.log("thisis data", data)
                if (data && data.code === 1000) {
                    let newComment = {
                        commenterName: userName,
                        content: content, // Ensure to include the actual comment content
                        // Include other fields as necessary
                    };
                    setComments(prev => [newComment, ...prev]);
                    
                    setContent(''); // Clear the input field
                } else {
                    addComments();
                    // Handle non-success responses if needed
                    console.error('Failed to add comment:', data.message);
                }
            } catch (error) {
                // Handle errors during the API request
                console.error('Error adding comment:', error);
            }
        } else {
            console.warn('Comment cannot be empty');
        }
    };

    const handleOnChangeNewComment = (event) => {
        setContent(event.target.value)

    }
    const handleAvatarClick = (id) => {
        navigate(`/profile?id=${id}`)
    }

    return (
        <div key = {id}className = "comments-container" >
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
                        <div  key = {cmt.id} className = "comment-container" >
                            <div className="comment__avatar" onClick={() =>handleAvatarClick(cmt.commenterId)}>
                                <SmallAvatar/>
                            </div>
                            <div className = "comment-comments" >
                                <div className = "comment__sender" onClick = {() => handleAvatarClick(cmt.commenterId)} >
                                    {cmt.commenterName}
                                </div>
                                <div className="comment__content">
                                    {cmt.content}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="comments-footer">
                <input onChange={handleOnChangeNewComment} value={content} className="comment-add" placeholder='Put your comment' />
                <div className="send" onClick={handleUploadComment}>
                    <IoMdSend />
                </div>
            </div>
        </div> 
    )
}
export default Comments;