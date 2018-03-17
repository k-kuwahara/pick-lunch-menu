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
   select: string = '';
   menu: object = {};

   constructor(
      public alertCtrl: AlertController,
      public nav: NavController,
      public store_service: StoreService ) {
   }

   ngOnInit() {
      // storageからの読み込みが非同期処理で行われるため
      var timer = setInterval(() => {
         this.categories = this.store_service.get_category();
         if (this.categories.length > 0)
            clearInterval(timer);
      },300);
   }

   select_category(e) {
      this.select = e;
   }

   show_menu() {
      if (this.select.length > 0) {
         let menus: object[] = this.store_service.get_menu_with_category(this.select);
         let key:number
            = Math.floor(Math.random() * menus.length);
         this.menu = menus[key];
      }
      else {
         let menus: object[] = this.store_service.get_all_menu();
         let key:number
            = Math.floor(Math.random() * menus.length);
         this.menu = menus[key];
      }

      if (this.menu == void 0) {
         let alert = this.alertCtrl.create({
            title: '指定のカテゴリにはメニューが登録されていません',
            subTitle: '',
            buttons: ['閉じる']
          });
         alert.present();
      }
      else {
         let confirm = this.alertCtrl.create({
            title: this.menu['name'],
            message: 'はどうですか？',
            buttons: [
               {
                  text: '再度取得'
               },
               {
                  text: '決定!!',
                  handler: () => {
                     this.open_shop_list(this.menu['name']);
                  }
               }
            ]
          });
         confirm.present();
      }
   }

   open_settings_page() {
      this.nav.push(SegmentPage);
   }

   open_shop_list(menu: string) {
      console.info(menu);
   }
}
