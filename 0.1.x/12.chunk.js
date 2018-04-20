webpackJsonp([12],{1116:function(e,n){e.exports="# Message 消息\n\n<example />\n\n## API \nMessage 提供了一组方法供全局调用\n\nMessage.show(content, \\[duration], \\[options]) // 无样式\n\nMessage.info(content, \\[duration], \\[options])\n\nMessage.success(content, \\[duration], \\[options])\n\nMessage.warn(content, \\[duration], \\[options])\n\nMessage.error(content, \\[duration], \\[options])\n\nMessage.close() // 关闭所有消息\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string\\|ReactElement | 必填 | 消息内容 |\n| duration | number | 3 | 消息持续时间，单位秒；如果设置为 0，必须手动关闭 |\n\n\n#### options\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| onClose | function | 无 | 关闭后回调事件 |\n| position | string | 'top' | 消息显示的位置，可选值 \\['top', 'middle'] |"},1117:function(e,n){e.exports="# Message\n ## API \n\n<example />"},1118:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(170),s=t(519),i=t(1),a=t.n(i);n.default=function(){return a.a.createElement(i.Fragment,null,a.a.createElement(o.a,{onClick:function(){s.a.show("Some message.")}},"Show"),a.a.createElement(o.a,{onClick:function(){s.a.info("This is a message of info.")}},"Info"),a.a.createElement(o.a,{onClick:function(){s.a.success("This is a message of success.")}},"Success"),a.a.createElement(o.a,{onClick:function(){s.a.warn("This is a message of warning.")}},"Warn"),a.a.createElement(o.a,{onClick:function(){s.a.error("This is a message of error.")}},"Error"),a.a.createElement(o.a,{onClick:function(){s.a.close()}},"Close All"))}},1119:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Button onClick={() => {\n        Message.show('Some message.')\n      }}\n      >Show\n      </Button>\n      <Button onClick={() => {\n        Message.info('This is a message of info.')\n      }}\n      >Info\n      </Button>\n      <Button onClick={() => {\n        Message.success('This is a message of success.')\n      }}\n      >Success\n      </Button>\n      <Button onClick={() => {\n        Message.warn('This is a message of warning.')\n      }}\n      >Warn\n      </Button>\n      <Button onClick={() => {\n        Message.error('This is a message of error.')\n      }}\n      >Error\n      </Button>\n\n      <Button onClick={() => { Message.close() }}>Close All</Button>\n    </Fragment>\n  )\n}\n"},1120:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(170),s=t(519),i=t(1),a=t.n(i);n.default=function(){return a.a.createElement(i.Fragment,null,a.a.createElement(o.a,{onClick:function(){return s.a.info("This message will close after 10 seconds.",10)}},"duration 10 s."),a.a.createElement(o.a,{onClick:function(){return s.a.error("This message will not close utill click the close button.",0)}},"duration 0 s."))}},1121:function(e,n){e.exports="/**\n * cn - duration\n * en - duration\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  const s10 = () => Message.info('This message will close after 10 seconds.', 10)\n  const s0 = () => Message.error('This message will not close utill click the close button.', 0)\n  return (\n    <Fragment>\n      <Button onClick={s10}>duration 10 s.</Button>\n      <Button onClick={s0}>duration 0 s.</Button>\n    </Fragment>\n  )\n}\n\n"},1122:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(170),s=t(519),i=t(1),a=t.n(i);n.default=function(){return a.a.createElement(i.Fragment,null,a.a.createElement(o.a,{onClick:function(){s.a.info("some message.",3,{position:"middle"})}},"Show in the middle."))}},1123:function(e,n){e.exports="/**\n * cn - 位置 position\n * en - Position Center\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  const middle = () => {\n    Message.info('some message.', 3, { position: 'middle' })\n  }\n\n  return (\n    <Fragment>\n      <Button onClick={middle}>Show in the middle.</Button>\n    </Fragment>\n  )\n}\n\n"},1124:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(170),s=t(519),i=t(1),a=t.n(i);n.default=function(){return a.a.createElement(i.Fragment,null,a.a.createElement(o.a,{onClick:function(){s.a.warn("Close this message will display another message.",0,{onClose:function(){s.a.info("You can close the message now.")}})}},"Close"))}},1125:function(e,n){e.exports="/**\n * cn - 回调 onClose\n * en - Event onClose\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  const close = () => {\n    Message.warn('Close this message will display another message.', 0, {\n      onClose: () => {\n        Message.info('You can close the message now.')\n      },\n    })\n  }\n\n  return (\n    <Fragment>\n      <Button onClick={close}>Close</Button>\n    </Fragment>\n  )\n}\n\n"},1198:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),s=t.n(o),i=t(120),a=t(119),r=t(78),c=t(1116),l=t.n(c),u=t(1117),f=t.n(u),m=Object(r.a)(l.a,f.a),d=[{title:Object(r.a)("基本用法","Base"),component:t(1118).default,rawText:t(1119)},{title:Object(r.a)("duration","duration"),component:t(1120).default,rawText:t(1121)},{title:Object(r.a)("位置 position","Position Center"),component:t(1122).default,rawText:t(1123)},{title:Object(r.a)("回调 onClose","Event onClose"),component:t(1124).default,rawText:t(1125)}];n.default=Object(i.a)(function(e){return s.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},513:function(e,n,t){"use strict";var o=t(1),s=t.n(o),i=t(4),a=(t.n(i),t(172)),r=t(515),c=t(48),l=t(56),u=t(520),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var m=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={dismiss:0},t.bindRef=t.bindRef.bind(t),t.dismiss=t.dismiss.bind(t),t.handleClose=t.handleClose.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),f(n,[{key:"componentDidUpdate",value:function(e){this.props.dismiss!==e.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(this.state.dismiss>0)){var n=this.props.duration;n>0?this.setState({dismiss:1},function(){setTimeout(e.dismiss,n)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,n=this.props,t=n.type,o=n.iconSize;if("boolean"==typeof e&&(e=u.a[Object(r.a)(t)]),!e)return null;var i=o>0?{width:o,height:o}:void 0;return s.a.createElement("div",{className:Object(l.a)("icon"),style:i},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var n=this.props,t=n.children,o=n.className,i=n.type,r=n.iconSize,c=n.onClose,f=this.renderIcon(),m=this.props.style,d=Object(l.a)("_",i,1===e&&"dismissed",c&&"with-close",f&&"with-icon");return o&&(d+=" "+o),f&&r>0&&(m=Object(a.a)(m,function(e){e.paddingLeft=r+25})),s.a.createElement("div",{ref:this.bindRef,className:d,style:m},c&&s.a.createElement("a",{href:"javascript:;",className:Object(l.a)("close"),onClick:this.handleClose},u.a.Close),f,t)}}]),n}();m.defaultProps=Object.assign({},c.a,{duration:216,iconSize:0,type:"warning"}),n.a=m},515:function(e,n,t){"use strict";n.a=function(e){return e&&e[0].toUpperCase()+e.slice(1)},n.b=function(e,n){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,t){return"\\"===e.charAt(0)?e.slice(1):null===n[t]||void 0===n[t]?"":n[t]});if("function"==typeof e){var t=e(n);return t===n&&"object"===(void 0===t?"undefined":o(t))&&(t=Object.assign({},n)),t}return""};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},519:function(e,n,t){"use strict";var o=t(1),s=t.n(o),i=t(79),a=t.n(i),r=t(56),c=(t(4),t(172)),l=t(513),u=t(117),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var m=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={messages:[]},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),f(n,[{key:"addMessage",value:function(e){var n=this,t=Object(u.b)();this.setState(Object(c.a)(function(n){n.messages.push(Object.assign({id:t},e))})),e.duration>0&&setTimeout(function(){n.setState(Object(c.a)(function(e){e.messages.forEach(function(e){e.id===t&&(e.dismiss=!0)})}))},1e3*e.duration)}},{key:"removeMessage",value:function(e){var n=void 0,t=this.state.messages.filter(function(t){return t.id!==e||(t.onClose&&(n=t.onClose),!1)});0===t.length?this.props.onDestory():this.setState({messages:t}),n&&n()}},{key:"closeEvent",value:function(e,n){if(0===n)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var e=this;return[this.state.messages.map(function(n){var t=n.id,o=n.type,i=n.content,a=n.dismiss;return s.a.createElement("div",{key:t,className:Object(r.l)("item")},s.a.createElement(l.a,{className:Object(r.l)("msg"),dismiss:a,onClose:e.removeMessage.bind(e,t),icon:!0,type:o},i))})]}}]),n}(),d={},p={};function g(e){p[e]&&delete p[e],d[e]&&(document.body.removeChild(d[e]),delete d[e])}function h(e){var n,t,o=p[e];return o||(o=a.a.render(s.a.createElement(m,{onDestory:g.bind(null,e)}),(n=e,(t=document.createElement("div")).className=Object(r.l)("_",n),document.body.appendChild(t),d[n]=t,t)),p[e]=o),o}var b=function(e){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=o.onClose,i=o.position;h(void 0===i?"top":i).addMessage({content:n,duration:t,type:e,onClose:s})}};n.a={show:b("default"),success:b("success"),info:b("info"),warn:b("warning"),warning:b("warning"),danger:b("danger"),error:b("danger"),close:function(){g("top"),g("middle")}}},520:function(e,n,t){"use strict";var o=t(1),s=t.n(o);function i(e){return s.a.createElement("svg",{viewBox:"0 0 1024 1024"},e.map(function(e,n){return s.a.createElement("path",{key:n,d:e})}))}var a=["M512 0C232 0 5 226.64 4.97250989 506.66666667s226.99620754 507.02749011 507.02749011 507.02749011 507.02749011-226.99620754 507.02749011-507.02749011S792.03128257-0.36082344 512-0.36082344zM701.01984777 685.92623566c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0l-96.51268267-96.51268267-96.51268266 96.51268267c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632L439.01339246 506.66666667l-96.53803365-96.51268267c-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632 22.86694019-22.84158802 59.9052983-22.84158802 82.74688632 0l96.51268267 96.51268267 96.51268266-96.51268267c22.86694019-22.84158802 59.9052983-22.86694019 82.74688633 0 22.84158802 22.86694019 22.84158802 59.9052983 0 82.74688632L604.48181413 506.66666667l96.53803364 96.51268267C723.86143696 626.04628952 723.88678795 663.08464763 701.01984777 685.92623566z"];n.a={AngleLeft:i(["M304.905 561.68c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.123l-402.521 402.521c-8.992 8.993-20.776 13.488-32.562 13.488z","M707.426 964.201c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.522c-17.984-17.983-17.984-47.139 0-65.122 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.983 17.984 47.139 0 65.122-8.991 8.992-20.776 13.488-32.561 13.488z"]),AngleRight:i(["M728.76 561.68c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.521c-17.984-17.984-17.984-47.14 0-65.123 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.984 17.984 47.14 0 65.122-8.991 8.993-20.776 13.488-32.561 13.488z","M326.238 964.202c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.122l-402.521 402.522c-8.992 8.992-20.776 13.488-32.562 13.488z"]),AngleDoubleLeft:i(["M219.5 511.3l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L86.5 463.5c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z","M601.5 511.5l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L468.5 463.7c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z"]),AngleDoubleRight:i(["M802.5 511.3L465.8 174.6c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L556.9 937.7c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z","M420.5 511.5L83.8 174.8c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L174.9 937.9c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z"]),Close:i(["M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"]),Danger:i(a),Error:i(a),Info:i(["M512 1024c282.771 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM432 256c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80v-31.999zM431.999 512c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-256z"]),Success:i(["M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z"]),Warning:i(["M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z"])}}});