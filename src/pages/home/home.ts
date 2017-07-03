import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MenuPage } from '../settings/menu';


@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {

   constructor(public alertCtrl: AlertController, public nav: NavController) {
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
      this.nav.push(MenuPage);
   }
}
