import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegsComponent } from './vegs.component';

const routes: Routes = [{ path: '', component: VegsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegsRoutingModule { }
