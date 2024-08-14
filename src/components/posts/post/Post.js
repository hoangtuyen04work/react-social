import Avatar from '../../avatar/Avata';
import './Post.scss'


const  Post = () => {
    return (
        <div className="post">
            <div className="header-post">
                <Avatar/>
                <div className="poster">
                    poster
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

            <div className="detail-post">
                <div className="number-like">
                    100
                </div>

                <div className="number-comment">
                    comment
                </div>
            </div>

            <div className="footer-post">
                <div className="like">
                    like
                </div>
                <div className="comment">
                    comment
                </div>
            </div>
            
        </div>
    )
}


export default Post;