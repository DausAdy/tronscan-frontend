(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e instanceof HTMLElement?e:a.default.findDOMNode(e)};var r,a=(r=n(12))&&r.__esModule?r:{default:r}},1608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warning=a,t.note=o,t.resetWarned=function(){r={}},t.call=i,t.warningOnce=l,t.noteOnce=function(e,t){i(o,e,t)},t.default=void 0;var r={};function a(e,t){}function o(e,t){}function i(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}function l(e,t){i(a,e,t)}var s=l;t.default=s},1706:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n(1602);var r=n(1601),a=n(3),o=n.n(a),i=n(40),l=n(6),s=n(19),c=n(18),u=n(27),d=n(26),p=n(28),f=n(0),m=n.n(f),h=(n(4),n(22));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n(109);var g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).loadDatas=Object(l.a)(o.a.mark(function e(){var t,r,a,i,l=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<l.length&&void 0!==l[0]?l[0]:1,r=1<l.length&&void 0!==l[1]?l[1]:40,a=n.state.filter,e.next=5,h.b.getTokens(y({sort:"rank",limit:r,start:(t-1)*r},a));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)})),n.handleTableChange=function(e,t,r){var a=y({},n.state.pagination);a.current=e.current,n.setState({pagination:a}),n.fetch(y({pageSize:e.pageSize,page:e.current,sortField:r.field,sortOrder:r.order},t))},n.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};n.setState({loading:!0}),n.props.onPageChange&&n.props.onPageChange(e.page,e.pageSize),n.setState({loading:!1})},n.onInputChange=function(e){n.setState({searchText:e.target.value})},n.onReset=function(){n.setState({searchText:""},function(){n.onSearch()})},n.onSearch=function(){var e=n.props,t=e.tableData,r=(e.filterDropdownVisible,n.state.searchText),a=new RegExp(r,"gi");n.setState({filterDropdownVisible:!1,filtered:!!r,data:t.map(function(e){return e.name.match(a)?y({},e,{name:m.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(r,")|(?=").concat(r,")"),"i")).map(function(e,t){return e.toLowerCase()===r.toLowerCase()?m.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},n.setColumn=function(e){function t(e){return function(t,n){return t[e]>n[e]?1:t[e]<n[e]?-1:0}}var n={},r=[],a=!0,o=!1,i=void 0;try{for(var l,s=e[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var c=l.value;if(c.sorter&&!c.filterDropdown){var u={sorter:t(c.key)};r.push(y({},c,{},u))}else if(!c.sorter&&c.filterDropdown){var d=y({},n);r.push(y({},c,{},d))}else if(c.sorter&&c.filterDropdown){var p=y({sorter:t(c.key)},n);r.push(y({},c,{},p))}else r.push(c)}}catch(e){o=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}return r},n.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,n=this.state.pagination;e.current!=t&&this.setState({pagination:y({},n,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.loading,a=e.data,o=e.column,i=e.bordered,l=e.pagination,s=void 0===l||l,c=e.scroll,u=e.Footer,d=e.locale,p=e.addr,f=e.transfers,h=e.nopadding,b=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),g=s?y({total:t},this.state.pagination):s;return m.a.createElement("div",null," ",p?m.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==a.length?"table_pos_addr_data":"")+("address"==f?" transfer-mt-100":" transfer-pt-100")+(h?" transfer-mp-0":"")},m.a.createElement(r.a,{bordered:i,columns:b,rowKey:function(e,t){return t},dataSource:a,locale:d,scroll:c,footer:u,pagination:g,loading:n,onChange:this.handleTableChange})," "):m.a.createElement("div",{className:"card table_pos"},m.a.createElement(r.a,{bordered:i,columns:b,footer:u,rowKey:function(e,t){return t},dataSource:a,locale:d,scroll:c,pagination:g,loading:n,onChange:this.handleTableChange})," ")," ")}}]),t}(f.Component)},1711:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1819:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){"function"==typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=a,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach(function(t){a(t,e)})}},t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)&&!("function"==typeof e&&!e.prototype.render)}},1820:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},2276:function(e,t,n){"use strict";n(234);n(76),n(435),n(436),n(19),n(18),n(27),n(26),n(28);var r=n(0),a=n.n(r),o=(n(4),n(116));n.n(o);a.a.Component},235:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n(0)),u=s(n(1607)),d=s(n(309)),p=s(n(1608)),f=n(1819),m=s(n(439)),h=n(1820),b=function(){function e(){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,o(e).apply(this,arguments))).resizeObserver=null,t.childNode=null,t.currentElement=null,t.state={width:0,height:0},t.onResize=function(e){var n=t.props.onResize,r=e[0].target.getBoundingClientRect(),a=r.width,o=r.height,i=Math.floor(a),l=Math.floor(o);if(t.state.width!==i||t.state.height!==l){var s={width:i,height:l};t.setState(s),n&&n(s)}},t.setChildNode=function(e){t.childNode=e},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(e,c.Component),function(e,t,n){t&&a(e.prototype,t)}(e,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=u.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new m.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=d.default(e);if(1<t.length)p.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return p.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(c.isValidElement(n)&&h.supportRef(n)){var r=n.ref;t[0]=c.cloneElement(n,{ref:f.composeRef(r,this.setChildNode)})}return 1===t.length?t[0]:t.map(function(e,t){return!c.isValidElement(e)||"key"in e&&null!==e.key?e:c.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})})}}]),e}();b.displayName="ResizeObserver",t.default=b},309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return a.default.Children.forEach(e,function(e){t.push(e)}),t};var r,a=(r=n(0))&&r.__esModule?r:{default:r}},3612:function(e,t,n){"use strict";n.r(t);var r=n(2498),a=n.n(r),o=n(306),i=n.n(o),l=n(54),s=n.n(l),c=n(3),u=n.n(c),d=n(6),p=n(19),f=n(18),m=n(27),h=n(26),b=n(28),y=n(0),g=n.n(y),v=n(39),_=n(440),E=n(16),w=(n(65),n(4)),O=(n(22),n(31)),k=n(443),x=(n(2276),n(102),n(1706)),j=n(5),C=n(25),S=n(67),A=n(108),M=n(253),P=n(17),D=n.n(P),N=function(e){function t(e){var r;Object(p.a)(this,t),(r=Object(m.a)(this,Object(h.a)(t).call(this,e))).loadPage=Object(d.a)(u.a.mark(function e(){var t,n,a,o,i,l,s=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0<s.length&&void 0!==s[0]?s[0]:1,n=1<s.length&&void 0!==s[1]?s[1]:20,a=r.state.filter,r.props.intl,r.setState({loading:!0}),a.name)return e.next=8,D.a.get(j.f+"/api/token_trc20?sort=issue_time&limit="+n+"&start="+(t-1)*n+"&name="+a.name);e.next=12;break;case 8:o=e.sent,i=o.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,D.a.get(j.f+"/api/token_trc20?sort=issue_time&limit="+n+"&start="+(t-1)*n);case 14:o=e.sent,i=o.data.total;case 16:return(l=o.data.trc20_tokens).map(function(e,r){e.index=r+1+(t-1)*n}),r.setState({loading:!1,tokens:l,total:i,page:t}),r.addIEOClass(),e.abrupt("return",i);case 21:case"end":return e.stop()}},e)})),r.setSearch=function(){var e=s()(Object(k.a)(r.props.location,"search"));0<e.length?r.setState({filter:{name:"%25".concat(e,"%25")}}):r.setState({filter:{}})},r.addIEOClass=function(){var e=r.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},r.onChange=function(e,t){r.loadPage(e,t)},r.customizedColumn=function(){var e=r.props.intl,t=r.state.contractAddress,o=n(1711);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,n){return g.a.createElement("span",null,n.contract_address==t?g.a.createElement("div",null,g.a.createElement("span",{className:"starbeat"},g.a.createElement("i",{className:"fas fa-star"})," "),g.a.createElement("span",{className:"star-tip"})):g.a.createElement("span",null,e-1))}},{title:i()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t){return g.a.createElement("div",{className:"table-imgtext"},t.icon_url?g.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},g.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url,onError:function(e){e.target.onerror=null,e.target.src=o}})):g.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},g.a.createElement("img",{style:{width:"42px",height:"42px"},src:o})),g.a.createElement("div",null,g.a.createElement("h5",null,g.a.createElement(O.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),g.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t){return g.a.createElement("div",null,t.price&&t.total_supply_with_decimals?g.a.createElement("div",null,g.a.createElement(E.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," ","TRX"):g.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t){return a()(e),g.a.createElement("div",null,t.price?g.a.createElement("div",null,g.a.createElement(E.c,{value:t.price,maximumFractionDigits:1})," ","TRX"):g.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t){return null===e&&(e=0),g.a.createElement("div",null,g.a.createElement(E.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t){return g.a.createElement(O.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},r.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var o=s()(Object(k.a)(e.location,"search"));return 0<o.length&&(r.state.filter.name="%25".concat(o,"%25")),r}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,n=t.tokens,r=(t.alert,t.loading),a=t.total,o=t.contractAddress,i=this.props,l=(i.match,i.intl),s=this.customizedColumn(),c=l.formatMessage({id:"part_total"})+" "+a+" "+l.formatMessage({id:"part_pass"});return g.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},r&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(A.b,null)),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 table_pos"},a?g.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},c," \xa0\xa0",g.a.createElement(M.a,{to:"/exchange/trc20"},Object(w.b)("Trade_on_Poloni DEX"),">")):"",g.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},g.a.createElement("button",{className:"btn btn-danger"},Object(w.c)("application_entry"))),g.a.createElement(x.a,{bordered:!0,loading:r,column:s,data:n,total:a,contractAddress:o,onPageChange:function(t,n){e.loadPage(t,n)}}))))}}]),t}(y.Component),R={loadTokens:_.b,login:C.v,reloadWallet:S.c};t.default=Object(v.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},R)(Object(E.h)(N))}}]);