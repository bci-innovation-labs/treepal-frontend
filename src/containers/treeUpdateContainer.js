import React, { Component } from "react";

import TreeDAO from "../models/treeDAO";
import TreeUpdateComponent from "../components/treeUpdateComponent";


export default class TreeUpdateContainer extends Component {
    constructor(props) {
        super(props);
        const { slug } = this.props.match.params;

        const dao = new TreeDAO();
        const treeObj = dao.getObjectBySlug(slug);

        this.state = {
            slug: slug,
            name: treeObj.name,
            price: treeObj.price,
            amount: treeObj.amount,
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    onPriceChange(event) {
        this.setState({
            price: event.target.value,
        });
    }

    onAmountChange(event) {
        this.setState({
            amount: event.target.value,
        });
    }

    onClick(event){
        event.preventDefault();

        const { slug, name, price, amount } = this.state;
        const dao = new TreeDAO();
        dao.updateObjectBySlug(slug, name, price, amount);

        alert("Tree has been saved!");

        this.props.history.push(`/tree/${slug}`);
    }

    render() {
        const { slug, name, price, amount } = this.state;
        const { onNameChange, onPriceChange, onAmountChange, onClick } = this;
        return (
            <TreeUpdateComponent
               slug={slug}
               name={name}
               price={price}
               amount={amount}
               onNameChange={onNameChange}
               onPriceChange={onPriceChange}
               onAmountChange={onAmountChange}
               onClick={onClick}
            />
        );
    }
}
