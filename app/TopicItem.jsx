import React from "react"
import { Link } from "react-router"

export default class TopicItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      state : this.props
    }
  }

  componentDidMount() {

  }

  shouldComponentUpdate(nextProps) {
    if(this.props.id !== nextProps.id){
      // console.log(this.props)
      // console.log(nextProps)
      return true
    } else{
      return false
    }
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
    console.log(this.state.state.id )
    return (
      <div className='topicItem' >
        <img src={this.state.state.author.avatar_url} />
        <span className='topicType'>{this.type(this.state.state.tab)}</span>
        <Link style={{textDecoration:'none',color:'black'}} to={`/topic/${this.state.state.id}`}><p>{this.state.state.title}</p></Link>
      </div>
    )
  }
}
