import{h as _,u as m,i as t,r as v,o as h,c as b,a as s,j as f,k as l,v as a,d as y,w as k}from"./file_index.a584778e.js";import{r as w}from"./file_index.d67645e1.js";const U={class:"section"},V={class:"container"},x=["onSubmit"],S={class:"field"},g=s("label",{class:"label"},"Nombre",-1),C={class:"control"},E={class:"field"},B=s("label",{class:"label"},"Email",-1),M={class:"control"},N={class:"field"},R=s("label",{class:"label"},"Contrase\xF1a",-1),j={class:"control"},z=s("span",null,"Use 8 car\xE1cteres m\xEDnimo con una mezcla de letras, n\xFAmeros y s\xEDmbolos.",-1),A={class:"field"},D=s("label",{class:"label"},"M\xF3vil",-1),T={class:"control"},q={class:"field"},F={class:"control"},G=s("input",{class:"buttonprimary is-link",type:"submit",placeholder:"Registrarse"},null,-1),H=s("span",null,"o",-1),I=s("button",{class:"button is-primary"},"cancelar",-1),P={__name:"SignUp",setup(J){const d=_();m();const c=t(""),n=t(""),i=t(""),r=t(""),u=()=>{w(n.value,i.value),d.push({name:"verificacion"})};return(K,o)=>{const p=v("router-link");return h(),b("div",U,[s("div",V,[s("form",{onSubmit:f(u,["prevent"])},[s("div",S,[g,s("div",C,[l(s("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e),class:"input",type:"text",placeholder:"Email corporativo o personal"},null,512),[[a,c.value]])])]),s("div",E,[B,s("div",M,[l(s("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e),class:"input",type:"email",placeholder:"Email corporativo o personal"},null,512),[[a,n.value]])])]),s("div",N,[R,s("div",j,[l(s("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>i.value=e),class:"input",type:"password",placeholder:"Contrase\xF1a"},null,512),[[a,i.value]])])]),z,s("div",A,[D,s("div",T,[l(s("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>r.value=e),class:"input",type:"tel",placeholder:"telefono"},null,512),[[a,r.value]])])]),s("div",q,[s("div",F,[G,H,y(p,{to:{name:"login"}},{default:k(()=>[I]),_:1})])])],40,x)])])}}};export{P as default};