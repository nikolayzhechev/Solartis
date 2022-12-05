import { RouterModule, Routes } from "@angular/router";
import { AddBatteryComponent } from "./add-battery/add-battery.component";
import { AddSolarComponent } from "./add-solar/add-solar.component";
import { AddTechComponent } from "./add-tech/add-tech.component";

const routes: Routes = [
    {
        path: "dashboard/addSolar",
        component: AddSolarComponent
    },
    {
        path: "dashboard/addTech",
        component: AddTechComponent
    },
    {
        path: "dashboard/addBattery",
        component: AddBatteryComponent
    }
];

export const DashboardRoutingModule = RouterModule.forChild(routes);