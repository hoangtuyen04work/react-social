import Avatar from '../../avatar/Avata';
import Comments from '../../comments/Comments';
import './Post.scss'
import { SlOptionsVertical } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAPost, deletePost, like, countLike, checkLike, countComment } from '../../../services/apiServices'; // Import hàm deletePost từ apiServices
import { useReload } from '../../../context/ReloadContext';


const Post = ({ postid }) => {
    const [numberComment, setNumberComment] = useState(0)
    const [postId, setPostId] = useState(postid);
    const [numberLike, setNumberLike] = useState(0);
    const [post, setPost] = useState({
        posterName: "",
        content: "",
        posterId: "",
        imageUrl: ""
    });
    const [showOptions, setShowOptions] = useState(false); // State để điều khiển hiển thị menu tùy chọn
    const navigate = useNavigate();
    const { setPostsKey } = useReload();
    const handleOnclickAvatar = () => {
        navigate(`/profile?id=${post.posterId}`)
    }

    const [liked, setLiked] = useState(false);
    const [onComment, setOnComment] = useState(false);
    const handleLikeClick = async () => {
        let data = await like(postId);
        if (data && data.code === 1000) {
            setLiked(!liked);
            if (liked === false) {
                setNumberLike(prev => prev + 1)
            }
            else {
                setNumberLike(prev => prev - 1)
            }
        }
    }
    const handleOnComment = () => {
        setOnComment(!onComment)
    }
    const handleClickOption = () => {
        setShowOptions(prev => !prev); // Toggle menu tùy chọn
    }
    const handleDeletePost = async () => {
        const data = await deletePost(postid); // Gọi API để xóa bài viết
        if (data && data.code === 1000) {
            setPostsKey(prev => prev + 1)
        }
        else {
            alert("Can't delete post now");
        }
        setShowOptions(false);
    }
    const handleEditPost = async () => {
        const data = await deletePost(postid); // Gọi API để xóa bài viết
        if (data && data.code === 1000) {
            setPostsKey(prev => prev + 1)
        } else {
            alert("Can't delete post now");
        }
        setShowOptions(false); 
    }
    const addComment = () => {
        setNumberComment(prev => prev + 1)
    }
    useEffect(() => {
        const getData = async () => {
            const data = await getAPost(postId);
            console.log(data)
            if (data && data.code === 1000) {
                setPost(data.data)
            }
            const data2 = await countLike(postId);
            setNumberLike(data2.data)
            const data3 = await checkLike(postId);
            if (data3 && data3.code === 1000) {
                setLiked(data3.data)
            }
            let data4 = await countComment(postId);
            if (data4 && data4.code === 1000) {
                setNumberComment(data4.data)
            }
        }


        getData();
    }, [])
    return (
        <div className="post">
            <div className="header-post" >
                <div className = "post__left"onClick = {handleOnclickAvatar} >
                    <Avatar/>
                    <div className="poster">
                        {post.posterName}
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
                    {
                        post.imageUrl && 
                        <img src={post.imageUrl} className="circle-image" alt="Circle Image"/>
                    }
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
                        {numberLike}
                    </div>
                    
                </div>
                <div className="footer-right">
                    {
                        onComment && (
                            <Comments id={postid} onClose={handleOnComment} addComments={ addComment}/>
                        )
                    }
                    <div className="comment" onClick={handleOnComment}>
                        <FaRegComment />
                    </div>
                    <div className="number-comment" >
                        {numberComment} comments
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Post;
