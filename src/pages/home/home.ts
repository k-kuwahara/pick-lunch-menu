import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SegmentPage } from '../seg/segment';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})

export class HomePage {
   categories: object[] = [];

   constructor(
      public alert_ctrl: AlertController,
      public nav: NavController,
      private my_storage: Storage
   ) {
      this.my_storage.set('category', [
         { key: 1, name: '和食'},
         { key: 2, name: '中華'},
         { key: 3, name: '麺類'}
      ]);
      this.my_storage.get('category').then((val) => {
         this.categories = val;
      });
   }

   show_menu() {
      let key:number;
      key  = Math.floor(Math.random() * this.categories.length);

      let alert = this.alert_ctrl.create({
         title: this.categories[key]['name'],
         subTitle: 'はどうですか？',
         buttons: ['OK']
       });
      alert.present();
   }

   open_settings_page() {
      this.nav.push(SegmentPage);
   }
}
