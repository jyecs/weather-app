(()=>{"use strict";const e=document.querySelector("body");console.log(e),async function(){const n=await async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=ffbe3dc4ce984a67a8333912240302&q=london&days=7",{mode:"cors"});return(await e.json()).forecast.forecastday}();Object.entries(n).forEach((n=>{e.appendChild(function(e){const n=document.createElement("div"),t=e[1].day,c=document.createElement("div"),o=document.createElement("div"),a=document.createElement("img");return c.innerHTML=t.maxtemp_f,o.innerHTML=t.mintemp_f,a.src=t.condition.icon.substring(2),n.appendChild(c),n.appendChild(o),n.appendChild(a),n}(n))}))}()})();