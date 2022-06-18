import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
    {
        component: ActivitiesComponent,
        path: ''
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class ActivitiesRoutingModule { }
