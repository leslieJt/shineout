webpackJsonp([9],{1019:function(e,t){e.exports="# Data.List 数据处理\n\n这不是一个组件，使一个辅助组件进行数据处理的类。\n\n在项目中有很多组件（例如Select，Table）需要传入复杂的数据，有一些交互的数据需要记录并返回提交。\n这个类可以辅助这类组件做一些数据格式化的操作。\n\n\n## 示例\n\n这个页面中示例用到的数据如下\n```\nconst data = {\n  red: { id: 1, name: 'red' },\n  orange: { id: 2, name: 'orange' },\n  yellow: { id: 3, name: 'yellow' },\n  green: { id: 4, name: 'green' },\n  cyan: { id: 5, name: 'cyan' },\n  blue: { id: 6, name: 'blue' },\n  violet: { id: 7, name: 'violet' },\n}\n```\n<code name=\"example\" />\n\n## 初始化参数\n\n### format  *null | string | function(d)*\nformat 是Datum内部用来把复杂数据格式化为需要的值，可以为 null, string, function\n\n- **null** - 为空时，返回值为原始数据\n- **string** - 为string时，会作为key从原始数据中获取值，相当于 (d) => d\\[format]\n- **function(d)** - d 为单条原始数据\n\n<code name=\"format\" />\n\n### onChange *function(value)*\n值改变时触发的回调函数。value 为 format 函数格式化后的数据。\n\n<code name=\"onchange\" />\n\n### separator *null | string*\n分隔符。为空时，value会保留Array格式。不为空时，value会处理为 separator 分隔的字符串。\n\n<code name=\"separator\" />\n\n### prediction *function(val, d):bool*\nDatum内部存储的是format之后的值，所以需要prediction函数来比对存储的值和原始数据是否一致。不设置，会使用此默认值:\n```\n(val, d) => val === format(d)\n```\n\n通常用在 value 为字符串类型时，数据格式不一致的情况。\n\n<code name=\"prediction\" />\n\n### disabled *function(d):bool*\n判断数据项是否禁用。如果返回 true，add 和 remove 函数会忽略此数据。\n\n<code name=\"disabled\" />\n\n### value *array | string*\n初始值，可以为 Array 或 String。\n\n## 函数\n\n### getValue *function():array|string*\n获取当前值。根据separator的设置，返回array或者string。\n\n### setValue *function(array|string)*\n设置值。新的值会替代当前值。\n\n### add *fuction(array|object)*\n添加数据。值为 format 前的原始数据，单条或者一组数据。\n\n### remove *fuction(array|object)*\n移除数据。值为 format 前的原始数据，单条或者一组数据。\n\n### clear *function*\n清空数据。"},1020:function(e,t){e.exports=""},1021:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(509),r=n(551),o=new a.default.List({disabled:function(e){return"blue"===e.name||"red"===e.name},format:function(e){return e.name},onChange:function(e){console.log(e)}});o.setValue(["red"]),o.add([r.a.orange,r.a.blue]),o.remove([r.a.orange,r.a.red])},1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(509),r=n(551),o=new a.default.List({format:"name",separator:",",prediction:function(e,t){return e===t.name},value:"blue",onChange:function(e){console.log(e)}});o.add(r.a.orange),o.add(r.a.green),o.remove(r.a.green),o.clear(),o.setValue("red,violet"),o.add(r.a.cyan)},1023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(509),r=n(551),o=new a.default.List({});o.add(r.a.red),console.log(o.getValue()),(o=new a.default.List({format:function(e){return e.name}})).add(r.a.red),console.log(o.getValue()),(o=new a.default.List({format:function(e){return e.id+"-"+e.name}})).add(r.a.red),o.add(r.a.green),console.log(o.getValue())},1024:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(509),r=n(551),o=new a.default.List({format:function(e){return e.name},onChange:function(e){console.log(e)}});o.setValue(["blue"]),o.add(r.a.red),o.add(r.a.orange),o.remove(r.a.red),o.clear()},1025:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(509),r=n(551),o=new a.default.List({format:"id",separator:",",prediction:function(e,t){return parseInt(e,10)===t.id},value:"2,3"});o.add(r.a.red),console.log(o.getValue()),o.remove(r.a.orange),console.log(o.getValue())},1026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(509),r=n(551),o=function(e){return console.log(e)},i=new a.default.List({format:"id",value:[2,3],onChange:o});i.add(r.a.red),(i=new a.default.List({format:"name",onChange:o,separator:",",value:"red,yellow"})).add(r.a.blue),i.remove(r.a.yellow),(i=new a.default.List({format:"name",onChange:o,separator:"|",value:"red|yellow"})).add(r.a.cyan)},1027:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  disabled: d => d.name === 'blue' || d.name === 'red',\n  format: d => d.name,\n  onChange(value) { console.log(value) },\n})\n\ndatum.setValue(['red'])\ndatum.add([data.orange, data.blue]) // orange, blue\ndatum.remove([data.orange, data.red]) // orange, red\n"},1028:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'name',\n  separator: ',',\n  prediction: (val, d) => val === d.name,\n  value: 'blue',\n  onChange: (values) => {\n    console.log(values)\n  },\n})\ndatum.add(data.orange)\ndatum.add(data.green)\ndatum.remove(data.green)\ndatum.clear()\ndatum.setValue('red,violet')\ndatum.add(data.cyan)\n"},1029:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nlet datum = new Datum.List({})\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => d.name })\ndatum.add(data.red)\nconsole.log(datum.getValue())\n\ndatum = new Datum.List({ format: d => `${d.id}-${d.name}` })\ndatum.add(data.red)\ndatum.add(data.green)\nconsole.log(datum.getValue())\n"},1030:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: d => d.name,\n  onChange(value) { console.log(value) },\n})\n\ndatum.setValue(['blue'])\ndatum.add(data.red)\ndatum.add(data.orange)\ndatum.remove(data.red)\ndatum.clear()\n"},1031:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst datum = new Datum.List({\n  format: 'id',\n  separator: ',',\n  prediction: (val, d) => parseInt(val, 10) === d.id,\n  value: '2,3',\n})\ndatum.add(data.red)\nconsole.log(datum.getValue())\ndatum.remove(data.orange)\nconsole.log(datum.getValue())\n"},1032:function(e,t){e.exports="import { Datum } from 'shineout'\nimport data from './data'\n\nconst onChange = value => console.log(value)\n\nlet datum = new Datum.List({ format: 'id', value: [2, 3], onChange })\ndatum.add(data.red)\n\ndatum = new Datum.List({\n  format: 'name', onChange, separator: ',', value: 'red,yellow',\n})\ndatum.add(data.blue)\ndatum.remove(data.yellow)\n\ndatum = new Datum.List({\n  format: 'name', onChange, separator: '|', value: 'red|yellow',\n})\ndatum.add(data.cyan)\n"},1193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),o=n(120),i=n(119),u=n(595),s=n(78),l=n(1019),d=n.n(l),c=n(1020),f=n.n(c),v=Object(s.a)(d.a,f.a),h=[];u.a.start(),u.a.setType("disabled"),n(1021),u.a.setType("example"),n(1022),u.a.setType("format"),n(1023),u.a.setType("onchange"),n(1024),u.a.setType("prediction"),n(1025),u.a.setType("separator"),n(1026);var m=u.a.end(),y={disabled:{text:n(1027),log:m.disabled},example:{text:n(1028),log:m.example},format:{text:n(1029),log:m.format},onchange:{text:n(1030),log:m.onchange},prediction:{text:n(1031),log:m.prediction},separator:{text:n(1032),log:m.separator}};t.default=Object(o.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:y,source:v,examples:h}))})},507:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};var a=t[t.length-1],r=t.slice(0,-1);return function(){return r.reduceRight(function(e,t){return t(e)},a.apply(void 0,arguments))}},t.b=function e(t){for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];if(a.length>=t.length)return t.apply(void 0,a);return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return e.apply(void 0,[t.bind.apply(t,[t].concat(a))].concat(r))}}},509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(522),r=n(514),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.format,a=t.onChange,r=t.separator,o=t.value,i=t.prediction,u=t.distinct,s=t.disabled,l=t.limit;this.distinct=u,this.limit=l,this.separator=r,this.disabled=s||function(){return!1},this.initFormat(n),this.events={},i&&(this.prediction=i),this.setValue(o),this.onChange=a}return i(e,[{key:"add",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)&&(!t.distinct||!t.check(e))});var a=[],r=!0,o=!1,i=void 0;try{for(var u,s=n[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var l=u.value,d=this.format(l);d&&a.push(d)}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}this.values=this.values.concat(a)}}},{key:"set",value:function(e){this.$values=[],this.add(e)}},{key:"check",value:function(e){if(this.prediction){for(var t=0,n=this.values.length;t<n;t++)if(this.prediction(this.values[t],e))return!0;return!1}return this.values.indexOf(this.format(e))>=0}},{key:"clear",value:function(){this.values=[]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"handleChange",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.dispatch.apply(this,["change"].concat(t)),this.onChange&&this.onChange.apply(this,[this.getValue()].concat(t))}},{key:"initFormat",value:function(e){switch(void 0===e?"undefined":o(e)){case"string":this.format=function(t){return t[e]};break;case"function":this.format=function(t){return e(t)};break;default:this.format=function(e){return e}}}},{key:"defaultPrediction",value:function(e,t){return e===this.format(t)}},{key:"remove",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)});var a=[],r=this.prediction||this.defaultPrediction.bind(this),o=!0,i=!1,u=void 0;try{e:for(var s,l=this.values[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){for(var d=s.value,c=0;c<n.length;c++)if(r(d,n[c])){n.splice(c,1);continue e}a.push(d)}}catch(e){i=!0,u=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw u}}this.values=a}}},{key:"listen",value:function(e,t){this.events[e]||(this.events[e]=[]);var n=this.events[e];t in n||n.push(t)}},{key:"unlisten",value:function(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(function(e){return e!==t}))}},{key:"getValue",value:function(){var e=this.values;return 1===this.limit?e=this.values[0]:this.separator&&(e=this.values.join(this.separator)),this.$cachedValue=e,e}},{key:"setValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(r.a)(this.$cachedValue,e)||(1!==this.limit||Array.isArray(e)?Array.isArray(e)?this.values=e:"string"!=typeof e?console.error("Invalid values, expect Array of String."):this.separator?this.values=e.split(this.separator).map(function(e){return e.trim()}):(this.values=[],console.error("The separator parameter is empty.")):this.values=[e])}},{key:"length",get:function(){return this.values.length}},{key:"values",get:function(){return this.$values},set:function(e){this.$values=e,this.dispatch("change"),this.onChange&&this.onChange(this.getValue())}}]),e}(),s=n(1),l=n.n(s),d=(n(4),n(507)),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f={form:a.a,list:u},v=Object(d.b)(function(e,t){var n=e||{},a=n.type,o=void 0===a?"list":a,i=n.key,u=void 0===i?"value":i,d=n.limit,v=void 0===d?0:d,h=f[o];return function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e)),a=e.datum,r=e.onChange;t.datum=a instanceof h?a:new h(a),!t.datum.limit&&v&&(t.datum.limit=v);var o=t.props[u];return o&&(t.datum.setValue(o),t.prevValues=o),r&&(t.datum.onChange=r),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,s["PureComponent"]),c(n,[{key:"componentDidUpdate",value:function(){var e=this.props[u];Object(r.a)(e,this.prevValues)||(this.datum.setValue(e),this.prevValues=e)}},{key:"render",value:function(){var e=this.props,n=e.onDatumBind,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["onDatumBind"]);return n&&n(this.datum),l.a.createElement(t,Object.assign({},a,{datum:this.datum}))}}]),n}()});t.default={Form:a.a,List:u,hoc:v}},511:function(e,t,n){"use strict";t.a=function(e){return null===e||void 0===e||e!=e||(void 0!==e.length?0===e.length:!(e instanceof Date)&&"object"===(void 0===e?"undefined":a(e))&&0===Object.keys(e).length)};var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},514:function(e,t,n){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.prototype.hasOwnProperty;function o(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}t.a=function(e,t){if(o(e,t))return!0;if("object"!==(void 0===e?"undefined":a(e))||null===e||"object"!==(void 0===t?"undefined":a(t))||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(var u=0;u<n.length;u++)if(!r.call(t,n[u])||!o(e[n[u]],t[n[u]]))return!1;return!0}},522:function(e,t,n){"use strict";var a=n(514),r=n(511),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var u=Object.prototype.hasOwnProperty;function s(e){if(Object(e)!==e||Object(r.a)(e)||Array.isArray(e))return e;var t={},n={},a=n.cur,o=n.prop,i=n.idx,u=n.last,s=n.temp;for(var l in e){a=t,o="",u=0;do{i=l.indexOf(".",u),s=l.substring(u,-1!==i?i:void 0),a=a[o]||(a[o]=Number.isNaN(parseInt(s,10))?{}:[]),o=s,u=i+1}while(i>=0);a[o]=e[l]}return t[""]}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.removeUndefined,a=void 0===n||n,r=t.rules,o=t.onChange;this.values={},this.rules=r,this.onChange=o,this.removeUndefined=a,this.$values={},this.$defaultValues={},this.$validator={},this.$events={}}return o(e,[{key:"handleChange",value:function(){this.onChange&&this.onChange(this.getValue())}},{key:"reset",value:function(){var e=this;this.$values={},this.dispatch("reset"),Object.keys(this.values).forEach(function(t){e.values[t]=e.$defaultValues[t]})}},{key:"get",value:function(e){var t=this.$values[e];return t||(t=s(this.$values),e.split(".").forEach(function(e){t=t?t[e]:void 0}),t)}},{key:"set",value:function(e,t){u.call(this.values,e)?this.values[e]=t:this.$values[e]=t,this.handleChange()}},{key:"getRule",value:function(e){return this.rules&&this.rules[e]||[]}},{key:"getValue",value:function(){var e=this;return this.removeUndefined&&Object.keys(this.$values).forEach(function(t){void 0===e.$values[t]&&delete e.$values[t]}),s(this.$values)}},{key:"setValue",value:function(e){var t=this,n=function(e){if(Object(r.a)(e))return{};var t={};return function e(n,a){if(Object(n)!==n||Array.isArray(n))t[a]=n;else{var r=!0;for(var o in n)r=!1,e(n[o],a?a+"."+o:o);r&&(t[a]={})}}(e,""),t}(e);Object(a.a)(n,this.$values)||(this.$values={},Object.keys(n).forEach(function(e){u.call(t.values,e)?Object(a.a)(t.values[e],n[e])||(t.values[e]=n[e]):t.$values[e]=n[e]}),Object.keys(this.values).forEach(function(e){u.call(n,e)||(t.values[e]=t.get(e))}))}},{key:"bind",value:function(e,t,n,a){var r=this;u.call(this.values,e)?console.error('There is already an item with name "'+e+'" exists. The name props must be unique.'):(this.$defaultValues[e]=n,this.$validator[e]=a,Object.defineProperty(this.values,e,{configurable:!0,enumerable:!0,set:function(n){r.$values[e]=n,"function"==typeof t&&t(n)},get:function(){return r.$values[e]}}),void 0===this.$values[e]&&void 0!==n&&(this.$values[e]=n,this.handleChange()))}},{key:"unbind",value:function(e){delete this.$values[e],delete this.values[e],delete this.$validator[e]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=this.$events[e];r&&r.forEach(function(e){return e.apply(void 0,n)})}},{key:"listen",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unlisten",value:function(e,t){this.$events[e]&&(this.$events[e]=this.$events[e].filter(function(e){return e!==t}))}},{key:"validate",value:function(){var e=this;return new Promise(function(t,n){var a=Object.keys(e.$validator),r=Object.assign({},e.$values),o=[].concat(i(a.map(function(t){return e.$validator[t](e.values[t],r)})),i((e.$events.validate||[]).map(function(e){return e()})));Promise.all(o).then(function(e){var a=e.find(function(e){return!0!==e});void 0===a?t(!0):n(a)})})}}]),e}();t.a=l},551:function(e,t,n){"use strict";t.a={red:{id:1,name:"red"},orange:{id:2,name:"orange"},yellow:{id:3,name:"yellow"},green:{id:4,name:"green"},cyan:{id:5,name:"cyan"},blue:{id:6,name:"blue"},violet:{id:7,name:"violet"}}},595:function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=window.console,o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logs={default:[]},this.current=this.logs.default}return a(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.map(function(e){return""+JSON.stringify(e)});this.current.push(a)}}]),e}();t.a={start:function(){window.console=new o},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=r,e}}}});