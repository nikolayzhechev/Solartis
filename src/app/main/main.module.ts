import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//import { DashboardComponent } from './main-dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    //DashboardComponent,
    ShopComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    //DashboardComponent,
    ShopComponent
  ]
})
export class MainModule { }
