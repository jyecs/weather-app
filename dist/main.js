(()=>{"use strict";const e=document.querySelector(".weather-display");async function t(t="Seattle"){e.replaceChildren(),document.querySelector(".weather-place").innerHTML=function(e){let t=e.substring(0,1).toUpperCase();return t+=e.substring(1),t}(t);const n=await async function(e){const t=`http://api.weatherapi.com/v1/forecast.json?key=ffbe3dc4ce984a67a8333912240302&q=${e}&days=7`,n=await fetch(t,{mode:"cors"});return(await n.json()).forecast.forecastday}(t);Object.entries(n).forEach((t=>{const n=function(e){const t=document.createElement("div");t.classList.add("weather-day-container");const n=e[1].day,c=document.createElement("div"),a=document.createElement("div"),r=document.createElement("img");c.innerHTML=`${n.maxtemp_f} F`,a.innerHTML=`${n.mintemp_f} F`;const o=n.condition.icon.substring(2);return r.src=`https://${o}`,t.appendChild(r),t.appendChild(c),t.appendChild(a),t}(t);e.appendChild(n)}))}document.querySelector("#submit-button").addEventListener("click",(()=>{const{value:e}=document.querySelector("#place");t(e)})),t()})();