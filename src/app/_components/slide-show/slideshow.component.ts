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

  constructor() {}

  ngOnInit(): void {}
}
