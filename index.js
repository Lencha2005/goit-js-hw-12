import{a as m,S as v,i as f}from"./assets/vendor-CZwys2ms.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h=s=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${s.largeImageURL}">
    <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}" />
    </a>
    <ul class="list-info">
    <li class="item-info">
    <p class="item-text-info">Likes</p>
    <p class="item-text-value">${s.likes}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Views</p>
    <p class="item-text-value">${s.views}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Comments</p>
    <p class="item-text-value">${s.comments}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Download</p>
    <p class="item-text-value">${s.downloads}</p>
    </li>
    </ul>
    </li>`;m.defaults.baseURL="https://pixabay.com/api/";const p=document.querySelector(".js-form-search"),u=document.querySelector(".list-gallery"),o=document.querySelector(".js-loader");function y(s,t){p.reset(),o.classList.remove("is-hidden");const a={params:{key:"45478018-6810a6814d3c626f27e622ce2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return m.get("",a)}const l=document.querySelector(".js-btn-load-more");let n=1,c="",g=0;async function b(s){try{s.preventDefault(),n=1,c=p.elements.user_query.value.trim();const t=await y(c,n);if(console.log(t.data),t.data.hits.length===0||c===""){u.innerHTML="",f.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=t.data.hits.map(e=>h(e)).join("");u.innerHTML=a,g=document.querySelector("LI").getBoundingClientRect().height,l.classList.remove("is-hidden"),L.refresh()}catch(t){console.log(t)}finally{o.classList.add("is-hidden")}}async function x(s){try{l.classList.add("is-hidden"),o.classList.remove("is-hidden"),n++;const t=await y(c,n),a=t.data.hits.map(e=>h(e)).join("");u.insertAdjacentHTML("beforeend",a),scrollBy({top:g*2,behavior:"smooth"}),l.classList.remove("is-hidden"),o.classList.add("is-hidden");const i=Math.ceil(t.data.totalHits/15);if(n===i){l.classList.add("is-hidden"),f.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}L.refresh()}catch(t){console.log(t)}finally{o.classList.add("is-hidden")}}p.addEventListener("submit",b);l.addEventListener("click",x);const L=new v(".list-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=index.js.map
