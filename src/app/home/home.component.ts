import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {PageScrollInstance, PageScrollService, EasingLogic} from 'ng2-page-scroll';
import { WindowRefService } from "../service/window-ref.service";



@Component({
  selector: 'js-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  items: Object;

  constructor(@Inject(DOCUMENT) private document: any,
              private pageScrollService: PageScrollService,
              public winRef: WindowRefService) {

    let _this = this;

    setTimeout(function () {
      if (document.body.scrollTop === 0) {
        _this.scrollToItem();
      }
    }, 5000)
  }

  ngOnInit() {


  }



  public scrollToItem() {
    let pageScrollInstance1: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document,
      pageScrollDuration: 3000,
      scrollTarget: '#scrollTarget'
    });

    this.pageScrollService.start(pageScrollInstance1);
  }

}
