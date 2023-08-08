import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images: string[] = [
    '../../../assets/banner_1.png',
    '../../../assets/banner_2.png',
    '../../../assets/banner_3.png',
    '../../../assets/banner_4.png',];


    activeImage: number = 0;

    get prev() {
      return this.activeImage - 1 < 0 ? this.images.length - 1 : this.activeImage - 1;
    }

  constructor() {
    setInterval(() => {
      this.activeImage++;
      if(this.activeImage >= this.images.length) this.activeImage = 0;
    }, 5000);
  }

  ngOnInit(): void { }
}
