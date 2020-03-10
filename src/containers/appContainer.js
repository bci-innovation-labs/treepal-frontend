import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";

import IndexContainer from "./indexContainer";
import NotFound404Container from "./notFound404Container";


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
               <Route component={NotFound404Container} />
           </Switch>
         </div>
       </Router>
    );
  }
}

// STEP 8: Export our `AppContainer` component with a high-order function as follows.
export default withRouter(AppContainer);
