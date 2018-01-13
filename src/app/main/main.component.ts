import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  gotoLink(target) {
    const config: ScrollToConfigOptions = {
      target: target,
      offset: -50
    };

    this._scrollToService.scrollTo(config);
    
    console.log(target)
    return false
  }

}
