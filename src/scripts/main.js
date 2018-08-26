// Main
$(document).ready(function() {
    $('.home-header .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 1,
                nav: true,
                dots: false,
            },
            // breakpoint from 768 up
            768: {
                items: 1,
            },
            // breakpoint from 992 up
            992: {
                items: 1,
            }
        }
    });
    $('.home-service .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 250,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
});