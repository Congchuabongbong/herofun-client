import { Component, OnInit, ViewChild } from '@angular/core';

declare var $: any;
// import Swiper core and required modules
import SwiperCore, { EffectFade, Parallax, Swiper, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Virtual]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  constructor() { }

  ngOnInit(): void {


  }
  slideNext() {
    this.swiper.swiperRef.slideNext(1000);

  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(1000);

  }

}
