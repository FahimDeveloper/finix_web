$(document).ready(function () {
    //slider for slider_section
    $(".clients").slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })
    //video_venobox for choose_sectoin
    new VenoBox({
        selector: ".venobox"
    });
    //nice Select
    $("select").niceSelect();
    //service_teg_slider
    $(".service_teg").slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0px",
        autoplaySpeed: 1500,
        asNavFor: ".service_details",
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    })
    //service_details_slider
    $(".service_details").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        asNavFor: ".service_teg",
        speed: 1000,
    })
    //feedback_section-slider
    $(".feedback").slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        speed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    speed: 1000,
                }
            },
        ]
    })
    AOS.init({
        duration: 1500,
    });
    //right click disable
    // document.querySelector("body").addEventListener('contextmenu', (e) => {
    //     e.preventDefault();
    // })
    $(".search_icons").on("click", function () {
        $(".search_box").toggle();
    })
})