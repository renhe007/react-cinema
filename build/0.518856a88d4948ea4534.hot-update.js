webpackHotUpdate(0,{107:function(t,e,a){(function(t){!function(){var e=a(27),n=a(28),o=a(19),r=a(2);t.makeHot=t.hot.data?t.hot.data.makeHot:e(function(){return n.getRootInstances(o)},r)}();try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),c=a(2),u=t(c),i=a(43),l=function(t){function e(t){n(this,e);var a=o(this,Object.getPrototypeOf(e).call(this,t));return a.state={state:a.props},a}return r(e,t),s(e,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(t){return this.state.state!==t}},{key:"type",value:function(t){var e="";switch(t){case"share":e="分享";break;case"ask":e="问答";break;case"good":e="精华";break;case"job":e="招聘";break;default:e="神秘"}return e}},{key:"render",value:function(){return console.log(this.state.state.id),u["default"].createElement("div",{className:"topicItem"},u["default"].createElement("img",{src:this.state.state.author.avatar_url}),u["default"].createElement("span",{className:"topicType"},this.type(this.state.state.tab)),u["default"].createElement(i.Link,{style:{textDecoration:"none",color:"black"},to:"/topic/"+this.state.state.id},u["default"].createElement("p",null,this.state.state.title)))}}]),e}(u["default"].Component);e["default"]=l}).call(this)}finally{!function(){var e=t.hot.data&&t.hot.data.foundReactClasses||!1;if(t.exports&&t.makeHot){var n=a(29);n(t,a(2))&&(e=!0);var o=e;o&&t.hot.accept(function(t){t&&console.error("Cannot not apply hot update to TopicItem.jsx: "+t.message)})}t.hot.dispose(function(a){a.makeHot=t.makeHot,a.foundReactClasses=e})}()}}).call(e,a(21)(t))}});
//# sourceMappingURL=0.518856a88d4948ea4534.hot-update.js.map