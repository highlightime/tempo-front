(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{3279:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mintProfile",function(){return n(985)}])},898:function(e,t,n){"use strict";n.d(t,{PZ:function(){return s},fs:function(){return i},nZ:function(){return a}});let a=()=>"0xc8E2FaF350388bD4F93B99824350E675C67fE34b",i=()=>"0xda77F70aab80ea5395034829E161B4800061B8E0",s=()=>"0x11227D571C56550862e0ae10122a2F5Aa96089FB"},985:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(5893),i=n(3100),s=n(204),r=n(654),p=n(6177),u=n(8129),y=n(8691),d=n(9222),l=n(7536),o=n(2660),m=n(898),c=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"DislikeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"LikeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newItemId","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenURI","type":"string"}],"name":"MintEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"addDislike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"addLike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getDislikes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLikes","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"mintProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),f=n(9337),T=n(6076);let w=(0,m.fs)(),b=c.Mt,I=()=>{let{register:e,handleSubmit:t}=(0,l.cI)(),n=async e=>{m(e)},m=async e=>{let t=e.profileImage[0],n={image:t,name:"Test Name",description:"Test Desc",properties:{authors:e.nickname}},a=new o.j3({token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGYzYzhGQTEyMDA2RUE0MzdFOUFjMWU4RDkzRjcyZkQyY0M4ZEJGNjEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NDQxNTQwNDcyNiwibmFtZSI6ImRlY2lwaGVyLXRva2VuIn0.3Htp1w5kWqpXwcM9Vspt3MNi1IHZ0fJarIlsJ9qutic"}),i=await a.store(n);console.log("Metadata URI: ",i.url),c(i.url)},c=async e=>{let{ethereum:t}=window;t&&t.request||alert("Please install MetaMask!");let n=await t.request({method:"eth_requestAccounts"});if(0!==n.length){let t=n[0];I(e,t)}else console.log("No Authrized Account.")};async function I(e,t){try{let{ethereum:n}=window;if(n){let a=new f.Q(n),i=a.getSigner(),s=new T.CH(w,b,i),r=await s.mintProfile(t,e);await r.wait()}else console.log("Ether obj not exists")}catch(e){console.log(e)}}return(0,a.jsx)(i.xu,{w:"100%",children:(0,a.jsx)(s.k,{flexDir:"column",h:"90vh",alignItems:"center",justifyContent:"center",children:(0,a.jsxs)("form",{onSubmit:t(async e=>n(e)),style:{display:"flex",flexDirection:"column"},children:[(0,a.jsxs)(r.NI,{w:"50vw",isRequired:!0,children:[(0,a.jsx)(p.l,{children:"Profile Image"}),(0,a.jsx)(u.I,{type:"file",variant:"unstyled",...e("profileImage")}),(0,a.jsx)(r.Q6,{children:"Only jpg, png"})]}),(0,a.jsxs)(r.NI,{w:"50vw",mt:"5",isRequired:!0,children:[(0,a.jsx)(p.l,{children:"Nickname"}),(0,a.jsx)(u.I,{type:"text",...e("nickname"),placeholder:"Input Nickname."})]}),(0,a.jsxs)(r.NI,{w:"50vw",mt:"5",isRequired:!0,children:[(0,a.jsx)(p.l,{children:"Birth"}),(0,a.jsx)(u.I,{type:"date",...e("birth")})]}),(0,a.jsxs)(r.NI,{w:"50vw",mt:"5",isRequired:!0,children:[(0,a.jsx)(p.l,{children:"Gender"}),(0,a.jsx)(y.P,{placeholder:"Select Gender",...e("gender"),children:["Male","Female","Intersex","Trans","Non-Conforming","Personal","Eunuch"].map(e=>(0,a.jsx)("option",{value:"".concat(e),children:e},"".concat(e)))})]}),(0,a.jsxs)(r.NI,{w:"50vw",mt:"5",children:[(0,a.jsx)(p.l,{children:"Inspection Result"}),(0,a.jsx)(u.I,{type:"file",variant:"unstyled",...e("inspectionResult")})]}),(0,a.jsx)(d.z,{type:"submit",mt:"8",children:"Mint!"})]})})})};var x=I},6601:function(){}},function(e){e.O(0,[7,182,870,774,888,179],function(){return e(e.s=3279)}),_N_E=e.O()}]);