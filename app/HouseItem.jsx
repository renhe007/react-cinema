import React from "react"

export default class HouseItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){

  }
  render(){
    return (<div>{this.props.fath.a}+++++{this.props.fath.b}</div>)
  }
}