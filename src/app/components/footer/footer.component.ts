import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  datas = [
    {
      title: 'Pages',
      points: ['Home', 'Home V2', 'About', 'Pricing', 'Jobs', 'Post a Job']
    },
    {
      title: 'Account',
      points: ['Sign In', 'Sign Up', 'Reset Password', 'User Account']
    },
    {
      title: 'Template',
      points: ['Style Guide', 'License', 'Changelog']
    }
  ];
}
