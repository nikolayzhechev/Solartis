import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-add-tech',
  templateUrl: './add-tech.component.html',
  styleUrls: ['./add-tech.component.css']
})
export class AddTechComponent {
  title = '';
  consumption = 0;
  limit = 0;

  async addTech() {
    await firebase.firestore().collection('tech').add({
      title: this.title,
      consumption: this.consumption,
      limit: this.limit
    });
  }
}
