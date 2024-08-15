import { NavLink } from "react-router-dom";
import "./Login.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";

const Login = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("")
    const handleUserIdChange = (event) => {
        setUserId(event.target.value)
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };
    const handleOnSubmit =  async (event) => {
        event.preventDefault();
        let data = await doLogin(userId, password);
        dispatch(doLogin(data))
    }
    const dispatch = useDispatch;

    return (
        <div className="login">
            <form form className = "login-form" onSubmit = {() => handleOnSubmit()}>
                <div className="login-title">
                    Title
                </div>
                <div className="input">
                    <input onChange={(event)=>handleUserIdChange(event)} value={userId} type="text" className="input input1" placeholder="UserId"/>
                    <input onChange={(event)=>handlePasswordChange(event)} value={password} type="password" className="input input2"  placeholder="Password"/>
                </div>
                <div className="login-confirm">
                    <button className="btn btn-login">
                    Log in
                </button>
                </div>
                <div className="login-split">
                    OR
                </div>
                <div className="login-google">
                    Login with goole
                </div>
                <div className="forgot-password">
                    Forgot password
                </div>
                <NavLink to="/signup" className="to-signup">
                    Sign up
                </NavLink>
            </form>
            
        </div>
    )
}

export default Login;