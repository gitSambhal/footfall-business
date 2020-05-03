import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbRadioModule, NbListModule, NbTabsetModule, NbRouteTabsetModule, NbStepperModule, NbCardModule, NbButtonModule, NbAccordionModule, NbUserModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCheckboxModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { InputErrorMsgComponent } from '../components/input-error-msg/input-error-msg.component';

let modules = [
  CommonModule,
  NbListModule,
  FormsModule,
  ReactiveFormsModule,
  ThemeModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbCardModule,
  NbButtonModule,
  NbAccordionModule,
  NbUserModule,
  NbRadioModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbMenuModule,
  NbTabsetModule,
  NbCheckboxModule,
  NbInputModule,
  NbSpinnerModule,

]

let components = [
  InputErrorMsgComponent,
]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
