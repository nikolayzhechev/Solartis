import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AddBatteryComponent } from './add-battery/add-battery.component';
import { AddSolarComponent } from './add-solar/add-solar.component';
import { AddTechComponent } from './add-tech/add-tech.component';
import { BatteryComponent } from './item-details/battery/battery.component';
import { SolarComponent } from './item-details/solar/solar.component';
import { TechComponent } from './item-details/tech/tech.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    DashboardComponent,
    AddBatteryComponent,
    AddSolarComponent,
    AddTechComponent,
    BatteryComponent,
    SolarComponent,
    TechComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    DashboardRoutingModule,
    AuthModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class DashboardModule { }
