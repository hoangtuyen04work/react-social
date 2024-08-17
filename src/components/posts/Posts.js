import { useEffect, useState } from 'react'
import './Posts.scss'
import Post from "./post/Post"
import { IoSendOutline } from "react-icons/io5";
import { getAllPost, getAPost, postNewPost } from '../../services/apiServices';
import { useSelector } from 'react-redux';


const Posts = () => {
    const [userId, setUserId] = useState(useSelector(state => state.user.user.id))
    const [isSearch, setIsSearch] = useState(useSelector(state => state.user.isSearch));
    const [postId, setPostId] = useState([]);

    const [newPost, setNewPost] = useState({
        content: ""
    })
    // const [userId, setUserId] = useState([
    //     11, 22, 33, 44, 55, 66, 77, 88, 99
    // ])

    useEffect(() => {
        const getData = async () => {
            const data = await getAllPost(userId)
            if (data && data.code === 1000) {
                setPostId(data.data)
            } else {
                alert("can't get post now")
            }
        }
        getData();
    }, [])
    const handleUploadPost = async () => {
        let data = await postNewPost(newPost);
        if (data && data.code === 1000) {
            setPostId(prev => [data.data.id, ...prev])
            window.location.reload();
        }
        else {
            alert("can't upload post now")
        }
    }

    const handleOnChangeNewPost = (event) => {
        setNewPost({content: event.target.value})
    }
    return (
        <div className="post__container">
            {
                isSearch ? 
                    <div className="type__search">
                        <div className="search__user">
                            user
                        </div>
                        <div className="space">
                            
                        </div>
                        <div className="search__post">
                            post
                        </div>
                    </div>
                    :
                    <div className="post__new">
                        <input value={newPost.content}type="text" placeholder='Write your story' className="new-post" onChange={handleOnChangeNewPost} />
                        <div className="send__icon" onClick={handleUploadPost}>
                            <IoSendOutline />
                        </div>
                    </div>
            }
            <div className="postss">

                {
                    postId.length === 0 ?
                        <div className="none">
                            Don't have any post. Let's add some friends
                        </div>
                        :
                        postId.map((postId, index) => (
                            <div key={index}>
                                <Post id={postId} />
                            </div>
                        ))
                }

            </div>
    </div>
    )
}
export default Posts;