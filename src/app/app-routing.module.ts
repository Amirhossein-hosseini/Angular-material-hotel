import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { TabestComponent } from './tabest/tabest.component';

const routes: Routes = [
  {path:'home',component:HomeHotelComponent},
  {
    path:'tabest',component:TabestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
