
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
    return axios.post(`socialnetwork/post/new`, data)
}

const getAllPost = (id) => {
    return axios.get(`socialnetwork/posts/${id}`)
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
    return axios.get(`socialnetwork/checkfriend/${id1}/${id2}`)
}

const findUser = (finded, offset) => {
    return axios.get(`socialnetwork/find/user/${finded}/${offset}`)
}

const findPost = (finded, offset) => {
    return axios.get(`socialnetwork/find/post/${finded}/${offset}`)
}

export {
    postCreateNewUser, postLogin,
    getFriends, getCountFriend, deleteFriend, postAddFriend, isFriend,
    postNewPost, getAllPost, getAPost, deletePost, editPost, 
    findUser, findPost
};