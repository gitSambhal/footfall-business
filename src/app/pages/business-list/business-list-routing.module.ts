import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', },
  { path: 'list', component: BListComponent, },
  { path: 'add', component: AddComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessListRoutingModule { }
