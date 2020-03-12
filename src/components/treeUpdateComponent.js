import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function TreeUpdateComponent(props) {
    const { slug, name, price, amount, onNameChange, onPriceChange, onAmountChange, onClick } = props;
    return(
        <div>
            <h1>Update Tree</h1>

            <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(event)=>onNameChange(event)}
            />

            <input
                type="number"
                value={price}
                placeholder="Price"
                onChange={(event)=>onPriceChange(event)}
            />

            <input
                type="number"
                value={amount}
                placeholder="amount"
                onChange={(event)=>onAmountChange(event)}
            />

            <p>
                <Link to={`/tree/${slug}`}>Back</Link>&nbsp;&nbsp;
                <button onClick={(event)=>onClick(event)}>Save</button>
            </p>
        </div>
    );
}
