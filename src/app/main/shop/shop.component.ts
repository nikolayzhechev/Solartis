import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/Interfaces/item';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() shopItem$: Observable<Item[]>;
  @Output() shopItemEmitter = new EventEmitter<Item>();

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopItem$ = this.shopService.getAll()
  }

  selectItem(shopItem: Item) {
    this.shopItemEmitter.emit(shopItem);
  }
}
