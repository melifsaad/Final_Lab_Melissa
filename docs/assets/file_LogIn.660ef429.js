import{_ as v,h as m,u as h,i,o as f,c as I,a as s,j as b,k as r,v as d,p as g,g as S}from"./file_index.c1796e0d.js";import{l as y}from"./file_index.1b8c9048.js";const c=o=>(g("data-v-28afe1ce"),o=o(),S(),o),w={class:"section"},x={class:"container"},k=["onSubmit"],B={class:"field"},E=c(()=>s("label",{class:"label"},"Email",-1)),L={class:"control"},V={class:"field"},C=c(()=>s("label",{class:"label"},"Contrase\xF1a",-1)),M={class:"control"},U=c(()=>s("div",{class:"field"},[s("div",{class:"control"},[s("input",{class:"button is-primary",type:"submit",value:"Ingresar"})])],-1)),j={__name:"LogIn",setup(o){const _=m(),p=h(),a=i(""),l=i(""),u=async()=>{const e=await y(a.value,l.value);e?(p.logIn(e),_.push({name:"task"}),console.log(e)):alert(e.error)};return(e,t)=>(f(),I("div",w,[s("div",x,[s("form",{onSubmit:b(u,["prevent"])},[s("div",B,[E,s("div",L,[r(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),class:"input",type:"email",placeholder:"Email corporativo o personal"},null,512),[[d,a.value]])])]),s("div",V,[C,s("div",M,[r(s("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>l.value=n),class:"input",type:"password",placeholder:"Contrase\xF1a"},null,512),[[d,l.value]])])]),U],40,k)])]))}},N=v(j,[["__scopeId","data-v-28afe1ce"]]);export{N as default};
