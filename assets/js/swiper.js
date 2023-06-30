const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    
    loop: true,
    //autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 600,
    // parallax: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
