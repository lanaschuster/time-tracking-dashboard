import{o as _,c as l,a as o,r as v,b as g,d as x,e as f,f as $,t as u,n as b,p as L,g as k,h as m,i,w as h,j as C}from"./vendor.e733ec4e.js";const I=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};I();var p=(t,a)=>{const n=t.__vccOpts||t;for(const[r,e]of a)n[r]=e;return n};const S={},D={class:"side-column"},N={class:"main-grid"};function O(t,a){return _(),l("section",null,[o("div",D,[v(t.$slots,"side-column",{},void 0,!0)]),o("div",N,[v(t.$slots,"main-grid",{},void 0,!0)])])}var W=p(S,[["render",O],["__scopeId","data-v-00fdee94"]]),w="/time-tracking-dashboard/images/image-jeremy.png";const A={},P={class:"report-presentation-card"},T=g('<div class="presentation" data-v-f2786034><img src="'+w+'" alt="Avatar" data-v-f2786034><div data-v-f2786034> Report for<br data-v-f2786034><span data-v-f2786034>Jeremy Robson</span></div></div><div class="filters" data-v-f2786034><a href="#" data-v-f2786034>Daily</a><a href="#" data-v-f2786034>Weekly</a><a href="#" data-v-f2786034>Monthly</a></div>',2),R=[T];function V(t,a){return _(),l("div",P,R)}var q=p(A,[["render",V],["__scopeId","data-v-f2786034"]]),B="/time-tracking-dashboard/images/icon-ellipsis.svg";const j={props:{variant:{type:String,required:!0,validator:t=>/work|play|study|exercise|social|self-care/.test(t)},mainText:{type:String,required:!0},description:{type:String,default:""}},setup(t){const a=t.variant;let n=x(`${a}-card`);const r=f(()=>`/images/icon-${a}.svg`),e=f(()=>t.variant.charAt(0).toUpperCase()+t.variant.slice(1));return{variant:a,classes:n,image:r,title:e}}},E=t=>(L("data-v-c78016c0"),t=t(),k(),t),M={class:"header"},z=["src"],F={class:"body"},J={class:"title-section"},K=E(()=>o("img",{src:B,alt:"Options",title:"Options"},null,-1)),U={class:"main-text"},G={class:"description"};function H(t,a,n,r,e,s){return _(),l("div",{class:b(["dashboard-item-card",[r.classes]])},[o("div",M,[o("img",{src:r.image,alt:"item image"},null,8,z)]),o("div",F,[o("div",J,[$(u(r.title)+" ",1),K]),o("span",U,u(n.mainText),1),o("span",G,u(n.description),1)])],2)}var Q=p(j,[["render",H],["__scopeId","data-v-c78016c0"]]);const X={components:{TimeDashboardLayout:W,ReportPresentationCard:q,DashboardItemCard:Q}};function Y(t,a,n,r,e,s){const d=m("ReportPresentationCard"),c=m("DashboardItemCard"),y=m("TimeDashboardLayout");return _(),l("main",null,[i(y,null,{"side-column":h(()=>[i(d)]),"main-grid":h(()=>[i(c,{variant:"work","main-text":"32hrs",description:"Last Week - 36hrs"}),i(c,{variant:"play","main-text":"10hrs",description:"Last Week - 8hrs"}),i(c,{variant:"study","main-text":"4hrs",description:"Last Week - 7hrs"}),i(c,{variant:"exercise","main-text":"4hrs",description:"Last Week - 5hrs"}),i(c,{variant:"social","main-text":"5hrs",description:"Last Week - 10hrs"}),i(c,{variant:"self-care","main-text":"2hrs",description:"Last Week - 2hrs"})]),_:1})])}var Z=p(X,[["render",Y]]);C(Z).mount("#app");
