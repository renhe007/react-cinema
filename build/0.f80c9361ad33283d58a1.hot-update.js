webpackHotUpdate(0,{198:function(e,t,o){(function(e){!function(){var t=o(27),n=o(28),a=o(19),l=o(2);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(a)},l)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(2),s=e(c),u=(o(43),o(70)),d=e(u),f=o(107),h=e(f),p=function(e){function t(e){n(this,t);var o=a(this,Object.getPrototypeOf(t).call(this,e));return o.state={list:[],send:null,currentPage:1,topicType:""},o.scroll=o.scroll.bind(o),o}return l(t,e),r(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scroll)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scroll),this.load(this.state.topicType,this.state.currentPage,!1)}},{key:"load",value:function(e,t,o){var n=this;console.log("load     "+t+"    "+e+"   1"+o),d["default"].get("/api/v1/topics",{page:t,limit:20,tab:e},function(a){console.log(a),a.success?o===!0?n.setState({list:n.state.list.concat(a.data),topicType:e,currentPage:t}):n.setState({list:a.data,topicType:e,currentPage:t}):alert("加载失败")})}},{key:"scroll",value:function(){var e=document.getElementById("loadNextPage").offsetTop;e>=(0,d["default"])(window).scrollTop()&&e<(0,d["default"])(window).scrollTop()+(0,d["default"])(window).height()&&this.load(this.state.topicType,this.state.currentPage+1,!0)}},{key:"change",value:function(){console.log(this.refs.test.getDOMNode().value)}},{key:"render",value:function(){var e=[];return this.state.list!=[]&&this.state.list.forEach(function(t,o){e.push(s["default"].createElement(h["default"],i({key:t.id+o},t)))}),s["default"].createElement("div",null,s["default"].createElement("header",{className:"header"},s["default"].createElement("ul",{className:"homeHeader"},s["default"].createElement("li",{onClick:this.load.bind(this,"",1)},"全部"),s["default"].createElement("li",{onClick:this.load.bind(this,"good",1)},"精华"),s["default"].createElement("li",{onClick:this.load.bind(this,"share",1)},"分享"),s["default"].createElement("li",{onClick:this.load.bind(this,"ask",1)},"问答"),s["default"].createElement("li",{onClick:this.load.bind(this,"job",1,"false")},"招聘"))),s["default"].createElement("div",null,e),s["default"].createElement("div",{className:"loadNextPage",ref:"loadNextPage",id:"loadNextPage"},"load..."))}}]),t}(s["default"].Component);t["default"]=p}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=o(29);n(e,o(2))&&(t=!0);var a=t;a&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to Home.jsx: "+e.message)})}e.hot.dispose(function(o){o.makeHot=e.makeHot,o.foundReactClasses=t})}()}}).call(t,o(21)(e))}});
//# sourceMappingURL=0.f80c9361ad33283d58a1.hot-update.js.map