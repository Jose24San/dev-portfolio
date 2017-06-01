import { Component, OnInit } from '@angular/core';
import {WindowRefService} from "../service/window-ref.service";


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

      winRef.getNativeWindow().scrollTo(0,  winRef.getNativeWindow().innerHeight);

    }, 5000)

    _this.items = [
      {
        text: 'The UTSouthwestern.edu site is the education site to give information to propective Medical and Health Professional Students as well as the general population about how UTSouthwestern is bringing the Future of Medicine Today.', image: "assets/img/utsw-screenshot.png"
      },
      {
        text: 'This is the Medicine site', image: "Medicine Image site goes here"
      },
      {
        text: 'This is the Doctor profiles site', image: 'Profiles site goes here'
      },
      {
        text: 'this is the Research Site', image: 'Research site goes here'
      }
    ]

  }

  ngOnInit() {
  }

}
