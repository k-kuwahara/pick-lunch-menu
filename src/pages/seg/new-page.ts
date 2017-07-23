import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { StoreService } from '../store.service';

@Component({
   selector: 'page-new',
   templateUrl: 'new-page.html'
})
export class NewPage {
   item: any;
   title: string;

   constructor(
      public params: NavParams,
      public view_ctrl: ViewController,
      public store_service: StoreService
   ) {}

   create(new_name) {
      if (this.item.type == 'category') {
         let new_cat = this.store_service.get_category();
         this.store_service.update_category(new_cat);
      }
      else if (this.item.type == 'menu') {
         let new_menu = this.store_service.get_all_menu();
         this.store_service.update_menu(new_menu);
      }
      this.dismiss();
   }

   dismiss() {
      this.view_ctrl.dismiss();
   }
}