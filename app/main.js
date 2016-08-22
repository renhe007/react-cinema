import React from "react"
import {render} from "react-dom"
import HouseItem from "./HouseItem"
import UserCenter from "./UserCenter"
import Home from "./Home"
import {Route,Router,browserHistory} from "react-router"


render(
  (
    // <Router history={browserHistory} >
    //   <Route path='/' component={Home} />
    //   <Route path='house' component={ HouseItem } />
    //   <Route path='user' component={ UserCenter } />
    // </Router>
    <Home />
  ),document.getElementById('root')
);
