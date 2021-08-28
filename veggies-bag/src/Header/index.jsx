import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css"
export default function Header() {
    return (
        <header id="logo-container">
            <img id="logo-img" src="https://pbs.twimg.com/profile_images/378800000532840703/433793e326ddd41f8e0b8c254676291c_400x400.jpeg" width="30px" alt="logo" />
            <h1><b>Veggie's bag</b></h1>
            <button id="sign-in-button" onClick={null}>sign in</button>
        </header>
        

    );
}