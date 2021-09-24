import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const handleClick = () => {
        window.location.replace("/");
    }

    return (
        <div className="top">
            <div className="topLeft">
                <img className="topLeftImg" src="assets/logo.png" alt="" onClick={handleClick} />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    {user && <li className="topListItem">
                        <Link className="link" to="/khoj">KHOJO</Link>
                    </li>}
                    <li className="topListItem link" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {!user ? (<ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">REGISTRATION</Link>
                    </li>
                </ul>) : <span className="topListItem">{user.username.toUpperCase()}</span>}

            </div>
        </div>
    );
}