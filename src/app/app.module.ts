import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UppernavComponent } from './components/uppernav/uppernav.component';
import { JobHeroComponent } from './components/job-hero/job-hero.component';
import { FirstPagesComponent } from './pages/first-pages/first-pages.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CustomMembershipComponent } from './pages/custom-membership/custom-membership.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { NewsComponent } from './pages/news/news.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingImageComponent } from './pages/landing-image/landing-image.component';
import { CompanyImageComponent } from './components/company-image/company-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UppernavComponent,
    JobHeroComponent,
    FirstPagesComponent,
    JobListingComponent,
    CompanyListComponent,
    CustomMembershipComponent,
    TestimonialsComponent,
    NewsComponent,
    ExploreComponent,
    SearchComponent,
    FooterComponent,
    LandingImageComponent,
    CompanyImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
