import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'slider',
    component: SliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
