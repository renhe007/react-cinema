import React from "react"
import { Link } from 'react-router'
import $ from 'jquery'
import TopicItem from "./TopicItem"

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[],
      send:null,
      currentPage:1,
      topicType:""
    }
    this.scroll = this.scroll.bind(this);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scroll);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.scroll);
    this.load(this.state.topicType,this.state.currentPage,false)
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
  load(type,page,loadNextPage){
    console.log("load     "+page+"    "+type+"   1"+loadNextPage)
    $.get('/api/v1/topics',{page:page,limit:20,tab:type},(result) => {
      console.log(result);
      if(result.success){
        if(loadNextPage === true){
          this.setState({list:this.state.list.concat(result.data),topicType:type,currentPage:page})
        } else{
          this.setState({list:result.data,topicType:type,currentPage:page});
        }
      }
      else {
        alert("加载失败");
      }
    })
  }
  scroll(){
    var a = document.getElementById("loadNextPage").offsetTop;
    if (a >= $(window).scrollTop() && a < ($(window).scrollTop()+$(window).height())) {
      this.load(this.state.topicType,this.state.currentPage+1,true)
      // this.setState({currentPage:this.state.currentPage++})
    }
  }
  change(){
    console.log(this.refs.test.getDOMNode().value)
  }
  render(){
    let list = [];
    if(this.state.list != []){
      this.state.list.forEach((res,i)=>{
        list.push(<TopicItem key={res.id+i} {...res} />);
      })
    }
    return (
      <div>
        <header className='header'>
          <ul className='homeHeader'>
            <li onClick={this.load.bind(this,"",1)}>全部</li>
            <li onClick={this.load.bind(this,"good",1)}>精华</li>
            <li onClick={this.load.bind(this,"share",1)}>分享</li>
            <li onClick={this.load.bind(this,"ask",1)}>问答</li>
            <li onClick={this.load.bind(this,"job",1,"false")}>招聘</li>
          </ul>
        </header>
        <div>{list}</div>
        <div className='loadNextPage' ref='loadNextPage' id='loadNextPage'>load...</div>

      </div>
    )
  }
}
