(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1152:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(14),r=a(15),o=a(21),l=a(20),c=a(22),s=a(0),i=a.n(s),u=a(157),d=a(12),m=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={open:!1,id:Object(u.a)(24)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,o=r.text,l=r.placement,c=r.testSecond,s=void 0===c?"":c,u=r.className,p=void 0===u?"":u,f=r.info,A=void 0===f?"":f;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(d.h,{placement:l,isOpen:a,target:n,className:p,innerClassName:"w-100"},o?Object(m.b)(o):"",s?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(m.b)(s)):"",A||""))}}]),t}(i.a.Component)},1164:function(e,t,a){"use strict";a.d(t,"a",function(){return k});var n=a(1209),r=a.n(n),o=a(132),l=a.n(o),c=a(1160),s=a.n(c),i=a(1157),u=a.n(i),d=a(2),m=a.n(d),p=a(24),f=a(5),A=a(14),g=a(15),b=a(21),h=a(20),v=a(22),w=a(0),E=a.n(w),O=a(3),C=a(16);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var k=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).loadDatas=Object(f.a)(m.a.mark(function e(){var t,n,r,o,l=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,C.a.getTokens(j({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=j({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(j({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?j({},e,{name:E.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?E.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:E.a.createElement("div",{className:"custom-filter-dropdown"},E.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),E.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(O.c)("search")),E.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(O.c)("reset"))),filterIcon:E.a.createElement(l.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],o=!0,c=!1,i=void 0;try{for(var d,m=e[Symbol.iterator]();!(o=(d=m.next()).done);o=!0){var p=d.value;if(p.sorter&&!p.filterDropdown){var f={sorter:t(p.key)};r.push(j({},p,{},f))}else if(!p.sorter&&p.filterDropdown){var A=j({},n);r.push(j({},p,{},A))}else if(p.sorter&&p.filterDropdown){var g=j({sorter:t(p.key)},n);r.push(j({},p,{},g))}else r.push(p)}}catch(b){c=!0,i=b}finally{try{o||null==m.return||m.return()}finally{if(c)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:j({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,l=e.bordered,c=e.pagination,s=void 0===c||c,i=e.scroll,u=e.locale,d=e.addr,m=e.transfers,p=(e.contractAddress,this.setColumn(o)),f=s?j({total:t},this.state.pagination):s;return E.a.createElement("div",null,d?E.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},E.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:f,loading:a,onChange:this.handleTableChange})," "):E.a.createElement("div",{className:"card table_pos"},E.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:f,loading:a,onChange:this.handleTableChange})))}}]),t}(w.Component)},1238:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(21),l=a(20),c=a(22),s=a(0),i=a.n(s),u=a(11),d=a(3),m=a(1152),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,a=e.rangeTotal,n=e.typeText,r=e.common,o=void 0!==r&&r,l=e.intl,c=e.markName,u=void 0===c?"table-question-mark":c,p=e.top,f=void 0===p?"26px":p,A=e.isQuestionMark,g=void 0===A||A,b=e.selected,h=l.formatMessage({id:"view_total"})+" "+a+" "+l.formatMessage({id:n}),v=l.formatMessage({id:"view_total"})+" "+a+" "+l.formatMessage({id:n})+"<br/>("+l.formatMessage({id:"table_info_big"})+")",w=a>1e4?v:h,E=l.formatMessage({id:"table_info_new_tip"});return i.a.createElement(s.Fragment,null,b?i.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},0!==t?i.a.createElement("div",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n),g?i.a.createElement("span",{className:"ml-1"},i.a.createElement(m.a,{placement:"top",info:l.formatMessage({id:"select_tip"})})):"",i.a.createElement("br",null),i.a.createElement("span",null,Object(d.d)("date_number_tip",{total:a}),a>2e3?i.a.createElement("span",null,", ",Object(d.c)("date_list_tip")):"")):i.a.createElement("span",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n))):o?i.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},w,i.a.createElement("span",null,i.a.createElement(m.a,{placement:"top",text:"to_provide_a_better_experience"}))):i.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},a>1e4?i.a.createElement("div",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n),g?i.a.createElement(m.a,{placement:"top",info:E}):"",i.a.createElement("br",null)," ",i.a.createElement("span",null,"(",Object(d.c)("table_info_big1")),i.a.createElement("span",null,t),i.a.createElement("span",null,Object(d.c)("table_info_big2"),")")):i.a.createElement("span",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n)),i.a.createElement("span",{className:a>1e4?u:"table-question-mark-small"})))}}]),t}(i.a.Component);t.a=Object(u.h)(p)},1569:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABBhJREFUWAnNWUtPGlEUZmZ4ikQwFGiN0K7qot250MT0J7Qb665rTbsxNGlddOHOTWNMXOmqa+0faNOFTUx04aqbsmik2Gh9oICCPIZHvzPhkplhgJkBpCRw75x7zrnffPeecx9wFpOf5eVlZy6X85bL5SEbPqIo2mu1mo3ccRwnQlSCTHS5XLmbm5v0+vp60UxXnBGjjY0NWywWCwiC4KtUKk4jttDN45vGS51vbm6Kem11Adza2hL29vZCYCgIdni9zrX04KNqt9tP4/H42fb2dkVLRy7rCHBpaclXKBQiAGaVG3Zbp2lQrVYTa2tr6Xa+hFaNeFPu+vp6DEMZ7pa1Fn0I8Ds6NTVV29/fz7bQsWgyiADgMVceIQB8rQx7LL8aGRn5jX6rar9N84mYu2NwhGk0k8k8VIOj56YhpmHF3LinpdxnmUtruBUMUkAAxP0+A2npHnNybHFx0StXaACkVELRKm8cRJ3n+QjFAOu7UTk4OKAc19NUwjoxUiIGbOl0OshsJIC0QpRKpRATDroEiyGwKJElAaTlq0+5TvGuHo/Hh1VkSCHUeACLAgiTAlUCSGurhl5PRZFI5G0gEPg6Pj7+JRgMPuvkvFgsSpg4UOlEDnrSyaCb9nA4/AG7mxfMBxiKHR4evmLPrUok7x+0YijCupWyWbkaHPlBnk3q8ZfNZr087ef0KJvR0QIHP+eXl5cfdfpz87TZ1KlsSK0NuAVsYI/1OAPTNivthPUok47T6bSFQqEoguop7L4dHR190rJtBw457o+WjZaMciJPP1qNWjK/3z8LcLNoewzi3yAy36n1egWO/FqtVltjJVF3pPUMA0VA4fmlHGQvwbH+rUjQdD5wMEG7EpP7M3LYc7DuZ3p1kBbI7PJUUm+ngFgwMqzML5UIYJGCpCQXtqtjcl+kUqkFvJQiTRDIXoMjHEQeT0fDdqDUbWAkoQVSpdcVc8wX1mSRx9vfMoHesgPInoCrY8nxbrc7rReYXI+BhEw+Aqlu5pzcP9WHh4fTws7OTnlmZmYUk9zwXjCfz2eQdr5jhxJBUv2JoX+PgDhRd2TmGcN7u7KyciqBwtEyBSemtvrJZPIXvq/NgGhn43A4CJNFyoMTExPnYLDpyNfOQT/bEL0VjMpFA+D8/LxI1xH97NSIb0yXU2wDyw2AVJmcnDwDi5LQiLNe61Lu83q9Z8xvY6mbm5urYDOQYA2DKsFeAuw1ppvi4L67u1uYnp6m6xDPIABiBI9xmaRYpRoMMkCrq6snSN5SBDHZHZVXAPdX3VcTQMyBGpJ3/I5BSpdHanD0rHm7RQ2gm4tGow9QNZUfyYeeT31Ym5hjti0BMoVBX2B2BEhA/+srYMYklf/tJbocJKvTgZ/O1J3+hqDtHG7NUmb/hvgH1qMV7a6f7wwAAAAASUVORK5CYII="},1570:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAA9RJREFUWAnNmc9vG0UUx78zsxsbh0iJ1fyASIRUSBwoN86Vqt4QAgI0nJC4JeKARCu1gnDwpUJCHLhy4tJTWqUcuMAB/gFOICGEECVCgfxAsZGIieOdeX1vnfXaztpe/0jsJ9k7M/vem4/f7vx6VuhXvixkMZmbhrE5eNpHpTIBY/zQnbVVZDInCFwVnjuCP1XCy+9X+ulK9WT0wxc+fj+Yg6dm4Cjbky28/+GCEoqz+1hbq6a1TQe4uWmAXxdg1DyIdFrniXpKOZx4uzDLe1hdtYk6DY3dAb/+ZAZltwRNXoPd4EXtVaEy21j5oNTJGUemjRApvOAvwtIzUBgsakldkDOgah5vXydsfvdfkoq0JUeQChpf5ZZhT2baGQ61XZlD/FT5A4WCa/V7NjISuYuEEyKyebyYebYVTupnH7E8VtjZJOXzbaMnkh53cwRlQGg8db4gHbwTLeJhYbpRIwaUqURG66iFskuQMXAq9QIyj+aHPpVEvfRydYGPLX8+MqkBygoRBAtR48ivpBfwfSGcd2uAsnwNukKk+VWOl0iFXHdVa3DohwO1Bihr63mLUrcY7ls49Q2gr3btztaYFGRXMuVd6WowiAKpj9n8tboLpX4B3Dv1eruCC37U4ZapncIw2lvhxCe5f1K59iandbifS6Xdh1ISHGifPX2WyltwPKnDzWYq7R6V2sGRWed3cSeVN8/4OtwJp9JmJc07Z9J3QOoeV95ta9YJTts/29q13nDa98JtOlHrreS6w1v8AvGHheh5hpyDcp82KQ8LTpwayxHsSahpnWTKGxzR23UXw4Q7depBDjhaZ+qddCoY8wCBfZVVLsVqISRXaYK/4qkkVOABIe9cL481dsybKlPV4emrsbFT2QYHULTOKi3TBEMOG044+FSow6OhVNLLdjJko4MBIxe50pYBrSlH9R6uHSCHBCcwXvZI46jc8VTVATqCbDzjFgd651o7C45KtUPT1t0rvR/ET71p9RwcbrL9v3xu/pynn73WfvqqO13G6kc/1866ARX73uo7+o0B3mN7mRv7Ykk0MszEUpsHL3M6Qk78YyPGIl89iAFf4lyJx+mIcRHldnGtEMSAUqpwrsSpsHGknJISeaNaf4/jpU4SOTm9PVI46Vwd8+wQZxhiQLn5yodFHpF/S3EkotQOVgpN014zoFDd2PgLZiIcQRcKKfmZNzfOBOcsoFKE18uPLhQySh4lRCQ5uyWKkkS6f/fpvufHhM4Sm+SxJkQu0m0PGGmMOIHZHVBAxzoFHEVSrmObRG+EjMpp/4awlTKezBf7/RviMUwweV8zgtReAAAAAElFTkSuQmCC"},2043:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAAA00lEQVR4AWOAgRLuXJl8OXwwzciBhQEdZMSm/Un7TwhmBGNoTHuf9irTOFcGN8zRSPufLY+hEWje2zR+Bjwglw+HRiD8lf4ZH0z7n/4l/VvaMzSN6SszUtNzccO0vLRFaQVpB9L+o2ucxEAESJ80iDSm16RvwIDr0twIa5yfdgUdpl/OiKWdUxuY0rhg8D8jKX48g5Q6j5KgMc07rQoG0z3Ijo6hpnFUY9o08jT+SD9Nlsb0+UDHXk3bTRA+TPuHorGQM70oY03aNkIw9Uj6LgbKAABqUyIb8oRZQQAAAABJRU5ErkJggg=="},2044:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAABpklEQVR4AZXTA4wdURQG4FPbtoLaURXVDWvFff8/XAS1jbA2o9q2bdu2PXff7t56ZnP7nXBwZ44kY0kFORfvuEL+T3JhnsdTrIOyC4m5JVmwlS/cGhjCD0MzizmO53e2FsF+7BJzVmcoa4CIX4zf2cf8tZp4h5Uqkwh9BFZFMYMCuMpLfn6JwxHuETMqE9fijVNN4uzaUOwpZjAEyuogaTiDj4dmFxNsi4Bj9RG58Q6HkAQdlpdcWMKhCl5i65IsegBy8QSC30Jxi4RBbpzGbRSVCJzAxxKGi/iJDSWCVYYvMEn+BRcKvaIHkLtx1y0if7Mb4DPmSCSO4FercdiNjTw/NKdEYAt+R18JgydcbvWwYkhAXw7jBE5mC9FQio+xQWWSMOyDz1BQCPiBz/gayq0hOjvs4r3wWuuuuUWSc6WfywW4KBpG8iuamK7wc4zUr7VEgL5ihs2g0vvplcYTnZ3h7j9UmdJ6twd3dXYmeIrzJA5jdHZm/GII2EXvSR8xh3ZQKOWU4zOdnSn05UNk4wGdnTn2wX0uxzednTm3Am/ithWTDKUAJ4PGV7E1GuwAAAAASUVORK5CYII="},2045:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAABg0lEQVR4Ab3QA+xdMRiG8e9v4yKco9negtmK7uKF79ue2QjmLZ7NcN7izLZt27a63lnnrmf6JQ379Gsrv9InR3fiCp7hAx5Sc3VI3Og6uMDLGMZWaMhzuNCjUFzY7S85EwUiSONSnFclxQWK4w77i2WS3DOLU7DWJImlSsKgonzWozDBlXtm8YFuJ+95uTAsJx91KYULHC9+vCp4OyRdPuIj1eir7Bw3JPqYW/IZTnEsG3curyvhApaxKU6JH1Wfz4ekfg5H4xQew8BgGdLYljvET9d8GJSRb3i5qmT8uzCM88WPDuGlri4/gTReVjH/eduxxST9NByN80OyfTPu7RmWH5gkDMAL1HbITJJX0ysb/6auGWzPdbjFFg5Z5wi32Qlv7boDg3uc1LWoW7afm1HQL491VXNdaUimiHPWL098/GmGAmzHHh36wwwHuNnL/T8Zoo6Zl8sdwTMLE3A4eGbhJtsHzyxcVbHgmaVG4hI7ogOOBcmshSl6EA/zOEchWwJ4B1wb0sszgAnlAAAAAElFTkSuQmCC"},3231:function(e,t,a){"use strict";a.r(t);var n=a(208),r=a.n(n),o=a(2),l=a.n(o),c=a(5),s=a(14),i=a(15),u=a(21),d=a(20),m=a(22),p=(a(1197),a(0)),f=a.n(p),A=a(11),g=a(29),b=a(16),h=a(17),v=a(23),w=a(1238),E=a(1164),O=a(83),C=a(304),y=(a(19),a(6)),j=a(156);a(1152);var k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).search=function(){},e.loadContracts=Object(c.a)(l.a.mark(function t(){var a,n,r=arguments;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:1,n=r.length>1&&void 0!==r[1]?r[1]:20,e.setState({loading:!0}),t.next=5,b.a.getContracts({confirm:0,limit:n,start:(a-1)*n}).then(function(t){var a=t.data,n=t.total,r=t.rangeTotal;a&&e.setState({contracts:a,loading:!1,total:n,rangeTotal:r})});case 5:case"end":return t.stop()}},t)})),e.customizedColumn=function(){var t=e.props.intl;return[{title:r()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,t,a){return f.a.createElement(v.a,null,f.a.createElement(h.a,{address:e,isContract:!0},e))}},{title:r()(t.formatMessage({id:"verifty_contract_result"})),dataIndex:"verify_status",key:"verify_status",align:"left",className:"ant_table _text_nowrap",render:function(e,n,o){return f.a.createElement("span",null,2==e?f.a.createElement("span",null,f.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1570)}),f.a.createElement("span",{className:"ml-1"}," ",r()(t.formatMessage({id:"contract_verifty_passed"})))):f.a.createElement("span",null,f.a.createElement("img",{style:{width:"20px",height:"20px"},src:a(1569)}),f.a.createElement("span",{style:{color:"rgb(216, 216, 216)"},className:"ml-1"},r()(t.formatMessage({id:"unverifty_passed"})))))}},{title:r()(t.formatMessage({id:"ContractName"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",render:function(e,t,a){return f.a.createElement("span",null,e||"-")}},{title:r()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"left",className:"ant_table",render:function(e,t,a){return f.a.createElement(j.b,{amount:e||0==e?parseInt(e)/y.C:0})}},{title:r()(t.formatMessage({id:"TxCount"})),dataIndex:"trxCount",key:"trxCount",align:"right",className:"ant_table",render:function(e,t,a){return f.a.createElement(A.c,{value:e})}}]},e.sunNetCustomizedColumn=function(){var t=e.props.intl;return[{title:r()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,t,a){return f.a.createElement(v.a,null,f.a.createElement(h.a,{address:e,isContract:!0},e))}},{title:r()(t.formatMessage({id:"ContractName"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",render:function(e,t,a){return f.a.createElement("span",null,e||"-")}},{title:r()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"left",className:"ant_table",render:function(e,t,a){return f.a.createElement(j.b,{amount:e||0==e?parseInt(e)/y.C:0})}},{title:r()(t.formatMessage({id:"TxCount"})),dataIndex:"trxCount",key:"trxCount",align:"right",className:"ant_table",render:function(e,t,a){return f.a.createElement(A.c,{value:e})}}]},e.state={contracts:[],total:0,rangeTotal:0,loading:!0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadContracts()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.contracts,n=t.total,r=t.loading,o=t.rangeTotal,l=this.props,c=(l.match,l.intl),s=y.t?this.customizedColumn():this.sunNetCustomizedColumn();c.formatMessage({id:"view_total"}),c.formatMessage({id:"contract_source_codes_found"});return"ar"===c.locale&&n+""+c.formatMessage({id:"contract_total"}),f.a.createElement("main",{className:"container header-overlap pb-3 token_black"},r&&f.a.createElement("div",{className:"loading-style"},f.a.createElement(O.b,null)),f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-md-12 table_pos"},n?f.a.createElement(w.a,{total:n,rangeTotal:o,typeText:"contract_source_codes_found",top:"10px",isQuestionMark:!1}):"",f.a.createElement(E.a,{bordered:!0,loading:r,column:s,data:a,total:n,onPageChange:function(t,a){e.loadContracts(t,a)}}))))}}]),t}(f.a.Component);var S={loadTokens:C.b};t.default=Object(g.connect)(function(e){return{}},S)(Object(A.h)(k))}}]);