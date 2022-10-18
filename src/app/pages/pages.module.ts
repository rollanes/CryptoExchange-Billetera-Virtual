import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServicesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ServicesComponent,
    AboutUsComponent
  ]
})
export class PagesModule { }
