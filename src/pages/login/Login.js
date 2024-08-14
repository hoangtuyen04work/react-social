import { NavLink } from "react-router-dom";
import "./Login.scss"
import { useState } from "react";
const Login = (props) => {
    const { onLogin } = props;
    const [formData, setFormData] = useState({
        userId: "",
        password: "",
    });
    const handleUserIdChange = (event) => {
        setFormData({
            ...formData,
            userId: event.target.value
        });
    };
    const handlePasswordChange = (event) => {
        setFormData({
            ...formData,
            password: event.target.value
        });
    };
    const handleOnSubmit = (event) => {
        onLogin(true);
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={() => handleOnSubmit()}>
                <div className="login-title">
                    Title
                </div>
                <div className="input">
                    <input onChange={(event)=>handleUserIdChange(event)} value={formData.userId} type="text" className="input input1" placeholder="UserId"/>
                    <input onChange={(event)=>handlePasswordChange(event)} value={formData.password} type="password" className="input input2"  placeholder="Password"/>
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