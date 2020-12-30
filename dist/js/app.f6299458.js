(function(t){function e(e){for(var r,s,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"4aa6":function(t,e,a){"use strict";a("997b")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Index")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Smart Meter Simulator")]),a("div",{staticClass:"settings"},[a("input",{ref:"serviceUrl",attrs:{id:"service-url",type:"url",value:"http://localhost:8080/meters/:ID/reading"},on:{input:t.validate}}),a("span",{staticClass:"help-text"},[t._v("URL des Log-Services mit API-Endpoint.")]),a("button",{attrs:{id:"add-meter",disabled:""},on:{click:t.addMeter}},[t._v("Add Meter")])]),a("div",{staticClass:"meter-container"},t._l(t.meters,(function(e){return a("SmartMeterSimulator",{key:e.id,attrs:{meter:e,"service-url":t.serviceUrl,remove:t.removeMeter}})})),1)])},o=[],l=(a("4de4"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"smart-meter"},[a("header",[a("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},on:{click:function(e){t.contentVisible=!t.contentVisible}}},[t._v("SmartMeter: "+t._s(t.meter.id))]),a("span",[t._v("Total: "+t._s(t.wattage.toLocaleString("de-DE"))+" W")]),a("button",{on:{click:t.removeMeter}},[t._v("-")])]),a("div",{staticClass:"content",class:{hidden:!t.contentVisible}},[a("div",{staticClass:"meter-settings"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"meter-id-"+t.meter.id}},[t._v("ID")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.meterId,expression:"meterId",modifiers:{number:!0}}],attrs:{name:"meter-id-"+t.meter.id,id:"meter-id-"+t.meter.id,type:"number",min:"1"},domProps:{value:t.meterId},on:{input:function(e){e.target.composing||(t.meterId=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"auth-key-"+t.meter.id}},[t._v("Auth Key")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.authKey,expression:"authKey"}],attrs:{name:"auth-key-"+t.meter.id,id:"auth-key-"+t.meter.id,type:"text"},domProps:{value:t.authKey},on:{input:[function(e){e.target.composing||(t.authKey=e.target.value)},t.enableLogButton]}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"log-interval-"+t.meter.id}},[t._v("Log Interval")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.intervalValue,expression:"intervalValue",modifiers:{number:!0}}],staticClass:"log-interval",attrs:{name:"log-interval",id:"log-interval-"+t.meter.id,type:"range",min:"0.1",max:"10",step:"0.1"},domProps:{value:t.intervalValue},on:{input:t.changeLogInterval,__r:function(e){t.intervalValue=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"interval-text"},[t._v("Jede "+t._s(this.intervalValue)+" Minuten")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"wattage-gain-"+t.meter.id}},[t._v("Wattage Gain")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.wattageGain,expression:"wattageGain",modifiers:{number:!0}}],staticClass:"wattage-gain",attrs:{name:"wattage-gain",id:"wattage-gain-"+t.meter.id,type:"range",min:"0",max:"100",step:"0.1"},domProps:{value:t.wattageGain},on:{__r:function(e){t.wattageGain=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"interval-text"},[t._v(t._s(this.wattageGain)+" Watt/s")])]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"start-log",attrs:{id:"start-log-"+t.meter.id,disabled:""},on:{click:t.startLog}},[t._v("Start Log")])])]),a("div",[a("h4",[t._v("Log Ouput")]),a("pre",{staticClass:"log-output"},[t._v("        "),t._l(t.logs,(function(e){return a("span",{key:e.timestamp},[t._v(t._s(e.msg)+" - "+t._s(e.total)+" W - "+t._s(e.timestamp))])})),t._v("\n    ")],2)])])])}),u=[],c=(a("ac1f"),a("5319"),a("bc3a")),d=a.n(c),m={name:"SmartMeterSimulator",props:{meter:Object,serviceUrl:String,remove:Function},data:function(){return{contentVisible:!0,wattage:0,wattageGain:0,wattageGainInterval:null,intervalValue:1,authKey:"",meterId:this.meter.id,logs:[],intervalId:null,finalUrl:""}},methods:{removeMeter:function(){clearInterval(this.intervalId),clearInterval(this.wattageGainInterval),this.remove(this.meter.id)},enableLogButton:function(t){t.target.value.length>0?document.getElementById("start-log-".concat(this.meter.id)).removeAttribute("disabled"):document.getElementById("start-log-".concat(this.meter.id)).setAttribute("disabled",!0)},changeLogInterval:function(){if(null!==this.intervalId){clearInterval(this.intervalId);var t=6e4*this.intervalValue;this.intervalId=setInterval(this.log.bind(this),t)}},startLog:function(){this.finalUrl=this.serviceUrl.replace(/:ID/,this.meterId);var t=6e4*this.intervalValue,e=document.getElementById("start-log-".concat(this.meter.id));e.classList.contains("active")?(clearInterval(this.intervalId),clearInterval(this.wattageGainInterval),e.innerText="Start Log"):(e.innerText="Stop Log",this.intervalId=setInterval(this.log.bind(this),t),this.gainWattage()),e.classList.toggle("active")},log:function(){var t=this;d.a.post(this.finalUrl,{meterId:this.meterId,meterValue:this.wattage,timestamp:(new Date).toISOString()},{params:{authKey:this.authKey}}).then((function(e){201===e.status&&t.logs.push({msg:"Created",status:201,total:t.wattage,timestamp:(new Date).toLocaleString("de-DE")})})).catch((function(e){console.error(e),t.logs.push({msg:"ERROR: ".concat(e.message),status:e.status,timestamp:(new Date).toLocaleString("de-DE")})}))},gainWattage:function(){this.wattageGainInterval=setInterval(function(){this.wattage+=this.wattageGain}.bind(this),1e3)}}},v=m,g=(a("4aa6"),a("2877")),p=Object(g["a"])(v,l,u,!1,null,"0800b5d8",null),f=p.exports,h={name:"Index",components:{SmartMeterSimulator:f},data:function(){return{serviceUrl:"",id:1,meters:[]}},mounted:function(){this.validate({target:this.$refs.serviceUrl})},methods:{addMeter:function(){this.meters.push({id:this.id++})},removeMeter:function(t){this.meters=this.meters.filter((function(e){return e.id!==t}))},validate:function(t){var e;try{e=new URL(t.target.value)}catch(a){return void(t.target.style.borderColor="red")}document.getElementById("add-meter").removeAttribute("disabled"),t.target.style.borderColor="darkgrey",this.serviceUrl=e.toString()}}},b=h,_=(a("dcec"),Object(g["a"])(b,s,o,!1,null,"009715f7",null)),y=_.exports,I={name:"App",components:{Index:y}},w=I,S=(a("034f"),Object(g["a"])(w,n,i,!1,null,null,null)),x=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,a){},"997b":function(t,e,a){},a7a4:function(t,e,a){},dcec:function(t,e,a){"use strict";a("a7a4")}});
//# sourceMappingURL=app.f6299458.js.map