import { useEffect, useState } from 'react'
import './Posts.scss'
import Post from "./post/Post"
import { IoSendOutline } from "react-icons/io5";
import { getAllPost, getAPost, postNewPost , findPost, findUser} from '../../services/apiServices';
import { useSelector } from 'react-redux';
import { useReload } from '../../context/ReloadContext';
import User from '../user/User';
import { useDispatch } from "react-redux";
import { doOffSearch, doOnSearchUser, doUnSearchUser } from '../../redux/action/userAction';
const Posts = (props) => {
    let page = 1;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); // Trạng thái chờ
    const [noneUserFind, setNoneUserFind] = useState("Don't any user like that")
    const [nonePostFind, setNonePostFind] = useState("Don't any post like that")
    const [nonePost, setNonePost] = useState("Don't any post, let's add some friend")
    const [anotation, setAnotation] = useState("");
    const [showHeader, setShowHeader] = useState(props.showHeader)
    const [id, setId] = useState(useSelector(state => state.user.user.id))
    const [isSearch, setIsSearch] = useState(useSelector(state => state.user.isSearch));
    const [isSearchUser, setIsSearchUser] = useState(useSelector(state => state.user.isSearchUser));
    const [postId, setPostId] = useState([]);
    const [userId, setUserId] = useState([])
    const [newPost, setNewPost] = useState({
        content: ""
    })
    const { setPostsKey, searchContent } = useReload();
    
    
    useEffect(() => {
        const findPosts = async () => {
            const data = await findPost(searchContent, 1);
            if (data && data?.code === 1000) {
                setPostId(data.data)
            }
        }
        const findUsers = async () => {
            const data = await findUser(searchContent, 1);
            if (data && data?.code === 1000) {
                setUserId(data.data)
            }
        }
        const getData = async () => {
            const data = await getAllPost(id)
            if (data && data.code === 1000) {
                setPostId(data.data)
            }
            
        }
        if (isSearch === true && isSearchUser === true) {
            setAnotation(noneUserFind)
            findUsers();
        }
        else if (isSearch && isSearchUser === false) {
            setAnotation(nonePostFind)
            findPosts();
        }
        else {
            setAnotation(nonePost)
            getData();
        }
        setLoading(false);
    }, [])
    const handleUploadPost = async () => {
        let data = await postNewPost(newPost);
        if (data && data.code === 1000) {
            setPostId(prev => [data.data.id, ...prev])
            setPostsKey(prev => prev + 1)
        }
        else {
            alert("can't upload post now")
        }
    }

    const handleOnChangeNewPost = (event) => {
        setNewPost({content: event.target.value})
    }

    const handleClickFindPost = () => {
        dispatch(doUnSearchUser())
        setPostsKey(prevKey => prevKey + 1)
    }
    const handleClickFindUser = () => {
        dispatch(doOnSearchUser())
        setPostsKey(prevKey => prevKey + 1)
    }
    if (loading) {
        return <div>Loading...</div>; // Hiển thị khi đang chờ
    }
    return (
        <div className="post__container">
            {showHeader &&
            <>
            {
                isSearch ? 
                    <div className="type__search">
                        <div  className = {`search__user  ${isSearchUser ? "active" : ""}`} onClick = {handleClickFindUser} >
                            user
                        </div>
                        <div className="space">
                            
                        </div>
                        < div className ={`search__post  ${isSearchUser ? "" : "active"}`} onClick = {handleClickFindPost} >
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
                </>
            }
            <div className = {showHeader ? "postss__noheader" : "postss"}>
                {isSearch ? 
                    <>
                        {
                            isSearchUser ?
                                <>
                                    {
                                        userId.length === 0 ?
                                            <div className="none">
                                                {anotation}
                                            </div>
                                            :
                                            userId.map((userid, index) => (
                                                <div key={index}>
                                                    <User id={userid}/>
                                                </div>))
                                    }
                                </>
                                :
                                <>
                                    {
                                        postId.length === 0 ?
                                            <div className="none">
                                                {anotation}
                                            </div>
                                            :
                                            postId.map((postid, index) => (
                                                <div key={index}>
                                                    <Post id={postid}/>
                                                </div>
                                            ))
                                    }
                                </>
                        }
                    </> 
                    :
                    <>
                        {
                        postId.length === 0 ?
                            <div className="none">
                                {anotation}
                            </div>
                        :
                        postId.map((postid, index) => (
                            <div key={index}>
                                <Post id={postid}/>
                            </div>
                        ))
                        }
                    </>
                }
            </div>
    </div>
    )
}
export default Posts;