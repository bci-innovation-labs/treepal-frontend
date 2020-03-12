import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';


function priceFormatter(cell, row) {
    return (
        <span>
            ${row.price}
        </span>
    );
}


function detailsFormatter(cell, row) {
    return (
        <span>
            <Link to={`/tree-delete/${row.slug}`}>Delete</Link>&nbsp;&nbsp;
            <Link to={`/tree/${row.slug}`}>View</Link>
        </span>
    );
}


export default function TreeListComponent(props) {

    const { trees } = props;

    const columns = [{
      dataField: 'name',
      text: 'Tree Name'
    }, {
      dataField: 'price',
      text: 'Tree Price',
      formatter: priceFormatter,
    },{
      dataField: "amount",
      text: "Tree Amount"
    },{
      dataField: "slug",
      text: "Details",
      formatter: detailsFormatter,
    }];


    return (
        <div>
            <h1>Tree List</h1>
            <Link to="tree-create">Create a Tree</Link><br /><br />
            <br />
            <BootstrapTable
               keyField='slug'
               data={ trees }
               columns={ columns }
            />
            <br />
            <Link to="/dashboard">Back</Link>
        </div>
    );
}
