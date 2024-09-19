import { Component } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent {

  jobs=[
    {
      id: 1,
      company: 'Dribble',
      logo: 'assets/dribble-logo.png',
      date: 'October 25, 2022',
      position: 'Front End Developer',
      tag: 'Marketing',
      role:'part-time',
      location: 'San Antonio',
      salary: '$ 130k-160k'
    },
    {
      id: 2,
      company: 'Dribble',
      logo: 'assets/dribble-logo.png',
      date: 'October 25, 2022',
      position: 'Backend Developer',
      tag: 'Marketing',
      role:'part-time',
      location: 'Dallas',
      salary: '$ 50k-70k'
    },
    {
      id: 3,
      company: 'Tokopedia',
      logo: 'assets/tokopedia-logo.png',
      date: 'March 30, 2021',
      position: 'Scrum Master',
      tag: 'Marketing',
      role:'part-time',
      location: 'San Antonio',
      salary: '$ 130k-160k'
    },
    {
      id: 4,
      company: 'Facebook',
      logo: 'assets/facebook-logo.png',
      date: 'March 30, 2021',
      position: 'Lead Technical Architect',
      tag: 'Marketing',
      role:'part-time',
      location: 'Melbourne',
      salary: '$ 210k-240k'
    },
    {
      id: 5,
      company: 'Spotify',
      logo: 'assets/spotify-logo.png',
      date: 'March 30, 2021',
      position: 'Digital Media Strategist',
      tag: 'Marketing',
      role:'part-time',
      location: 'New York',
      salary: '$ 50k-70k'
    },
    {
      id: 6,
      company: 'Paypal',
      logo: 'assets/paypal-logo.png',
      date: 'March 30, 2021',
      position: 'Systems Administrator',
      tag: 'Marketing',
      role:'part-time',
      location: 'California',
      salary: '$ 40k-50k'
    }
  ];
}
