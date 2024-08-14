import "./Signup.scss"
import { useState } from "react";
import {
    NavLink
} from "react-router-dom";
import { postCreateNewUser } from "../../services/apiServices";


const Signup =  (props) => {
    const { onLogin } = props;
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };
    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    const handleOnSubmit = async (event) => {
        let data = await postCreateNewUser(userId, userName, password);
    };

    return (
        <div className="signup">
            <form className="login-form" onSubmit={() => handleOnSubmit()}>
                <div className="login-title">
                    SignUp
                </div>
                <div className="input">
                    <input onChange={(event) => handleUserIdChange(event)} value={userId} type="text" className="input input1" placeholder="UserId" />
                    <input onChange={(event)=>handleUserNameChange(event)} value={userName} type="text" className="input input1" placeholder="UserName"/>
                    <input onChange={(event) => handlePasswordChange(event)} value={password} type="password first" className="input input2" placeholder="Password" />
                    <input onChange={(event) => handleConfirmPasswordChange(event)} value={confirmPassword} type="password confirm" className="input input2" placeholder="Confirm Password" />
                </div>
                <div className="login-confirm">
                    <button className="btn btn-login">
                        Signup
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
                <NavLink to="/login" className="to-signup">
                    Login
                </NavLink>
            </form>
            
        </div>
    )
}

export default Signup;