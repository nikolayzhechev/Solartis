import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit{
  shopItem: any;
  title: string = '';
  desc: string = '';
  price: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getItem(id);
    });
  }

  async getItem(id: string) {
    const items = await firebase.firestore().collection('shop')
    .where(firebase.firestore.FieldPath.documentId(), '==', id)
      .get();

    items.forEach((doc) => {
        this.shopItem = doc.data();
    });
  }
}
