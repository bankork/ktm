import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideDropdownComponent } from './aside-dropdown/aside-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { PromoComponent } from './promo/promo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IconsSectionComponent } from './icons-section/icons-section.component';
import { CausesComponent } from './causes/causes.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventComponent } from './event/event.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { DonorComponent } from './donor/donor.component';
import { InstagramComponent } from './instagram/instagram.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  /*{path: '', redirectTo: 'home', pathMatch: 'full'},*/
  {path: '', component: HomeComponent, pathMatch: 'full'},
  /*{path: 'home', component: HomeComponent},*/
  {path: 'about-us', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AsideDropdownComponent,
    HeaderComponent,
    PromoComponent,
    AboutUsComponent,
    IconsSectionComponent,
    CausesComponent,
    ProjectsComponent,
    EventComponent,
    TextSectionComponent,
    TestimonialComponent,
    BlogComponent,
    DonorComponent,
    InstagramComponent,
    SubscribeComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
