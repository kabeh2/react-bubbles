(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{256:function(e,t,a){e.exports=a(502)},499:function(e,t,a){},502:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),o=a.n(c),l=a(21),u=a(31),s=a(49),i=a(11),d=a.n(i),m=a(79),p=a(116),b=a(503),E=a(48),f=a(115),h=a(509),g=function(e){var t=e.label,a=Object(f.a)(e,["label"]),n=Object(m.c)(a),c=Object(E.a)(n,2),o=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:a.id||a.name},t),r.a.createElement(h.a,Object.assign({className:"text-input"},o,a,{error:!(!l.touched||!l.error)})),l.touched&&l.error?r.a.createElement("div",{className:"error"},l.error):null)},v=a(50),O=a(114),x=a.n(O),y=function(){return localStorage.getItem("token")},w=function(e){return localStorage.setItem("token",e)},C=function(){return localStorage.removeItem("token")},j=function(){var e=y();return x.a.create({baseURL:"http://localhost:5000/api",headers:{Authorization:e}})},T=function(e){return{type:"FETCH_SUCCESS",payload:e}},S=function(e){return{type:"FETCH_ERROR",payload:e}},k=function(e,t){return{type:"UPDATE_ERROR",payload:{error:e,data:t}}},R=function(e){return{type:"FETCH_ADD",payload:e}},_=Object(l.b)(null,(function(e){return{login:function(t){return e(function(e){return function(t){var a,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(t({type:"FETCH_REQUEST"}));case 2:return r.prev=2,r.next=5,d.a.awrap(x.a.post("".concat("http://localhost:5000/api","/login"),e));case 5:a=r.sent,n=a.data,w(n.payload),r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,d.a.awrap(t(S(r.t0.message)));case 14:case"end":return r.stop()}}),null,null,[[2,10]])}}(t))}}}))((function(e){var t=e.location,a=e.history,n=e.login;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{initialValues:{username:"",password:""},validationSchema:p.object({username:p.string().max(15,"Must be 15 characters or less").required("Username is Required"),password:p.string().min(4,"Password must have at least 4 characters.").required("Password is Required")}),onSubmit:function(e,r){var c,o,l,u;return d.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return c=r.setSubmitting,o=r.setErrors,l=r.setStatus,u=r.resetForm,s.prev=1,s.next=4,d.a.awrap(n(e));case 4:u({}),l({success:!0}),a.replace(t.state?t.state.from.pathname:"/bubbles-page"),s.next=14;break;case 9:s.prev=9,s.t0=s.catch(1),l({success:!1}),c(!1),o({submit:s.t0.message});case 14:case"end":return s.stop()}}),null,null,[[1,9]])}},r.a.createElement(m.a,null,r.a.createElement(g,{label:"Username",name:"username",type:"text",placeholder:"Username here..."}),r.a.createElement(g,{label:"Password",name:"password",type:"password",placeholder:"Password here..."}),r.a.createElement(b.a,{primary:!0,type:"submit",style:{marginTop:16}},"Login"))))})),I=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",margin:"0 auto"}},r.a.createElement("h1",null,"Welcome to the Bubble App!"),r.a.createElement(_,e))},F=a(511),U=function(e){var t=e.component,a=e.render,n=Object(f.a)(e,["component","render"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return console.log(e),y()?t?r.a.createElement(t,e):a(e):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},H=a(23),A=a(237),D=a(160),N=function(e){var t=e.colors,a=Object(n.useState)([]),c=Object(E.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){var e=t.map((function(e,a){return{value:Math.floor(Math.random()*(2*t.length))+1,key:"".concat(a+1)}}));l(e)}),[t]),r.a.createElement("div",{className:"bubble-wrap"},r.a.createElement("p",null,"bubbles"),r.a.createElement(D.Svg,{width:400,height:400},r.a.createElement(A.Pack,{data:{children:o},sum:function(e){return e.value},size:[400,400],includeRoot:!1,nodeEnter:function(e){return Object(H.a)({},e,{r:0})},animate:!0},(function(e){return e.map((function(e,a){var n=e.x,c=e.y,o=e.r,l=e.key;return a<t.length?r.a.createElement(D.Circle,{key:l,cx:n,cy:c,r:o,fill:t[a].code.hex}):null})).filter((function(e){return e}))}))))},L=function(e){var t=e.saveEdit,a=e.addNewColor,n=e.setColorToEdit,c=e.setColorToAdd,o=e.colorToAdd,l=e.colorToEdit,u=e.cancelBtn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:l.color||l.code.hex?t:a},r.a.createElement("legend",null,"edit color"),r.a.createElement("label",null,"color name:",r.a.createElement("input",{onChange:function(e){return l.color||l.code.hex?n(Object(H.a)({},l,{color:e.target.value})):c(Object(H.a)({},o,{color:e.target.value,id:Date.now()}))},value:l.color||l.code.hex?l.color:o.color})),r.a.createElement("label",null,"hex code:",r.a.createElement("input",{onChange:function(e){return l.color||l.code.hex?n(Object(H.a)({},l,{code:{hex:e.target.value}})):c(Object(H.a)({},o,{code:{hex:e.target.value},id:Date.now()}))},value:l.code.hex||l.color?l.code.hex:o.code.hex})),r.a.createElement("div",{className:"button-row"},r.a.createElement("button",{type:"submit"},"save"),r.a.createElement("button",{onClick:u},"cancel"))))},P={color:"",code:{hex:""}},M=Object(l.b)((function(e){return{colors:e.data}}),(function(e){return{saveColor:function(t,a,n){return e(function(e,t,a){return function(n){var r,c,o;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,d.a.awrap(n({type:"FETCH_REQUEST"}));case 2:return r=Object(v.a)(a),c=Object(v.a)(a),o=c.findIndex((function(e){return e.id===t.id})),c.splice(o,1,t),l.next=8,d.a.awrap(n(T(c)));case 8:return l.prev=8,l.next=11,d.a.awrap(j().put("/colors/".concat(e),t));case 11:l.next=17;break;case 13:return l.prev=13,l.t0=l.catch(8),l.next=17,d.a.awrap(n(k(l.t0,r)));case 17:case"end":return l.stop()}}),null,null,[[8,13]])}}(t,a,n))},deleteRequest:function(t,a){return e(function(e,t){return function(a){var n,r;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,d.a.awrap(a({type:"FETCH_REQUEST"}));case 2:return n=Object(v.a)(t),r=Object(v.a)(t).filter((function(t){return t.id!==e})),c.next=6,d.a.awrap(a(T(r)));case 6:return c.prev=6,c.next=9,d.a.awrap(j().delete("/colors/".concat(e)));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(6),c.next=15,d.a.awrap(a(k(c.t0,n)));case 15:case"end":return c.stop()}}),null,null,[[6,11]])}}(t,a))},addColor:function(t,a){return e(function(e,t){return function(a){var n,r,c;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,d.a.awrap(a({type:"FETCH_REQUEST"}));case 2:return n=Object(v.a)(e),o.next=5,d.a.awrap(a(R(t)));case 5:return o.prev=5,o.next=8,d.a.awrap(j().post("/colors",t));case 8:r=o.sent,c=r.data,console.log("FETCHADD",c),o.next=17;break;case 13:return o.prev=13,o.t0=o.catch(5),o.next=17,d.a.awrap(a(k(o.t0,n)));case 17:case"end":return o.stop()}}),null,null,[[5,13]])}}(t,a))}}}))((function(e){var t=e.colors,a=e.saveColor,c=e.deleteRequest,o=e.addColor,l=e.match,s=e.history;console.log("ME",t);var i=Object(n.useState)(!1),d=Object(E.a)(i,2),m=d[0],p=d[1],f=Object(n.useState)(P),h=Object(E.a)(f,2),g=h[0],v=h[1],O=Object(n.useState)(P),x=Object(E.a)(O,2),y=x[0],w=x[1];return r.a.createElement("div",{className:"colors-wrap"},r.a.createElement("p",null,"colors"),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.color,className:"color-list"},r.a.createElement("span",{className:"delete color-list--btn",onClick:function(){return function(e){c(e.id,t),s.replace("/bubbles-page"),p(!1)}(e)}},"x")," ",r.a.createElement(u.b,{to:"/bubbles-page/".concat(e.id)},r.a.createElement("span",{onClick:function(){return function(e){p(!0),v(e)}(e)},className:"color-list--name"},e.color),r.a.createElement("div",{className:"color-box",style:{backgroundColor:e.code.hex}})))}))),!m&&r.a.createElement(u.b,{to:"/bubbles-page/add-color"},r.a.createElement(b.a,{primary:!0,onClick:function(){return p(!0)},style:{marginBottom:60}},"Add Color")),m&&g&&r.a.createElement(L,{saveEdit:function(e){e.preventDefault(),a(l.params.id,g,t),p(!1),v(P),s.replace("/bubbles-page")},addNewColor:function(e){e.preventDefault(),o(t,y),p(!1),w(P),s.replace("/bubbles-page")},setColorToEdit:v,colorToEdit:g,setColorToAdd:w,colorToAdd:y,cancelBtn:function(){v(P),p(!1),s.replace("/bubbles-page")}}),r.a.createElement("div",{className:"spacer"}))})),Q=Object(l.b)((function(e){return{colours:e.data}}),(function(e){return{getColours:function(){return e((function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(e({type:"FETCH_REQUEST"}));case 2:return n.prev=2,n.next=5,d.a.awrap(j().get("/colors"));case 5:return t=n.sent,a=t.data,console.log("FETCH_COLOURS",a),n.next=10,d.a.awrap(e(T(a)));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(2),n.next=16,d.a.awrap(e(S(n.t0)));case 16:case"end":return n.stop()}}),null,null,[[2,12]])}))}}}))((function(e){var t=e.getColours,a=e.colours,c=e.match,o=e.history;return Object(n.useEffect)((function(){t()}),[t]),Object(n.useEffect)((function(){console.log("MEEEEE",a)}),[a]),console.log("HELLO",a),r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{match:c,history:o}),r.a.createElement(N,{colors:a}))})),q=a(238),B=a(239),G=a(243),z=a(240),J=a(244),V=a(513),X=function(e){function t(){var e,a;Object(q.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(G.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={activeItem:"home"},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(J.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.state.activeItem,t=this.props.loggedIn;return r.a.createElement(V.a,{secondary:!0},t?r.a.createElement(V.a.Item,{as:u.b,to:"/bubbles-page",name:"bubbles",active:!0,onClick:this.handleItemClick}):r.a.createElement(V.a.Item,{as:u.b,to:"/",name:"home",active:!0,onClick:this.handleItemClick}),t&&r.a.createElement(V.a.Menu,{position:"right"},r.a.createElement(V.a.Item,{as:u.b,to:"/logout",name:"logout",active:"logout"===e,onClick:this.handleItemClick})))}}]),t}(n.Component),W=Object(l.b)((function(e){return{loggedIn:e.loggedIn}}))(X);a(499);var K=Object(l.b)(null,(function(e){return{logout:function(){return e((function(e){e({type:"FETCH_REQUEST"});try{C(),e({type:"TOGGLE_AUTH"})}catch(t){e(S(t))}}))}}}))((function(e){return(0,e.logout)(),r.a.createElement("div",null,r.a.createElement(s.a,{to:"/"}))}));var Y=Object(l.b)((function(e){return{error:e.error}}))((function(e){var t=e.error;return r.a.createElement(F.a,null,r.a.createElement(u.a,null,r.a.createElement(W,null),t&&r.a.createElement("h3",{style:{color:"red",textAlign:"center",border:"1px solid red",padding:8}},t),r.a.createElement("div",{className:"App"},r.a.createElement(s.d,null,r.a.createElement(U,{path:"/bubbles-page/add-color",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(U,{path:"/bubbles-page/:id?",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(U,{path:"/bubbles-page",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(s.b,{path:"/logout",render:function(e){return r.a.createElement(K,e)}}),r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(s.a,{to:"/"})))))})),Z=a(69),$=a(242),ee={loading:!1,data:[],error:"",loggedIn:!!y()},te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,ae=Object(Z.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REQUEST":return Object(H.a)({},e,{loading:!0});case"FETCH_SUCCESS":return Object(H.a)({},e,{loading:!1,data:t.payload,error:"",loggedIn:!0});case"FETCH_ERROR":return Object(H.a)({},e,{loading:!1,error:t.payload,loggedIn:!1});case"FETCH_ADD":return Object(H.a)({},e,{loading:!1,data:[].concat(Object(v.a)(e.data),[t.payload]),error:""});case"UPDATE_ERROR":return Object(H.a)({},e,{loading:!1,data:t.payload.data,error:t.payload.error});case"TOGGLE_AUTH":return Object(H.a)({},e,{loading:!1,loggedIn:!e.loggedIn});default:return e}}),te(Object(Z.a)($.a))),ne=(a(500),document.getElementById("root"));o.a.render(r.a.createElement(l.a,{store:ae},r.a.createElement(Y,null)),ne)}},[[256,1,2]]]);
//# sourceMappingURL=main.4e5e9b29.chunk.js.map