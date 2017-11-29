import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Inventory } from './inventory';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class InventoryService {

  constructor(public afDb: AngularFireDatabase) { }

  getInventoryList(inventoryId): AngularFireList<Inventory> {
    console.log('inventoryService--' + inventoryId + '');
    return this.afDb.list<Inventory>('Inventory/' + inventoryId + '/');
  }
}
