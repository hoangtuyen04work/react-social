import "./Signup.scss"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { postCreateNewUser } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import {doSignup} from '../../redux/action/userAction'




const Signup = (props) => {
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();


    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault(); // Prevent the page from reloading
        let data = await postCreateNewUser(userId, userName, password);
        // Function to create a delay
        // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        // // Delay execution for 100 seconds (100000 milliseconds)
        // await delay(100000);
        if (data && data.code === 1000) {
            dispatch(doSignup(data.data));
        }
    };

    return (
        <div className="signup">
            <form className="login-form" onSubmit={handleOnSubmit}>
                <div className="login-title">
                    SignUp
                </div>
                <div className="input">
                    <input onChange={handleUserIdChange} value={userId} type="text" className="input input1" placeholder="UserId" />
                    <input onChange={handleUserNameChange} value={userName} type="text" className="input input1" placeholder="UserName" />
                    <input onChange={handlePasswordChange} value={password} type="password" className="input input2" placeholder="Password" />
                    <input onChange={handleConfirmPasswordChange} value={confirmPassword} type="password" className="input input2" placeholder="Confirm Password" />
                </div>
                <div className="login-confirm">
                    <button type="submit" className="btn btn-login">
                        Signup
                    </button>
                </div>
                <div className="login-split">
                    OR
                </div>
                <div className="login-google">
                    Login with Google
                </div>
                <div className="forgot-password">
                    Forgot password
                </div>
                <NavLink to="/login" className="to-signup">
                    Login
                </NavLink>
            </form>
        </div>
    );
};

export default Signup;
