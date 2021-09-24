import React from 'react';
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTilteSm">Welcome to</span>
                <span className="headerTitleLg">Ami Coding Parina</span>
            </div>
            <img className="headerImg" src="assets/bg.jpg" alt="" />
        </div>
    )
}