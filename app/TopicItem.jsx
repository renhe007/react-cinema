import React from "react"
import {Route,Router,browserHistory,IndexRoute,Link} from "react-router"

export default class TopicItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){

  }
  type(type){
    switch (type) {
      case "share":
        return "分享";
        break;
      case "ask":
        return "问答";
        break;
      case "good":
        return "精华";
        break;
      case "job":
        return "招聘";
        break;
      default:
        return "神秘";
        break;

    }
  }
  render(){
    return (
      <div className='topicItem' >
        <img src={this.props.author.avatar_url} />
        <span className='topicType'>{this.type(this.props.tab)}</span>
        <Link style={{textDecoration:'none',color:'black'}} to={`/topic/${this.props.id}`}><p>{this.props.title}</p></Link>
      </div>
    )
  }
}
