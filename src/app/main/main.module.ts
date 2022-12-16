import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { FirebaseAppModule } from '@angular/fire/app';
import { ItemComponent } from './item/item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthRoutingModule } from '../auth/auth-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    AboutComponent,
    ShopItemComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FirebaseAppModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    HomeComponent,
    ShopComponent,
    AboutComponent
  ]
})
export class MainModule { }
