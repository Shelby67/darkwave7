import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { ProductsDetailComponent } from './products/products-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'welcome', component: WelcomeComponent }, 
  { path: 'product/:id', component: ProductsDetailComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
