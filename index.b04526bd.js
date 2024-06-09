document.addEventListener("DOMContentLoaded",function(){var t,r=document.querySelector("ul"),e=function(t){return parseFloat(t.split("").filter(function(t){return"$"!==t&&","!==t}).join(""))};(t=Array.from(r.querySelectorAll("li"))).sort(function(t,r){return e(r.dataset.salary)-e(t.dataset.salary)}),t.forEach(function(t){return r.appendChild(t)})});
//# sourceMappingURL=index.b04526bd.js.map
