import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'js-kanu-work',
  templateUrl: './kanu-work.component.html',
  styleUrls: ['./kanu-work.component.scss']
})
export class KanuWorkComponent implements OnInit {

  items: Object;

  constructor() {
    let _this = this;
    _this.items = [
      {
        text: `This was the first iteration of the dashboard that would pull in all of a customers data. The Dashboard would display the information in a card style fashion with simple to read information that was easily filterable.`,
        image: "assets/img/kanu-dashboard-old.png"
      },
      {
        text: 'After selecting information that you would like more detail on the previous dashboard it would bring you to our drilldown page. Information would be inside of a tabs component with each tab having a different visualization of the data in more depth that was also filterable.',
        image: "assets/img/kanu-drilldown.png"
      },
      {
        text: "The second iteration of the product got a redesign that would have a new homepage. The new home page would be masonry panel design that would display the latest news that could have the most impact on your business.",
        image: 'assets/img/insight-dashboard.png'
      },
      {
        text: 'In addition to the insights focused home page we now have a dedicated page to all insights produced by the machine learning engine.',
        image: 'assets/img/insights.png'
      },
      {
        text: "A graphical representation of the data is displayed as well if customers want a more visual look at the data over time.",
        image: "assets/img/web-dashboard.png"
      }
    ]
  }

  ngOnInit() {
  }

}
