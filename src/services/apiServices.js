import axios from '../utils/axiosUtil'

const postCreateNewUser = (userId, userName, password) => {
    let data = {
        userId: userId,
        userName: userName,
        password: password
    }
    return axios.post('socialnetwork/signup', data)
}

const getLogin = (userId, password) => {
    let data = {
        userId: userId,
        password: password
    }
    return axios.get('socialnetwork/login', data)
}

export { postCreateNewUser, getLogin };