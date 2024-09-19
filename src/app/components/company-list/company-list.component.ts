import { Component } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

  companies: any[] = [
    {
      id: 1,
      name: 'Dribble',
      logo: 'assets/dribble-logo.png',
      description: 'Dribbble is the worlds leading community for creatives to share, grow, and get hired.',
      employeeCount: 65
    },
    {
      id: 2,
      name: 'Paypal',
      logo: 'assets/paypal-logo.png',
      description: 'PayPal is a leading technology platform that enables digital and mobile payments on behalf of consumers and merchants worldwide.',
      employeeCount: 6000
    },
    {
      id: 3,
      name: 'Spotify',
      logo: 'assets/spotify-logo.png',
      description: 'Spotify is a digital music, podcast, and video streaming service that gives you access to millions of songs and other content from artists all over the world.',
      employeeCount: 2000
    }
  ];

}
