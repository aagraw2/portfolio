(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),r=a.n(l),o=(a(97),a(15)),i=a(16),m=a(20),s=a(17),u=a(21),E=a(107),d=a(109),p=a(111),h=(a(98),a(117)),A=a(118),v=a(119),O=a(120),g=a(121),j=(a(99),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"skills-section"},c.a.createElement("div",{className:"card"},c.a.createElement("div",null,"Languages"),c.a.createElement("div",null,"JavaScript")))}}]),t}(n.Component)),k=a(108),y=a(71),b=a.n(y),w=a(72),f=a.n(w),P=a(112),x=a(113),G=a(114),q=a(115),N=a(116),z=a(61),B=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},c.a.createElement(k.a,{width:200,height:200,src:b.a,fallback:f.a}),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Hi, I am John Doe"),"  ",c.a.createElement("br",null),c.a.createElement("h3",null,"Full stack developer"))),c.a.createElement("div",{style:{left:"40%",position:"absolute",bottom:"0",marginBottom:"10vh"}},c.a.createElement("h4",{style:{textAlign:"center"}},"Contact me"),c.a.createElement("div",{style:{marginTop:"8vh"}},c.a.createElement(z.a,{title:"github"},c.a.createElement(P.a,{style:{fontSize:"2.5em",margin:"10px",padding:"10px"}})),c.a.createElement(z.a,{title:"LinkedIn"},c.a.createElement(x.a,{style:{fontSize:"2.5em",margin:"10px",padding:"10px"}})),c.a.createElement(z.a,{title:"Facebook"},c.a.createElement(G.a,{style:{fontSize:"2.5em",margin:"10px",padding:"10px"}})),c.a.createElement(z.a,{title:"Instagram"},c.a.createElement(q.a,{style:{fontSize:"2.5em",margin:"10px",padding:"10px"}})),c.a.createElement(z.a,{title:"Twitter"},c.a.createElement(N.a,{style:{fontSize:"2.5em",margin:"10px",padding:"10px"}})))))}}]),t}(n.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Experience")}}]),t}(n.Component),F=a(35),D=a(5),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Education")}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Project")}}]),t}(n.Component),L=E.a.Header,Z=E.a.Sider,U=E.a.Content,T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,{style:{height:"100vh"}},c.a.createElement(Z,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},c.a.createElement("div",{className:"logo"},this.state.collapsed?"John":"John Doe"),c.a.createElement("div",{className:"avatar"},c.a.createElement(d.a,{size:this.state.collapsed?50:90,icon:c.a.createElement(h.a,null)}),"J"),c.a.createElement(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},c.a.createElement(p.a.Item,{key:"1",icon:c.a.createElement(h.a,null)},c.a.createElement(F.b,{to:"/"},"My Info")),c.a.createElement(p.a.Item,{key:"2",icon:c.a.createElement(h.a,null)},c.a.createElement(F.b,{to:"/skills"},"Skills")),c.a.createElement(p.a.Item,{key:"3",icon:c.a.createElement(A.a,null)},c.a.createElement(F.b,{to:"/experience"},"Experience")),c.a.createElement(p.a.Item,{key:"4",icon:c.a.createElement(v.a,null)},c.a.createElement(F.b,{to:"/education"},"Education")),c.a.createElement(p.a.Item,{key:"5",icon:c.a.createElement(v.a,null)},c.a.createElement(F.b,{to:"/projects"},"Projects")))),c.a.createElement(E.a,{className:"site-layout"},c.a.createElement(L,{className:"site-layout-background",style:{padding:0}},c.a.createElement(this.state.collapsed?O.a:g.a,{className:"trigger",onClick:this.toggle})),c.a.createElement(U,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280}},c.a.createElement(D.c,null,c.a.createElement(D.a,{path:"/",exact:!0,component:B}),c.a.createElement(D.a,{path:"/skills",component:j}),c.a.createElement(D.a,{path:"/experience",component:K}),c.a.createElement(D.a,{path:"/education",component:J}),c.a.createElement(D.a,{path:"/projects",component:C})))))}}]),t}(c.a.Component);var Q=function(){return c.a.createElement(F.a,null,c.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t){e.exports="data:image/png;base64,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"},72:function(e,t,a){e.exports=a.p+"static/media/avatar.03f159f4.png"},92:function(e,t,a){e.exports=a(105)},97:function(e,t,a){},99:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.faf393e2.chunk.js.map