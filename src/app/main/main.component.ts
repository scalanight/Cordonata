import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

declare var naver: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
    this.initMaps();
  }

  // initNaverMapApi
  initMaps() {
    const mapOptions = {
      center: new naver.maps.LatLng(37.559348, 126.927818),
      zoom: 11
    };

    const map = new naver.maps.Map('map', mapOptions);

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.559348, 126.927818),
      map: map
    });
  }

  // scrolling
  gotoLink(target) {
    const config: ScrollToConfigOptions = {
      target: target,
      offset: -44
    };

    this._scrollToService.scrollTo(config);
    return false
  }

}
