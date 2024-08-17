import "./Signup.scss";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { postCreateNewUser } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { doSignup } from '../../redux/action/userAction';

const Signup = (props) => {
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    // Refs for the input fields
    const userIdRef = useRef(null);
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
        setErrors({ ...errors, userId: "" });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: "" });
    };

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
        setErrors({ ...errors, userName: "" });
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setErrors({ ...errors, confirmPassword: "" });
    };

    const handleKeyDown = (event, nextRef) => {
        if (event.key === "Enter") {
            event.preventDefault();
            nextRef.current.focus();
        }
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        let newErrors = {};
        if (!userId) newErrors.userId = "UserId is required.";
        if (!userName) newErrors.userName = "UserName is required.";
        if (!password) newErrors.password = "Password is required.";
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        let data = await postCreateNewUser(userId, userName, password);

        if (data && data.code === 1000) {
            dispatch(doSignup(data.data));
        } else if (data && data.code !== 1000) {
            setErrors({ ...errors, userId: "UserId already exists." });
        }
    };

    return (
        <div className="signup">
            <form className="login-form" onSubmit={handleOnSubmit}>
                <div className="login-title">
                    SignUp
                </div>
                <div className="inputs">
                    <div className="input-container">
                        <input
                            ref={userIdRef}
                            onChange={handleUserIdChange}
                            onKeyDown={(e) => handleKeyDown(e, userNameRef)}
                            value={userId}
                            type="text"
                            className="input"
                            placeholder="UserId"
                        />
                            {errors.userId && <span className="error-message">{errors.userId}</span>}
                    </div>
                    <div className = "input-container" >
                        <input
                            ref={userNameRef}
                            onChange={handleUserNameChange}
                            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                            value={userName}
                            type="text"
                            className="input"
                            placeholder="UserName"
                        />
                        {errors.userName && <span className="error-message">{errors.userName}</span>}
                    </div>
                    <div className = "input-container" >
                        <input
                            ref={passwordRef}
                            onChange={handlePasswordChange}
                            onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
                            value={password}
                            type="password"
                            className="input input2"
                            placeholder="Password"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <div className = "input-container" >
                        <input
                            ref={confirmPasswordRef}
                            onChange={handleConfirmPasswordChange}
                            onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
                            value={confirmPassword}
                            type="password"
                            className="input"
                            placeholder="Confirm Password"
                        />
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                    </div>
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
