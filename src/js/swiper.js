import Swiper from 'swiper';
import { Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


new Swiper('#swiper', {
  modules: [Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 25,
    breakpoints: {
        1440: {
            enabled: false,
             slidesPerView: 5,
             spaceBetween: 25,
      }
  },
  pagination: {
    el: "#swiper-pagination",
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    }, 
  keyboard: {
    enabled: true,
  },

})
new Swiper('#swiper-gallery', {
  modules: [Pagination, Keyboard],
  slidesPerView: 1,
  spaceBetween: 25,
    breakpoints: {
        1440: {
            enabled: false,
             slidesPerView: 5,
             spaceBetween: 25,
      }
  },
  pagination: {
    el: "#swiper-gallery-pagination",
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    }, 
  keyboard: {
    enabled: true,
  },

})

new Swiper('#swiper-reviews', {
  modules: [Pagination, Keyboard],
  slidesPerView: 'auto',
  spaceBetween: 50,
  centeredSlides: true,
  breakpoints: {
    1440: {
      enabled: false,
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: '#swiper-reviews-pagination',
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  keyboard: {
    enabled: true,
  },
});

