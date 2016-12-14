import React from "react"
import UserCenter from "../app/UserCenter"
import TopicDetail from "../app/TopicDetail"
import Home from "../app/Home"
// import Lost from "../app/Lost"
import LogForm from "../app/LogForm"
import {Route,Router,browserHistory,IndexRoute,Link} from "react-router"

 class Root extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
        <footer className="footer" >
          <Link to="/" ><i className='iconfont icon-home ' id='noLeftBorder'></i></Link>
          <Link to="/publish" ><i className='iconfont icon-editorder'></i></Link>
          <Link to="/userCenter"><i className='iconfont icon-my' ></i></Link>
      </footer>
      </div>
    )
  }
}
let RouteConfig = (
  <Router history={browserHistory}>
    <Route path='/' component={ Root }>
      <IndexRoute  component={ Home } />
      <Route path="/topic/:id" component={ TopicDetail } />
      <Route path="/userCenter" component={ UserCenter } >
        <Route path="/logform" component={ LogForm } />
      </Route>
    </Route>
  </Router>
);
export default RouteConfig;
