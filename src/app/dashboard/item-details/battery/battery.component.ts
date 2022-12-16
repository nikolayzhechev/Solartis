import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Battery } from 'src/app/shared/Interfaces/battery';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {
  batteryItem: Battery;
  title: string = '';
  energy: string = '';
  id: string;
  updateView = false;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.getItem();
  }

  getItem() {
    this.dashboardService.getBatteryItem(this.id).subscribe((doc: any) => {
      this.batteryItem = doc;
    });
  }
  
  editItem() {
    this.updateView = true;
  }

  update() {
    this.dashboardService.updateBattery({
      title: this.title,
      energy: this.energy,
      id: this.id
    });
  }

  delete(id: string) {
    this.dashboardService.deleteBattery(id);
  }
}
