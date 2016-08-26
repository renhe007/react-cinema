import React from "react"
import $ from "jquery"

export default class TopicDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content: "",
      title: ""
    }
  }
  componentDidMount(){
    $.get("/api/v1/topic/"+this.props.location.pathname.split("/")[2],{mdrender:false},(result)=>{
        if(result.success){
          this.setState({
            content: result.data.content,
            title: result.data.title
          })
        }else {
          alert("加载失败");
        }

    })
  }
  render(){
    let str = JSON.stringify(this.state.content);
    let s = React.createElement("div",null,this.state.content);
    return (
      <div ref='conentParent'>
        <h2>{this.state.title}</h2>
        {s}
      </div>
    )
  }
}
