import{_ as m,h,u as b,i,r as f,o as k,c as w,a as s,j as y,k as r,v as d,e as S,w as x,p as C,g as R}from"./file_index.1f24d601.js";import{e as g}from"./file_index.0a83c644.js";const t=o=>(C("data-v-9d1e7ac4"),o=o(),R(),o),I={class:"section"},B=t(()=>s("div",{class:"titulo"},[s("h2",{class:"titleBlack"},"Restablece"),s("h1",{class:"title"},"la contrase\xF1a")],-1)),U={class:"container"},V=["onSubmit"],E={class:"field"},M={class:"control"},N={class:"field"},j={class:"control"},z=t(()=>s("div",{class:"texto"}," Use 8 car\xE1cteres m\xEDnimo con una mezcla de letras, n\xFAmeros y s\xEDmbolos. ",-1)),A={class:"botones"},D={class:"field"},T={class:"control"},q=t(()=>s("input",{class:"button is-secondary is-link",type:"submit",value:"Restablecer"},null,-1)),F=t(()=>s("span",{class:"separation"},"o",-1)),G=t(()=>s("button",{class:"button"},"cancelar",-1)),H={__name:"RestablecerContrasena",setup(o){const _=h(),u=b(),n=i(""),c=i(""),p=async()=>{const e=await g(n.value,c.value);e?(u.logIn(e),_.push({name:"task"}),console.log(e)):alert(e.error)};return(e,a)=>{const v=f("router-link");return k(),w("div",I,[B,s("div",U,[s("form",{onSubmit:y(p,["prevent"])},[s("div",E,[s("div",M,[r(s("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),class:"input",type:"email",placeholder:"Email corporativo o personal"},null,512),[[d,n.value]])])]),s("div",N,[s("div",j,[r(s("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>c.value=l),class:"input",type:"password",placeholder:"Contrase\xF1a"},null,512),[[d,c.value]])])]),z,s("div",A,[s("div",D,[s("div",T,[q,F,S(v,{to:{name:"login"}},{default:x(()=>[G]),_:1})])])])],40,V)])])}}},L=m(H,[["__scopeId","data-v-9d1e7ac4"]]);export{L as default};
