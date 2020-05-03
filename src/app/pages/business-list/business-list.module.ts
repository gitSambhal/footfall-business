import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BListComponent } from './list/list.component';

import { BusinessListRoutingModule } from './business-list-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    BListComponent,
    AddComponent,
  ],
  imports: [
    SharedModule,
    BusinessListRoutingModule
  ]
})
export class BusinessListModule { }
