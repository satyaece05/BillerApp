import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Shops } from './shops';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';


@Injectable()

export class ShopService {

  constructor(private afDb: AngularFireDatabase) {}

  getShop(shopId): AngularFireObject<Shops> {
    console.log('shopService--' + shopId + '');
    return this.afDb.object<Shops>('StoreInfo/' + shopId + '/');
  }

}
