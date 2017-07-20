import { OnInit, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { MENUS } from './dataset/menu-list';
import { CATEGORIES } from './dataset/category-list';

@Injectable()
export class StoreService implements OnInit {
   menus: object[] = [];
   categories: object[] = [];

   constructor(private storage: Storage) {
      this.ngOnInit();
   }

   ngOnInit() {
      // メニューの確認
      this.storage.get('menu').then((val) => {
         if (val == null) {
            this.storage.set('menu', MENUS);
            this.menus = MENUS;
         }
         else {
            this.storage.set('menu', MENUS);
            this.menus = val
         }
      })

      // カテゴリの確認
      this.storage.get('category').then((val) => {
         if (val == null) {
            this.storage.set('category', CATEGORIES);
            this.categories = CATEGORIES;
         }
         else {
            this.categories = val
         }
      })
   }

   get_menu(key): object {
      return this.menus[key];
   }

   get_menu_with_category(selects): object[] {
      let ret: object[] = [];
      this.menus.forEach((item, index) => {
         if (selects.indexOf(item['category_id'].toString()) >= 0) {
            ret.push(item);
         }
      })
      return ret;
   }

   get_all_menu(): object[] {
      return this.menus;
   }

   get_category(): object[] {
      return this.categories;
   }
}