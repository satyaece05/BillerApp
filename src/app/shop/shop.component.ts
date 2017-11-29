import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShopService } from '../shared/model/shop.service';
import { InventoryService } from '../shared/model/inventory.service';
import { Inventory } from '../shared/model/inventory';
import { Shops } from '../shared/model/shops';
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Params } from '@angular/router/src/shared';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})


export class ShopComponent implements OnInit {

  inventory: Inventory[];
  shop: Shops;

  constructor(public mRouteParam: ActivatedRoute, public shopService: ShopService, public inventoryService: InventoryService) {
   }

  ngOnInit() {

    this.mRouteParam.params.subscribe((params: Params) => {
      console.log('param--' + params['id'] + '');
        this.shopService.getShop(params['id']).valueChanges().subscribe((shop: Shops) => {
        this.inventoryService.getInventoryList(params['id']).valueChanges().subscribe((inventory: Inventory[]) => {

          console.log('afterService--' + shop + inventory + '');
          this.shop = shop;
          this.inventory = inventory;
        });
        });
    });
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
