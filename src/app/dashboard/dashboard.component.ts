import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Solar } from '../shared/Interfaces/solar';
import { Tech } from '../shared/Interfaces/tech';
import { Battery } from '../shared/Interfaces/battery';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  solarItems$: Observable<Solar[]>; // udpated to observable + using interface
  techItems$: Observable<Tech[]>;
  batteryItems$: Observable<Battery[]>;
  @Output() solarItemEmitter = new EventEmitter<Solar>(); // use output emitter?

  constructor(
    public dashboardService: DashboardService, 
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.getSolarItems();
    this.getTechItems();
    this.getBatteries();
  }

  getSolarItems(): void {
    const items = this.dashboardService.getAll();
    this.solarItems$ = items;
  }

  getTechItems(): void {
    const items = this.dashboardService.getAllTech();
    this.techItems$ = items;
  }

  getBatteries(): void {
    const items = this.dashboardService.getAllBatteries();
    this.batteryItems$ = items;
  }

  selectSolarItem(solarItem: Solar) {
    this.solarItemEmitter.emit(solarItem); // < needed?
  }

}
