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

   constructor(
      public params: NavParams,
      public view_ctrl: ViewController,
      public store_service: StoreService
   ) {
      this.type = this.params.data.type;
      this.title = this.type == 'category' ? 'カテゴリ' : 'メニュー';
   }

   create(new_name) {
      this.dismiss();
   }

   dismiss() {
      this.view_ctrl.dismiss();
   }
}