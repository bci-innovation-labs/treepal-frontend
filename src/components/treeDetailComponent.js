import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function TreeDetailComponent(props) {
    const { treeObj, onUpdateClick } = props;
    return(
        <div>
            <h1>{treeObj.name}</h1>
            <p>Price: {treeObj.price}</p>
            <p>Amount: {treeObj.amount}</p>
            <p>
                <Link to="/tree-list">Back</Link>&nbsp;&nbsp;
                <button onClick={ (event)=>onUpdateClick(event) }>Update</button>

            </p>
        </div>
    );
}
