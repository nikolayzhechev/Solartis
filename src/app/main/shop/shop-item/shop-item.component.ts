import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivationEnd, Params } from '@angular/router';
import { Item } from 'src/app/shared/Interfaces/item';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { ShopService } from '.././shop.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  shopItem: any;
  id: string;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.getItem()
  }
  
  getItem() {
    this.shopService.get(this.id).subscribe(item => {
      this.shopItem = item;
    });
  }
}
