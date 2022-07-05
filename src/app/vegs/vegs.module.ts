import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegsRoutingModule } from './vegs-routing.module';
import { VegsComponent } from './vegs.component';


@NgModule({
  declarations: [
    VegsComponent
  ],
  imports: [
    CommonModule,
    VegsRoutingModule
  ]
})
export class VegsModule { }
