(this["webpackJsonpcmhs-front"]=this["webpackJsonpcmhs-front"]||[]).push([[0],{28:function(e,t){t.timestampToDate=function(e){},t.timestamptToTimeAgo=function(e){var t=(Date.now()-72e5)/1e3,a=Math.round(t-e)/60;return a>=60?Math.round(a/60)+" hours ago":0===(a=Math.round(a))?"Just now":a+" minutes ago"},t.convertToDate=function(e){var t=new Date(e),a=t.getDay(),n=t.getMonth(),r=t.getFullYear(),l=t.getHours(),c="0"+t.getMinutes(),o="0"+t.getSeconds();return l+":"+c.substr(-2)+":"+o.substr(-2)+"   "+a+"/"+n+"-"+r}},67:function(e,t,a){e.exports=a.p+"static/media/ntnu_logo.9b4c0ba4.png"},72:function(e,t,a){e.exports=a(85)},77:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(25),o=a.n(c),s=(a(77),a(12)),i=a(43),u=a(6),m=a.n(u),p=a(13),d=a(7),E=a(100),h=a(64),f=a(93),g=a(90),b=function(e){return l.a.createElement("tr",null,Object.keys(e).map((function(t){return l.a.createElement("td",{key:t},e[t])})))},v=function(e){return 0===e.content.objects.length?l.a.createElement("div",null,l.a.createElement("h2",null,"No content available")):l.a.createElement("div",null,l.a.createElement(g.a,{responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,e.content.headers.map((function(e){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,e.content.objects.map((function(e){return l.a.createElement(b,Object.assign({key:e.id},e))})))))},y=a(28),x=a.n(y),j=function(e){for(var t=[],a=0;a<e.content.objects.length;a++){var n=e.content.objects[a],r={};try{r.id=n.name,r.zone=n.zone,r.lastseen=x.a.timestamptToTimeAgo(n.lastseen)}catch(o){console.log("Something went wrong accessing the array")}t.push(r)}var c={objects:t,headers:["Tag ID","Zone","Last seen"]};return l.a.createElement(E.a,{className:"text-left"},l.a.createElement(E.a.Body,null,l.a.createElement(E.a.Title,null,e.title),l.a.createElement(E.a.Text,null,e.description),l.a.createElement(E.a.Body,null,l.a.createElement(v,{content:c}))))},w=function(e){for(var t=[],a=0;a<e.content.objects.length;a++){var n=e.content.objects[a],r={};try{r.id=n.name,r.workstatus=n.workstatus,r.status=n.status,r.zone=n.zone,r.lastseen=x.a.timestamptToTimeAgo(n.lastseen)}catch(o){console.log("Something went wrong accessing the array")}t.push(r)}var c={objects:t,headers:["Tag ID","Workstatus","Status","Zone","Last seen"]};return l.a.createElement(E.a,{className:"text-left"},l.a.createElement(E.a.Body,null,l.a.createElement(E.a.Title,null,e.title),l.a.createElement(E.a.Text,null,e.description),l.a.createElement(E.a.Body,null,l.a.createElement(v,{content:c}))))},O=a(101),k=a(92),C=function(e){for(var t=["Description","Work Status","Created"],a=[],n=0;n<e.jobs.length;n++){var r=e.jobs[n],c={};try{c.id=r.description,c.workstatus=r.workstatus,c.created=x.a.convertToDate(r.timecreated),r.timeassigned&&(t.push("Assigned"),c.assigned=x.a.convertToDate(r.timeassigned)),r.timecompleted&&(t.push("Completed"),c.completed=x.a.convertToDate(r.timecompleted))}catch(s){console.log("Something went wrong accessing the array")}a.push(c)}var o={objects:a,headers:t};return l.a.createElement(E.a,{className:"text-left"},l.a.createElement(E.a.Body,null,e.title&&l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a.Title,null,e.title),l.a.createElement(E.a.Text,null,e.description)),l.a.createElement(E.a.Body,null,l.a.createElement(v,{content:o}))))},S=a(91),T=function(e){return l.a.createElement(S.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))},D=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(),c=Object(d.a)(l,2),o=c[0],s=c[1],i=Object(r.useRef)([]),u=Object(r.useCallback)(function(){var e=Object(p.a)(m.a.mark((function e(t){var a,r,l,c,o,u,p=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"GET",r=p.length>2&&void 0!==p[2]?p[2]:null,l=p.length>3&&void 0!==p[3]?p[3]:{},n(!0),c=new AbortController,i.current.push(c),e.prev=6,e.next=9,fetch(t,{method:a,body:r,headers:l,signal:c.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:if(u=e.sent,i.current=i.current.filter((function(e){return e!==c})),o.ok){e.next=17;break}throw n(!1),new Error(u.message);case 17:return n(!1),e.abrupt("return",u);case 21:throw e.prev=21,e.t0=e.catch(6),s(e.t0.message),n(!1),e.t0;case 26:case"end":return e.stop()}}),e,null,[[6,21]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(r.useEffect)((function(){return function(){i.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:o,sendRequest:u,clearError:function(){s(null)}}},L=function(e){var t=Object(r.useState)("scheduled"),a=Object(d.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(),s=Object(d.a)(o,2),i=s[0],u=s[1],h=D(),f=h.isLoading,g=h.sendRequest,b="/jobs/table/"+n;return Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("http://localhost:5000/api"+b);case 3:t=e.sent,u(t.jobs),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Cold not fetch");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[g,n,b]),l.a.createElement(E.a,{style:{marginLeft:"20px",marginRight:"20px",marginBottom:"25px"}},l.a.createElement(E.a.Header,null,l.a.createElement(E.a.Title,null,"Jobs"),l.a.createElement(O.a,{id:"controlled-tab-example",activeKey:n,onSelect:function(e){return c(e)}},l.a.createElement(k.a,{eventKey:"scheduled",title:"Scheduled"}),l.a.createElement(k.a,{eventKey:"unscheduled",title:"Unscheduled"}),l.a.createElement(k.a,{eventKey:"completed",title:"Completed"}))),l.a.createElement(E.a.Body,null,l.a.createElement(l.a.Fragment,null,i&&!f&&l.a.createElement(C,{jobs:i,type:n}),f&&l.a.createElement("div",{className:"center"},l.a.createElement(T,null)))))},I=a(96),N=function(e){var t=Object(r.useState)(!0),a=Object(d.a)(t,2),n=a[0],c=a[1],o=function(){c(!1),e.clear()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{show:n,onHide:o},l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,null,e.heading)),l.a.createElement(I.a.Body,null,e.error),l.a.createElement(I.a.Footer,null,l.a.createElement(h.a,{variant:"secondary",onClick:o},"Close"),e.save&&l.a.createElement(h.a,{variant:"primary",onClick:o},"Save Changes"))))},B=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("http://localhost:5000/api/so");case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Could not fetch SOs");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("http://localhost:5000/api/mhm");case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Could not fetch MHMs",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("http://localhost:5000/api/jobs");case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Could not fetch Jobs");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t,r);case 3:return e.next=5,R(a,r);case 5:return e.next=7,M(n,r);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("[requestDashboardData], An error occured",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),J=function(){var e,t=Object(r.useState)(),a=Object(d.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(),s=Object(d.a)(o,2),i=s[0],u=s[1],g=Object(r.useState)(),b=Object(d.a)(g,2),v=b[0],y=b[1],x=D(),O=x.error,k=x.sendRequest,C=x.clearError,S=Object(r.useState)(!1),T=Object(d.a)(S,2),I=T[0],B=T[1],R=Object(r.useState)(!1),M=Object(d.a)(R,2),J=M[0],q=M[1];Object(r.useEffect)((function(){return G.requestDashboardData(c,u,y,k),e=setInterval((function(){G.requestDashboardData(c,u,y,k)}),1e4),function(){return clearInterval(e)}}),[k]);var H,F,z=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("http://localhost:5000/api/lifecycle/mqtt","POST",JSON.stringify({mqttstatus:t}),{"Content-Type":"application/json"});case 3:e.sent.success&&("activate"===t&&B(!0),"shutdown"===t&&B(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something went wrong in the post request");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k("http://localhost:5000/api/lifecycle/ae","POST",JSON.stringify({aestatus:t}),{"Content-Type":"application/json"});case 3:e.sent.success&&("activate"===t&&q(!0),"shutdown"===t&&q(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something went wrong starting or shutting down the assignment engine");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return I||(H=l.a.createElement(E.a,{border:"white",className:"text-right",onClick:function(){return z("activate")}},l.a.createElement(h.a,{size:"sm",variant:"outline-primary"},"Connect MQTT"))),I&&(H=l.a.createElement(E.a,{border:"white",className:"text-right",onClick:function(){return z("shutdown")}},l.a.createElement(h.a,{size:"sm",variant:"outline-warning"},"Disconnect MQTT"))),J||(F=l.a.createElement(E.a,{border:"white",className:"text-right",onClick:function(){return A("activate")}},l.a.createElement(h.a,{size:"sm",variant:"outline-primary"},"Start Assignment Engine"))),J&&(F=l.a.createElement(E.a,{border:"white",className:"text-right",onClick:function(){return A("shutdown")}},l.a.createElement(h.a,{size:"sm",variant:"outline-warning"},"Shutdown Assignment Engine"))),l.a.createElement("div",null,l.a.createElement(E.a,{border:"light"},l.a.createElement(E.a.Body,null,l.a.createElement("div",{style:{width:"100%",overflow:"hidden"}},l.a.createElement("div",{style:{width:"80%",float:"left"}},l.a.createElement("h1",null,"Dashboard")),l.a.createElement("div",{style:{marginLeft:"150px",marginBottom:"5px"}},H),l.a.createElement("div",{style:{marginLeft:"150px",marginTop:"5px"}},F)),l.a.createElement("hr",{style:{marginTop:"20px",align:"center",width:"99.7%"}}))),O&&l.a.createElement(N,{heading:"Backend fetch failed",error:O,save:!1,clear:C}),i&&n&&v&&l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{style:{margin:"5px"},jobs:v}),l.a.createElement(f.a,{style:{margin:"5px",marginBottom:"15px"}},l.a.createElement(j,{title:"Smart Objects",description:"Objects to be picked up and delivered at specified locations.",content:n}),l.a.createElement(w,{title:"Material Handling Modules",description:"Handlers able to transport Smart Objects.",content:i}))))},q=a(22),H=a(97),F=a(66),z=function(){var e,t=Object(r.useState)(),a=Object(d.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)({description:"",fromxcoord:null,fromycoord:null,toxcoord:null,toycoord:null,so:null}),i=Object(d.a)(o,2),u=i[0],f=i[1],g=Object(r.useState)(!1),b=Object(d.a)(g,2),v=b[0],y=b[1],x=D(),j=x.isLoading,w=x.error,O=x.sendRequest,k=x.clearError;Object(r.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("http://localhost:5000/api/so");case 3:t=e.sent,c(t.objects),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[O]),n&&(e=n.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},"Tag ",e.name)})));var C=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={description:u.description,from:{x:u.fromxcoord,y:u.fromycoord},to:{x:u.toxcoord,y:u.toycoord},soid:u.so},e.prev=2,e.next=5,O("http://localhost:5000/api/jobs","POST",JSON.stringify(a),{"Content-Type":"application/json"});case 5:e.sent.success&&y(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(w);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=e.target,a=t.id,n=t.value,r=Object(q.a)({},u);r[a]=n,f(Object(q.a)({},r))};return v?l.a.createElement(s.a,{to:"/dashboard"}):l.a.createElement(E.a,{style:{margin:"20px"}},l.a.createElement(E.a.Header,null,l.a.createElement(E.a.Title,{style:{marginTop:"10px"}},"Create Job")),l.a.createElement(E.a.Body,null,w&&l.a.createElement(N,{heading:"Something went wrong",error:w,save:!1,clear:k}),j&&l.a.createElement(T,null),!j&&l.a.createElement(H.a,{onSubmit:C},l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Description"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:6},l.a.createElement(H.a.Control,{id:"description",type:"text",placeholder:"Enter description",onChange:S})))),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"From Location"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:3},l.a.createElement(H.a.Control,{id:"fromxcoord",type:"number",placeholder:"X-Coordinate",onChange:S})),l.a.createElement(F.a,{xs:3},l.a.createElement(H.a.Control,{id:"fromycoord",type:"number",placeholder:"Y-Coordinate",onChange:S})))),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"To Location"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:3},l.a.createElement(H.a.Control,{id:"toxcoord",type:"number",placeholder:"X-Coordinate",onChange:S})),l.a.createElement(F.a,{xs:3},l.a.createElement(H.a.Control,{id:"toycoord",type:"number",placeholder:"Y-Coordinate",onChange:S})))),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,{className:"mr-sm-2",htmlFor:"chooseSO"},"Choose Smart Object"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:6},l.a.createElement(H.a.Control,{as:"select",className:"mr-sm-2",id:"so",custom:!0,onChange:S},l.a.createElement("option",{default:!0,value:null},"---"),e)))),l.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit"))))},A=function(){var e=Object(r.useState)({name:null,type:"",agv:!1,forklift:!1,manual:!1,description:""}),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),o=Object(d.a)(c,2),i=o[0],u=o[1],f=D(),g=f.isLoading,b=f.error,v=f.sendRequest,y=f.clearError,x=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"so"===(n={name:a.name,type:a.type,transportclass:{agv:a.agv,forklift:a.forklift,manual:a.manual},description:a.description}).type&&(r="/so"),"mhm"===n.type&&(r="/mhm"),e.prev=4,e.next=7,v("http://localhost:5000/api"+r,"POST",JSON.stringify(n),{"Content-Type":"application/json"});case 7:e.sent.success&&u(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(b);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,r=t.id,l=t.value,c=Object(q.a)({},a);c[r]=l,n(Object(q.a)({},c))},w=function(e){var t=e.target,r=t.id,l=t.checked,c=Object(q.a)({},a);c[r]=l,n(Object(q.a)({},c))};return i?l.a.createElement(s.a,{to:"/dashboard"}):l.a.createElement(E.a,{style:{margin:"20px"}},l.a.createElement(E.a.Header,null,l.a.createElement(E.a.Title,{style:{marginTop:"10px"}},"Create Tag")),l.a.createElement(E.a.Body,null,b&&l.a.createElement(N,{heading:"Something went wrong",error:b,save:!1,clear:y}),g&&l.a.createElement(T,null),!g&&l.a.createElement(H.a,{onSubmit:x},l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Name (ID in pozyx)"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:3},l.a.createElement(H.a.Control,{id:"name",type:"text",placeholder:"Enter ID number for Tag",onChange:j})))),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Type"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:3},l.a.createElement(H.a.Control,{as:"select",className:"mr-sm-2",id:"type",custom:!0,onChange:j},l.a.createElement("option",{default:!0,value:null},"---"),l.a.createElement("option",{value:"so"},"Smart Object"),l.a.createElement("option",{value:"mhm"},"Material Handling Module"))))),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Transport Class"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:6},l.a.createElement(H.a.Check,{inline:!0,label:"AGV",type:"checkbox",id:"agv",onChange:w}),l.a.createElement(H.a.Check,{inline:!0,label:"Forklift",type:"checkbox",id:"forklift",onChange:w}),l.a.createElement(H.a.Check,{inline:!0,label:"Manual",type:"checkbox",id:"manual",onChange:w})))),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Description"),l.a.createElement(H.a.Row,null,l.a.createElement(F.a,{xs:6},l.a.createElement(H.a.Control,{id:"description",type:"text",placeholder:"Enter description",onChange:j})))),l.a.createElement(h.a,{variant:"primary",type:"submit"},"Submit"))))},P={display:"block",padding:"20px",height:"60px",width:"100%"},K={backgroundColor:"#343a40",borderTop:"1px solid #E7E7E7",textAlign:"right",position:"fixed",left:"0",bottom:"0",height:"30px",width:"100%"},Y={marginTop:"5px",marginRight:"15px",color:"darkGrey",fontSize:"small",display:"block"},U=new Date,Q=function(){return l.a.createElement("div",null,l.a.createElement("div",{style:P}),l.a.createElement("div",{style:K},l.a.createElement("p",{style:Y},"\xa9 ",U.getUTCFullYear()," Dept. of Mechanical and Industrial Engineering, NTNU")))},W=Object(r.createContext)({isLoggedIn:!1,token:null,userId:null,login:function(){},logout:function(){}}),X=a(99),Z=a(70),V=a(98),_=a(67),$=a.n(_),ee=function(){var e=Object(r.useContext)(W);return l.a.createElement(X.a,{bg:"dark",variant:"dark"},l.a.createElement(X.a.Brand,{href:"/dashboard"}," ",l.a.createElement("img",{style:{paddingRight:"10px",width:"40px"},src:$.a,alt:"LOGO"}),"Cloud Material Handling System"),e.isLoggedIn&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Z.a,{className:"mr-auto"},l.a.createElement(Z.a.Link,{href:"/dashboard"},"Dashboard"),l.a.createElement(V.a,{title:"Create new",id:"nav-dropdown"},l.a.createElement(V.a.Item,{href:"/create/job"},"Job"),l.a.createElement(V.a.Divider,null),l.a.createElement(V.a.Item,{href:"/create/tag"},"Tag"))),l.a.createElement(Z.a,null,l.a.createElement(Z.a.Link,{onClick:e.logout},"Sign out"))))},te=a(94),ae=a(95),ne=function(){var e=Object(r.useContext)(W),t=Object(r.useState)({email:"",password:""}),a=Object(d.a)(t,2),n=a[0],c=a[1],o=D(),s=o.error,i=o.sendRequest,u=o.clearError,f=function(){var t=Object(p.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,i("http://localhost:5000/api/login/login","POST",JSON.stringify({email:n.email,password:n.password}),{"Content-Type":"application/json"});case 4:r=t.sent,e.login(r.userId,r.token),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("login failed");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),g=function(e){var t=e.target,a=t.id,r=t.value,l=Object(q.a)({},n);l[a]=r,c(Object(q.a)({},l))};return l.a.createElement(te.a,{style:{justifyContent:"center",display:"flex",alginItems:"center",marginTop:"200px"}},s&&l.a.createElement(N,{heading:"Login failed",error:s,save:!1,clear:u}),l.a.createElement(ae.a,null,l.a.createElement(E.a,{style:{width:"500px"}},l.a.createElement(E.a.Header,{className:"text-center"},"Please enter login credentials"),l.a.createElement(E.a.Body,null,l.a.createElement(H.a,{onSubmit:f},l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Email address"),l.a.createElement(H.a.Control,{id:"email",type:"email",placeholder:"Enter email",onChange:g})),l.a.createElement(H.a.Group,null,l.a.createElement(H.a.Label,null,"Password"),l.a.createElement(H.a.Control,{id:"password",type:"password",placeholder:"Password",onChange:g})),l.a.createElement(h.a,{variant:"primary",block:!0,type:"submit"},"LOG IN"))))))},re=function(){var e,t=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(),o=Object(d.a)(c,2),s=o[0],i=o[1],u=Object(r.useState)(),m=Object(d.a)(u,2),p=m[0],E=m[1],h=Object(r.useCallback)((function(e,t,a){l(t),E(e);var n=a||new Date((new Date).getTime()+36e5);i(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()}))}),[]),f=Object(r.useCallback)((function(){l(null),i(null),E(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){if(a&&s){var e=s.getTime()-(new Date).getTime();n=setTimeout(f,e)}else clearTimeout(n)}),[a,f,s]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&h(e.userId,e.token,new Date(e.expiration))}),[h]),{token:a,login:h,logout:f,userId:p}}(),a=t.token,c=t.login,o=t.logout,u=t.userId;return e=a?l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/create/job",exact:!0},l.a.createElement(z,null)),l.a.createElement(s.b,{path:"/create/tag",exact:!0},l.a.createElement(A,null)),l.a.createElement(s.b,{path:"/dashboard",exact:!0},l.a.createElement(J,null)),l.a.createElement(s.a,{to:"/dashboard"})):l.a.createElement(ne,null),l.a.createElement(W.Provider,{value:{isLoggedIn:!!a,token:a,userId:u,login:c,logout:o}},l.a.createElement(i.a,null,l.a.createElement(ee,null),l.a.createElement("main",null,e)),l.a.createElement(Q,null))};o.a.render(l.a.createElement(re,null),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0c0348e7.chunk.js.map