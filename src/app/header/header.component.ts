import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/components/common/api";
import {WindowRefService} from "../service/window-ref.service";

@Component({
  selector: 'js-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private items: MenuItem[];

  constructor(public winRef: WindowRefService) {

    //console.log("window Object: ", winRef.getNativeWindow());

    setTimeout(function () {

      //_this.winRef.getNativeWindow()
      console.log('set timeout worked')
      console.log( 'Window Object', winRef.getNativeWindow().innerHeight);

      winRef.getNativeWindow().scrollTo(0,  winRef.getNativeWindow().innerHeight);

    }, 5000)
  }

  ngOnInit() {


  }

}
