(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(3),o=a.n(s),l=(a(23),a(15)),c=a(11),i=a(12),u=a(16),m=a(13),d=a(17),h=a(5),g=(a(25),a(27),a(4)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).startAnimationFunction=function(){var e=Object(h.a)(Object(h.a)(a));a.timer=setTimeout(function(){e.setState({showSelected:!1}),clearTimeout(e.timer)},3e3)},a.createMap=function(e){return a.state.numbersArray.map(function(t){var n="1rem";return n=a.state.numbersArray.length>100?"1rem":a.state.numbersArray.length<100&&a.state.numbersArray.length>15?"2rem":"3rem",r.a.createElement("div",{key:t,"data-tag":t,onClick:function(e){var t=Number(e.target.getAttribute("data-tag")),n=a.state.numbersArray.filter(function(e){return e!==t});a.setState({showSelected:!0,selectedValue:t,numbersArray:n},function(){a.startAnimationFunction()})},className:"circle",style:{width:e+"vh",height:e+"vh"}},r.a.createElement("span",{style:{fontSize:n,pointerEvents:"none"}},t))})},a.onBallsChange=function(e){a.setState({entered:Number(e.target.value)})},a.onKeyPressed=function(e){if(65===e.keyCode)a.toggle();else if(85===e.keyCode&&0!==a.state.selectedValue){var t=a.state.numbersArray.findIndex(function(e){return e>a.state.selectedValue});if(-1!==t){var n=a.state.numbersArray;n.splice(t,0,a.state.selectedValue),a.setState({numbersArray:n})}}},a.toggle=function(){a.setState({modal:!a.state.modal})},a.nearest_sq=function(e){return Math.pow(Math.round(Math.sqrt(e)),2)},a.state={modal:!1,entered:0,lastEntered:0,itemsPerRow:10,selectedValue:0,showSelected:!1,numbersArray:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=0;t=this.nearest_sq(this.state.numbersArray.length);var a=100/((t=Math.sqrt(t))+1),n="repeat("+t+", 1fr)";return r.a.createElement("div",{className:"App",onKeyDown:this.onKeyPressed,tabIndex:"0",style:{display:"grid",gridTemplateColumns:n,gridAutoRows:a+"vh"}},this.createMap(a),r.a.createElement("div",{className:this.state.showSelected?"selectedBall":"selectedStationary"},r.a.createElement("span",null,this.state.selectedValue)),r.a.createElement(g.c,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(g.f,{toggle:this.toggle},"How many lottery Balls to add?"),r.a.createElement(g.d,null,r.a.createElement(g.b,{onChange:this.onBallsChange})),r.a.createElement(g.e,null,r.a.createElement(g.a,{color:"primary",onClick:function(){var t=[];console.log("last entered:",e.state.lastEntered,e.state.entered);for(var a=e.state.lastEntered+1;a<=e.state.entered;a++)t.push(a);console.log("get merge:",e.state.numbersArray,t),e.setState({numbersArray:Object(l.a)(e.state.numbersArray).concat(t),lastEntered:e.state.entered}),e.toggle()}},"Submit"),r.a.createElement(g.a,{color:"primary",onClick:this.toggle},"Cancel"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.5961d62d.chunk.js.map