import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper-play', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
 pagination: {
    el: ".swiper-play-pagination",
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    }, 

})
