import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css";
import MyComponent from "../Component";


export default function Footer(props) {
    return (
        <div>
            <footer>
                <p>copyright@Veggis-bag 2021</p>
                <p>Contact info: <a href="mailto:cutomerCare@veggiesbag.com">cutomerCare@veggiesbag.com</a></p>
            </footer>
        </div>
            
    );
}