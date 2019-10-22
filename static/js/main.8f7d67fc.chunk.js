(window.webpackJsonpcounter=window.webpackJsonpcounter||[]).push([[0],{11:function(e,t,n){e.exports={number:"Number_number__3YlPB",redMode:"Number_redMode__27qco",alertDisplay:"Number_alertDisplay__33DNi"}},12:function(e,t,n){},14:function(e,t,n){e.exports={console:"Console_console__34U2R",disabled:"Console_disabled__3OMmz"}},19:function(e,t,n){e.exports={terminal:"Terminal_terminal__3dV-6"}},2:function(e,t,n){e.exports={reductionMode:"SettingsBar_reductionMode__2ZlfJ",btn:"SettingsBar_btn__M9xV5",console:"SettingsBar_console__2QZ2Q",text:"SettingsBar_text__2DugV",slidecontainer:"SettingsBar_slidecontainer__3u9gh",slider:"SettingsBar_slider__3ikcm",alert:"SettingsBar_alert__3aL7-"}},23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),u=n.n(o),c=(n(28),n(5)),i=n(7),s=n(6),l=n(8),d=(n(12),n(18)),p=n(11),m=n.n(p),b=function(e){return a.a.createElement("span",{className:!0===e.reductionMode?m.a.redMode:!0===e.alertDisplay?m.a.alertDisplay:m.a.number},e.number)},E=n(19),C=n.n(E),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).check=function(){n.props.count===n.props.maxCount&&n.props.stopTimerThunk()},n.render=function(){var e=n.countDisplay().map(function(e){return a.a.createElement(b,{number:e,reductionMode:n.props.reductionMode,alertDisplay:n.props.alertDisplay})});return a.a.createElement("div",{className:C.a.terminal},e)},n}return Object(l.a)(t,e),Object(d.a)(t,[{key:"countDisplay",value:function(){var e=Array(4).fill(0),t=Array.from(this.props.count.toString()).reverse();return e.forEach(function(e,n,r){var a=t[n];r[n]=a||0}),e.reverse()}}]),t}(a.a.Component),S=n(14),f=n.n(S),_=function(e){var t=function(){return e.reductionMode?f.a.disabled:f.a.console};return e.count>=e.maxCount&&e.stopTimerThunk(),a.a.createElement("div",null,a.a.createElement("div",{className:t()},a.a.createElement("button",{disabled:e.reductionMode,onClick:e.increaseCount},"+"),a.a.createElement("button",{disabled:e.reductionMode,onClick:function(){e.resetCount(),e.stopTimerThunk()}},"Reset"),a.a.createElement("button",{disabled:e.reductionMode,onClick:e.decreaseCount},"-")),a.a.createElement("div",{className:t()},a.a.createElement("button",{disabled:e.reductionMode,onClick:function(){e.increaseSpeed(),e.stopTimerThunk()}},"<<="),a.a.createElement("span",null,e.timerSpeed/1e3," s"),a.a.createElement("button",{disabled:e.reductionMode,onClick:function(){e.decreaseSpeed(),e.stopTimerThunk()}},"=>>"),!e.timerOn&&a.a.createElement("button",{disabled:e.reductionMode,onClick:e.timerOn?"":e.runTimerThunk},"Start"),e.timerOn&&a.a.createElement("button",{disabled:e.reductionMode,onClick:e.stopTimerThunk},"Stop")))},M=n(2),N=n.n(M),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={countSetter:"MIN",reductionNumber:0,inputOnNumbers:n.props.minCount,alert:!1,alertMessage:""},n.onInputChange=function(e){var t=e.target.value;"MIN"===n.state.countSetter?t>=-999&&t<=n.props.maxCount?n.setState({inputOnNumbers:t,alert:!1}):n.setState({inputOnNumbers:t,alert:!0,alertMessage:"count not less -999 or max count"}):"MAX"===n.state.countSetter&&(t<=9999&&t>=n.props.minCount?n.setState({inputOnNumbers:t,alert:!1}):n.setState({inputOnNumbers:t,alert:!0,alertMessage:"count not more 9999 or max count"}))},n.onSetClick=function(){"MIN"!==n.state.countSetter||n.state.alert?"MAX"!==n.state.countSetter||n.state.alert?n.setState({alert:!0}):n.props.setMaxBorderOfCount(n.state.inputOnNumbers):n.props.setMinBorderOfCount(n.state.inputOnNumbers)},n.countSetterChange=function(){"MIN"===n.state.countSetter?n.setState({countSetter:"MAX",inputOnNumbers:n.props.maxCount}):n.setState({countSetter:"MIN",inputOnNumbers:n.props.minCount})},n.redactionModeChanger=function(e){e.target.value<1&&!n.state.alert?(n.props.changeMode(!1),n.setState({reductionNumber:0})):e.target.value>=1?(n.props.changeMode(!0),n.props.stopTimerThunk(),n.setState({reductionNumber:1})):n.setState({alert:!0})},n.render=function(){return a.a.createElement("div",{className:n.props.reductionMode?N.a.reductionMode:N.a.console},a.a.createElement("input",{className:N.a.slider,onChange:n.redactionModeChanger,type:"range",min:0,max:1,value:n.state.reductionNumber}),a.a.createElement("div",{className:n.state.alert?N.a.alert:""},n.state.alert&&a.a.createElement("p",null,a.a.createElement("span",null,n.state.alertMessage)),a.a.createElement("p",null,a.a.createElement("span",null,"min = ",n.props.minCount," ")),a.a.createElement("p",null,a.a.createElement("span",null,"max = ",n.props.maxCount," ")),a.a.createElement("input",{disabled:!n.props.reductionMode,value:n.state.inputOnNumbers,onChange:n.onInputChange,className:N.a.text,type:"number"}),a.a.createElement("button",{disabled:!n.props.reductionMode||n.state.alert,className:N.a.btn,onClick:n.onSetClick},"set")),a.a.createElement("div",null,"MAX"===n.state.countSetter&&a.a.createElement("button",{disabled:!n.props.reductionMode,className:N.a.btn,onClick:n.countSetterChange},"max"),"MIN"===n.state.countSetter&&a.a.createElement("button",{disabled:!n.props.reductionMode,className:N.a.btn,onClick:n.countSetterChange},"min")))},n}return Object(l.a)(t,e),t}(a.a.Component),y=n(3),T=Object(y.b)(function(e){return{count:e.counterReducer.count,reductionMode:e.counterReducer.reductionMode,alertDisplay:e.counterReducer.alertDisplay}},{})(O),g=n(21);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(g.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D,k={count:0,timerOn:!1,maxCount:99,minCount:-44,timerSpeed:500,reductionMode:!1,alertDisplay:!1},j=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DECREASE_COUNT":var r=t.count-1;return r>=t.minCount?R({},t,{count:r,alertDisplay:!1}):R({},t,{alertDisplay:!0});case"CHANGE_MODE":return R({},t,{reductionMode:n.boolean});case"RESET_COUNT":return t.minCount>0?R({},t,{count:t.minCount,alertDisplay:!1}):t.maxCount<=0?R({},t,{count:t.maxCount,alertDisplay:!1}):R({},t,{count:0,alertDisplay:!1});case"SET_COUNT_MIN_BORDER":return n.count>=t.count?R({},t,{count:parseInt(n.count),minCount:n.count}):R({},t,{minCount:n.count});case"SET_COUNT_MAX_BORDER":return n.count<=t.count?R({},t,{count:parseInt(n.count)}):R({},t,{maxCount:n.count});case"START_TIMER":return R({},t,{timerOn:!0});case"STOP_TIMER":return R({},t,{timerOn:!1});case"INCREASE_SPEED":return R({},t,{timerSpeed:2*t.timerSpeed});case"DECREASE_SPEED":return R({},t,{timerSpeed:t.timerSpeed/2});case"INCREASE_COUNT":return(e=t.count+1)<=t.maxCount?R({},t,{count:parseInt(e),alertDisplay:!1}):R({},t,{alertDisplay:!0,timerOn:!1});default:return t}},x=function(){return{type:"INCREASE_COUNT"}},A=function(){return function(e){e({type:"STOP_TIMER"}),clearInterval(D)}},I=Object(y.b)(function(e){return{reductionMode:e.counterReducer.reductionMode,timerOn:e.counterReducer.timerOn,timerSpeed:e.counterReducer.timerSpeed}},{increaseCount:x,decreaseCount:function(){return{type:"DECREASE_COUNT"}},increaseSpeed:function(){return{type:"INCREASE_SPEED"}},decreaseSpeed:function(){return{type:"DECREASE_SPEED"}},resetCount:function(){return{type:"RESET_COUNT"}},runTimerThunk:function(){return function(e,t){var n=t().counterReducer.timerSpeed;e({type:"START_TIMER"}),D=setInterval(function(){e({type:"INCREASE_COUNT"})},n)}},stopTimerThunk:A})(_),w=Object(y.b)(function(e){return{minCount:e.counterReducer.minCount,maxCount:e.counterReducer.maxCount,reductionMode:e.counterReducer.reductionMode,count:e.counterReducer.count}},{changeMode:function(e){return{type:"CHANGE_MODE",boolean:e}},setMaxBorderOfCount:function(e){return{type:"SET_COUNT_MAX_BORDER",count:e}},setMinBorderOfCount:function(e){return{type:"SET_COUNT_MIN_BORDER",count:e}},stopTimerThunk:A})(h),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("span",null,a.a.createElement("h1",null,"Counter by Benedikt"))),a.a.createElement(T,null),a.a.createElement(I,null),a.a.createElement(w,null))},n}return Object(l.a)(t,e),t}(a.a.Component),P=n(9),U=n(22),X=Object(P.c)({counterReducer:j}),J=Object(P.d)(X,Object(P.a)(U.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(y.a,{store:J},a.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.8f7d67fc.chunk.js.map