"use strict";(()=>{var e={};e.id=367,e.ids=[367],e.modules={6075:e=>{e.exports=require("@workos-inc/node")},5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6762:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2280:(e,t,r)=>{r.r(t),r.d(t,{config:()=>P,default:()=>f,routeModule:()=>p});var n={};r.r(n),r.d(n,{default:()=>A});var o=r(9947),s=r(2706),a=r(6762),i=r(6075),u=r(7892);let l=new i.WorkOS(u.p);async function d(e){try{let t=await l.userManagement.getUser(e);return console.log(t),t}catch(e){throw console.error("Error fetching user details:",e),Error("Failed to fetch user details")}}let c=(e,t,r)=>{t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","GET, OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type"),"OPTIONS"===e.method?t.status(200).end():r()};async function A(e,t){c(e,t,async()=>{if("GET"===e.method){let{userId:r}=e.query;if(!r||Array.isArray(r))return t.status(400).json({error:"userId query parameter is required and must be a single value"});try{let e=await d(r);t.status(200).json(e)}catch(e){t.status(500).json({error:"Failed to fetch user details"})}}else t.status(405).json({error:"Method Not Allowed"})})}let f=(0,a.M)(n,"default"),P=(0,a.M)(n,"config"),p=new o.PagesAPIRouteModule({definition:{kind:s.A.PAGES_API,page:"/api/getUserDetail",pathname:"/api/getUserDetail",bundlePath:"",filename:""},userland:n})},7892:(e,t,r)=>{r.d(t,{p:()=>n});let n="sk_test_a2V5XzAxSkI5Sjc5R1RFSEhGOUUwOVlRUkhZSEMxLGZDdEhzTFphRjF3RU9HY1g5TVdtWDFOS0c"},2706:(e,t)=>{var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},9947:(e,t,r)=>{e.exports=r(5600)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=2280);module.exports=r})();