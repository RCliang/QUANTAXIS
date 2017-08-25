webpackJsonp([2],{157:function(t,e,n){function a(t){n(501)}var i=n(9)(n(202),n(539),a,null,null);t.exports=i.exports},158:function(t,e,n){function a(t){n(503)}var i=n(9)(n(203),n(542),a,null,null);t.exports=i.exports},159:function(t,e,n){function a(t){n(507)}var i=n(9)(n(213),n(546),a,null,null);t.exports=i.exports},160:function(t,e,n){function a(t){n(510)}var i=n(9)(n(214),n(549),a,null,null);t.exports=i.exports},179:function(t,e,n){"use strict";var a=n(66),i=n(550),s=n(157),r=(n.n(s),n(158)),o=(n.n(r),n(159)),u=(n.n(o),n(160));n.n(u);a.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"homePage",component:n(157)},{path:"/sign",name:"signPage",component:n(159)},{path:"/personal",name:"personal",meta:{requireAuth:!0},component:n(158),children:[{path:"/personal/index",component:n(522)},{path:"/personal/notebook",component:n(525)},{path:"/personal/markdown",component:n(523)},{path:"/personal/monitor",component:n(524)},{path:"/personal/history/:id",name:"history",component:n(521)},{path:"/personal/shipane",component:n(527)},{path:"/personal/trade",component:n(529)},{path:"/personal/backtest",component:n(519)},{path:"/personal/stocklist",component:n(528)},{path:"/personal/capital",component:n(520)},{path:"/personal/analysis",component:n(517)},{path:"/personal/api",component:n(518)},{path:"/personal/setting",component:n(526)},{path:"/personal/visual/:id",name:"visual",component:n(530)}]},{path:"/start",name:"startPage",component:n(160)}]})},180:function(t,e){},181:function(t,e){},183:function(t,e,n){function a(t){n(509)}var i=n(9)(n(201),n(548),a,null,null);t.exports=i.exports},201:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}}},202:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home"}},203:function(t,e){},204:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a);e.default={data:function(){return{height:"500px",multiSelectable:!0,enableSelectAll:!1,message:"",messages:"",items:[""],total:180,current:1,showSizeChanger:!0}},methods:{info:function(t){var e=this,n=t;i.a.get("http://[::1]:3000/backtest/info?name="+n).then(function(t){e.items=t.data,console.log(e.items),e.length=e.items.length;var n=t.data[0].performance;console.log(n)}).catch(function(t){console.log(t)})},code:function(t){var e=this,n=t;i.a.get("http://[::1]:3000/backtest/info_code?code="+n).then(function(t){e.items=t.data,console.log(e.items),e.length=e.items.length;var n=t.data[0].performance;console.log(n)}).catch(function(t){console.log(t)})}}}},205:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a);e.default={data:function(){return{height:"800px",multiSelectable:!0,enableSelectAll:!1,message:this.$route.params.id,items:[""],acc:[""],total:180,current:1,showSizeChanger:!0}},methods:{query:function(){var t=this;console.log(this.message);var e=this.message;console.log(e),i.a.get("http://[::1]:3000/backtest/history?cookie="+e).then(function(e){t.items=e.data[0].history,t.acc=e.data}).catch(function(t){console.log(t)})}}}},206:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a);e.default={data:function(){return{itemd:{user:sessionStorage.user},items:[""]}},methods:{ready:function(){var t=this;i.a.get("http://[::1]:3000/backtest/info?name="+sessionStorage.user).then(function(e){t.items=e.data,console.log(t.items),t.length=t.items.length;var n=e.data[0].performance;console.log(n)}).catch(function(t){console.log(t)})}},mounted:function(){this.$nextTick(function(){this.ready()})}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(216),i=n.n(a),s=n(515),r=n.n(s);e.default={name:"markdown-editor",props:{value:String,previewClass:String,customTheme:{type:Boolean,default:function(){return!1}},configs:{type:Object,default:function(){return{}}}},ready:function(){this.initialize(),this.syncValue()},mounted:function(){this.initialize()},methods:{initialize:function(){var t={};i()(t,this.configs),t.element=t.element||this.$el.firstElementChild,t.initialValue=t.initialValue||this.value,this.simplemde=new r.a(t),t.renderingConfig&&t.renderingConfig.codeSyntaxHighlighting&&n.e(0).then(function(){var e=t.renderingConfig.highlightingTheme||"default";window.hljs=n(588),n(589)("./"+e+".css")}.bind(null,n)).catch(n.oe),this.customTheme||n(496);var e=this.previewClass||"";this.addPreviewClass(e),this.bindingEvents()},bindingEvents:function(){var t=this;this.simplemde.codemirror.on("change",function(){t.$emit("input",t.simplemde.value())})},addPreviewClass:function(t){var e=this.simplemde.codemirror.getWrapperElement(),n=document.createElement("div");e.nextSibling.className+=" "+t,n.className="editor-preview "+t,e.appendChild(n)},syncValue:function(){var t=this;this.simplemde.codemirror.on("change",function(){t.value=t.simplemde.value()})}},destroyed:function(){this.simplemde=null},watch:{value:function(t){t!==this.simplemde.value()&&this.simplemde.value(t)}}}},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a),s=n(65),r=n.n(s);e.default={data:function(){return{chart:null,data0:"monitor"}},methods:{drawline:function(t){this.chart=r.a.init(document.getElementById(t)),this.chart.showLoading(),this.chart.setOption({title:{text:this.data0},grid:{x:"5%",y:"15%",borderWidth:1},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},restore:{},saveAsImage:{}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:[{data:[],scale:!0}],yAxis:[{name:"price",max:"dataMax",min:"dataMin"}],legend:{data:[{name:"market"}],x:"left",top:"5%"},dataZoom:[{show:!0,realtime:!0,start:0,end:100},{type:"inside",realtime:!0,start:0,end:100}],series:[{name:"market",type:"candlestick",data:[]}]})},querybyname:function(t){var e=this,n="http://[::1]:3000/monitor/code?name="+t;i.a.get(n).then(function(n){e.chart.hideLoading(),e.data0=t;for(var a=n.data.record,i=[],s=[],r=0;r<a.length;r++){var o=[];o.push(parseFloat(a[r][1])),o.push(parseFloat(a[r][3])),o.push(parseFloat(a[r][4])),o.push(parseFloat(a[r][2])),i.push(o),s.push(a[r][0])}e.chart.setOption({title:{text:e.data0},series:{name:"market",type:"candlestick",data:i},xAxis:{data:s}})}).catch(function(t){console.log(t)})}},mounted:function(){this.$nextTick(function(){this.drawline("main")})}}},209:function(t,e){},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a);e.default={name:"shipan-e",data:function(){return{positions:[]}},methods:{query_positions:function(){i.a.get("http://[::1]:8888/positions").then(function(t){var e=t.data;console.log(e)})}},mounted:function(){this.$nextTick(function(){this.query_positions()})}}},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a);e.default={data:function(){return{height:"500px",items:[],time:{},cash:{}}},methods:{query_positions:function(){var t=this;i.a.get("http://[::1]:5000/trade/query/assets").then(function(e){var n=e.data;t.cash=n.cash;var a=n.stock;t.time=n.time,t.items=a,t.query_positions()}).catch(function(t){console.log(t)})}},mounted:function(){this.$nextTick(function(){this.query_positions()})}}},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),i=n.n(a),s=n(27),r=n.n(s);e.default={data:function(){return{chart:null,data0:this.$route.params.id,time:[],items:[{alpha:"loading.."}],toast:!1}},methods:{drawline:function(t){this.chart=i.a.init(document.getElementById(t)),this.chart.setOption({title:{text:this.data0},grid:{x:"5%",y:"15%",borderWidth:1},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:[{data:[],scale:!0},{data:[],scale:!0}],yAxis:[{},{name:"account",max:"dataMax",min:"dataMin"}],legend:{data:[{name:"assets"},{name:"benchmark"}],x:"left",top:"5%"},dataZoom:[{show:!0,realtime:!0,start:0,end:100}],series:[{name:"assets",type:"line",data:[],lineStyle:{normal:{color:"#c23531"}},areaStyle:{normal:{color:"#c23531",opacity:.3}},yAxisIndex:1},{name:"benchmark",type:"line",data:[],lineStyle:{normal:{color:"#2f4554"}},areaStyle:{normal:{color:"#2f4554",opacity:.3}},yAxisIndex:1}]})},ready:function(){var t=this,e=this.data0;r.a.get("http://[::1]:3000/backtest/info_cookie?cookie="+e).then(function(e){var n=e.data;n.start_time,n.end_time,n.total_returns;t.items[0].alpha=n.alpha.toFixed(3),t.items[0].beta=n.beta.toFixed(4),t.items[0].max_drop=n.max_drop.toFixed(3),t.items[0].sharpe=n.sharpe.toFixed(3),t.items[0].vol=n.vol.toFixed(5),t.items[0].annualized_returns=n.annualized_returns.toFixed(3),t.items[0].benchmark_annualized_returns=n.benchmark_annualized_returns.toFixed(3),t.items[0].benchmark_vol=n.benchmark_vol.toFixed(5),t.items[0].exist=n.exist,t.items[0].win_rate=n.win_rate.toFixed(3),console.log(t.items),t.chart.setOption({title:{text:n.strategy}});for(var a=n.benchmark_assets,i=n.total_date,s=n.trade_date,r=n.assets,o=0;o<i.length;o++)-1==s.indexOf(i[o])&&(s.splice(o,0,i[o]),r.splice(o,0,r[o-1]));t.chart.setOption({series:[{name:"benchmark",type:"line",data:a,lineStyle:{normal:{color:"#2f4554"}},areaStyle:{normal:{color:"#2f4554",opacity:.3}}},{name:"assets",type:"line",data:r,lineStyle:{normal:{color:"#c23531"}},areaStyle:{normal:{color:"#c23531",opacity:.3}}}],xAxis:{data:i,zlevel:1,gridIndex:0}})})},showToast:function(){var t=this;this.toast=!0,this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(function(){t.toast=!1},2e3)},hideToast:function(){this.toast=!1,this.toastTimer&&clearTimeout(this.toastTimer)}},mounted:function(){this.$nextTick(function(){this.drawline("main"),this.ready()})}}},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n.n(a);e.default={data:function(){return{value:"1",valuex:"username",topPopup:!1}},methods:{handleChange:function(t){this.value=t},open:function(t){this[t+"Popup"]=!0},close:function(t){this[t+"Popup"]=!1},reg:function(){var t=this,e=document.getElementsByClassName("mu-text-field-input")[0].value,n=document.getElementsByClassName("mu-text-field-input")[1].value,a="name="+e+"&password="+n;console.log(a),i.a.get("http://[::1]:3000/users/signup?"+a).then(function(e){console.log(e.data),"success"===e.data?t.open("top"):alert(e.data)}).catch(function(t){console.log(t)})},login:function(){var t=this,e=document.getElementsByClassName("mu-text-field-input")[0].value,n=document.getElementsByClassName("mu-text-field-input")[1].value,a="name="+e+"&password="+n;console.log(a),i.a.get("http://[::1]:3000/users/login?"+a).then(function(a){console.log(a.data),"success"===a.data&&(sessionStorage.user=e,sessionStorage.password=n,t.$router.push("/personal/index"))}).catch(function(t){console.log(t)})}},watch:{topPopup:function(t){var e=this;t&&setTimeout(function(){e.topPopup=!1},2e3)}}}},214:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"process",data:function(){return{activeStep:0}},computed:{content:function(){var t="";switch(this.activeStep){case 0:t="SETTING Environment git clone https://github.com/yutiansut/QUANTAXIS_SPIDER";break;case 1:t="powershell>install.ps1";break;case 2:t="powershell>start";break;default:t="fuck! 又 TM 出错了！！！"}return t},finished:function(){return this.activeStep>2}},methods:{handleNext:function(){this.activeStep++},handlePrev:function(){this.activeStep--},reset:function(){this.activeStep=0}}}},215:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(66),i=n(183),s=n.n(i),r=n(179),o=n(182),u=n.n(o),l=n(180),c=(n.n(l),n(181)),m=(n.n(c),n(65));n.n(m);a.default.config.productionTip=!1,a.default.use(u.a),r.a.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requireAuth})?sessionStorage.user?(console.log(sessionStorage.user),n()):n({path:"/sign",query:{redirect:t.fullPath}}):n()}),new a.default({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},496:function(t,e){},497:function(t,e){},498:function(t,e){},499:function(t,e){},500:function(t,e){},501:function(t,e){},502:function(t,e){},503:function(t,e){},504:function(t,e){},505:function(t,e){},506:function(t,e){},507:function(t,e){},508:function(t,e){},509:function(t,e){},510:function(t,e){},517:function(t,e,n){var a=n(9)(null,n(540),null,null,null);t.exports=a.exports},518:function(t,e,n){var a=n(9)(null,n(538),null,null,null);t.exports=a.exports},519:function(t,e,n){function a(t){n(504)}var i=n(9)(n(204),n(543),a,null,null);t.exports=i.exports},520:function(t,e,n){var a=n(9)(null,n(537),null,null,null);t.exports=a.exports},521:function(t,e,n){function a(t){n(497)}var i=n(9)(n(205),n(531),a,null,null);t.exports=i.exports},522:function(t,e,n){function a(t){n(506)}var i=n(9)(n(206),n(545),a,null,null);t.exports=i.exports},523:function(t,e,n){function a(t){n(498)}var i=n(9)(n(207),n(532),a,null,null);t.exports=i.exports},524:function(t,e,n){function a(t){n(502)}var i=n(9)(n(208),n(541),a,null,null);t.exports=i.exports},525:function(t,e,n){function a(t){n(505)}var i=n(9)(null,n(544),a,null,null);t.exports=i.exports},526:function(t,e,n){function a(t){n(500)}var i=n(9)(n(209),n(536),a,null,null);t.exports=i.exports},527:function(t,e,n){var a=n(9)(n(210),n(535),null,null,null);t.exports=a.exports},528:function(t,e,n){var a=n(9)(null,n(533),null,null,null);t.exports=a.exports},529:function(t,e,n){function a(t){n(499)}var i=n(9)(n(211),n(534),a,null,null);t.exports=i.exports},530:function(t,e,n){function a(t){n(508)}var i=n(9)(n(212),n(547),a,null,null);t.exports=i.exports},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:{name:"visual",params:{id:this.message}}}},[n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"账户表现",secondary:""}})],1),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"成交明细"},on:{click:function(e){t.query()}}}),t._v(" "),n("mu-divider")],1),t._v(" "),n("mu-table",{attrs:{height:t.height}},[n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("BACKTEST HISTORY")])],1)],1),t._v(" "),t._l(t.items,function(e){return[n("mu-tr",[n("mu-td"),t._v(" "),n("mu-td",[t._v("date")]),t._v(" "),n("mu-td",[t._v("code")]),t._v(" "),n("mu-td",[t._v("price")]),t._v(" "),n("mu-td",[t._v("towards")]),t._v(" "),n("mu-td",[t._v("amounts")]),t._v(" "),n("mu-td",[t._v("commission")])],1),t._v(" "),n("mu-tbody",[n("mu-tr",[n("mu-td",[t._v(t._s(e[0]))]),t._v(" "),n("mu-td",[t._v(t._s(e[1]))]),t._v(" "),n("mu-td",[t._v(t._s(e[2]))]),t._v(" "),n("mu-td",[t._v(t._s(e[3]))]),t._v(" "),n("mu-td",[t._v(t._s(e[4]))]),t._v(" "),n("mu-td",[t._v(t._s(e[7]))])],1)],1)]})],2)],1)},staticRenderFns:[]}},532:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-editor"},[n("textarea")])}]}},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> 股票池分析")])])}]}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("h2",{attrs:{align:"left"}},[t._v("> 实盘监控")]),t._v(" "),n("h3",{attrs:{align:"left"}},[t._v("最新时间 "+t._s(this.time.date)+" "+t._s(this.time.time))]),t._v(" "),n("mu-table",{attrs:{height:t.height,showCheckbox:!1}},[n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("资金帐号")]),t._v(" "),n("mu-th",[t._v("可用资金 ")]),t._v(" "),n("mu-th",[t._v("冻结资金")]),t._v(" "),n("mu-th",[t._v("在途资金 ")]),t._v(" "),n("mu-th",[t._v("可取资金")])],1)],1),t._v(" "),n("mu-tbody",[n("tr",[n("mu-td",[t._v(t._s(this.cash.account_id))]),t._v(" "),n("mu-td",[t._v(t._s(this.cash.available))]),t._v(" "),n("mu-td",[t._v(t._s(this.cash.freeze))]),t._v(" "),n("mu-td",[t._v(t._s(this.cash.on_way))]),t._v(" "),n("mu-td",[t._v(t._s(this.cash.withdraw))])],1)]),t._v(" "),n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("证券代码")]),t._v(" "),n("mu-th",[t._v("证券名称 ")]),t._v(" "),n("mu-th",[t._v("持仓量 ")]),t._v(" "),n("mu-th",[t._v("可卖数量 ")]),t._v(" "),n("mu-th",[t._v("当前价")]),t._v(" "),n("mu-th",[t._v(" 最新市值")]),t._v(" "),n("mu-th",[t._v(" 成本价")]),t._v(" "),n("mu-th",[t._v("浮动盈亏 ")]),t._v(" "),n("mu-th",[t._v("盈亏比例(%) ")]),t._v(" "),n("mu-th",[t._v("昨日价格 ")])],1),t._v(" "),t._l(t.items,function(e){return[n("mu-tbody",[n("mu-tr",[n("mu-td",[t._v(t._s(e.code))]),t._v(" "),n("mu-td",[t._v(t._s(e.name))]),t._v(" "),n("mu-td",[t._v(t._s(e.hold))]),t._v(" "),n("mu-td",[t._v(t._s(e.sell_available))]),t._v(" "),n("mu-td",[t._v(t._s(e.price_now))]),t._v(" "),n("mu-td",[t._v(t._s(e.value_now))]),t._v(" "),n("mu-td",[t._v(t._s(e.price_buy))]),t._v(" "),n("mu-td",[t._v(t._s(e.pnl_float))]),t._v(" "),n("mu-td",[t._v(t._s(e.pnl_ratio))]),t._v(" "),n("mu-td",[t._v(t._s(e.price_yesterday))])],1)],1)]})],2)],1)],1)},staticRenderFns:[]}},535:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("实盘易")]),t._v(" "),n("mu-table",[t._v("手动下单")]),t._v(" "),n("mu-th",[t._v("s")])],1)},staticRenderFns:[]}},536:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-menu",{staticClass:"demo-menu-divider"},[n("mu-menu-item",{attrs:{title:"个人设置"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"资金绑定"}}),t._v(" "),n("mu-menu-item",{attrs:{title:"账户设置"}}),t._v(" "),n("mu-divider"),t._v(" "),n("mu-menu-item",{attrs:{title:"帮助"}})],1)],1)},staticRenderFns:[]}},537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> CAPITAL")])])}]}},538:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> APIS")])])}]}},539:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title"}},[n("h1",[t._v("#QUANTAXIS")]),t._v(" "),n("h2",[t._v("Intergrated Quantitative System | WebKit Visualization Soulution")])])}]}},540:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> 复盘分析")])])}]}},541:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> 日线数据查看")]),t._v(" "),n("input",{attrs:{placeholder:"股票代码:",lazy:""},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.querybyname(e.currentTarget.value)}}}),t._v(" "),n("div",{attrs:{id:"main"}})])},staticRenderFns:[]}},542:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"personal"}},[n("div",{staticClass:"welcome"},[n("mu-list",[n("router-link",{attrs:{to:"/personal/index"}},[n("mu-list-item",{attrs:{title:"个人中心"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/notebook"}},[n("mu-list-item",{attrs:{title:"NOTEBOOK"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/backtest"}},[n("mu-list-item",{attrs:{title:"模拟回测"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/monitor"}},[n("mu-list-item",{attrs:{title:"日线数据"}})],1)],1),t._v(" "),n("mu-divider"),t._v(" "),n("mu-list",[n("router-link",{attrs:{to:"/personal/trade"}},[n("mu-list-item",{attrs:{title:"实盘监控"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/analysis"}},[n("mu-list-item",{attrs:{title:"复盘分析"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/stocklist"}},[n("mu-list-item",{attrs:{title:"股票池"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/capital"}},[n("mu-list-item",{attrs:{title:"资金曲线"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/setting"}},[n("mu-list-item",{attrs:{title:"账户设置"}})],1),t._v(" "),n("router-link",{attrs:{to:"/personal/api"}},[n("mu-list-item",{attrs:{title:"APIS"}})],1),t._v(" "),n("mu-divider")],1)],1),t._v(" "),n("div",{attrs:{id:"view"}},[n("router-view")],1)])},staticRenderFns:[]}},543:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("li",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"在此输入策略的用户名",lazy:""},domProps:{value:t.message},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.info(e.currentTarget.value)},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.messages,expression:"messages"}],attrs:{placeholder:"在此输入策略涉及的股票代码",lazy:""},domProps:{value:t.messages},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.code(e.currentTarget.value)},input:function(e){e.target.composing||(t.messages=e.target.value)}}})]),t._v(" "),n("mu-table",{attrs:{height:t.height}},[n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("user")]),t._v(" "),n("mu-th",[t._v("strategy")]),t._v(" "),n("mu-th",[t._v("code")]),t._v(" "),n("mu-th",[t._v("start")]),t._v(" "),n("mu-th",[t._v("end")]),t._v(" "),n("mu-th",[t._v("profit")]),t._v(" "),n("mu-th",[t._v("alpha")]),t._v(" "),n("mu-th",[t._v("annualized_returns")])],1)],1),t._v(" "),t._l(t.items,function(e){return[n("mu-tbody",[n("mu-tr",[n("router-link",{attrs:{to:{name:"history",params:{id:e.account_cookie}}}},[n("mu-td",[t._v(t._s(e.user))]),t._v(" "),n("mu-td",[t._v(t._s(e.strategy))]),t._v(" "),n("mu-td",[t._v(t._s(e.stock_list))]),t._v(" "),n("mu-td",[t._v(t._s(e.start_time))]),t._v(" "),n("mu-td",[t._v(t._s(e.end_time))]),t._v(" "),n("mu-td",[t._v(t._s(e.profit))]),t._v(" "),n("mu-td",[t._v(t._s(e.alpha))]),t._v(" "),n("mu-td",[t._v(t._s(e.annualized_returns))])],1)],1)],1)]})],2)],1)},staticRenderFns:[]}},544:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> NOTEBOOK")]),t._v(" "),n("div",{staticClass:"container"},[n("mu-flat-button",{staticClass:"demo-flat-button",attrs:{label:"NEW"}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-flat-button",attrs:{label:"MODIFY"}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-flat-button",attrs:{label:"DELETE"}})],1),t._v(" "),n("mu-table",{ref:"table",attrs:{multiSelectable:"",enableSelectAll:""}},[n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("ID")]),t._v(" "),n("mu-th",[t._v("Name")]),t._v(" "),n("mu-th",[t._v("last modify time")])],1)],1),t._v(" "),n("mu-tbody",[n("mu-tr",[n("mu-td",[t._v("1")]),t._v(" "),n("mu-td",[t._v("John Smith")]),t._v(" "),n("mu-td",[t._v("Employed")])],1)],1)],1)],1)},staticRenderFns:[]}},545:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("div",{attrs:{id:"logo"}},[n("mu-list",[n("h2",{attrs:{align:"left"}},[t._v("> Hi! "+t._s(t.itemd.user))])])],1),t._v(" "),n("div",{attrs:{id:"personal-content"}},[n("ul",[n("mu-table",{attrs:{height:t.height}},[t._l(t.items,function(e){return[n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("strategy")]),t._v(" "),n("mu-th",[t._v("start")]),t._v(" "),n("mu-th",[t._v("end")]),t._v(" "),n("mu-th",[t._v("annualized_returns")])],1)],1),t._v(" "),n("mu-tbody",[n("mu-tr",[n("router-link",{attrs:{to:{name:"history",params:{id:e.account_cookie}}}},[n("mu-td",[t._v(t._s(e.strategy))]),t._v(" "),n("mu-td",[t._v(t._s(e.start_time))]),t._v(" "),n("mu-td",[t._v(t._s(e.end_time))]),t._v(" "),n("mu-td",[t._v(t._s(e.annualized_returns))])],1)],1)],1)]})],2),t._v(" "),n("li",[t._v("爬虫状况")]),t._v(" "),n("mu-table",[n("mu-thead",[n("mu-tr",[n("mu-th",[t._v("ID")]),t._v(" "),n("mu-th",[t._v("Name")]),t._v(" "),n("mu-th",[t._v("Status")])],1)],1),t._v(" "),n("mu-tbody",[n("mu-tr",[n("mu-td",[t._v("S6001C0001")]),t._v(" "),n("mu-td",[t._v("华尔街中文网爬虫")]),t._v(" "),n("mu-td",[t._v("Stopped")])],1)],1)],1),t._v(" "),n("li",[t._v("回测概览")])],1)])])},staticRenderFns:[]}},546:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sign"}},[t._m(0),t._v(" "),n("div",{attrs:{id:"textbox"}},[n("div"),t._v(" "),n("mu-text-field",{attrs:{label:"账户",hintText:"请输入用户名",type:"password",labelFloat:""},model:{value:t.valuex,callback:function(e){t.valuex=e},expression:"valuex"}}),t._v(" "),n("br"),t._v(" "),n("mu-text-field",{attrs:{label:"密码",hintText:"请输入密码",type:"password",labelFloat:""}}),t._v(" "),n("br"),t._v(" "),n("mu-raised-button",{attrs:{label:"注册"},on:{click:function(e){t.reg()}}}),t._v(" "),n("mu-raised-button",{attrs:{label:"登陆"},on:{click:function(e){t.login()}}})],1),t._v(" "),n("mu-popup",{attrs:{position:"top",overlay:!1,popupClass:"demo-popup-top",open:t.topPopup}},[t._v("\n    注册成功\n  ")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title"}},[n("h1",[t._v("#USER")]),t._v(" "),n("h2",[t._v("Welcome to QUANTAXIS")])])}]}},547:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_content"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("router-link",{attrs:{to:{name:"history",params:{id:this.data0}}}},[n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"成交明细",primary:""}})],1),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"行情数据",secondary:""},on:{click:function(e){t.ready()}}}),t._v(" "),n("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"说明"},on:{click:t.showToast}}),t._v(" "),t.toast?n("mu-toast",{attrs:{message:"此版本仅适用于0.4.0-alpha/beta的回测演示"},on:{close:t.hideToast}}):t._e(),t._v(" "),n("mu-divider")],1),t._v(" "),n("div",[n("mu-table",[n("mu-th",[t._v("alpha")]),t._v(" "),n("mu-th",[t._v("beta")]),t._v(" "),n("mu-th",[t._v("sharpe")]),t._v(" "),n("mu-th",[t._v("最大回撤")]),t._v(" "),n("mu-th",[t._v("持续期")]),t._v(" "),t._l(t.items,function(e){return[n("mu-tbody",[n("mu-td",[t._v(t._s(e.alpha))]),t._v(" "),n("mu-td",[t._v(t._s(e.beta))]),t._v(" "),n("mu-td",[t._v(t._s(e.sharpe))]),t._v(" "),n("mu-td",[t._v(t._s(e.max_drop))]),t._v(" "),n("mu-td",[t._v(t._s(e.exist))])],1)]})],2),t._v(" "),n("mu-table",[n("mu-th",[t._v("年化收益")]),t._v(" "),n("mu-th",[t._v("波动率")]),t._v(" "),n("mu-th",[t._v("Benchmark年化收益")]),t._v(" "),n("mu-th",[t._v("Benchmark波动率")]),t._v(" "),n("mu-th",[t._v("胜率")]),t._v(" "),t._l(t.items,function(e){return[n("mu-tbody",[n("mu-td",[t._v(t._s(e.annualized_returns))]),t._v(" "),n("mu-td",[t._v(t._s(e.vol))]),t._v(" "),n("mu-td",[t._v(t._s(e.benchmark_annualized_returns))]),t._v(" "),n("mu-td",[t._v(t._s(e.benchmark_vol))]),t._v(" "),n("mu-td",[t._v(t._s(e.win_rate))])],1)]})],2)],1),t._v(" "),t._m(1),t._v(" "),n("div",{attrs:{id:"main"}}),t._v(" "),t._m(2),t._v(" "),n("div")])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> 业绩表现")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> 资金曲线")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{align:"left"}},[t._v("> 组合分析")])])}]}},548:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mu-appbar",{attrs:{title:"Title"}},[n("mu-flat-button",{staticClass:"quantaxislogo",staticStyle:{"-webkit-app-region":"drag"},attrs:{color:"white",disable:""},slot:"left"},[t._v("QUANTAXIS")]),t._v(" "),n("mu-raised-button",{attrs:{label:"MENU"},on:{click:function(e){t.toggle()}},slot:"right"}),t._v(" "),n("mu-drawer",{attrs:{right:"",open:t.open},on:{close:function(e){t.toggle()}}},[n("mu-appbar",{attrs:{title:"MENU"}}),t._v(" "),n("mu-list",[n("router-link",{attrs:{to:"/personal/index"}},[n("mu-list-item",{attrs:{title:"USER"}})],1),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("mu-list-item",{attrs:{title:"HOME"}})],1),t._v(" "),n("router-link",{attrs:{to:"/start"}},[n("mu-list-item",{attrs:{title:"START"}})],1),t._v(" "),n("mu-list-item",{attrs:{title:"Close"},nativeOn:{click:function(e){t.open=!1}}})],1)],1)],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},549:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-step-container"},[t._m(0),t._v(" "),n("div",{attrs:{id:"content"}},[n("mu-stepper",{attrs:{activeStep:t.activeStep,orientation:"vertical"}},[n("mu-step",[n("mu-step-label",[t._v("\n                    下载|Download\n                ")]),t._v(" "),n("mu-step-content",[n("p",[t._v("\n                        Github fork & clone\n                    ")]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"NEXT",primary:""},on:{click:t.handleNext}})],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n                    安装依赖项|Install Dependences\n                ")]),t._v(" "),n("mu-step-content",[n("p",[t._v("\n                        npm run install | npm run Xweb\n                    ")]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"NEXT",primary:""},on:{click:t.handleNext}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-step-button",attrs:{label:"BACK"},on:{click:t.handlePrev}})],1)],1),t._v(" "),n("mu-step",[n("mu-step-label",[t._v("\n                    启动可视化网站|Start Journey\n                ")]),t._v(" "),n("mu-step-content",[n("p",[t._v("\n                        npm run all | npm run Xweb\n                    ")]),t._v(" "),n("mu-raised-button",{staticClass:"demo-step-button",attrs:{label:"Finish",primary:""},on:{click:t.handleNext}}),t._v(" "),n("mu-flat-button",{staticClass:"demo-step-button",attrs:{label:"BACK"},on:{click:t.handlePrev}})],1)],1)],1),t._v(" "),t.finished?n("p",[t._v("\n            都完成啦!\n            "),n("a",{attrs:{href:"javascript:;"},on:{click:t.reset}},[t._v("点这里")]),t._v("访问教程\n        ")]):t._e()],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title"}},[n("h1",[t._v("#Start")]),t._v(" "),n("h2",[t._v("Only Three Steps,Start your QUANTAXIS")])])}]}},585:function(t,e){}},[215]);