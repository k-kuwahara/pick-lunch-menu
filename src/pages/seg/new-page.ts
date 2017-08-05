import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { StoreService } from '../store.service';

@Component({
   selector: 'page-new',
   templateUrl: 'new-page.html'
})
export class NewPage {
   type: any;
   title: string;
   select: string = '';
   error_txt: string;
   categories: object[] = [];

   constructor(
      public params: NavParams,
      public view_ctrl: ViewController,
      public store_service: StoreService
   ) {
      this.categories = this.store_service.get_category();
      this.type = this.params.data.type;
      this.title = this.type == 'category' ? 'カテゴリ' : 'メニュー';
   }

   create(category = null, menu = null) {
      if (category == null && menu == null) {
         this.error_txt = 'カテゴリ、メニュー名を入力してください';
         return;
      }
      else if (category == void 0) {
         this.error_txt = 'カテゴリ名を入力してください';
         return;
      }

      if (this.select === '') {
         let new_cat = this.categories;
         new_cat.push({
            id: this.categories.length+1,
            name: category
         })
         this.store_service.update_category(new_cat);
      }
      else {
         let new_menu = this.store_service.get_all_menu();
         new_menu.push({
            id: new_menu.length+1,
            category_id: this.select,
            name: menu
         })
         this.store_service.update_category(new_menu);
      }

      this.dismiss();
   }

   select_category(e) {
      this.select = e;
   }

   dismiss() {
      this.view_ctrl.dismiss();
   }
}