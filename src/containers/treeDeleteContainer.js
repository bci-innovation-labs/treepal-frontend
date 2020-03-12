import React, { Component } from "react";

import TreeDAO from "../models/treeDAO";

import TreeDeleteComponent from "../components/treeDeleteComponent";


export default class TreeDeleteContainer extends Component {
    constructor(props) {
        super(props);

        const { slug } = this.props.match.params;

        const dao = new TreeDAO();
        const treeObj = dao.getObjectBySlug(slug);

        this.state = {
            slug: slug,
            treeObj: treeObj,
        };

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(event) {
        event.preventDefault();
        const dao = new TreeDAO();
        const { slug } = this.state;
        dao.deleteObjectBySlug(slug);

        alert("The tree has been deleted!");

        this.props.history.push("/tree-list");
    }

    render() {
        const { slug, treeObj } = this.state;
        const { onDeleteClick } = this;
        return (
            <TreeDeleteComponent
               slug={slug}
               treeObj={treeObj}
               onDeleteClick={onDeleteClick}
            />
        );
    }
}
