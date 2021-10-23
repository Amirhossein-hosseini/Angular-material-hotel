import { BuyairComponent } from './buyair/buyair.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { TabestComponent } from './tabest/tabest.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path:'',component:HomeHotelComponent
  },
  {
    path:'tabest',component:TabestComponent
  },
  {
    path:'air',component:BuyairComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
