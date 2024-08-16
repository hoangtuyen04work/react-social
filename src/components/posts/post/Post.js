import Avatar from '../../avatar/Avata';
import Comments from '../../comments/Comments';
import './Post.scss'
import { SlOptionsVertical } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Post = (props) => {
    const [id, setId] = useState(props.id);
    const navigate = useNavigate();
    const handleOnclickAvatar = () => {
        navigate(`/profile?id=${props.id}`)
    }
    const [liked, setLiked] = useState(false);
    const [onComment, setOnComment] = useState(false);
    const handleLikeClick = () => {
        setLiked(!liked);
    }

    const handleOnComment = () => {
        setOnComment(!onComment)
        
    }

     return (
        <div className="post">
            <div className="header-post" onClick={handleOnclickAvatar}>
                <div className="post__left">
                    <Avatar/>
                    <div className="poster">
                        poster
                    </div>
                </div>
                <div className="post__right">
                    <SlOptionsVertical />
                </div>
            </div>

            <div className="body-post">
                <div className="content-post">
                    The assumption we’ ll make
                    for portrait - oriented images is that the subject of the photo is at the top - center of the composition.Again, this isn’ t going to be the
                    case inevery single portrait photo.Similar to landscape photos, the wrapper div of portrait - oriented img elements must have equal width and height property values so that the wrapper is a perfect square.
                </div>
                <div className="image">
                    <img src="/image-2.jpg" className="circle-image" alt="Circle Image"/>
                </div>
            </div>

            <div className="footer-post">
                <div className="footer-left">
                    <div className="like" onClick={handleLikeClick}>
                        {
                            liked ? 
                                <FcLike />
                                :
                                <LuHeart />
                        }
                    </div>
                    <div className="number-like">
                        100 likes
                    </div>
                    
                </div>
                <div className="footer-right">
                    {
                        onComment && (
                            <Comments id={id} onClose={handleOnComment} />
                        )
                    }

                    <div className = "comment" onClick = {handleOnComment} >
                        <FaRegComment />
                    </div>
                    <div className="number-comment">
                        20 comments
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}


export default Post;