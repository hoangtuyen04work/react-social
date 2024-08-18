import { NavLink } from "react-router-dom";
import "./Login.scss"
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { postLogin } from "../../services/apiServices";
const Login = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});


    const userIdRef = useRef(null);
    const passwordRef = useRef(null);
    const loginRef = useRef(null);
    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
        setErrors({...errors, userId: ""})
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({...errors, password: ""})
    } 
    const handleKeyDown = (event, nextRef) => {
        if (event.key === "Enter") {
            event.preventDefault();
            nextRef.current.focus();
        }
    }
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        let newErrors = {};
        if (!userId) newErrors.userId = "UserId is required"
        if (!password) newErrors.password = "Password is required"
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        let data = await postLogin(userId, password);
        if (data && data.code === 1000) {
            dispatch(doLogin(data.data));
        }
        else {
            console.log(">>data", data);
            setErrors({...errors, title: "UserId not existed or wrong password"})
        }
    }
    return (
        <div className="login">
            <form className = "login-form" onSubmit = {handleOnSubmit}>
                <div className="login-title">
                    Title
                </div>
                
                <div className="inputs">
                    <div className="input-container">
                    {
                        errors.title && <span className="error-message">
                                            {errors.title}
                                        </span>
                    }
                </div>
                    <div  className = "input-container" >
                        <input ref={userIdRef} onChange={handleUserIdChange} onKeyDown={(e)=> handleKeyDown(e, passwordRef)} value={userId} type="text" className="input" placeholder="UserId"/>
                        {
                        errors.userId && <span className="error-message">
                                            {errors.userId}
                                        </span>
                        }
                    </div>
                    <div  className = "input-container" >
                        <input ref={passwordRef} onChange={handlePasswordChange} onKeyDown={(e) => handleKeyDown(e, loginRef)} value={password} type="password" className="input"  placeholder="Password"/>
                        {
                        errors.password && <span className="error-message">
                                            {errors.password}
                                        </span>
                        }
                    </div>
                </div>
                <div className="login-confirm" ref={loginRef}>
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