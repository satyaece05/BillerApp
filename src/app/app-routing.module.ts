import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CtshopComponent } from './ctshop/ctshop.component';
import { StoreComponent } from './store/store.component';
const AppRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  {path: 'shop',  component: CtshopComponent},
  {path: 'shop/:id',  component: StoreComponent}
];


@NgModule({
imports: [RouterModule.forRoot(AppRoutes)],
exports : [ RouterModule ]
})
export class AppRoutingModule { }
