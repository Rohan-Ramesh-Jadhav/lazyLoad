import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
	{ path: 'fruits', loadChildren: () => import('./fruits/fruits.module').then(m => m.FruitsModule) },
	{ path: 'vegs', loadChildren: () => import('./vegs/vegs.module').then(m => m.VegsModule) },
	{ path: 'price', loadChildren: () => import('./price/price.module').then(m => m.PriceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
