import $ from "jquery";
import React from "react"

export default class Lost extends React.Component{
  componentDidMount(){
    let lastX = $(window).width/2;
    let lastY = $(window).height/2;
    $(window).on("mousemove",function(e){
      $(".ff").each(function(){
        if(e.pageX>lastX){
          $(this).css("left",$(this).offset().left+5);
        }
        if(e.pageX<lastX){
          $(this).css("left",$(this).offset().left-5);
        }
        if(e.pageY>lastY){
          $(this).css("top",$(this).offset().left+5);
        }
        if(e.pageY<lastY) {
          $(this).css("top",$(this).offset().left-5);
        }
      })
      lastX = e.pageX
      lastY = e.pageY
    })
  }
  render(){
    return (
      <div>
        <div className='ff f1'></div>
        <div className='ff f2'></div>
        <div className='ff f3'></div>
        <div className='ff f4'></div>
      </div>
    )
  }
}
