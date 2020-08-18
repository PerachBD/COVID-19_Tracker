(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1BGkG",card:"Cards_card__sf9Ss",infected:"Cards_infected__2svEv",recovered:"Cards_recovered__p6vN1",deaths:"Cards_deaths__RL6HG"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),s=a(5),u=a.n(s),l=a(10),i=a(71),d=a(72),m=a(81),p=a(80),f=a(225),v=a(229),h=a(226),b=a(227),E=a(30),g=a.n(E),y=a(31),C=a.n(y),_=a(13),x=a.n(_),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a&&n&&c&&o?r.a.createElement("div",{className:x.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(x.a.card,x.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{varaint:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{colr:"textSecondery"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(x.a.card,x.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{varaint:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{colr:"textSecondery"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(x.a.card,x.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{varaint:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{colr:"textSecondery"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of death cases by COVID-19"))))):(console.log(n),"Loading...")},w=a(29),j=a(32),k=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n,r,c,o,s,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:s,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(43),G=a(77),V=a.n(G),U=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(n.useState)([]),d=Object(w.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(B.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),ladel:"Infected",borderColor:"rgba(0,0,255,0.5)",fill:!0},{data:m.map((function(e){return e.deaths})),ladel:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:V.a.container},s?v:f)},A=a(230),L=a(228),M=a(78),R=a.n(M),J=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(A.a,{className:R.a.formControl},r.a.createElement(L.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},P=a(44),q=a.n(P),H=a(79),Q=a.n(H),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t}),console.log(this.state.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:q.a.container},r.a.createElement("img",{className:q.a.image,src:Q.a,alt:"COVID-19"}),r.a.createElement(O,{data:t}),r.a.createElement(J,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__2mQ4j",image:"App_image__2yqCi"}},77:function(e,t,a){e.exports={container:"Chart_container__3MpUa"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3fCG4"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.696c7b30.chunk.js.map