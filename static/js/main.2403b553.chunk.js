(this.webpackJsonpcolors=this.webpackJsonpcolors||[]).push([[0],{12:function(o,e,r){},13:function(o,e,r){"use strict";r.r(e);var l=r(2),t=r(3),n=r(6),c=r(5),a=r(0),h=r.n(a),i=r(4),s=r.n(i),u=[{color:"AliceBlue",hex:"#F0F8FF"},{color:"BurlyWood",hex:"#DEB887"},{color:"Chartreuse",hex:"#7FFF00"},{color:"Cyan",hex:"#00FFFF"},{color:"DarkGoldenRod",hex:"#B8860B"},{color:"DarkOrange",hex:"#FF8C00"},{color:"DeepSkyBlue",hex:"#00BFFF"},{color:"GreenYellow",hex:"#ADFF2F"},{color:"IndianRed",hex:"#CD5C5C"},{color:"Khaki",hex:"#F0E68C"},{color:"LawnGreen",hex:"#7CFC00"},{color:"LightPink",hex:"#FFB6C1"},{color:"LightSlateGrey",hex:"#778899"},{color:"MediumPurple",hex:"#9370DB"},{color:"Navy",hex:"#000080"},{color:"Orange",hex:"#FFA500"},{color:"PaleVioletRed",hex:"#DB7093"},{color:"RebeccaPurple",hex:"#663399"},{color:"Red",hex:"#FF0000"},{color:"RoyalBlue",hex:"#4169E1"},{color:"Silver",hex:"#C0C0C0"},{color:"SlateBlue",hex:"#6A5ACD"},{color:"Tan",hex:"#D2B48C"},{color:"Turquoise",hex:"#40E0D0"},{color:"Violet",hex:"#EE82EE"},{color:"White",hex:"#FFFFFF"},{color:"Yellow",hex:"#FFFF00"}],F=function(){return Promise.resolve(u[Math.floor(Math.random()*u.length)])},x=function(o){var e=o.inputColor,r=o.fontColor,l=o.getNewColor;return h.a.createElement("div",{className:"colorbox",style:{backgroundColor:e},onClick:function(){return l()}},h.a.createElement("span",{style:{color:r}},"Tap Me"))},C=(r(12),function(o){Object(n.a)(r,o);var e=Object(c.a)(r);function r(){var o;Object(l.a)(this,r);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(o=e.call.apply(e,[this].concat(n))).state={color:"Red",hex:"#FF0000",fontColor:"white"},o.getRandomColor=function(){F().then((function(e){o.setState((function(o){if(o.color!==e.color){var r=e.hex.substring(1),l=parseInt(r,16),t="white";return.2126*(l>>16&255)+.7152*(l>>8&255)+.0722*(l>>0&255)>128&&(t="black"),console.log(t),{color:e.color,hex:e.hex,fontColor:t}}return{color:"Blue",hex:"#0000FF",fontColor:"white"}}))}))},o}return Object(t.a)(r,[{key:"componentDidMount",value:function(){this.getRandomColor()}},{key:"render",value:function(){var o=this;return h.a.createElement("div",{className:"box"},h.a.createElement(x,{inputColor:this.state.color,fontColor:this.state.fontColor,getNewColor:function(){return o.getRandomColor()}}),h.a.createElement("br",null),"Color displayed is ",this.state.color," (",this.state.hex,").",h.a.createElement("br",null),"Get list of available colors ",h.a.createElement("a",{href:"https://www.w3schools.com/colors/colors_names.asp",target:"_blank"},"here"))}}]),r}(a.Component));s.a.render(h.a.createElement(C,null),document.getElementById("root"))},7:function(o,e,r){o.exports=r(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2403b553.chunk.js.map