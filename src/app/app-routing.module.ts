import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
{path: 'home', component: LandingComponent},
{path:'about-us', component:AboutUsComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
