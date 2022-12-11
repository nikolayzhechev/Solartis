import { Injectable } from '@angular/core';
import { SolarComponent } from './item-details/solar/solar.component';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  // item: any = undefined;
  constructor() { }
  
  // async getItem(id: string, collectionName: string) {
  //   const items = await firebase.firestore().collection(collectionName)
  //     .where(firebase.firestore.FieldPath.documentId(), '==', id)
  //       .get();

  //   items.forEach((doc) => {
  //       this.item = doc.data();
  //   });

  //   return items;
  // }
}
