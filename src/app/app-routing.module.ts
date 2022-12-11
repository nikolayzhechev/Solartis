import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './main/home/home.component';
import { ShopComponent } from './main/shop/shop.component';
import { ShopItemComponent } from './main/shop/shop-item/shop-item.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/item/:id',
    component: ShopItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
