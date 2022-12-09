import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-add-battery',
  templateUrl: './add-battery.component.html',
  styleUrls: ['./add-battery.component.css']
})
export class AddBatteryComponent {
  title = '';
  energy = 0;

  async addBattery() {
    await firebase.firestore().collection('batteries').add({
      title: this.title,
      energy: this.energy
    });
  }
}
