import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Tech } from 'src/app/shared/Interfaces/tech';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  techItem: Tech;
  title = '';
  consumption = 0;
  limit = 0;
  id = '' ;
  updateView: boolean = false;

  constructor(
    public dashboardService: DashboardService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.getItem();
  }

  getItem() {
    this.dashboardService.getTechItem(this.id).subscribe((doc: any) => {
      this.techItem = doc;
    });
  }

  editItem() {
    this.updateView = true;
  }

  update() {
    this.dashboardService.updateTech({
      title: this.title,
      consumption: this.consumption,
      limit: this.limit,
      id: this.id
    });
  }

  delete(id: string) {
    this.dashboardService.deleteTech(id);
  }
}
