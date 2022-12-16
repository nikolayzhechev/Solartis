import { Component, OnInit } from '@angular/core';
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
  getDoc,
  getDocs
} from '@firebase/firestore';
import { Firestore, getFirestore, collectionData, docData } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
