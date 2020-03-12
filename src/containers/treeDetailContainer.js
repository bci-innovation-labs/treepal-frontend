import React, { Component } from "react";

import TreeDAO from "../models/treeDAO";

import TreeDetailComponent from "../components/treeDetailComponent";


export default class TreeDetailContainer extends Component {
    constructor(props) {
        super(props);

        const { slug } = this.props.match.params;

        const dao = new TreeDAO();
        const treeObj = dao.getObjectBySlug(slug);

        this.state = {
            slug: slug,
            treeObj: treeObj,
        };

        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    onUpdateClick(event) {
        event.preventDefault();
        this.props.history.push(`/tree-update/${this.state.slug}`);
    }

    render() {
        const { treeObj } = this.state;
        const { onUpdateClick } = this;
        return (
            <TreeDetailComponent
               treeObj={treeObj}
               onUpdateClick={onUpdateClick}
            />
        );
    }
}
