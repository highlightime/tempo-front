(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{9621:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/find",function(){return n(7439)}])},5980:function(e,r,n){"use strict";var i=n(5893),t=n(3100),s=n(1941),l=n(2498),o=n(7754),c=n(6877),u=n(204),x=n(3941),h=n.n(x),d=n(5434);let a=e=>{let{userInfo:r,isFlipped:n,handleFlip:x}=e;return(0,i.jsxs)(h(),{isFlipped:n,children:[(0,i.jsx)(t.xu,{onClick:x,shadow:"2xl",borderRadius:"10px",width:"300px",height:"400px",_hover:{cursor:"pointer"},children:(0,i.jsx)(s.E,{src:r.profileImage,alt:"profileImage",width:"300",height:"400",borderRadius:"10px"})}),(0,i.jsxs)(t.xu,{width:"300px",height:"400px",onClick:x,bgColor:(0,l.ff)("gray.100","gray.300"),borderRadius:"10px",shadow:"2xl",position:"relative",_hover:{cursor:"pointer"},children:[(0,i.jsx)(o.u,{children:(0,i.jsx)(c.J,{as:d.jeH,color:"blue.500",fontSize:"300px",zIndex:"-1",opacity:"0.1"})}),(0,i.jsxs)(u.k,{flexDir:"column",justifyContent:"center",height:"full",zIndex:"1",color:(0,l.ff)("black","black"),children:[(0,i.jsx)(t.xu,{fontSize:"3xl",textAlign:"center",mb:"10",children:r.nickname}),(0,i.jsxs)(t.xu,{pl:"10",children:["Birth : ",r.birth]}),(0,i.jsxs)(t.xu,{pl:"10",children:["Gender: ",r.gender]})]})]})]})};r.Z=a},7439:function(e,r,n){"use strict";n.r(r);var i=n(5893),t=n(3100),s=n(204),l=n(6877),o=n(9222),c=n(9588),u=n(7294),x=n(3750),h=n(5980);let d=()=>{let[e,r]=(0,u.useState)(""),[n,d]=(0,u.useState)(!1),[a,p]=(0,u.useState)(),f=async()=>{let{data:e}=await (0,c.Z)("/api/find",{method:"get"});d(!1),p(e)},j=()=>{d(e=>!e)};return(0,i.jsx)(t.xu,{w:"100%",children:(0,i.jsx)(s.k,{flexDir:"column",h:"90vh",alignItems:"center",justifyContent:"center",children:a?(0,i.jsxs)(t.xu,{children:[(0,i.jsx)(t.xu,{_hover:{cursor:"pointer"},children:(0,i.jsx)(h.Z,{userInfo:a,isFlipped:n,handleFlip:j})}),(0,i.jsxs)(s.k,{width:"full",justifyContent:"space-between",fontSize:"xx-large",mt:"5",px:"3",children:[(0,i.jsx)(l.J,{as:x.XA0,color:"red",_hover:{cursor:"pointer"}}),(0,i.jsx)(l.J,{as:x.PxJ,onClick:f,_hover:{cursor:"pointer"}})]})]}):(0,i.jsx)(o.z,{onClick:f,children:"Let's Find Your Lover"})})})};r.default=d}},function(e){e.O(0,[228,13,724,774,888,179],function(){return e(e.s=9621)}),_N_E=e.O()}]);