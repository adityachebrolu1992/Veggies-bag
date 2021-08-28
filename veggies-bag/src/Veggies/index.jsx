import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css"
import MyComponent from "../Component";
  


export default function Veggies(props) {

    function check(val){
        if(val.type==="Veggies"){
            return val;
        }
    }

    return (
        <div >
            <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap" }}>
            {props.data.filter(check).map((val, idx) => {
                return <li id="element-container" className="item">
                <MyComponent key={idx} info={val} add={props.add} />
                </li>
            })}
            </ul>
        </div>
    );
}