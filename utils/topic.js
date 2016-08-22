import $ from "jquery"

export default class Topic {
  static getContent(str,length){
    return str.substring(0,length)+"..."
  }
}
