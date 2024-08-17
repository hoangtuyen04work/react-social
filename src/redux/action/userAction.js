export const CREATE_USER = 'CREATE_USER';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const RELOAD = "RELOAD"
export const ON_SEARCH = "ON_SEARCH"
export const OFF_SEARCH = "OFF_SEARCH"


export const doOnSearch = () => {
    return {
        type: ON_SEARCH,
    };
};
export const doOffSearch = () => {
    return {
        type: OFF_SEARCH,
    };
};
export const doReload = () => {
    return {
        type: RELOAD,
    };
};

export const doSignup = (data) => {
    return {
        type: CREATE_USER,
        payload: data
    };
};


export const doLogin = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const doLogout = () => {
    return {
        type: LOGOUT,
    }
}
