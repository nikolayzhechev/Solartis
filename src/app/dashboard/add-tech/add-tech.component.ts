import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Tech } from 'src/app/shared/Interfaces/tech';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tech',
  templateUrl: './add-tech.component.html',
  styleUrls: ['./add-tech.component.css']
})
export class AddTechComponent implements OnInit {
  title = '';
  consumption = 0;
  limit = 0;
  id = '' ;
  constructor(
    public dashboardService: DashboardService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  submit() {
    this.dashboardService.createTech({
      title: this.title,
      consumption: this.consumption,
      limit: this.limit,
      id: this.id // is this id populating correctly?
    });
    this.router.navigate(['dashboard']);
  }

}
