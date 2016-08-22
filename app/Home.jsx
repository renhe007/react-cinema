import React from "react"
import HouseItem from "./HouseItem"
import { Link } from 'react-router'
import $ from 'jquery'
import Topic from "../utils//topic"
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      l:null,
      send:null,
      currentPage:1
    }
  }
  componentDidMount(){
    $.get('/api/v1/topics',{page:this.state.currentPage,limit:10},(result) => {
      console.log(result)
      this.setState({l:result});
    })
    // $.post("/api/v1/topics",
    //   {
    //     accesstoken: "7b3f6a37-92a6-47c6-9699-ec2556ffdfef",
    //     title: "试试api",
    //     tab: "ask",
    //     content: "1111"
    //   },
    //   (res)=>{
    //     this.setState({send:res})
    //   }
    // )
  }
  load(""){}
  render(){
    let send = null;
    let l = null;
    if(this.state.l){
      l = this.state.l.data.map((res)=>{
        return  <div key={res.id}>{Topic.getContent(res.title,16)}</div>
      })
    }
    if(this.state.send){
      send = this.state.send.topic_id;
    }
    return (
      <div>
        <header>
          <ul className='topicType'>
            <li onclick={}>全部</li>
            <li>精华</li>
            <li>分享</li>
            <li>问答</li>
            <li>招聘</li>
          </ul>
        </header>
        <div>{l}</div>
        <div>{send}</div>
      </div>
    )
  }
}
