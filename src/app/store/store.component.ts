import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router/src/shared';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShopService } from '../shared/model/shop.service';
import { InventoryService } from '../shared/model/inventory.service';
import { Inventory } from '../shared/model/inventory';
import { Shops } from '../shared/model/shops';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
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