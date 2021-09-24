import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import "./login.css";
import Axios from "../../axios/axios";

export default function Login() {
    const userRef = useRef();
    const passRef = useRef();
    const { dispatch } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });   ///useReducer based login
        try {
            const res = await Axios.post("/auth/login", {
                username: userRef.current.value,
                password: passRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            window.location.replace("/khoj");
        } catch (err) {
            alert("Wrong Credentials!");
            dispatch({ type: "LOGIN_FAILURE" });
        }

        
    };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                    ref={passRef}
                />
                <button className="loginButton" type="submit">
                    Login
                </button>
            </form>
       
        </div>
    );
}