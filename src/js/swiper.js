import Swiper from 'swiper';
import { Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const swiper = new Swiper('#swiper', {
  modules: [Pagination, Keyboard],
  slidesPerView: 'auto',
  spaceBetween: 50,
    breakpoints: {
        1439: {
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
