import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { StoreService } from '../store.service';

@Component({
   selector: 'page-modal',
   templateUrl: 'modal-page.html'
})
export class ModalPage {
   item: any;
   title: string;

   constructor(
      public params: NavParams,
      public view_ctrl: ViewController,
      public store_service: StoreService
   ) {
     this.item = this.params.data;
     console.info(this.item);
     this.title = this.item.type == 'category' ? 'カテゴリ' : 'メニュー';
   }

   update() {
      // this.store_service.
      console.info('udated!!');
   }

   dismiss() {
      this.view_ctrl.dismiss();
   }
}