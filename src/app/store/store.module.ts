import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../../environments/firebase.config';
import { StoreRoutingModule,  storeRoutingComponent} from './store-routing.module';
import { ShopService } from '../shared/model/shop.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { InventoryService } from '../shared/model/inventory.service';
import {ActivatedRoute} from '@angular/router';
import { ServiceComponent } from './service/service.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    StoreRoutingModule,
    AngularFireDatabaseModule
  ],
  declarations: [AboutComponent, ProductComponent, StoreComponent, ServiceComponent, storeRoutingComponent],
  exports:[StoreComponent],
  providers: [ShopService, InventoryService],
  bootstrap: [StoreComponent]
})
export class StoreModule { }
