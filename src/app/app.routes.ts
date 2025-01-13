import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: ()=> import("./pages/control-panel/control-panel.component").then(c => c.ControlPanelComponent)
    }
];
