
import { CREATE_USER } from '../action/userAction'
import { LOGIN } from '../action/userAction'
import { LOGOUT } from '../action/userAction'


const INITIAL_STATE = {
    user: {
        token: '',
        userName: "",
        userId: '',
        roles: [],
        id: ''
    },
    isAuthenticated: false
}


const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: {
                    id: action?.payload?.info?.id,
                    token: action?.payload?.token,
                    userName: action?.payload?.info?.userName,
                    userId: action?.payload?.info?.userId ,
                    roles: action?.payload?.info?.roles
                },
                isAuthenticated : true
            }
        case LOGIN:
            return {
                ...state,
                user: {
                    id: action?.payload?.info?.id,
                    token: action?.payload?.token,
                    userName: action?.payload?.info?.userName,
                    userId: action?.payload?.info?.userId ,
                    roles: action?.payload?.info?.roles
                },
                isAuthenticated : true
            }
        case LOGOUT:
            return {
                ...state,
                user: {
                    id: "",
                    token: "",
                    userName: "",
                    userId: "",
                    role: ""
                },
                isAuthenticated : false
            }
        default: return state;
    }
}

export default userReducer;