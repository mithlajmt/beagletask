import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news = [
    {
      category:'part-time',
      title:'finding employees on the gig economy',
      data:'23/23/23'
    },
    {
      category:'part-time',
      title:'finding employees on the gig economy',
      data:'23/23/23'
    },
    {
      category:'part-time',
      title:'finding employees on the gig economy',
      data:'23/23/23'
    },
  ]

}
