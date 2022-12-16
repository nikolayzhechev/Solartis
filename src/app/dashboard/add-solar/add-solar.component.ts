import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solar } from 'src/app/shared/Interfaces/solar';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-solar',
  templateUrl: './add-solar.component.html',
  styleUrls: ['./add-solar.component.css']
})
export class AddSolarComponent implements OnInit {
  form: FormGroup;
  consumption = '';
  description = '';
  title = '';
  id = '' ;

  constructor(
    public dashboardService: DashboardService,
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<AddSolarComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private readonly solar: Solar
  ) {}

  ngOnInit(): void {
  }
  // setForm() {
  //   this.form = this.formBuilder.group({
  //     consumption: [this.solar.consumption, [Validators.required]],
  //     description: [this.solar.description, [Validators.required]],
  //     // id: [this.solar.id, [Validators.required]],
  //     title: [this.solar.title, [Validators.required]],
  //   });
  // }
  submit() {
    this.dashboardService.create({
      consumption: this.consumption,
      description: this.description,
      title: this.title,
      id: this.id
    });
    this.router.navigate(['dashboard']);
  }

}
