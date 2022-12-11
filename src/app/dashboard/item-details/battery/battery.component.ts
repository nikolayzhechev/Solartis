import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit{
  batteryItem: any;
  id: string | null = '';
  title: string = '';
  energy: string = '';
  updateView: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getItem(id);
      this.setDefaultValues(id);
    });
  }

  async getItem(id: string) {
    const items = await firebase.firestore().collection('batteries')
      .where(firebase.firestore.FieldPath.documentId(), '==', id)
        .get();

    items.forEach((doc) => {
        this.batteryItem = doc.data();
    });

    return items;
  }

  async setDefaultValues(id: string) {
    const items = await this.getItem(id);
    let defaultItem: any;

    items.forEach((doc) => {
      defaultItem = doc.data();
    });

    this.title = defaultItem.title;
    this.energy = defaultItem.energy;
  }

  async deleteItem(id: any) {
    const items = await this.getItem(id);

      items.forEach((doc) => {
        doc.ref.delete();
      });
  }

  editItem() {
    this.updateView = true;
  }

  async updateItem(id: any) {
    const items = await this.getItem(id);

    items.forEach((doc) => {
      doc.ref.update({
        title: this.title,
        energy: this.energy,
      })
    });
  }
}
