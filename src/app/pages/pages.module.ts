import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutUsComponent,
    LandingComponent
  ]
})
export class PagesModule { }
