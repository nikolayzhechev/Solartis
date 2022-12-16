import { Injectable } from '@angular/core';
import { Item } from 'src/app/shared/Interfaces/item';
import { Observable } from 'rxjs';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, getFirestore, collectionData, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private shopCollection: CollectionReference<DocumentData>

  constructor( private readonly firestore: Firestore ) { 
      this.shopCollection = collection(this.firestore, 'shop');
    }

    get(id: string) {
      const itemDocRef = doc(this.firestore, `shop/${id}`)
      return docData(itemDocRef, { idField: 'id' });
    }

    getAll() {
      return collectionData(this.shopCollection, {
        idField: 'id'
      }) as Observable<Item[]>
    }

    create(shopItem: Item) {
      return addDoc(this.shopCollection, shopItem);
    }

    update(shopItem: Item) {
      const itemDocRef = doc(
        this.firestore,
        `shop/${shopItem.id}`
      );
      return updateDoc(itemDocRef, { ...shopItem });
    }

    delete(id: string) {
      const itemDocRef = doc(this.firestore, `shop/${id}`);
      return deleteDoc(itemDocRef);
    }

}
