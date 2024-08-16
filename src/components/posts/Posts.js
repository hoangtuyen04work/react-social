import { useState } from 'react'
import './Posts.scss'
import Post from "./post/Post"

const Posts = () => {
    const [id, setId] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
    
    return (
        <div className="posts">
            <input type="text" placeholder='Write your story' className="new-post" />
            {
                id.map((postId, index) => (
                    <div key={index}>
                        <Post id={postId} />
                    </div>
                ))
            }
        </div>
    )
}
export default Posts;