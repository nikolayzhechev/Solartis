import { Component, OnInit } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { Item } from 'src/app/shared/Interfaces/item';
import { ShopService } from '../shop/shop.service';
import { MatDialog } from '@angular/material/dialog';
import { ShopItemComponent } from '../shop/shop-item/shop-item.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  allShopItems$: Observable<Item[]>;
  selectedItem?: Item;

  constructor(
    private readonly shopService: ShopService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.allShopItems$ = this.shopService.getAll();
  }

  updateItem() {
    const dialogRef = this.dialog.open(ShopItemComponent, {
      data: { ...this.selectedItem },
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((shopItem) => this.shopService.update(shopItem)),
        tap((shopItem) => this.selectItem(shopItem))
      )
      .subscribe();
  }

  selectItem(shopItem: Item) {
    this.selectedItem = shopItem;
  }
}
