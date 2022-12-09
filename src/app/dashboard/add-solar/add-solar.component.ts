import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-add-solar',
  templateUrl: './add-solar.component.html',
  styleUrls: ['./add-solar.component.css']
})
export class AddSolarComponent {
  title = '';
  description = '';
  consumption = 0;

  async addSolarPanel() {
    const docRef = await firebase.firestore().collection('solar-panels').add({
      title: this.title,
      description: this.description,
      consumption: this.consumption
    });
    docRef.update({
      id: docRef.id
    })
  }
}
