(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1152:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(14),r=a(15),c=a(21),l=a(20),o=a(22),s=a(0),i=a.n(s),d=a(157),u=a(12),g=a(3),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={open:!1,id:Object(d.a)(24)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,c=r.text,l=r.placement,o=r.testSecond,s=void 0===o?"":o,d=r.className,m=void 0===d?"":d,p=r.info,f=void 0===p?"":p;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(u.h,{placement:l,isOpen:a,target:n,className:m,innerClassName:"w-100"},c?Object(g.b)(c):"",s?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(g.b)(s)):"",f||""))}}]),t}(i.a.Component)},1163:function(e,t,a){"use strict";a.d(t,"a",function(){return O});var n=a(1206),r=a.n(n),c=a(132),l=a.n(c),o=a(1159),s=a.n(o),i=a(1156),d=a.n(i),u=a(2),g=a.n(u),m=a(24),p=a(5),f=a(14),E=a(15),h=a(21),A=a(20),b=a(22),I=a(0),v=a.n(I),B=a(3),k=a(16);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var O=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(h.a)(this,Object(A.a)(t).call(this,e))).loadDatas=Object(p.a)(g.a.mark(function e(){var t,n,r,c,l=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,k.a.getTokens(y({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=y({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(y({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?y({},e,{name:v.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?v.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:v.a.createElement("div",{className:"custom-filter-dropdown"},v.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),v.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(B.c)("search")),v.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(B.c)("reset"))),filterIcon:v.a.createElement(l.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],c=!0,o=!1,i=void 0;try{for(var u,g=e[Symbol.iterator]();!(c=(u=g.next()).done);c=!0){var m=u.value;if(m.sorter&&!m.filterDropdown){var p={sorter:t(m.key)};r.push(y({},m,{},p))}else if(!m.sorter&&m.filterDropdown){var f=y({},n);r.push(y({},m,{},f))}else if(m.sorter&&m.filterDropdown){var E=y({sorter:t(m.key)},n);r.push(y({},m,{},E))}else r.push(m)}}catch(h){o=!0,i=h}finally{try{c||null==g.return||g.return()}finally{if(o)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:y({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,c=e.column,l=e.bordered,o=e.pagination,s=void 0===o||o,i=e.scroll,d=e.locale,u=e.addr,g=e.transfers,m=(e.contractAddress,this.setColumn(c)),p=s?y({total:t},this.state.pagination):s;return v.a.createElement("div",null,u?v.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==g?" transfer-mt-100":" transfer-pt-100")},v.a.createElement(r.a,{bordered:l,columns:m,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:p,loading:a,onChange:this.handleTableChange})," "):v.a.createElement("div",{className:"card table_pos"},v.a.createElement(r.a,{bordered:l,columns:m,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:p,loading:a,onChange:this.handleTableChange})))}}]),t}(I.Component)},2043:function(e,t){e.exports="data:image/png;base64,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"},3220:function(e,t,a){"use strict";a.r(t);var n=a(110),r=a.n(n),c=a(1209),l=a.n(c),o=a(206),s=a.n(o),i=a(2),d=a.n(i),u=a(5),g=a(14),m=a(15),p=a(21),f=a(20),E=a(22),h=a(0),A=a.n(h),b=a(29),I=a(18),v=a(3),B=a(11),k=a(17),C=a(6),y=a(156),O=a(1163),Q=a(83),S=a(1152),w=(a(19),a(16)),_=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).loadAccounts=Object(u.a)(d.a.mark(function t(){var a,n,r,c,l,o,s=arguments;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:20,e.setState({loading:!0}),t.next=5,w.a.getAccounts({sort:"-balance",limit:n,start:(a-1)*n});case 5:r=t.sent,c=r.accounts,l=r.total,o=r.rangeTotal,e.setState({loading:!1,accounts:c,total:l,rangeTotal:o});case 10:case"end":return t.stop()}},t)})),e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchFieldChangeHandler=function(t){e.setState({searchString:t.target.value})},e.customizedColumn=function(){var t=e.props.intl;return[{title:s()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,a,n){return 2==a.accountType?A.a.createElement("span",{className:"d-flex"},A.a.createElement(l.a,{placement:"top",title:t.formatMessage({id:"contracts"})},A.a.createElement("span",null,A.a.createElement("i",{className:"far fa-file mr-1"}))),A.a.createElement(k.a,{address:e,isContract:2==a.toAddressType})):A.a.createElement(k.a,{address:e})}},{title:"Name Tag",dataIndex:"addressTag",key:"addressTag",align:"left",render:function(e,t,a){return A.a.createElement("span",{style:{whiteSpace:"nowrap"}}," ",t.addressTag?t.addressTag:""," ")}},{title:s()(t.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return A.a.createElement("div",null,A.a.createElement(B.c,{value:parseInt(e)/C.B/C.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:s()(t.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return A.a.createElement(B.c,{value:parseInt(e)/C.B})}},{title:s()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return A.a.createElement(y.b,{amount:parseInt(e)/C.B})}}]},e.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}]},e}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return(t=t.toUpperCase()).length>0&&(e=r()(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return A.a.createElement(h.Fragment,null,A.a.createElement("div",{className:"table-responsive"},A.a.createElement("table",{className:"table table-striped m-0"},A.a.createElement("thead",{className:"thead-dark"},A.a.createElement("tr",null,A.a.createElement("th",null,Object(v.c)("address")),A.a.createElement("th",{className:"d-md-table-cell"},Object(v.c)("supply")),A.a.createElement("th",{className:"d-md-table-cell"},Object(v.c)("power")),A.a.createElement("th",null,Object(v.c)("balance")))),A.a.createElement("tbody",null,e.map(function(e,t){return A.a.createElement("tr",{key:e.address},A.a.createElement("th",null,A.a.createElement(k.a,{address:e.address})),A.a.createElement("td",{className:"d-md-table-cell text-nowrap"},A.a.createElement(B.c,{value:e.balance/C.B/C.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),A.a.createElement("td",{className:"text-nowrap d-md-table-cell"},A.a.createElement(B.c,{value:e.power/C.B})),A.a.createElement("td",{className:"text-nowrap"},A.a.createElement(y.b,{amount:e.balance/C.B})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,c=n.loading,l=n.rangeTotal,o=void 0===l?0:l,s=n.accounts,i=this.customizedColumn(),d=(a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"view_total"})+" "+o+" "+a.formatMessage({id:"table_info_account_tip2"}));return A.a.createElement("main",{className:"container header-overlap pb-3 token_black"},A.a.createElement("div",{className:"row"},A.a.createElement("div",{className:"col-md-12"},A.a.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},A.a.createElement("div",{className:"card-body"},A.a.createElement("h3",{className:"text-primary"},A.a.createElement(B.c,{value:o})),Object(v.c)("total_accounts"))))),c&&A.a.createElement("div",{className:"loading-style"},A.a.createElement(Q.b,null)),A.a.createElement("div",{className:"row mt-2"},A.a.createElement("div",{className:"col-md-12 table_pos"},r?A.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},A.a.createElement("div",null,Object(v.c)("view_total")," ",o," ",Object(v.c)("account_unit")," ",A.a.createElement(S.a,{placement:"top",info:d})," ",A.a.createElement("br",null),o>1e4?A.a.createElement("span",null,"(",Object(v.c)("table_info_big1"),"10000",Object(v.c)("table_info_big2"),")"):"")):"",A.a.createElement(O.a,{bordered:!0,loading:c,column:i,data:s,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(h.Component);var x={loadAccounts:I.r};t.default=Object(b.connect)(function(e){return{accounts:e.app.accounts}},x)(Object(B.h)(_))},3257:function(e,t,a){"use strict";a.r(t);var n,r=a(1206),c=a.n(r),l=a(206),o=a.n(l),s=a(28),i=a.n(s),d=a(2),u=a.n(d),g=a(24),m=a(5),p=a(14),f=a(15),E=a(21),h=a(20),A=a(22),b=a(1156),I=a.n(b),v=a(0),B=a.n(v),k=a(29),C=a(18),y=a(3),O=a(11),Q=a(17),S=a(6),w=a(156),_=a(1163),x=a(83),H=(a(1152),a(19),a(16)),j=a(12),D=a(45),N=a(158),M=Object(k.connect)(function(e){return{account:e.app.account,wallet:e.app.wallet,tokenBalances:e.account.tokens,trxBalance:e.account.trxBalance||e.account.balance}},{reloadWallet:D.c})(n=Object(O.h)(n=Object(N.a)(n=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).hideModal=function(){var e=a.props.onHide;e&&e()},a.customizedColumn=function(){var e=a.props.intl;return[{title:o()(e.formatMessage({id:"propose_number"})),dataIndex:"index",align:"left",render:function(e,t,a){return B.a.createElement("div",null,a+1)}},{title:o()(e.formatMessage({id:"developers_contribution_link"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"80%",render:function(e,t,a){return B.a.createElement(Q.e,{href:t.url,target:"_blank",className:"text-muted"},B.a.createElement("span",{style:{wordBreak:"break-all"}},t.url))}},{title:o()(e.formatMessage({id:"developers_earn_points"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.points}))}}]},a.state={loading:!1},a}return Object(A.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.loading,t=this.props,a=(t.intl,t.notes),n=a.length,r=this.customizedColumn();return B.a.createElement(j.d,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered _freezeContent developers_note"},B.a.createElement(j.g,{className:"text-center _freezeHeader",toggle:this.hideModal},Object(y.c)("developers_points_details")),B.a.createElement(j.e,{className:"text-center _freezeBody token_black"},B.a.createElement(_.a,{bordered:!0,loading:e,column:r,data:a,total:n,position:"bottom"})))}}]),t}(B.a.PureComponent))||n)||n)||n;a(212);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var L=I.a.Search,Z=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(E.a)(this,Object(h.a)(t).call(this))).loadAccounts=Object(m.a)(u.a.mark(function t(){var a,n,r,c,l,o,s,i,d=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.length>0&&void 0!==d[0]?d[0]:1,n=d.length>1&&void 0!==d[1]?d[1]:20,r=e.state,c=r.searchCriteria,l=r.filter,e.setState({loading:!0}),t.next=6,H.a.getUserList(J({search:c,pageSize:n,page:a},l));case 6:o=t.sent,s=o.data,i=o.total,s.map(function(e,t){e.index=t+1,e.extraData=new Function("return "+e.extra)()}),e.setState({loading:!1,developers:s,total:i,pagination:J({},e.state.pagination,{total:i})});case 11:case"end":return t.stop()}},t)})),e.handleTableChange=function(t,a,n){var r=J({},e.state.pagination);r.current=t.current,r.pageSize=t.pageSize;e.setState({pagination:r,filter:J({},e.state.filter,{sortField:{currentYear:"currentYear",currentQuarter:"currentQuarter",currentMonth:"currentMonth"}[n.columnKey]||"currentMonth",userSort:{descend:-1,ascend:1}[n.order]||"-1",order_current:n.order})},function(){return e.loadAccounts(r.current,r.pageSize)})},e.hideModal=function(){e.setState({modal:null})},e.showNote=function(t){var a=new Function("return "+e.state.developers[t].note)();e.setState({modal:B.a.createElement(M,{notes:a,onHide:e.hideModal})})},e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)},function(){e.loadAccounts()})},e.customizedColumn=function(){var t=e.props.intl,n=e.state.filter;return[{title:o()(t.formatMessage({id:"developers_username"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",width:"40%",render:function(e,t,n){return B.a.createElement("div",null,t.extraData&&"null"!==t.extraData.imgUrl?B.a.createElement("div",null,B.a.createElement("img",{src:t.extraData.imgUrl,width:"20",height:"20",alt:"@"+t.name}),B.a.createElement("span",{className:"ml-2"},t.name)):B.a.createElement("div",null,B.a.createElement("img",{src:a(2043),width:"20",height:"20",alt:"@"+t.name}),B.a.createElement("span",{className:"ml-2"},t.name)))}},{title:o()(t.formatMessage({id:"developers_current_year"})),dataIndex:"currentYear",key:"currentYear",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentYear"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.currentYear}))}},{title:o()(t.formatMessage({id:"developers_current_quarter"})),dataIndex:"currentQuarter",key:"currentQuarter",align:"center",sorter:!0,sortOrder:"currentQuarter"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.currentQuarter}))}},{title:o()(t.formatMessage({id:"developers_current_month"})),dataIndex:"currentMonth",key:"currentMonth",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentMonth"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.currentMonth}))}},{title:o()(t.formatMessage({id:"trc20_cur_order_header_action"})),dataIndex:"action",key:"action",align:"right",className:"ant_table",render:function(t,a,n){return B.a.createElement("a",{href:"javascript:;",onClick:function(){e.showNote(n)}},Object(y.c)("developers_view_points"))}}]},e.state={modal:null,loading:!0,searchString:"",developers:[],total:0,searchCriteria:"",pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},filter:{sortField:"currentMonth",userSort:-1,order_current:"descend"}},e}return Object(A.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"renderAccounts",value:function(){var e=this.state.developers;if(0!==e.length)return B.a.createElement(v.Fragment,null,B.a.createElement("div",{className:"table-responsive"},B.a.createElement("table",{className:"table table-striped m-0"},B.a.createElement("thead",{className:"thead-dark"},B.a.createElement("tr",null,B.a.createElement("th",null,Object(y.c)("address")),B.a.createElement("th",{className:"d-md-table-cell"},Object(y.c)("supply")),B.a.createElement("th",{className:"d-md-table-cell"},Object(y.c)("power")),B.a.createElement("th",null,Object(y.c)("balance")))),B.a.createElement("tbody",null,e.map(function(e,t){return B.a.createElement("tr",{key:e.address},B.a.createElement("th",null,B.a.createElement(Q.a,{address:e.address})),B.a.createElement("td",{className:"d-md-table-cell text-nowrap"},B.a.createElement(O.c,{value:e.balance/S.B/S.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),B.a.createElement("td",{className:"text-nowrap d-md-table-cell"},B.a.createElement(O.c,{value:e.power/S.B})),B.a.createElement("td",{className:"text-nowrap"},B.a.createElement(w.b,{amount:e.balance/S.B})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,o=n.rangeTotal,s=void 0===o?0:o,i=n.developers,d=n.modal,u=this.customizedColumn();a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"}),a.formatMessage({id:"table_info_account_tip2"});return B.a.createElement("main",{className:"container header-overlap pb-3 token_black"},d,l&&B.a.createElement("div",{className:"loading-style"},B.a.createElement(x.b,null)),B.a.createElement("div",{className:"row mt-2"},r?B.a.createElement("p",{className:"developers_reward_tip"},Object(y.c)("developers_reward_tip")):"",B.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg"},r?B.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},B.a.createElement("div",null,Object(y.c)("view_total")," ",r," ",Object(y.c)("developers_account"))):"",B.a.createElement("div",{className:"table_pos_search",style:{right:"15px"}},B.a.createElement(L,{placeholder:a.formatMessage({id:"developers_search"}),enterButton:a.formatMessage({id:"search"}),size:"large",onSearch:function(t){return e.onSearchChange(t)}})),B.a.createElement("div",{className:"card table_pos table_pos_addr table_pos_addr_data"},B.a.createElement(c.a,{columns:u,rowKey:function(e,t){return t},dataSource:i,loading:l,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.index<6)return"trc20-star-ad"}})),r?B.a.createElement("p",{className:"developers_tip_bottom"},Object(y.c)("developers_niTron")):"")))}}]),t}(v.Component);var P={loadAccounts:C.r};t.default=Object(k.connect)(function(e){return{accounts:e.app.accounts}},P)(Object(O.h)(Z))}}]);