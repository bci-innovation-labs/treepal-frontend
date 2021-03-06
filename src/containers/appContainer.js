import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";

import IndexContainer from "./indexContainer";
import NotFound404Container from "./notFound404Container";
import RegisterContainer from "./registerContainer";
import LoginContainer from "./loginContainer";
import DashboardContainer from "./dashboardContainer";
import TreeListContainer from "./treeListContainer";
import TreeCreateContainer from "./treeCreateContainer";
import TreeDetailContainer from "./treeDetailContainer";
import TreeUpdateContainer from "./treeUpdateContainer";
import TreeDeleteContainer from "./treeDeleteContainer";


class AppContainer extends Component {
  render() {
    return (
        <Router>
         <div>
           {/*
           <nav>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/about/">About</Link>
               </li>
               <li>
                 <Link to="/users/">Users</Link>
               </li>
             </ul>
           </nav>
           */}

           <Switch>
               <Route path="/" exact component={IndexContainer} />
               <Route path="/register" exact component={RegisterContainer} />
               <Route path="/login" exact component={LoginContainer} />
               <Route path="/dashboard" exact component={DashboardContainer} />
               <Route path="/tree-list" exact component={TreeListContainer} />
               <Route path="/tree-create" exact component={TreeCreateContainer} />
               <Route path="/tree/:slug" exact component={TreeDetailContainer} />
               <Route path="/tree-update/:slug" exact component={TreeUpdateContainer} />
               <Route path="/tree-delete/:slug" exact component={TreeDeleteContainer} />
               <Route component={NotFound404Container} />
           </Switch>
         </div>
       </Router>
    );
  }
}

// STEP 8: Export our `AppContainer` component with a high-order function as follows.
export default withRouter(AppContainer);
