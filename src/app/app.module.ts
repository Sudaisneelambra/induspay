import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { OurStoryComponent } from './components/our-story/our-story.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactFormComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    CaseStudyComponent,
    FooterComponent,
    OurStoryComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
