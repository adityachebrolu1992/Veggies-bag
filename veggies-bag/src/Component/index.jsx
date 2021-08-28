import React, { Component, useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css";
export default class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            img:this.props.info.img,
            name:this.props.info.name,
            price:this.props.info.price,
            quantity:this.props.info.quantity
        }
        this.addItem=this.addItem.bind(this);
        this.addition=this.addition.bind(this);
        this.subtract=this.subtract.bind(this);
    }

    subtract(){
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1,
            })
        }
    }

    addition(){
        this.setState({
            count:this.state.count+1
        })
    }


    addItem(){
        console.log("name",this.state.name)
        this.props.add(this.state.name, Number(this.state.count)*Number(this.state.quantity), Number(this.state.price)*Number(this.state.count))
    }
    render(){
        return (
            <div class="card-container">
                <div id="img-container-div">
                    <img id="img-tag" src={this.state.img} alt={this.state.name} width="500px" height="300px" />
                </div>
                <p><strong>{this.state.name}</strong></p>
                <p><strong>{this.state.price}Rs/{this.state.quantity}Kg's</strong></p>
                <span id="button-container"><button onClick={this.subtract}>-</button><p>{Number(this.state.count)*Number(this.state.quantity)} Kg's</p><button onClick={this.addition}>+</button></span>
                <button id="cart-button" onClick={this.addItem}>Add to Cart</button>
            </div>

        );
    }
}