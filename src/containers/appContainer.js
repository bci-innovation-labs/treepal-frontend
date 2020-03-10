import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";


function Index(props) {
  return <h2>Home</h2>;
}

function NotFound(props) {
    return <h1>404 Not Found</h1>;
}

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
               <Route path="/" exact component={Index} />
               <Route component={NotFound} />
           </Switch>
         </div>
       </Router>
    );
  }
}

// STEP 8: Export our `AppContainer` component with a high-order function as follows.
export default withRouter(AppContainer);
