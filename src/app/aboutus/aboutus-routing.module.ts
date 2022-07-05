import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutProductsComponent } from './about-products/about-products.component';

const routes: Routes = [
	{ path: '', component: AboutusComponent },
	{path: 'companyAboutUs',component: AboutCompanyComponent},
	{path: 'productAboutUs',component: AboutProductsComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AboutusRoutingModule { }
