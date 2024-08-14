import axios from '../utils/axiosUtil'

const postCreateNewUser = (userId, userName, password) => {
    let data = {
        userId: userId,
        userName: userName,
        password: password
    }
    return axios.post('socialnetwork/new', data)
}

export { postCreateNewUser };