import React, { Component, useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css";


export default function Cart(props) {
    

    return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Purchased Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item,idx)=>{
                        return <tr ><td>{item.name}</td><td>{item.quantity}Kg's</td><td>{item.price}Rs</td></tr>
                    })}
                </tbody>
            </table>
            
        </div>
    );
}