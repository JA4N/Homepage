import { Component, OnInit } from '@angular/core';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay, HashNavigation} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay, HashNavigation]);
// import Swiper styles
import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-section-gallery',
  templateUrl: './section-gallery.component.html',
  styleUrls: ['./section-gallery.component.css']
})
export class SectionGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      },
    });

  }

}
