import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store.component';
import { ServiceComponent } from './service/service.component';
const storeRoutes: Routes = [
  { path: 'about',  component: AboutComponent },
  {path: 'product',  component: ProductComponent},
  {path: 'service',  component: ServiceComponent}
];


@NgModule({
imports: [RouterModule.forChild(storeRoutes)],
exports : [ RouterModule ]
})
export class StoreRoutingModule { }
export const storeRoutingComponent = [AboutComponent, ProductComponent, ServiceComponent]
