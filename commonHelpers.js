import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const d="https://pixabay.com/api/",m="42750421-25533ceabe92b3d649fd552d3";function f(s){const e=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}/?${e}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function p(s){return s.map(e=>`<li class="gallery-item">
       <a href="${e.largeImageURL}">
    <img src='${e.largeImageURL}' alt='${e.tags}' class='gallery-img' /></a>
    <div class = "gallery-section">
    <p class="gallery-text">Like<span class= "value">${e.likes}</span></p>
   <p class="gallery-text">Views<span class= "value">${e.views}</span></p>
    <p class="gallery-text">Comments<span class= "value">${e.comments}</span></p>
     <p class="gallery-text">Downloads<span class= "value">${e.downloads}</span></p>
     
    </li>`).join("")}const i=document.querySelector(".js-gallery"),g=document.querySelector(".js-search-form"),l=document.querySelector(".loader");g.addEventListener("submit",L);function y(){l.classList.remove("is-hidden")}function h(){l.classList.add("is-hidden")}function L(s){s.preventDefault(),i.innerHTML="",y();const e=s.currentTarget.elements["user-search-query"].value.trim();if(!e)return alert("Error");f(e).then(a=>{if(a.hits.length===0)return c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML=p(a.hits),v.refresh()}).catch(console.log).finally(()=>h()),s.currentTarget.reset()}const v=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
