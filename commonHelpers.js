import{S as m}from"./assets/vendor-870f0eb5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function f(s){const o=document.querySelector(".gallery");o.innerHTML="",s.forEach(r=>{const n=document.createElement("div");n.classList.add("image-card"),r.webformatURL;const t=r.largeImageURL;r.tags;const e=r.likes,i=r.views,d=r.comments,u=r.downloads,c=document.createElement("img");c.classList.add("img"),c.src=r.webformatURL,c.alt=r.tags,c.style.width="100%";const l=document.createElement("div");l.classList.add("image-info"),l.innerHTML=`
    <p class="info-item">Likes:<br>${e}</p>
    <p class="info-item">Views:<br>${i}</p>
    <p class="info-item">Comments:<br>${d}</p>
    <p class="info-item">Downloads:<br>${u}</p>
  `;const a=document.createElement("a");a.href=t,a.classList.add("gallery-item"),a.style.textDecoration="none",a.appendChild(c),a.appendChild(l),n.appendChild(a),o.appendChild(n)}),p()}function p(){new m(".gallery-item").refresh()}async function y(){const o=document.querySelector(".searchInput").value.trim();document.querySelector(".loader");const r=document.querySelector(".gallery");if(o==="")return iziToast.show({message:"Please enter a keyword",backgroundColor:"yellow"}),Promise.reject("Empty query");const t=`https://pixabay.com/api/?key=42324270-89622daef349524aeb531ebd1&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return r.innerHTML="",fetch(t).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{e.hits.length===0?iziToast.error({color:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"}):f(e.hits)}).catch(e=>{iziToast.error({title:"Error!",message:`An error occurred while fetching data: ${e.message}. Please try again later.`})})}const h=document.querySelector(".searchForm");h.addEventListener("submit",function(s){s.preventDefault(),y()});
//# sourceMappingURL=commonHelpers.js.map