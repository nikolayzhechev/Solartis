import { Injectable } from '@angular/core';
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

import { Solar } from 'src/app/shared/Interfaces/solar';
import { Tech } from '../shared/Interfaces/tech';
import { Battery } from '../shared/Interfaces/battery';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private solarCollection: CollectionReference<DocumentData>;
  private techCollection: CollectionReference<DocumentData>;
  private batteryCollection: CollectionReference<DocumentData>;

  constructor( private readonly firestore: Firestore ) { 
      this.solarCollection = collection(this.firestore, 'solar-panels');
      this.techCollection = collection(this.firestore, 'tech');
      this.batteryCollection = collection(this.firestore, 'batteries');
    }
    // solar panel services
    get(id: string) {
      const itemDocRef = doc(this.firestore, `solar-panels/${id}`)
      return docData(itemDocRef, { idField: 'id' });
    }

    getAll() {
      return collectionData(this.solarCollection, {
        idField: 'id'
      }) as Observable<Solar[]>
    }

    create(solarItem: Solar) {
      return addDoc(this.solarCollection, solarItem);
    }

    update(solarItem: Solar) {
      const itemDocRef = doc(
        this.firestore,
        `solar-panels/${solarItem.id}`
      );
      return updateDoc(itemDocRef, { ...solarItem });
    }

    delete(id: string) {
      const itemDocRef = doc(this.firestore, `solar-panels/${id}`);
      return deleteDoc(itemDocRef);
    }
    // tech services
    getTechItem(id: string) {
      const itemDocRef = doc(this.firestore, `tech/${id}`)
      return docData(itemDocRef, { idField: 'id' });
    }

    getAllTech() {
      return collectionData(this.techCollection, {
        idField: 'id'
      }) as Observable<Tech[]>
    }

    createTech(techItem: Tech) {
      return addDoc(this.techCollection, techItem);
    }

    updateTech(techitem: Tech) {
      const itemDocRef = doc(
        this.firestore,
        `tech/${techitem.id}`
      );
      return updateDoc(itemDocRef, { ...techitem });
    }

    deleteTech(id: string) {
      const itemDocRef = doc(this.firestore, `tech/${id}`);
      return deleteDoc(itemDocRef);
    }
    // battery service
    getBatteryItem(id: string) {
      const itemDocRef = doc(this.firestore, `batteries/${id}`)
      return docData(itemDocRef, { idField: 'id' });
    }

    getAllBatteries() {
      return collectionData(this.batteryCollection, {
        idField: 'id'
      }) as Observable<Battery[]>
    }

    createBattery(batteryItem: Battery) {
      return addDoc(this.batteryCollection, batteryItem);
    }

    updateBattery(batteryItem: Battery) {
      const itemDocRef = doc(
        this.firestore,
        `batteries/${batteryItem.id}`
      );
      return updateDoc(itemDocRef, { ...batteryItem });
    }

    deleteBattery(id: string) {
      const itemDocRef = doc(this.firestore, `batteries/${id}`);
      return deleteDoc(itemDocRef);
    }
}
