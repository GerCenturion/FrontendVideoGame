(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){e.exports={contentInput:"videogames_contentInput__2mBry",search:"videogames_search__27iPR",alpha:"videogames_alpha__1dNTs",genres:"videogames_genres__4TcZU",contentCards:"videogames_contentCards__F36mY",textContent:"videogames_textContent__3d0IN",contentPaginate:"videogames_contentPaginate__2xWRC",paginate:"videogames_paginate__3kOnh",select:"videogames_select__75PJ5"}},15:function(e,t){var n="https://backvideogame.onrender.com/api",a=n+"videogames/",c=n+"genres/";e.exports={BASE_URL:n,VIDEOGAMES_URL:a,GENRES_URL:c}},16:function(e,t,n){e.exports={name:"videogameDetails_name__2uLPR",rating:"videogameDetails_rating__gpdup",description:"videogameDetails_description__281xg",released:"videogameDetails_released__2oHVs",plataforms:"videogameDetails_plataforms__3J50J",genres:"videogameDetails_genres__3uE2n",img:"videogameDetails_img__r1TbY"}},17:function(e,t,n){e.exports={modal:"createVideogame_modal__3h7om",modalContent:"createVideogame_modalContent__1Bg7S",select:"createVideogame_select__1Hb6A",cerrar:"createVideogame_cerrar__32vV4",selectedContent:"createVideogame_selectedContent__YD_Oe"}},23:function(e,t,n){e.exports={content:"videogame_content__1hfr9",card:"videogame_card__LBNHK",img:"videogame_img__3bqxn",genres:"videogame_genres__2TFkw"}},27:function(e,t,n){e.exports={navContent:"nav_navContent__pgzt2",btnCreate:"nav_btnCreate__3B0jz",icon:"nav_icon__2yzQK"}},33:function(e,t,n){e.exports={content:"landing_content__2KP56",btnneon:"landing_btnneon__1u716"}},34:function(e,t,n){e.exports={not:"notFound_not__294f2",notContent:"notFound_notContent__X7und"}},44:function(e,t,n){e.exports={rating:"rating_rating__3CoMl"}},52:function(e,t,n){},53:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(24),i=n.n(r),s=(n(52),n(53),n(13)),o=n(4),d=n(27),j=n.n(d),l=n(0);function u(){return Object(l.jsxs)("div",{className:j.a.navContent,children:[Object(l.jsx)(s.b,{to:"/home/videogame",children:Object(l.jsx)("label",{className:j.a.icon,children:"Home \ud83c\udfe0 "})}),Object(l.jsx)(s.b,{to:"/home/createvideogame",children:Object(l.jsx)("label",{className:j.a.btnCreate,children:"New Game"})})]})}var b=n(11),m=n(14),O=n.n(m),g=n(15),x=n(16),v=n.n(x),f=(n(82),function(){return Object(l.jsx)("div",{className:"spinner-container",children:Object(l.jsxs)("div",{className:"lds-spinner",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})}),h=n(9),p=n(44),_=n.n(p),N=function(e){var t=e.rating,n=Math.floor(t),a=t-n>=.5,c=5-n-(a?1:0);return Object(l.jsxs)("div",{className:_.a.rating,children:[Object(h.a)(Array(n)).map((function(e,t){return Object(l.jsx)("span",{children:"\u2605"},t)})),a&&Object(l.jsx)("span",{children:"\u272f"}),Object(h.a)(Array(c)).map((function(e,t){return Object(l.jsx)("span",{children:"\u2606"},t)}))]})};function C(){var e=Object(a.useState)({id:"",name:"",rating:"",description:"",released:"",background_image:"",plataforms:"",genres:""}),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(o.e)().id;return Object(a.useEffect)((function(){!function(e){O.a.get(g.VIDEOGAMES_URL+"/"+e).then((function(e){c({id:e.data.id,name:e.data.name,rating:e.data.rating,description:e.data.description,released:e.data.released,background_image:e.data.background_image,plataforms:e.data.plataforms.map((function(e){return"".concat(e," ")})),genres:e.data.genres.map((function(e){return"".concat(e.name," ")}))})}))}(r)}),[r]),Object(l.jsx)("div",{children:!n.description&&Object(l.jsx)(f,{})||Object(l.jsxs)("div",{className:v.a.content,children:[Object(l.jsx)("img",{className:v.a.img,src:n.background_image,alt:n.name}),Object(l.jsx)("div",{className:v.a.name,children:n.name}),Object(l.jsxs)("div",{className:v.a.rating,children:[Object(l.jsx)(N,{rating:n.rating})," ",N,n.rating]}),Object(l.jsx)("div",{className:v.a.description}),Object(l.jsx)("div",{className:v.a.description,dangerouslySetInnerHTML:{__html:n.description}}),Object(l.jsxs)("div",{className:v.a.released,children:["Released: ",n.released]}),Object(l.jsxs)("div",{className:v.a.plataforms,children:["Platforms: ",n.plataforms]}),Object(l.jsxs)("div",{className:v.a.genres,children:["Genres: ",n.genres]})]},n.id)})}var E=n(10),y=n.n(E),S=n(19),R=n(23),A=n.n(R);function M(e){var t=e.name,n=e.background_image,a=e.genres;return Object(l.jsx)("div",{className:A.a.content,children:Object(l.jsxs)("div",{className:A.a.card,children:[Object(l.jsx)("div",{children:Object(l.jsx)("label",{children:t})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:A.a.img,src:n,alt:t})}),Object(l.jsx)("div",{children:Object(l.jsx)("label",{className:A.a.genres,children:a.map((function(e){return"".concat(e.name," ")}))})})]})})}var k="GET_VIDEOGAMES",D="SORT_VIDEOGAMES",L="SEARCH_VIDEOGAMES";function w(){var e=Object(S.c)((function(e){return e.videogames})),t=Object(S.b)(),n=Object(a.useState)([]),c=Object(b.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)([]),d=Object(b.a)(o,2),j=d[0],u=d[1],m=Object(a.useState)(1),x=Object(b.a)(m,2),v=x[0],p=x[1],_=Object(a.useState)([]),N=Object(b.a)(_,2),C=N[0],E=N[1],R=15*v,A=R-15,w=r.slice(A,R);return Object(a.useEffect)((function(){t((function(e){return O.a.get(g.VIDEOGAMES_URL).then((function(t){e({type:k,payload:t.data})})).catch((function(e){return{msg:e}}))}))}),[t]),Object(a.useEffect)((function(){i(e);for(var t=[],n=1;n<=Math.ceil(e.length/15);n++)t.push(n);E(t)}),[e]),Object(a.useEffect)((function(){O.a.get(g.GENRES_URL).then((function(e){u(e.data)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:y.a.contentInput,children:[Object(l.jsxs)("select",{className:y.a.alpha,onChange:function(e){return function(e){var t=Object(h.a)(r);if("A-Z"===e.target.value&&(t.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1})),i(Object(h.a)(t))),"Z-A"===e.target.value&&(t.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1})),i(Object(h.a)(t))),"Mayor Rating"===e.target.value&&(t.sort((function(e,t){return e.rating<t.rating?1:-1})),i(Object(h.a)(t))),"Menor Rating"===e.target.value&&(t.sort((function(e,t){return e.rating>t.rating?1:-1})),i(Object(h.a)(t))),"Creado por mi"===e.target.value){var n=t.filter((function(e){return"string"===typeof e.id}));i(Object(h.a)(n))}}(e)},children:[Object(l.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(l.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(l.jsx)("option",{value:"Mayor Rating",children:"Mayor Rating-Menor Rating"}),Object(l.jsx)("option",{value:"Menor Rating",children:"Menor Rating-Mayor Rating"})]}),Object(l.jsxs)("select",{className:y.a.genres,onChange:function(e){return p(1),t((n=e.target.value,function(e){return e({type:D,payload:n})}));var n},children:[Object(l.jsx)("option",{value:"All",children:"All"}),Object(l.jsx)("option",{value:"Created",children:"Created"}),Object(l.jsx)("option",{value:"Existing",children:"Existing"}),j.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(l.jsx)("div",{className:y.a.search,children:Object(l.jsx)("input",{placeholder:" \ud83d\udd0d Buscar...",className:y.a.search,onChange:function(e){return p(1),t((n=e.target.value,function(e){return O.a.get(g.VIDEOGAMES_URL+"?name=".concat(n)).then((function(t){e({type:L,payload:t.data})})).catch((function(e){return{msg:e}}))}));var n}})})]}),Object(l.jsxs)("div",{children:[" ",e<1&&Object(l.jsx)(f,{}),";",Object(l.jsx)("div",{className:y.a.contentCards,children:w.map((function(e){return Object(l.jsx)("div",{className:y.a.textContent,children:Object(l.jsx)(s.b,{to:"/home/videogame/".concat(e.id),children:Object(l.jsx)(M,{name:e.name,background_image:e.background_image,genres:e.genres})})},e.id)}))})]}),Object(l.jsx)("div",{children:!e.length<1&&Object(l.jsx)("div",{className:y.a.contentPaginate,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:y.a.paginate,onClick:function(){v>1&&p(v-1)},children:"<"}),C.map((function(e){return Object(l.jsx)("button",{className:e===v?y.a.select:y.a.paginate,onClick:function(){return p(e)},children:e},e)})),Object(l.jsx)("button",{className:y.a.paginate,onClick:function(){v<Math.ceil(e.length/15)&&p(v+1)},children:">"})]})})})]})}var I=n(32),V=n(46),P=n(26),G=n(2),T=n(17),U=n.n(T);function F(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!0),c=Object(b.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)({name:"",description:"",background_image:"",plataforms:[],released:"",rating:0,genres:[]}),o=Object(b.a)(s,2),d=o[0],j=o[1],u=Object(a.useState)([]),m=Object(b.a)(u,2),x=m[0],v=m[1];var f,p=Object(a.useState)(["PlayStation 3","Xbox 360","Xbox Series S/X","Nintendo Switch","PlayStation 5","Xbox One","PC","PlayStation 4"]),_=Object(b.a)(p,1)[0];function N(e){j((function(t){return Object(G.a)(Object(G.a)({},t),{},Object(P.a)({},e.target.name,e.target.value))}))}function C(){return(C=Object(V.a)(Object(I.a)().mark((function e(t){return Object(I.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==d.genres.length){e.next=3;break}return e.abrupt("return",alert("Missing genres"));case 3:if(0!==d.plataforms.length){e.next=5;break}return e.abrupt("return",alert("Missing platforms"));case 5:return e.next=7,O.a.post(g.VIDEOGAMES_URL,d);case 7:alert("Se Agrego"),window.location.href="/home/videogame";case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){O.a.get(g.GENRES_URL).then((function(e){v(e.data)}))}),[]),Object(a.useEffect)((function(){function n(n){e.current&&!t.current.contains(n.target)&&(i(!1),window.location.href="/home/videogame")}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[]),Object(l.jsx)("div",{children:r&&Object(l.jsx)("div",{ref:e,className:U.a.modal,children:Object(l.jsx)("div",{ref:t,className:U.a.modalContent,children:Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Name: "}),Object(l.jsx)("input",{name:"name",type:"text",onChange:N,required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Description: "}),Object(l.jsx)("input",{name:"description",type:"text",onChange:N,required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Image: "}),Object(l.jsx)("input",{name:"background_image",type:"url",accept:"url",onChange:N,required:!0})]}),Object(l.jsx)("div",{className:U.a.select,children:_.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{name:e,onClick:function(e){return function(e){if(e.preventDefault(),d.plataforms.includes(e.target.name)){var t=d.plataforms.filter((function(t){return t!==e.target.name}));j((function(){return Object(G.a)(Object(G.a)({},d),{},{plataforms:t})}))}else j((function(){return Object(G.a)(Object(G.a)({},d),{},{plataforms:[].concat(Object(h.a)(d.plataforms),[e.target.name])})}))}(e)},children:e})},e)}))}),Object(l.jsx)("div",{className:U.a.selectedContent,children:Object(l.jsx)("ul",{className:U.a.select,children:d.plataforms.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Rating: "}),Object(l.jsx)("input",{name:"rating",type:"number",min:"0",max:"5",onChange:N,required:!0,step:".1"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Released: "}),Object(l.jsx)("input",{name:"released",type:"date",onChange:N,required:!0})]}),Object(l.jsx)("div",{className:U.a.select,children:x.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("button",{value:e.id,name:e.name,onClick:function(t){return function(e,t){if(e.preventDefault(),d.genres.includes(t)){var n=d.genres.filter((function(e){return e!==t}));j((function(){return Object(G.a)(Object(G.a)({},d),{},{genres:n})}))}else j((function(){return Object(G.a)(Object(G.a)({},d),{},{genres:[].concat(Object(h.a)(d.genres),[t])})}))}(t,e.id)},children:e.name})},e.id)}))}),Object(l.jsx)("div",{className:U.a.selectedContent,children:Object(l.jsx)("ul",{className:U.a.select,children:(f=d.genres,f.map((function(e){var t=x.find((function(t){return t.id===e}));return t?t.name:""}))).map((function(e){return Object(l.jsx)("li",{children:e},e)}))})}),Object(l.jsx)("input",{className:U.a.cerrar,type:"submit",value:"Crear Juego"})]})})})})})}var B=n(33),X=n.n(B);function Z(e){e.name,e.background_image,e.genres;return Object(l.jsx)("div",{className:X.a.content,children:Object(l.jsx)(s.b,{to:"/home/videogame",children:Object(l.jsx)("label",{className:X.a.btnneon,children:"START"})})})}var q=n(34),H=n.n(q);function J(){return Object(l.jsx)("div",{className:H.a.not,children:Object(l.jsxs)("div",{className:H.a.notContent,children:[Object(l.jsx)("h1",{children:"Sorry!"}),"Not Found."]})})}var z=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(Z,{})}),Object(l.jsxs)(o.a,{exact:!0,path:"/home/createvideogame",children:[Object(l.jsx)(u,{}),Object(l.jsx)(F,{})]}),Object(l.jsxs)(o.a,{exact:!0,path:"/home/videogame",children:[Object(l.jsx)(u,{}),Object(l.jsx)(w,{})]}),Object(l.jsxs)(o.a,{exact:!0,path:"/home/videogame/:id",children:[Object(l.jsx)(u,{}),Object(l.jsx)(C,{})]}),Object(l.jsxs)(o.a,{exact:!0,path:"/home/notfound",children:[Object(l.jsx)(u,{}),Object(l.jsx)(J,{})]})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Y=n(28),Q={videogames:[],aux:[]};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(G.a)(Object(G.a)({},e),{},{videogames:t.payload,aux:t.payload});case L:return""===t.payload?Object(G.a)(Object(G.a)({},e),{},{videogames:e.aux}):Object(G.a)(Object(G.a)({},e),{},{videogames:t.payload});case D:var n=e.aux;if("All"===t.payload)return Object(G.a)(Object(G.a)({},e),{},{videogames:n});if("Created"===t.payload){var a=n.filter((function(e){return"string"===typeof e.id}));return Object(G.a)(Object(G.a)({},e),{},{videogames:a})}if("Existing"===t.payload){var c=n.filter((function(e){return"number"===typeof e.id}));return Object(G.a)(Object(G.a)({},e),{},{videogames:c})}var r=n.filter((function(e){return e.genres.map((function(e){return e.name})).includes(t.payload)}));return Object(G.a)(Object(G.a)({},e),{},{videogames:r});default:return e}},$=n(47),ee=window._REDUX_DEVTOOLS_EXTENSIONCOMPOSE||Y.b,te=Object(Y.c)(W,ee(Object(Y.a)($.a)));i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(S.a,{store:te,children:Object(l.jsx)(z,{})})}),document.getElementById("root")),K()}},[[84,1,2]]]);
//# sourceMappingURL=main.5d19aaf5.chunk.js.map