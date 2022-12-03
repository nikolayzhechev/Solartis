import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // constructor(private store: AngularFirestore) {}
    title = '';
    description = '';
    consumption = '';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyAzK3ZPDRePJFjsNMcCzIXc74gmqH5xTTU",
      authDomain: "solartis-41f8c.firebaseapp.com",
      projectId: "solartis-41f8c",
      storageBucket: "solartis-41f8c.appspot.com",
      messagingSenderId: "67121689355",
      appId: "1:67121689355:web:734363f268beb8f787680e"
    };
    firebase.initializeApp(firebaseConfig);
  }

  async addShopItem() {
    await firebase.firestore().collection('shop').add({
      title: this.title,
      description: this.description,
      consumption: this.consumption
    })
  }
}
