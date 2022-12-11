import { Component, OnInit } from '@angular/core';
import { IItem } from '../shared/Interfaces/item';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/firestore'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  solarPanels: any[] = [];
  appliances: any[] = [];
  batteries: any[] = [];
  //IItem[] | null = null;
  selectedId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getSolarPanels();
    this.getTech();
    this.getBatteries();
  }

  async getSolarPanels() {
    const snapshot = await
      firebase.firestore().collection('solar-panels').get();


    snapshot.forEach(doc => {
        this.solarPanels?.push(doc.data());
    });
  }

  async getTech() {
    const snapshot = await
      firebase.firestore().collection('tech').get();

    snapshot.forEach(doc => {
      this.appliances?.push(doc.data());
    });
  }

  async getBatteries() {
    const snapshot = await
      firebase.firestore().collection('batteries').get();

      snapshot.forEach(doc => {
        this.batteries?.push(doc.data());
      });
  }
}
