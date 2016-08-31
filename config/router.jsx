import React from "react"
import TopicItem from "../app/TopicItem"
import UserCenter from "../app/UserCenter"
import TopicDetail from "../app/TopicDetail"
import Home from "../app/Home"
import Reply from "../app/Reply"
import {Route,Router,browserHistory,IndexRoute} from "react-router"

 class Root extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
let RouteConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={ Root }>
      <IndexRoute  component={ Home } />
      <Route path="/topic/:id" component={ TopicDetail } />
      <Route path="/userCenter" component={ UserCenter } />
      // <Route path="/publish" component={ UserCenter } />
    </Route>
  </Router>
);
export default RouteConfig;
