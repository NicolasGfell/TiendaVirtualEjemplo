window.onload = function(){
    setTimeout(function () {
        $('.centrado').css("display","none");
        $('body').removeClass("hidden");
        $('#navbar').css("opacity","1");
    }, 1000);
}

window.addEventListener('load', ()=>{

    /* (====> Vars and Conts <====) */
    let navbar = $('.navbar');
    let navbar_menu = $('#navbar-menu');
    let btn_menu = $('.btn-menu');
    let simbol_menu_btn = $('.btn-menu i');
    let slides = document.querySelectorAll('.slide-container');
    let index = 0;
    let btn_form_contact = $('#btn-form-contact');

    /* (====> Inicializations <====) */

    /* //===> Swiper Discover <===// */

    $(".carousel").owlCarousel({
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
          0:{
            items:1,
            nav: false
          },
          768:{
            items:2,
            nav: false
          },
          1420:{
            items:3,
            nav: false
          }
        }
    });

    /* (====> Functions <====) */

    function next(){
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    function prev(){
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }

    /* (====> Events <====) */

     /* //===> bottom border of the bar when scrolling  <===// */

     $(window).scroll(()=>{

        if(window.scrollY > 10){
            navbar.addClass('nav-border-bottom');
        } else {
            navbar.removeClass('nav-border-bottom');
        }
    });

    /* //===> close navigation menu when scrolling  <===// */

    $(window).scroll(()=>{    
        navbar_menu.removeClass("active");
        btn_menu.css("transform", "rotate(0deg)")
        setTimeout(function () {
            simbol_menu_btn.removeClass('uil-times');
            simbol_menu_btn.addClass('uil-apps');
        }, 250);
    });

    /* //===> open / close navigation menu by clicking on the menu button <===// */

    btn_menu.click(() => {
        navbar_menu.toggleClass("active");

        if (simbol_menu_btn.hasClass('uil-apps')) {
            btn_menu.css("transform", "rotate(90deg)");
            setTimeout(function () {
                simbol_menu_btn.removeClass('uil-apps');
                simbol_menu_btn.addClass('uil-times');
            }, 250);
        } else {
            btn_menu.css("transform", "rotate(0deg)")
            setTimeout(function () {
                simbol_menu_btn.removeClass('uil-times');
                simbol_menu_btn.addClass('uil-apps');
            }, 250);
        }
    });


    btn_form_contact.click(()=>{
        
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 1500
        })
    });
});