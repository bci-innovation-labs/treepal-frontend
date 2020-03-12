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
            treeObj: treeObj,
        };
    }

    render() {
        const { treeObj } = this.state;
        return (
            <TreeDetailComponent
               treeObj={treeObj}
            />
        );
    }
}
