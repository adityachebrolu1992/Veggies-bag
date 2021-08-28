import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css";
export default function Search(props) {

    

    let testRef=null;
    function focusInput(){
        testRef.focus();
    }

    return(          
        <div class="container">
            <input list="browser" ref={e=>testRef=e} id="search" name="search"    placeholder="type the veggi" />
            <datalist id="browser" >
                {props.list.map((val,idx)=>{
                    return <option  value={val} key={idx} />
                })}
            </datalist>
            <button onClick={focusInput}>search</button>

        </div>

    );
}