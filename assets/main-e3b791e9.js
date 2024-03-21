import{u as z,m as w,r as d,M as U,i as X,a as R,c as K,f as b,b as C,d as T,e as se,g as V,h as ne,j as ie,p as re,v as oe,k as ae,w as ce,l as t,n as a,o as le,R as de}from"./motion-eda4ab28.js";function $(e){const s=z(()=>w(e)),{isStatic:r}=d.useContext(U);if(r){const[,n]=d.useState(e);d.useEffect(()=>s.on("change",n),[])}return s}const ue=e=>typeof e=="object"&&e.mix,he=e=>ue(e)?e.mix:void 0;function fe(...e){const s=!Array.isArray(e[0]),r=s?0:-1,n=e[0+r],i=e[1+r],o=e[2+r],c=e[3+r],l=X(i,o,{mixer:he(o[0]),...c});return s?l(n):l}function J(e,s){const r=$(s()),n=()=>r.set(s());return n(),R(()=>{const i=()=>b.update(n,!1,!0),o=e.map(c=>c.on("change",i));return()=>{o.forEach(c=>c()),K(n)}}),r}function pe(e){C.current=[],e();const s=J(C.current,e);return C.current=void 0,s}function O(e,s,r,n){if(typeof e=="function")return pe(e);const i=typeof s=="function"?s:fe(s,r,n);return Array.isArray(e)?W(e,i):W([e],([o])=>i(o))}function W(e,s){const r=z(()=>[]);return J(e,()=>{r.length=0;const n=e.length;for(let i=0;i<n;i++)r[i]=e[i].get();return s(r)})}function me(e,s={}){const{isStatic:r}=d.useContext(U),n=d.useRef(null),i=$(T(e)?e.get():e),o=()=>{n.current&&n.current.stop()};return d.useInsertionEffect(()=>i.attach((c,l)=>{if(r)return l(c);if(o(),n.current=se({keyframes:[i.get(),c],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:l}),!V.isProcessing){const u=performance.now()-V.timestamp;u<30&&(n.current.time=ne(u))}return i.get()},o),[JSON.stringify(s)]),R(()=>{if(T(e))return e.on("change",c=>i.set(parseFloat(c)))},[i]),i}function Z(e,s,r){var n;if(typeof e=="string"){let i=document;s&&(ie(!!s.current),i=s.current),r?((n=r[e])!==null&&n!==void 0||(r[e]=i.querySelectorAll(e)),e=r[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const S=new WeakMap;let g;function ge(e,s){if(s){const{inlineSize:r,blockSize:n}=s[0];return{width:r,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function xe({target:e,contentRect:s,borderBoxSize:r}){var n;(n=S.get(e))===null||n===void 0||n.forEach(i=>{i({target:e,contentSize:s,get size(){return ge(e,r)}})})}function ve(e){e.forEach(xe)}function je(){typeof ResizeObserver>"u"||(g=new ResizeObserver(ve))}function ye(e,s){g||je();const r=Z(e);return r.forEach(n=>{let i=S.get(n);i||(i=new Set,S.set(n,i)),i.add(s),g==null||g.observe(n)}),()=>{r.forEach(n=>{const i=S.get(n);i==null||i.delete(s),i!=null&&i.size||g==null||g.unobserve(n)})}}const L=new Set;let E;function we(){E=()=>{const e={width:window.innerWidth,height:window.innerHeight},s={target:window,size:e,contentSize:e};L.forEach(r=>r(s))},window.addEventListener("resize",E)}function be(e){return L.add(e),E||we(),()=>{L.delete(e),!L.size&&E&&(E=void 0)}}function Ee(e,s){return typeof e=="function"?be(e):ye(e,s)}const Ne=50,B=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),ke=()=>({time:0,x:B(),y:B()}),Se={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function P(e,s,r,n){const i=r[s],{length:o,position:c}=Se[s],l=i.current,u=r.time;i.current=e["scroll"+c],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=re(0,i.scrollLength,i.current);const f=n-u;i.velocity=f>Ne?0:oe(i.current-l,f)}function Le(e,s,r){P(e,"x",s,r),P(e,"y",s,r),s.time=r}function Ce(e,s){const r={x:0,y:0};let n=e;for(;n&&n!==s;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const i=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();r.x+=i.left-o.left,r.y+=i.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:i,y:o}=n.getBBox();r.x+=i,r.y+=o;let c=null,l=n.parentNode;for(;!c;)l.tagName==="svg"&&(c=l),l=n.parentNode;n=c}else break;return r}const He={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},I={start:0,center:.5,end:1};function _(e,s,r=0){let n=0;if(I[e]!==void 0&&(e=I[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?n=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?n=i/100*document.documentElement.clientWidth:e.endsWith("vh")?n=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(n=s*e),r+n}const Ve=[0,0];function Oe(e,s,r,n){let i=Array.isArray(e)?e:Ve,o=0,c=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,I[e]?e:"0"]),o=_(i[0],r,n),c=_(i[1],s),o-c}const Ie={x:0,y:0};function ze(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Re(e,s,r){let{offset:n=He.All}=r;const{target:i=e,axis:o="y"}=r,c=o==="y"?"height":"width",l=i!==e?Ce(i,e):Ie,u=i===e?{width:e.scrollWidth,height:e.scrollHeight}:ze(i),f={width:e.clientWidth,height:e.clientHeight};s[o].offset.length=0;let h=!s[o].interpolate;const x=n.length;for(let p=0;p<x;p++){const A=Oe(n[p],f[c],u[c],l[o]);!h&&A!==s[o].interpolatorOffsets[p]&&(h=!0),s[o].offset[p]=A}h&&(s[o].interpolate=X(s[o].offset,ae(n)),s[o].interpolatorOffsets=[...s[o].offset]),s[o].progress=s[o].interpolate(s[o].current)}function Me(e,s=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,s!==e){let n=s;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=s===e?s.scrollWidth:s.clientWidth,r.y.targetLength=s===e?s.scrollHeight:s.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function Ae(e,s,r,n={}){return{measure:()=>Me(e,n.target,r),update:i=>{Le(e,r,i),(n.offset||n.target)&&Re(e,r,n)},notify:()=>s(r)}}const y=new WeakMap,D=new WeakMap,H=new WeakMap,G=e=>e===document.documentElement?window:e;function Te(e,{container:s=document.documentElement,...r}={}){let n=H.get(s);n||(n=new Set,H.set(s,n));const i=ke(),o=Ae(s,e,i,r);if(n.add(o),!y.has(s)){const l=()=>{for(const p of n)p.measure()},u=()=>{for(const p of n)p.update(V.timestamp)},f=()=>{for(const p of n)p.notify()},h=()=>{b.read(l,!1,!0),b.update(u,!1,!0),b.update(f,!1,!0)};y.set(s,h);const x=G(s);window.addEventListener("resize",h,{passive:!0}),s!==document.documentElement&&D.set(s,Ee(s,h)),x.addEventListener("scroll",h,{passive:!0})}const c=y.get(s);return b.read(c,!1,!0),()=>{var l;K(c);const u=H.get(s);if(!u||(u.delete(o),u.size))return;const f=y.get(s);y.delete(s),f&&(G(s).removeEventListener("scroll",f),(l=D.get(s))===null||l===void 0||l(),window.removeEventListener("resize",f))}}function q(e,s){ce(!!(!s||s.current))}const We=()=>({scrollX:w(0),scrollY:w(0),scrollXProgress:w(0),scrollYProgress:w(0)});function M({container:e,target:s,layoutEffect:r=!0,...n}={}){const i=z(We);return(r?R:d.useEffect)(()=>(q("target",s),q("container",e),Te(({x:c,y:l})=>{i.scrollX.set(c.current),i.scrollXProgress.set(c.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(s==null?void 0:s.current)||void 0})),[e,s,JSON.stringify(n.offset)]),i}const Be={some:0,all:1};function Pe(e,s,{root:r,margin:n,amount:i="some"}={}){const o=Z(e),c=new WeakMap,l=f=>{f.forEach(h=>{const x=c.get(h.target);if(h.isIntersecting!==!!x)if(h.isIntersecting){const p=s(h);typeof p=="function"?c.set(h.target,p):u.unobserve(h.target)}else x&&(x(h),c.delete(h.target))})},u=new IntersectionObserver(l,{root:r,rootMargin:n,threshold:typeof i=="number"?i:Be[i]});return o.forEach(f=>u.observe(f)),()=>u.disconnect()}function Q(e,{root:s,margin:r,amount:n,once:i=!1}={}){const[o,c]=d.useState(!1);return d.useEffect(()=>{if(!e.current||i&&o)return;const l=()=>(c(!0),i?void 0:()=>c(!1)),u={root:s&&s.current||void 0,margin:r,amount:n};return Pe(e.current,l,u)},[s,e,r,i]),o}const N={_origin:"https://api.emailjs.com"},_e=(e,s="https://api.emailjs.com")=>{N._userID=e,N._origin=s},ee=(e,s,r)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class F{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const te=(e,s,r={})=>new Promise((n,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:c})=>{const l=new F(c);l.status===200||l.text==="OK"?n(l):i(l)}),o.addEventListener("error",({target:c})=>{i(new F(c))}),o.open("POST",N._origin+e,!0),Object.keys(r).forEach(c=>{o.setRequestHeader(c,r[c])}),o.send(s)}),De=(e,s,r,n)=>{const i=n||N._userID;return ee(i,e,s),te("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:i,service_id:e,template_id:s,template_params:r}),{"Content-type":"application/json"})},Ge=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},qe=(e,s,r,n)=>{const i=n||N._userID,o=Ge(r);ee(i,e,s);const c=new FormData(o);return c.append("lib_version","3.12.1"),c.append("service_id",e),c.append("template_id",s),c.append("user_id",i),te("/api/v1.0/email/send-form",c)},Fe={init:_e,send:De,sendForm:qe},j={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},Ye=()=>{const e=d.useRef(),s=d.useRef(),[r,n]=d.useState(!1),[i,o]=d.useState(!1),c=Q(e,{margin:"-100px"}),l=u=>{u.preventDefault(),Fe.sendForm("service_p1ix21l","template_2ki3qip",s.current,"O3eIZmzXRgwUjLAt_").then(f=>{o(!0)},f=>{n(!0)})};return t.jsxs(a.div,{ref:e,className:"contact",variants:j,initial:"initial",whileInView:"animate",children:[t.jsxs(a.div,{className:"textContainer",variants:j,children:[t.jsxs(a.h1,{variants:j,children:["Let’s ",t.jsx(a.b,{whileHover:{color:"orange"},children:"fly"})," together"]}),t.jsx(a.div,{className:"item",variants:j,children:t.jsx("h2",{children:"Please feel free to duck in for any information or corrections."})}),t.jsxs(a.div,{className:"item",variants:j,children:[t.jsx("h2",{children:"Mail"}),t.jsx("span",{children:"vitruastudio@gmail.com"})]}),t.jsxs(a.div,{className:"item",variants:j,children:[t.jsx("h2",{children:"Our experts currently available for you to hire:"}),t.jsxs("div",{children:[t.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"8px"}}),t.jsx("span",{children:"Business Analyst"})]}),t.jsxs("div",{children:[t.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"8px"}}),t.jsx("span",{children:"DevOps Engineer"})]})]})]}),t.jsxs("div",{className:"formContainer",children:[t.jsx(a.div,{className:"phoneSvg",initial:{opacity:1},whileInView:{opacity:0},transition:{delay:3,duration:1},children:t.jsx("svg",{width:"450px",height:"450px",viewBox:"0 0 32.666 32.666",children:t.jsx(a.path,{strokeWidth:.2,fill:"none",initial:{pathLength:0},animate:c&&{pathLength:1},transition:{duration:3},d:`M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z`})})}),t.jsxs(a.form,{ref:s,onSubmit:l,initial:{opacity:0},whileInView:{opacity:1},transition:{delay:4,duration:1},children:[t.jsx("input",{type:"text",required:!0,placeholder:"Name",name:"name"}),t.jsx("input",{type:"email",required:!0,placeholder:"Email",name:"email"}),t.jsx("textarea",{rows:8,placeholder:"Message",name:"message"}),t.jsx("button",{children:"Submit"}),r&&"Error",i&&"Success"]})]})]})};const Ue=()=>{const[e,s]=d.useState({x:0,y:0});return d.useEffect(()=>{const r=n=>{s({x:n.clientX,y:n.clientY})};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[]),t.jsx(a.div,{className:"cursor",animate:{x:e.x+10,y:e.y+10}})};const v={initial:{x:-500,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,staggerChildren:.1}},scrollButton:{opacity:0,y:10,transition:{duration:2,repeat:1/0}}},Xe={initial:{x:0},animate:{x:"-220%",transition:{repeat:1/0,repeatType:"mirror",duration:20}}},Ke=()=>t.jsxs("div",{className:"hero",children:[t.jsx("div",{className:"wrapper",children:t.jsxs(a.div,{className:"textContainer",variants:v,initial:"initial",animate:"animate",style:{position:"relative",zIndex:1},children:[t.jsx(a.h2,{variants:v,children:"NEST OF GUIDES AND TOOLS"}),t.jsx(a.h1,{variants:v,children:"VitRua"}),t.jsxs(a.div,{variants:v,className:"buttons",children:[t.jsx("a",{href:"#Guides",children:t.jsx(a.button,{variants:v,children:"Jump to Guides"})}),t.jsx("a",{href:"#Contact",children:t.jsx(a.button,{variants:v,children:"Let's connect"})})]}),t.jsx(a.img,{variants:v,animate:"scrollButton",src:"/scroll.png",alt:""})]})}),t.jsx(a.div,{className:"slidingTextContainer",variants:Xe,initial:"initial",animate:"animate",children:"DevOps Software Marketing Ducks Turtles"}),t.jsx("div",{className:"imageContainer",children:t.jsx("img",{src:"/hero.png",alt:""})})]}),$e={open:{transition:{staggerChildren:.1}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},Je={open:{y:0,opacity:1},closed:{y:50,opacity:0}},Ze=()=>{const e=["Home","Tools","Guides","Contact","About Us"];return t.jsx(a.div,{className:"links",variants:$e,children:e.map(s=>t.jsx(a.a,{href:`#${s}`,variants:Je,whileHover:{scale:1.1},whileTap:{scale:.95},children:s},s))})};const Qe=({setOpen:e})=>t.jsx("button",{onClick:()=>e(s=>!s),children:t.jsxs("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[t.jsx(a.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),t.jsx(a.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}}}),t.jsx(a.path,{strokeWidth:"3",stroke:"black",strokeLinecap:"round",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})}),et={open:{clipPath:"circle(1200px at 50px 50px)",transition:{type:"spring",stiffness:20}},closed:{clipPath:"circle(30px at 50px 50px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}},tt=()=>{const[e,s]=d.useState(!1),r=d.useRef(null);return d.useEffect(()=>{const n=i=>{r.current&&!r.current.contains(i.target)&&s(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[]),t.jsxs(a.div,{className:"sidebar",ref:r,animate:e?"open":"closed",children:[t.jsx(a.div,{className:"bg",variants:et,children:t.jsx(Ze,{})}),t.jsx(Qe,{setOpen:s})]})};const st=()=>t.jsxs("div",{className:"navbar",children:[t.jsx(tt,{}),t.jsxs("div",{className:"wrapper",children:[t.jsx(a.span,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:"Welcome to vitrua.top only official website"}),t.jsxs("div",{className:"social",children:[t.jsx("a",{href:"https://patreon.com/Vitrua",children:t.jsx("img",{src:"/patreon.png",alt:""})}),t.jsx("a",{href:"https://instagram.com/vitruastudio",children:t.jsx("img",{src:"/instagram.png",alt:""})})]})]})]});const Y=({type:e})=>{const s=d.useRef(),{scrollYProgress:r}=M({target:s,offset:["start start","end start"]}),n=O(r,[0,1],["0%","500%"]),i=O(r,[0,1],["0%","100%"]);return t.jsxs("div",{className:"parallax",ref:s,style:{background:e==="services"?"linear-gradient(180deg, #111132, #0c0c1d)":"linear-gradient(180deg, #111132, #505064)"},children:[t.jsx(a.h1,{style:{y:n},children:e==="services"?"Tools":"Guides"}),t.jsx(a.div,{className:"field"}),t.jsx(a.div,{className:"planets",style:{y:i,backgroundImage:`url(${e==="services"?"/planets.png":"/sun.png"})`}}),t.jsx(a.div,{style:{x:i},className:"stars"})]})};const nt=[{id:1,title:"Git Magic",img:"https://i.imgur.com/PV4MYNn.jpg",desc:"Embark on a magical journey into the realm of version control with our introductory Git lesson, where wizards and apprentices alike will unravel the secrets of collaborative coding.",url:"https://docs.vitrua.top/Git%20Magic/01_Basic%20workflow/"},{id:2,title:"Kubernetes dungeon",img:"https://i.imgur.com/7dfLRHR.jpg",desc:"Embark on a heroic quest into the Kubernetes Dungeon! Conquer beginner challenges with basic commands, mastering the art of deploying, scaling, and discovering enchanting services.",url:"https://docs.vitrua.top/Kubernetes%20Dungeon/01_Services"}],it=({item:e})=>{const s=d.useRef(),{scrollYProgress:r}=M({target:s}),n=O(r,[0,1],[-300,300]);return t.jsx("section",{children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"wrapper",children:[t.jsx("div",{className:"imageContainer",ref:s,children:t.jsx("img",{src:e.img,alt:""})}),t.jsxs(a.div,{className:"textContainer",style:{y:n},children:[t.jsx("h2",{children:e.title}),t.jsx("p",{children:e.desc}),t.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:t.jsx("button",{children:"Let's go"})})]})]})})})},rt=()=>{const e=d.useRef(),{scrollYProgress:s}=M({target:e,offset:["end end","start start"]}),r=me(s,{stiffness:100,damping:30});return t.jsxs("div",{className:"portfolio",ref:e,children:[t.jsxs("div",{className:"progress",children:[t.jsx("h1",{children:"Available Guides"}),t.jsx(a.div,{style:{scaleX:r},className:"progressBar"})]}),nt.map(n=>t.jsx(it,{item:n},n.id))]})};const k={initial:{x:-500,y:100,opacity:0},animate:{x:0,opacity:1,y:0,transition:{duration:1,staggerChildren:.1}}},ot=()=>{const e=d.useRef();return Q(e,{margin:"-100px"}),t.jsxs(a.div,{className:"services",variants:k,initial:"initial",ref:e,animate:"animate",children:[t.jsxs(a.div,{className:"textContainer",variants:k,children:[t.jsxs("p",{children:["Our tools: easy to initialize",t.jsx("br",{})," and free to use"]}),t.jsx("hr",{})]}),t.jsxs(a.div,{className:"titleContainer",variants:k,children:[t.jsxs("div",{className:"title",children:[t.jsx("img",{src:"/people.webp",alt:""}),t.jsxs("h1",{children:[t.jsx(a.b,{whileHover:{color:"orange"},children:"Enjoy"})," and have"]})]}),t.jsxs("div",{className:"title",children:[t.jsxs("h1",{children:[t.jsx(a.b,{whileHover:{color:"orange"},children:"fun"})," with these"]}),t.jsx("button",{onClick:()=>window.location.href="https://patreon.com/Vitrua",children:"SUPPORT THE DEVELOPING"})]})]}),t.jsxs(a.div,{className:"listContainer",variants:k,children:[t.jsxs(a.div,{className:"box",whileHover:{background:"lightgray",color:"black"},children:[t.jsx("h2",{children:"Chobe - Italian Media Experience for Kodi"}),t.jsx("p",{children:"Chobe is a Kodi addon designed to enhance the Italian media consumption experience for learners and enthusiasts. Whether you're interested in dubbed or original Italian content, or you're a fan of Italian-subtitled anime, Chobe brings an authentic touch to your media library."}),t.jsx("button",{onClick:()=>window.location.href="https://vitrua.top/chobe/",children:"Go"})]}),t.jsxs(a.div,{className:"box",whileHover:{background:"lightgray",color:"black"},children:[t.jsx("h2",{children:"AutoVersion snippet - for self versioning Github projects"}),t.jsx("p",{children:"A GitHub action snippet designed to streamline the process of versioning and release management for software projects following the conventional commits specification outlined at www.conventionalcommits.org. By utilizing this snippet, developers can easily initiate a project that automatically updates its version based on the semantic versioning (SemVer) rules."}),t.jsx("button",{onClick:()=>window.location.href="https://vitrua.top/autoversion/",children:"Go"})]}),t.jsxs(a.div,{className:"box",whileHover:{background:"lightgray",color:"black"},children:[t.jsx("h2",{children:"Helm Chart Unused Values Finder - clean your Kubernetes configs"}),t.jsx("p",{children:"A utility tool designed to assist in the management and optimization of Kubernetes configurations. By identifying values within Helm charts that are defined but not utilized in templates, this python script helps ensuring efficiency and cleanliness in your deployments."}),t.jsx("button",{onClick:()=>window.location.href="https://vitrua.top/helmunused/",children:"Go"})]})]})]})};const m={initial:{y:500,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,staggerChildren:.1}}},at=({children:e})=>t.jsx("div",{style:{display:"flex",justifyContent:"center",overflowX:"hidden",scrollbarWidth:"thin",scrollbarColor:"#061a30 #0c0c1d"},children:t.jsx("div",{style:{maxWidth:"1366px",width:"100%",overflowY:"scroll",scrollbarWidth:"thin",scrollbarColor:"#061a30 #0c0c1d"},children:e})}),ct=()=>{const e=d.useRef();return t.jsx(at,{children:t.jsx(a.div,{ref:e,className:"about",variants:m,initial:"initial",whileInView:"animate",children:t.jsxs(a.div,{className:"textContainer",variants:m,children:[t.jsx(a.h1,{variants:m,children:t.jsx(a.b,{whileHover:{color:"orange"},children:"VịtRùa"})}),t.jsx(a.div,{className:"item",variants:m,children:t.jsx("h4",{children:"VịtRùa is a collaborative initiative driven by the passion of a diverse, international team of tech enthusiasts, including students and professionals with varied specializations. Unified by a shared objective, our team aims to create an inclusive platform that demystifies technology, offering comprehensive guides accessible to everyone. The project embodies versatility, adaptability, and a steadfast commitment to promoting accessible knowledge and practical tools for diverse tasks and needs, ultimately striving to break down barriers and make the vast realm of technology accessible to individuals from all walks of life."})}),t.jsx(a.div,{className:"item",variants:m,children:t.jsx("h4",{children:"This initiative, fueled entirely by our team's dedication during our free time, exemplifies the spirit of collaboration and community-driven learning. We believe in the power of freely sharing tools and guides to empower individuals globally, fostering a culture of continuous learning and innovation."})}),t.jsx(a.div,{className:"item",variants:m,children:t.jsx("h4",{children:"All our resources and instruments are generously provided without charge, reinforcing our commitment to breaking down financial barriers to knowledge. However, if you find our tools useful, we warmly welcome donations that will enable us to enhance and expedite our mission. Your contributions will not only support the continuation of these initiatives but also enable us to expand our reach, spreading knowledge even further."})}),t.jsxs(a.div,{className:"item",variants:m,children:[t.jsx("h2",{children:"Our precious sponsors:"}),t.jsxs("h5",{children:[t.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"1px"}}),"Albon, ",t.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"1px"}}),"JackArgetlam, ",t.jsx("img",{src:"/favicon.ico",alt:"",style:{width:"16px",height:"16px",marginRight:"1px"}}),"Heobe"]})]}),t.jsx(a.div,{className:"item",variants:m,children:t.jsx("a",{href:"https://patreon.com/Vitrua",children:t.jsx("div",{className:"imageContainer",children:t.jsx("img",{src:"/supportmon.png",alt:"",style:{width:"300px",height:"300px",marginRight:"1px"}})})})})]})})})},lt=()=>t.jsxs("div",{children:[t.jsx(Ue,{}),t.jsxs("section",{id:"Home",children:[t.jsx(st,{}),t.jsx(Ke,{})]}),t.jsx("section",{id:"Tools",children:t.jsx(Y,{type:"services"})}),t.jsx("section",{children:t.jsx(ot,{})}),t.jsx("section",{id:"Guides",children:t.jsx(Y,{type:"portfolio"})}),t.jsx(rt,{}),t.jsx("section",{id:"Contact",children:t.jsx(Ye,{})}),t.jsx("section",{id:"About Us",children:t.jsx(ct,{})})]});le.createRoot(document.getElementById("root")).render(t.jsx(de.StrictMode,{children:t.jsx(lt,{})}));
