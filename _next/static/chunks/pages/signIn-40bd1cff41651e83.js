(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[256],{6237:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});var s=n(7218),a=n(6441),i=n(9251);function r(e){let t=(0,i.Y0)(e);if(t.length>31)throw Error("bytes32 string must be less than 32 bytes");return(0,a.Dv)((0,a.zo)([t,s.R]).slice(0,32))}},9500:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signIn",function(){return n(5466)}])},898:function(e,t,n){"use strict";n.d(t,{PZ:function(){return i},fs:function(){return a},nZ:function(){return s}});let s=()=>"0xc8E2FaF350388bD4F93B99824350E675C67fE34b",a=()=>"0xda77F70aab80ea5395034829E161B4800061B8E0",i=()=>"0x11227D571C56550862e0ae10122a2F5Aa96089FB"},5466:function(e,t,n){"use strict";n.r(t);var s=n(5893),a=n(3100),i=n(204),r=n(654),u=n(6177),l=n(8129),o=n(9222),d=n(7536),p=n(1163),c=n(6237),y=n(6076),m=n(9337),b=n(9595),f=n(898),h=n(5072),w=n(4480);let x=()=>{let{register:e,handleSubmit:t}=(0,d.cI)(),[n,x]=(0,w.FV)(h.K),_=(0,p.useRouter)(),v=async e=>{let{email:t,password:n}=e;try{let e=g(),s=await j(e),a=(0,f.nZ)(),i=b.Mt,r=c.s(t),u=c.s(n),l=new y.CH(a,i,s),o=await l.authenticateUser(r,u);o?(x(t),_.push("/")):alert("Invalid Email or password")}catch(e){alert("login failed...")}},N=async e=>{await v({...e})},g=()=>new m.Q(window.ethereum),j=async e=>(await e.send("eth_requestAccounts",[]),e.getSigner());return(0,s.jsx)(a.xu,{w:"100%",children:(0,s.jsx)(i.k,{flexDir:"column",h:"90vh",alignItems:"center",justifyContent:"center",children:(0,s.jsxs)("form",{onSubmit:t(e=>N(e)),style:{width:"50vw"},children:[(0,s.jsxs)(r.NI,{isRequired:!0,children:[(0,s.jsx)(u.l,{children:"Email"}),(0,s.jsx)(l.I,{type:"email",placeholder:"Input Email.",...e("email")})]}),(0,s.jsxs)(r.NI,{isRequired:!0,my:"10",children:[(0,s.jsx)(u.l,{children:"Password"}),(0,s.jsx)(l.I,{type:"password",placeholder:"Input Password.",...e("password")})]}),(0,s.jsx)(o.z,{type:"submit",mt:"10",children:"Sign In"})]})})})};t.default=x},6601:function(){},6177:function(e,t,n){"use strict";n.d(t,{l:function(){return d}});var s=n(654),a=n(5059),i=n(4662),r=n(3179),u=n(1337),l=n(5432),o=n(5893),d=(0,a.G)(function(e,t){var n;let a=(0,i.mq)("FormLabel",e),d=(0,r.Lr)(e),{className:c,children:y,requiredIndicator:m=(0,o.jsx)(p,{}),optionalIndicator:b=null,...f}=d,h=(0,s.NJ)(),w=null!=(n=null==h?void 0:h.getLabelProps(f,t))?n:{ref:t,...f};return(0,o.jsxs)(u.m.label,{...w,className:(0,l.cx)("chakra-form__label",d.className),__css:{display:"block",textAlign:"start",...a},children:[y,(null==h?void 0:h.isRequired)?m:b]})});d.displayName="FormLabel";var p=(0,a.G)(function(e,t){let n=(0,s.NJ)(),a=(0,s.e)();if(!(null==n?void 0:n.isRequired))return null;let i=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,o.jsx)(u.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:a.requiredIndicator,className:i})});p.displayName="RequiredIndicator"},9595:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"}],"name":"UserAuthenticated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"bytes32","name":"emailHash","type":"bytes32"}],"name":"UserRegistered","type":"event"},{"inputs":[{"internalType":"bytes32","name":"emailHash","type":"bytes32"},{"internalType":"bytes32","name":"passwordHash","type":"bytes32"}],"name":"authenticateUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"isRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"number","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"emailHash","type":"bytes32"},{"internalType":"bytes32","name":"passwordHash","type":"bytes32"}],"name":"registerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newNumber","type":"uint256"}],"name":"setNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}},function(e){e.O(0,[7,182,774,888,179],function(){return e(e.s=9500)}),_N_E=e.O()}]);