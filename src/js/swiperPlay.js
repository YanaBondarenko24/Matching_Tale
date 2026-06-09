import Swiper from 'swiper';
import { Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper-play', {
  modules: [Pagination, Keyboard],
  slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1439: {
            enabled: false,
             slidesPerView: 5,
          spaceBetween: 25,
      }
  },
  pagination: {
    el: ".swiper-play-pagination",
    clickable: true,
            dynamicBullets: true,
        dynamicMainBullets: 3,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    },
  keyboard: {
    enabled: true,
 },

})

