var t=document.querySelector(".button-toggle"),e=document.querySelector(".navigation__list");t.addEventListener("click",()=>{t.classList.toggle("button-toggle--active"),e.classList.toggle("open"),document.body.style="overflow-y: hidden",e.classList.contains("open")||(document.body.style="overflow-y: visible")});var o=document.querySelector(".card__button-show");o.addEventListener("click",()=>{o.classList.toggle("card__button-show--active")});
