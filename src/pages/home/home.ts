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

      let alert = this.alertCtrl.create({
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
