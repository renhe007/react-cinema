import React from "react"
import { Link } from "react-router"

export default class TopicItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){

  }
  type(type){
    let returnType = "";
    switch (type) {
      case "share":
        returnType = "分享";
        break;
      case "ask":
        returnType = "问答";
        break;
      case "good":
        returnType = "精华";
        break;
      case "job":
        returnType = "招聘";
        break;
      default:
        returnType = "神秘";
        break;
    }
    return returnType;
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
