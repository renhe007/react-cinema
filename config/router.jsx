import React from "react"
import {render} from "react-dom"
import HouseItem from "../app/HouseItem"
import UserCenter from "../app/UserCenter"
import Home from "../app/Home"
import {Route,Router,browserHistory} from "react-router"

class root extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
const RouteConfig = (
  <Router history={browserHistory}>
    <IndexRoute path='/' component='{Home}' />
    <Route path"topic:id" component={TopicDetail} />
  </Router>
)
export default  RouteConfig 
