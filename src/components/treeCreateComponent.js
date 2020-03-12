import React, { Component } from "react";
import { Link } from "react-router-dom";


export default function TreeCreateComponent(props) {
    const { name, price, amount } = props;
    const { onNameChange, onPriceChange, onAmountChange, onClick } = props;
    return (
        <div>
            <h1>Tree Create</h1>

            <input
               type="text"
               value={name}
               onChange={onNameChange}
               placeholder="Tree Name"
            />

            <input
               type="text"
               value={price}
               onChange={onPriceChange}
               placeholder="Price"
            />

            <input
               type="number"
               value={amount}
               onChange={onAmountChange}
               placeholder="Amount in inventory"
            />

            <button onClick={ (event)=>{ onClick(event) } }>Save</button>

            <Link to="/tree-list">Back</Link>
        </div>
    );
}
