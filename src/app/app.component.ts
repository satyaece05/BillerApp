import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShopService } from './shared/model/shop.service';
import { InventoryService } from './shared/model/inventory.service';
import { Inventory } from './shared/model/inventory';
import { Shops } from './shared/model/shops';
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Params } from '@angular/router/src/shared';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
}
