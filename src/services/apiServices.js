
import axios from '../utils/axiosUtil'

const postCreateNewUser = (userId, userName, password) => {
    let data = {
        userId: userId,
        userName: userName,
        password: password
    }
    return axios.post(`socialnetwork/signup`, data)
}

const postLogin = (userId, password) => {
    let data = {
        userId: userId,
        password: password
    }
    return axios.post(`socialnetwork/login`, data)
}

const getFriends = (id, offset) => {
    return axios.get(`socialnetwork/friend/${id}/${offset}`)
}

const getCountFriend = (id) => {
    return axios.get(`socialnetwork/friend/count/${id}`)
}


const postAddFriend = (id) => {
    return axios.post(`socialnetwork/friend/${id}`)
}



const postNewPost = (data) => {
    const formData = new FormData();
    formData.append('content', data.content);
    if (data.multipartFile) {
        formData.append('multipartFile', data.multipartFile);
    } // Đây là file cần upload
    console.log("FORM DATA" + formData)
    return axios.post('socialnetwork/post/new', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
};

const getMyPosts = (id) => {
    return axios.get(`socialnetwork/posts/${id}`)
}

const getPostHome = (id) => {
    return axios.get(`socialnetwork/post/home/${id}`)
}

const getAPost = (id) => {
    return axios.get(`socialnetwork/post/apost/${id}`);
}

const editPost = (id) => {
    return axios.put(`socialnetwork/post/edit/${id}`)
}

const deletePost = (id) => {
    return axios.delete(`socialnetwork/post/delete/${id}`)
}



const deleteFriend = (id) => {
    return axios.delete(`socialnetwork/friend/${id}`)
}

const isFriend = (id1, id2) => {
    return axios.get(`socialnetwork/friend/check/${id1}/${id2}`)
}

const findUser = (finded, offset) => {
    return axios.get(`socialnetwork/find/user/${finded}/${offset}`)
}

const findPost = (finded, offset) => {
    return axios.get(`socialnetwork/find/post/${finded}/${offset}`)
}

const like = (id) => {
    let data = {
        postId: id
    }
    return axios.put(`socialnetwork/like`, data)
}

const countLike = (id) => {
    return axios.get(`socialnetwork/like/count/${id}`)
}

const checkLike = (id) => {
    return axios.get(`socialnetwork/like/check/${id}`)
}

const deleteComment = (id) => {
    let data = {
        commentId: id
    }
    return axios.delete(`socialnetwork/comment`, data)
}

const editComment = (id, content) => {
    let data = {
        commentId: id,
        content: content
    }
    return axios.put(`socialnetwork/comment`, data)
}

const getAllComment = (id) => {
    return axios.get(`socialnetwork/comment/all/${id}`)
}

const addComment = (id, content)=>{
    let data = {
        postId: id,
        content: content
    }
    return axios.post(`socialnetwork/comment/new`, data)
}

const countComment = (id) => {
    return axios.get(`socialnetwork/post/count/comment/${id}`)
}

const getUserInfo = (id) => {
     return axios.get(`socialnetwork/info/${id}`)
}

const editUser = (id, newName) => {
    let data = {
        userName: newName
    }
    return axios.put(`socialnetwork/user/edit/${id}`, data)
}

const deleteUser = () => {
    return axios.delete(`socialnetwork/user/delete`)
}


const checkFollowing = (userId, followingId) => {

    return axios.get(`socialnetwork/followed/${userId}/${followingId}`)
}
const follow = (id) => {
    return axios.post(`socialnetwork/follow/${id}`)
}
const unfollow = (id) => {
    return axios.post(`socialnetwork/follow/un/${id}`)
}
const countFollower = (id) => {
    return axios.get(`socialnetwork/follow/countfollower/${id}`)
}
const countFollowing = (id) => {
    return axios.get(`socialnetwork/follow/countfollowing/${id}`)
}
export {
    editComment, getAllComment, addComment, deleteComment,countComment, 
    like, countLike, checkLike,
    postCreateNewUser, postLogin,
    getFriends, getCountFriend, deleteFriend, postAddFriend, isFriend,
    postNewPost, getMyPosts, getAPost, deletePost, editPost, findPost, getPostHome,
    findUser, deleteUser, editUser, getUserInfo, 
    checkFollowing, follow, unfollow, countFollower, countFollowing,

};