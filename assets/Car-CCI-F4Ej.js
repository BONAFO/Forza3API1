import{o as m,c as u,d as t,u as s,g as _,f as h,E as g,a as v,e as b}from"./index-BJmYMf0i.js";import{c as f}from"./cars-O8Hh7Dpv.js";import{S as i,c as w,u as C}from"./zip-BMUtw9OA.js";const x=()=>{Swal.fire({title:"UPDATE COINS",text:"mis coins",input:"number",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:n=>{},customClass:custom_style[0]}),document.getElementById("swal2-html-container").className+=" title-cus"},k=t("div",{class:"margin-btn-cont"},null,-1),y={class:"btn-cont"},A={__name:"Update_Coins",setup(n){return(a,o)=>(m(),u(_,null,[k,t("div",y,[t("button",{onClick:o[0]||(o[0]=l=>s(x)()),class:"btn-upd-coins"},"UPDATE COINS")])],64))}},d=n=>{},B=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-arrow-left",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"})],-1),S=[B],$={class:"text-center"},E={class:"title"},N=t("div",null,[t("div",{id:"prog-cont"},[t("div",{class:"text-center",id:"progress-empty"},[t("label",{class:"label-prog",for:""},"100")]),t("div",{id:"progress-fill"})])],-1),I={id:"car-img"},M=["src"],z=t("div",{style:{"margin-bottom":"5%"}},[t("img",{class:"coins",src:"https://static.vecteezy.com/system/resources/thumbnails/010/851/211/small/3d-illustration-golden-money-coins-png.png",alt:""}),t("label",{class:"coin-label",for:""},"0")],-1),D={class:"text-center"},O=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-plus-lg",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"})],-1),P=[O],U=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-dash",viewBox:"0 0 16 16"},[t("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"})],-1),H=[U],j={__name:"Car",setup(n){const a=h(),o=a.params.marca,l=f.filter(c=>c.name==a.params.car)[0],p=l.url||"https://images5.alphacoders.com/929/929552.jpg";return localStorage.getItem(i.get("API_NAME"))?i.save("save",C()):w(i.get("save")),(c,e)=>(m(),u(_,null,[t("div",null,[t("button",{class:"back-btn btn",onClick:e[0]||(e[0]=r=>s(b)(s(o)))},S)]),t("div",$,[t("h3",E,g(s(l).name),1)]),N,t("div",I,[t("img",{style:{width:"100%"},src:s(p),alt:""},null,8,M)]),z,t("div",D,[t("button",{onClick:e[1]||(e[1]=r=>s(d)("add")),class:"btn-add"},P),t("button",{onClick:e[2]||(e[2]=r=>s(d)("dec")),class:"btn-dec"},H)]),v(A)],64))}};export{j as default};
