import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-battery',
  templateUrl: './add-battery.component.html',
  styleUrls: ['./add-battery.component.css']
})
export class AddBatteryComponent implements OnInit {
  title: string = '';
  energy: string = '';
  id: string = '';
  constructor(
    private dashboardService: DashboardService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  submit() {
    this.dashboardService.createBattery({
      title: this.title,
      energy: this.energy,
      id: this.id
    });
    this.router.navigate(['dashboard']);
  }
}
