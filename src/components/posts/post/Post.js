import Avatar from '../../avatar/Avata';
import Comments from '../../comments/Comments';
import './Post.scss'
import { SlOptionsVertical } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAPost, deletePost } from '../../../services/apiServices'; // Import hàm deletePost từ apiServices
import { useReload } from '../../../context/ReloadContext';


const Post = ({id}) => {
    const [postId, setPostId] = useState(id);
    const [post, setPost] = useState({posterName: "", });
    const [showOptions, setShowOptions] = useState(false); // State để điều khiển hiển thị menu tùy chọn
    const navigate = useNavigate();
    const { setPostsKey } = useReload();
    const handleOnclickAvatar = () => {
        navigate(`/profile?id=${id}`)
    }

    const [liked, setLiked] = useState(false);
    const [onComment, setOnComment] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    }

    const handleOnComment = () => {
        setOnComment(!onComment)
    }

    const handleClickOption = () => {
        setShowOptions(prev => !prev); // Toggle menu tùy chọn
    }

    const handleDeletePost = async () => {
        const data = await deletePost(id); // Gọi API để xóa bài viết
        if (data && data.code === 1000) {
            setPostsKey(prev => prev + 1)
        }
        else {
            alert("Can't delete post now");
        }
        setShowOptions(false);
    }
    const handleEditPost = async () => {
        console.log("id", id)
        const data = await deletePost(id); // Gọi API để xóa bài viết
        if (data && data.code === 1000) {
            setPostsKey(prev => prev + 1)
        } else {
            alert("Can't delete post now");
        }
        setShowOptions(false); 
    }

    const getData = async () => {
        const data = await getAPost(postId);
        if (data && data.code === 1000) {
            setPost(data.data)
            console.log("posterName", data.data.posterName)
        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="post">
            <div className="header-post" onClick={handleOnclickAvatar}>
                <div className="post__left">
                    <Avatar/>
                    <div className="poster">
                        {/* {post.posterName} */}
                    </div>
                </div>
                <div className="post__right" onClick={handleClickOption}>
                    
                    {showOptions && (
                        <div className="options-menu">
                            <div className="option-item" onClick={handleDeletePost}>
                                Delete
                            </div>
                            <div className="option-item" onClick={handleEditPost}>
                                Edit
                            </div>
                        </div>
                    )}
                    <SlOptionsVertical />
                </div>
            </div>

            <div className="body-post">
                <div className="content-post">
                    {post.content}
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
                        100
                    </div>
                    
                </div>
                <div className="footer-right">
                    {
                        onComment && (
                            <Comments id={id} onClose={handleOnComment} />
                        )
                    }

                    <div className="comment" onClick={handleOnComment}>
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
