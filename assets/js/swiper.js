var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    autoplay: {
    delay: 1000, // Thời gian chờ giữa các lần trượt (miligiây)
    disableOnInteraction: false, // Không tắt tự động trượt khi người dùng tương tác với swiper
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },
});
