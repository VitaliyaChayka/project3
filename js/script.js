"use strict";

///////////burger///////

$(document).ready(function(){
   $('.header__burger').click(function(event){
     $('.header__burger, .nav').toggleClass('active');
     $('body').toggleClass('lock');
   });
 });


 $(document).ready(function() {
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav').removeClass('active');
        $('body').removeClass('lock');
    });
});

//////////////////////// header fon/////

 $(window).on("scroll", function() {
  $('.header').toggleClass("active", $(this).scrollTop() > $(window).height() / 5);
});


// ////////////////////////////////// icon scrollup///////

let upBtn = document.getElementById ('scrollup');
window.addEventListener('scroll', function(){
    if (wHeight < window.scrollY){
        upBtn.classList.add('scrollup_active')
    }
    else {
        upBtn.classList.remove('scrollup_active')

    }
})

let wHeight = window.innerHeight;
window.addEventListener('resize', function(){
    wHeight = window.innerHeight;
})

// //////////////////////////// behavior: 'smooth'////////
let sectionHight = 0
for (let link of document.getElementsByClassName('nav_link')){
    link.addEventListener('click', function(e){
        e.preventDefault();
        let id_section = this.getAttribute('href') //#section
        let pos = document.querySelector(id_section).getBoundingClientRect();
        window.scrollTo({
        top: document.querySelector(id_section).offsetTop - 110,
        left: 0,
        behavior: 'smooth'
    });
    })
}



$(document).ready(function(){
    $('.team__slider').slick({
        autoplay:true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
  });
