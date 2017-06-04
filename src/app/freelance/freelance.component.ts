import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'js-freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.scss']
})
export class FreelanceComponent implements OnInit {

  items: Object;

  constructor() {

    let _this = this;
    _this.items = [
      {
        text: `The homepage for Vanguard has a large banner with a video playing on it of students happily walking through a highschool hallway. This pages highlights the different things that Vanguard offers to help students reach their academic goals.`,
        image: "assets/img/vanguard-homepage.png",
        link: "http://vanguardcp.com/"
      },
      {
        text: 'Enrolled Students will create an account that they can log into that displays information that they submitted to the Vanguard team about their different tests scores and progress through their program.',
        image: "assets/img/vanguard-progress.png",
        link: "http://vanguardcp.com/"
      },
      {
        text: "I also built in a document manager that would allow the Vanguard team to upload documents to each individual students and allow students to turn in their assignments for grading.",
        image: 'assets/img/vanguard-documents.png',
        link: "http://vanguardcp.com/"
      }
    ]

  }

  ngOnInit() {
  }

}
