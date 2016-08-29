import React from "react"

export default class Reply extends React.Component{
  render(){
    var createMarkup = () => {
        return {
            __html: this.props.content
        };
    }
    return (
      <div className='replyItem'>
        <div className='replyAuth'>
          <img src={this.props.author.avatar_url} />
          <div className="loginName">{this.props.author.loginname}</div>
        </div>
        <div dangerouslySetInnerHTML={createMarkup()} className='topicContent'></div>
      </div>
    )
  }
}
