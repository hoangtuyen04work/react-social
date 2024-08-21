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
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
const Posts = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [noneUserFind, setNoneUserFind] = useState("Don't any user like that")
    const [nonePostFind, setNonePostFind] = useState("Don't any post like that")
    const [nonePost, setNonePost] = useState("Don't any post, let's add some friend")
    const [userNonePost, setUserNonePost] = useState("Don't have any post")
    const [anotation, setAnotation] = useState("");
    const [showHeader, setShowHeader] = useState(props.showHeader)
    const [id, setId] = useState(useSelector(state => state.user.user.id))
    const [isSearch, setIsSearch] = useState(useSelector(state => state.user.isSearch));
    const [isSearchUser, setIsSearchUser] = useState(useSelector(state => state.user.isSearchUser));
    const [postId, setPostId] = useState([]);
    const [userId, setUserId] = useState([])
    const [newPost, setNewPost] = useState({
        content: "",
        image: null
    })
    const [profileid, setProfileid] = useState(props.profileid);
    const { setPostsKey, searchContent } = useReload();
    
    
    useEffect(() => {
        const findPosts = async () => {
            
            if (searchContent ) { // Kiểm tra nếu searchContent khác null, undefined hoặc rỗng
                const data = await findPost(searchContent, 1);
                if (data && data ?.code === 1000) {
                    setUserId(data.data);
                }
            } else {
                console.log('searchContent is null or empty');
                // Bạn có thể xử lý thêm nếu cần, ví dụ như hiển thị thông báo cho người dùng
            }
        }
        const findUsers = async () => {
            if (searchContent) {  // Kiểm tra nếu searchContent khác null, undefined hoặc rỗng
                const data = await findUser(searchContent, 1);
                if (data && data?.code === 1000) {
                    setUserId(data.data);
                }
            } else {
                console.log('searchContent is null or empty');
                // Bạn có thể xử lý thêm nếu cần, ví dụ như hiển thị thông báo cho người dùng
            }
        }
        const getData = async () => {
            if (profileid) {
                setId(profileid)
                setAnotation(userNonePost)
            }
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
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])
    const handleUploadPost = async () => {
        const formData = new FormData();
        formData.append("content", newPost.content);
        if (newPost.image) {
            formData.append("image", newPost.image);
        }
        let formdata = {
            content: newPost.content,
            multipartFile: newPost.image
            }
        
        let data = await postNewPost(formdata);
        if (data && data.code === 1000) {
            setPostId(prev => [data.data.id, ...prev]);
            setPostsKey(prev => prev + 1);
            setNewPost({
                content: "",
                image: null
            }); // Reset the form after successful post
        }
    }


    const handleOnChangeNewPost = (event) => {
        const {
            name,
            value,
            files
        } = event.target;
        if (name === "content") {
            setNewPost(prev => ({
                ...prev,
                content: value
            }));
        } else if (name === "image" && files.length > 0) {
            setNewPost(prev => ({
                ...prev,
                image: files[0]
            }));
        }
    }

    const handleClickFindPost = () => {
        dispatch(doUnSearchUser())
        setPostsKey(prevKey => prevKey + 1)
    }
    const handleClickFindUser = () => {
        dispatch(doOnSearchUser())
        setPostsKey(prevKey => prevKey + 1)
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
                        <input
                            value={newPost.content}
                            name="content"
                            type="text" 
                            placeholder="Write your story" 
                            className="new-post" 
                            onChange={handleOnChangeNewPost} 
                        />
                        <div className="file__input">
                            <label className = "buttonz" htmlFor = "upload" > Upload Image </label>
                            < input id="upload" className = "input__image" name = "image" type = "file"accept = "image/*"onChange = {handleOnChangeNewPost}/>
                        </div>
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
                                                    <User idd={userid}/>
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
                                                    <Post postid={postid} />
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
                                                    <Post postid={postid}/>
                                                    
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