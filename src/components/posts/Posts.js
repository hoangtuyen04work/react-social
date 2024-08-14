import './Posts.scss'
import Post from "./post/Post"

const Posts = () => {
    return (
        <div className="posts"> 
            <input type="text" placeholder='Write your story' className="new-post"/>
            <Post />
            <Post />
            <Post/>
        </div>
    )
}

export default Posts;