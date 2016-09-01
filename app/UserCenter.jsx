import React from "react"
import  $ from "jquery"
import TopicItem from "./TopicItem"

export default class UserCenter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: null,
      collect: null
    }
  }
  componentDidMount(){
    $.get("/api/v1/topic_collect/renhe007",(res)=>{
      if(res.success){
        this.setState({collect:res.data})
      }else {
        alert("***");
      }
    })
  }
  render(){
    let collect = [];
    if(this.state.collect){
      this.state.collect.forEach((res,i)=>{
        collect.push(<TopicItem key={res.id+i} {...res} />);
      })
    }
    return (
      <div>
        收藏
        {collect}
      </div>)
  }
}
