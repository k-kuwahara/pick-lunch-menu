import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';


@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {
   items: object[] = [];

   constructor(public alertCtrl: AlertController, public nav: NavController, private my_storage: Storage) {
      this.my_storage.set('category', [
         { key: 1, name: '和食'},
         { key: 2, name: '中華'},
         { key: 3, name: '麺類'}
      ]);
      this.my_storage.get('category').then((val) => {
         this.items = val;
      });
   }

   show_menu() {
      let alert = this.alertCtrl.create({
         title: 'New Friend!',
         subTitle: 'はどうですか？',
         buttons: ['OK']
       });
      alert.present();
   }

   open_settings_page() {
      this.nav.push(TabsPage);
   }
}
