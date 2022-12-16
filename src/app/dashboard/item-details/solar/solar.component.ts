import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Solar } from 'src/app/shared/Interfaces/solar';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {
  solarItem: Solar;
  id: string;
  // form: FormGroup;
  consumption: string = '';
  description: string = '';
  title: string = '';
  updateView: boolean = false;

  @Output() updateSolar = new EventEmitter<void>();
  @Output() deleteSolar = new EventEmitter<void>();

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
    this.dashboardService.get(this.id).subscribe((doc: any) => {
      this.solarItem = doc;
    });
  }

  editItem() {
    this.updateView = true;
  }

  update() {
    this.dashboardService.update({
      title: this.title,
      description: this.description,
      consumption: this.consumption,
      id: this.id
    });
    //this.updateSolar.emit();
  }

  delete(id: string) {
    this.dashboardService.delete(id);
    //this.deleteSolar.emit();
  }
}
