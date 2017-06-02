import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'js-utsw-work',
  templateUrl: './utsw-work.component.html',
  styleUrls: ['./utsw-work.component.scss']
})
export class UtswWorkComponent implements OnInit {

  items: Object;

  constructor() {

    let _this = this;
    _this.items = [
      {
        text: `The UTSouthwestern.edu site is the education site to give information to prospective Medical and Health Professional students as well as inform the general population about how UTSouthwestern is bringing the Future of Medicine Today.`,
        image: "assets/img/utsw-screenshot.png",
        link: "http://www.utsouthwestern.edu/"
      },
      {
        text: 'Our Medicine site provides the general public information about how advances in medicine are happening at UTSouthwestern and what you can do to learn more about them by talking to someone at the organization that is leading those programs.',
        image: "assets/img/utsw-medicine.png",
        link: "http://www.utswmedicine.org/"
      },
      {
        text: "Our profiles site has every doctor's information who practices at UTSouthwestern. It will list under each doctors profile their research interests and what they specialize in so that people can make a decision on whether they are the right doctor for them before even visiting UTSouthwestern.",
        image: 'assets/img/utsw-profiles.png',
        link: "http://profiles.utsouthwestern.edu/"
      },
      {
        text: 'The labs site is dedicated to the research that is going on at UTSouthwestern. Each team has the option to make one a lab themselves or have us make one. We are currently in the middle of getting all these labs updated to the latest standards and design that we now follow.',
        image: 'assets/img/utsw-labs.png',
        link: "http://www.utsouthwestern.edu/labs"
      },
      {
        text: "The intranet site is used to distribute all the latest news to all the employees of UTSouthwestern.",
        image: "assets/img/utsw-intranet.png",
        link: "http://www.utsouthwestern.net/"
      }
    ]
  }

  ngOnInit() {
  }

}
