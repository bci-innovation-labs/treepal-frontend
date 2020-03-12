import React, { Component } from "react";

import TreeListComponent from "../components/treeListComponent";
import TreeDAO from "../models/treeDAO";


export default class TreeListContainer extends Component {
    constructor(props) {
        super(props);

        const dao = new TreeDAO();
        const trees = dao.getList();
        this.state = {
            trees: trees,
        }
    }

    render() {
        const { trees } = this.state;
        return (
            <TreeListComponent
                trees={trees}
            />
        );
    }
}
