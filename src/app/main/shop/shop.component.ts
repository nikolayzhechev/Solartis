import { Component, OnInit} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  shopItems: any[] = [];

  ngOnInit() {
    this.getShopItems()
  }

  async getShopItems() {
    const snapshot =  await
      firebase.firestore().collection('shop').get();

      snapshot.forEach(doc => {
        this.shopItems?.push(doc.data());
      });
  }
}