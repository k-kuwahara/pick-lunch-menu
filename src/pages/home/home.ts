import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SegmentPage }  from '../seg/segment';
import { StoreService } from '../store.service';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})

export class HomePage implements OnInit {
   categories: object[] = [];
   select: string[] = [];

   constructor(
      public alerCtrl: AlertController,
      public nav: NavController,
      public store_service: StoreService ) {
   }

   ngOnInit() {
      // storageからの読み込みが非同期処理で行われるため
      setTimeout(() => {
         this.categories = this.store_service.get_category();
      }, 300);
      // カテゴリが取得できていなかったら再度実行
      if (this.categories.length == 0) this.store_service.get_category();
   }

   select_category(e) {
      this.select = e;
   }

   show_menu() {
      let menu: object;
      if (this.select.length > 0) {
         let menus: object[] = this.store_service.get_menu_with_category(this.select);
         let key:number
            = Math.floor(Math.random() * menus.length);
         menu = menus[key];
      }
      else {
         let menus: object[] = this.store_service.get_all_menu();
         let key:number
            = Math.floor(Math.random() * menus.length);
         menu = menus[key];
      }

      let alert = this.alerCtrl.create({
         title: menu['name'],
         subTitle: 'はどうですか？',
         buttons: ['OK']
       });
      alert.present();
   }

   open_settings_page() {
      this.nav.push(SegmentPage);
   }
}
