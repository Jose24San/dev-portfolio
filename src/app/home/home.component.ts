import { Component, OnInit } from '@angular/core';
import { WindowRefService } from "../service/window-ref.service";


@Component({
  selector: 'js-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  items: Object;

  constructor(public winRef: WindowRefService) {

    let _this = this;

    setTimeout(function () {

      // winRef.getNativeWindow().scrollTo(0,  winRef.getNativeWindow().innerHeight);


    }, 5000)



  }

  ngOnInit() {
    setTimeout(function () {

     // document.querySelector('h2').scrollIntoView({
     //   bahavior: 'smooth'
     // });

    }, 5000)

  }

}
