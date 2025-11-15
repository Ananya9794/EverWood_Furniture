"use strict"

//---------- Sidebar open and close functionality
const sideMenu = document.getElementById('sideMenu');
const bars = document.querySelector('.bars');
const closeBtn = document.getElementById('closeBtn');

bars.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});


// ------------- Page Loader -------------
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});


// --------------owl carousel--------
$(document).ready(function(){
  $('#testimonial-carousel').owlCarousel({
    stagePadding: 80,
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1,
             stagePadding: 30
        },
        600:{
            items:1,
             stagePadding: 50
        },
        1000:{
          items:1,
          stagePadding: 80
        },
        1200:{
            items:2,
            stagePadding:100
        }
        
    }
})
})


// sticky-----------------------------
const h=document.querySelector("#header");
  window.addEventListener("scroll",function(){

    if(this.window.scrollY>70){
      h.classList.add("sticky");
    }
    else{
      h.classList.remove("sticky");
    }
  })

