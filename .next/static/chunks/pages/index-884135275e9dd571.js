(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,s,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5133)}])},5133:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var t=a(4848),r=a(3368),i=a.n(r),n=a(961);let l=new(a(2374)).WorkOS("sk_test_a2V5XzAxSkI5Sjc5R1RFSEhGOUUwOVlRUkhZSEMxLGZDdEhzTFphRjF3RU9HY1g5TVdtWDFOS0c");async function c(e,s){try{return await l.userManagement.authenticateWithPassword({clientId:"client_01JB9J7A43RR2MSEA4HZTB476M",email:String(s.get("email")),password:String(s.get("password"))})}catch(e){return{error:JSON.parse(JSON.stringify(e))}}}var o=a(6540),u=a(6715);function d(){var e;let[s,a]=(0,n.useFormState)(c,{error:null}),r=(0,u.useRouter)();return(0,o.useEffect)(()=>{if(console.log(s),s.user){let e=s.accessToken;setTimeout(()=>{r.push("http://localhost:3000/ws-callback?access_token=".concat(e))},2e3)}},[s,r]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i(),{children:[(0,t.jsx)("title",{children:"Sign-in to GatewayHR"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),s.error?(0,t.jsx)("p",{className:"error",children:null===(e=s.error)||void 0===e?void 0:e.message}):"",s.user?(0,t.jsx)("p",{className:"success",children:"Login success."}):"",(0,t.jsxs)("main",{children:[(0,t.jsx)("h1",{children:"Sign-in"}),(0,t.jsxs)("form",{action:a,children:[(0,t.jsxs)("div",{className:"finput",children:[(0,t.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{type:"email",name:"email",id:"email",autoCapitalize:"off",autoComplete:"username",autoFocus:!0,required:!0})]}),(0,t.jsxs)("div",{className:"finput",children:[(0,t.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),(0,t.jsx)("input",{type:"password",name:"password",id:"password",autoCapitalize:"off",autoComplete:"current-password",required:!0})]}),(0,t.jsx)("button",{className:"formsubmit",type:"submit",children:"Sign-in"})]})]})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[200,418,636,593,792],()=>s(2022)),_N_E=e.O()}]);