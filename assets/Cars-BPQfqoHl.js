import{r as p,f as g,e as u,o as h,c as w,d as s,u as a,a as l,w as o,g as S,F as i,b as f}from"./index-C48mS-ui.js";import{s as C,a as M,b as k,c as v,d as N}from"./iconfield.esm-C6PbhFmT.js";import{c as y}from"./cars-O8Hh7Dpv.js";import{c as A,u as F}from"./zip-B76VjmLK.js";import{S as d}from"./store.manager-Cv4kwIMo.js";const $=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})],-1),x=[$],E={style:{width:"100% !important"}},I=s("i",{class:"pi pi-search"},null,-1),T=["onClick"],K={__name:"Cars",setup(V){const m=p(),r=p({global:{value:null,matchMode:i.CONTAINS},name:{operator:f.AND,constraints:[{value:null,matchMode:i.STARTS_WITH}]},representative:{value:null,matchMode:i.IN},status:{operator:f.OR,constraints:[{value:null,matchMode:i.EQUALS}]}}),c=g().params.marca;c==null&&u();const b=y.filter(n=>n.marca.trim()==c.trim()),_=n=>{u(c+"/"+n)};return localStorage.getItem(d.get("API_NAME"))?d.save("save",F()):A(d.get("save")),(n,e)=>(h(),w(S,null,[s("div",null,[s("button",{class:"back-btn btn",onClick:e[0]||(e[0]=t=>a(u)())},x)]),s("div",E,[l(a(N),{filters:r.value,"onUpdate:filters":e[2]||(e[2]=t=>r.value=t),selection:m.value,"onUpdate:selection":e[3]||(e[3]=t=>m.value=t),value:a(b),stateStorage:"session",stateKey:"dt-state-demo-session",paginator:"",rows:5,filterDisplay:"menu",selectionMode:"single",dataKey:"id",globalFilterFields:["name"]},{header:o(()=>[l(a(C),{iconPosition:"left"},{default:o(()=>[l(a(M),null,{default:o(()=>[I]),_:1}),l(a(k),{style:{width:"100%"},modelValue:r.value.global.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value.global.value=t),placeholder:"..."},null,8,["modelValue"])]),_:1})]),default:o(()=>[l(a(v),{class:"table-color",field:"name",header:"Name"}),l(a(v),{class:"table-color",field:"",header:"Select"},{body:o(({data:t})=>[s("button",{onClick:U=>_(t.name),class:"button-table btn btn-primary"},"SELECT",8,T)]),_:1})]),_:1},8,["filters","selection","value"])])],64))}};export{K as default};
