import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit{
  techItem: any;
  id: string = '';
  title: string = '';
  consumption: string = '';
  limit: string = '';
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
    const items = await firebase.firestore().collection('tech')
      .where(firebase.firestore.FieldPath.documentId(), '==', id)
        .get();

    items.forEach((doc) => {
        this.techItem = doc.data();
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
    this.limit = defaultItem.limit;
  }

  async deleteItem(id: string) {
    const items = await this.getItem(id);

      items.forEach((doc) => {
        doc.ref.delete();
      });
  }

  editItem() {
    this.updateView = true;
  }

  async updateItem(id: string) {
    const items = await this.getItem(id);

    items.forEach((doc) => {
      doc.ref.update({
        title: this.title,
        limit: this.limit,
        consumption: this.consumption,
      })
    });
  }
}
