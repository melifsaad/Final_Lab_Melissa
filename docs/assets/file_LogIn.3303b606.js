import{_ as v,h as m,u as h,i as c,o as f,c as I,a as s,j as b,k as d,v as r,p as g,g as S}from"./file_index.ac0e02c7.js";import{l as y}from"./file_index.c5cdad32.js";const i=o=>(g("data-v-1a0d458e"),o=o(),S(),o),w={class:"section"},x={class:"container"},k=["onSubmit"],B={class:"field"},E=i(()=>s("label",{class:"label"},"Email",-1)),L={class:"control"},V={class:"field"},C=i(()=>s("label",{class:"label"},"Contrase\xF1a",-1)),M={class:"control"},U=i(()=>s("div",{class:"field"},[s("div",{class:"control"},[s("input",{class:"button is-primary",type:"submit",value:"Ingresar"})])],-1)),j={__name:"LogIn",setup(o){const _=m(),p=h(),a=c(""),l=c(""),u=async()=>{const e=await y(a.value,l.value);e?(p.logIn(e),_.push({name:"task"}),console.log(e)):alert(e.error)};return(e,t)=>(f(),I("div",w,[s("div",x,[s("form",{onSubmit:b(u,["prevent"])},[s("div",B,[E,s("div",L,[d(s("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),class:"input",type:"email",placeholder:"Email corporativo o personal"},null,512),[[r,a.value]])])]),s("div",V,[C,s("div",M,[d(s("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>l.value=n),class:"input",type:"password",placeholder:"Contrase\xF1a"},null,512),[[r,l.value]])])]),U],40,k)])]))}},N=v(j,[["__scopeId","data-v-1a0d458e"]]);export{N as default};
