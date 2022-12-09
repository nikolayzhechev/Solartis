import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSolarComponent } from './add-solar/add-solar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddTechComponent } from './add-tech/add-tech.component';
import { AddBatteryComponent } from './add-battery/add-battery.component';
import { FormsModule } from '@angular/forms';
import { SolarComponent } from './item-details/solar/solar.component';



@NgModule({
  declarations: [
    AddSolarComponent,
    DashboardComponent,
    AddTechComponent,
    AddBatteryComponent,
    SolarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
