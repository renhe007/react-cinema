import React from "react"
import $ from "jquery"
import Reply from "./Reply"

export default class TopicDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      detail: null
    }
  }
  componentDidMount(){
    $.get("/api/v1/topic/"+this.props.location.pathname.split("/")[2],{mdrender:true},(result)=>{
        if(result.success){
          console.log(result)
          this.setState({
            detail: result.data,
          })
        }else {
          alert("加载失败");
        }

    })
  }
  render(){
    let detail = this.state.detail;
    let replyList = [];
    var createMarkup = () => {
        return {
            __html: detail ? detail.content : ""
        };
    }
    if(detail){
      detail.replies.map((res,index)=>{
        replyList.push(<Reply key={res.id+index} {...res} />)
      })
    }
    return (
      <div>
        <div className='back'>
          <span>《 </span>
          <h2>详情</h2>
        </div>
        <div className='auth'>
          <img src={detail ? detail.author.avatar_url : ""} />
          <div className="loginName">{detail ? detail.author.loginname : ""}</div>
          <div className='visitCount'>
            <span>阅读：{detail ? detail.visit_count : ""}</span>
            <span>回复：{detail ? detail.reply_count : ""}</span>
          </div>
        </div>
        <h3 className="titleBackground">{detail ? detail.title : ""}</h3>
        <div className='topicContent' dangerouslySetInnerHTML={createMarkup()}></div>
        <div className='repleBackground'>{detail ? detail.reply_count : ""} 回复</div>
        { replyList }
      </div>
    )
  }
}
