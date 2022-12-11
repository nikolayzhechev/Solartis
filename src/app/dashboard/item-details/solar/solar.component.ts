import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {
  id: string | null = '';
  solarItem: any;
  updateView: boolean = false;
  title: string = '';
  description: string = '';
  consumption: string = '';

  constructor( private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getItem(id);
      this.setDefaultValues(id);
    });
  }

  async getItem(id: any) {
      const items = await firebase.firestore().collection('solar-panels')
        .where(firebase.firestore.FieldPath.documentId(), '==', id)
          .get();

      items.forEach((doc) => {
          this.solarItem = doc.data();
      });

      return items;
  }

  async setDefaultValues(id: any) {
    const items = await this.getItem(id);
    let defaultItem: any;

    items.forEach((doc) => {
      defaultItem = doc.data();
    });

    this.title = defaultItem.title;
    this.consumption = defaultItem.consumption;
    this.description = defaultItem.description;
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
        description: this.description,
        consumption: this.consumption,
      })
    });
  }
}
