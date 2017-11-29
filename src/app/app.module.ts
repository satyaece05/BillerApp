import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopService } from './shared/model/shop.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { InventoryService } from './shared/model/inventory.service';
import {ActivatedRoute} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CtshopComponent } from './ctshop/ctshop.component';
import { StoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    CtshopComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    AngularFireDatabaseModule,
    StoreModule

  ],
  providers: [ShopService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
