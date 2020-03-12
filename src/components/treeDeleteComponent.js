import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function TreeDeleteComponent(props) {
    const { slug, treeObj, onDeleteClick } = props;
    return(
        <div>
            <h1>Are you sure?</h1>
            <p>You are about to delete the <strong>{treeObj.name}</strong> tree. Are you sure you want to continue?</p>
            <p>
                <Link to="/tree-list">Back</Link>&nbsp;&nbsp;
                <button onClick={ (event, slug)=>onDeleteClick(event, slug) }>Delete</button>

            </p>
        </div>
    );
}
