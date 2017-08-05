import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
import { DetailPage } from './detail-page';
import { NewPage } from './new-page';

import { StoreService } from '../store.service';

@Component({
   selector: 'page-segment',
   templateUrl: 'segment.html'
})

export class SegmentPage implements OnInit {
   set: string = "menu";
   menus: object[];
   categories: object[];

   constructor(
      public store_service: StoreService,
      public modal_ctrl: ModalController,
      public alertCtrl: AlertController) {}

   ngOnInit() {
      this.menus = this.store_service.get_all_menu();
      this.categories = this.store_service.get_category();
   }

   open_modal(param) {
      if (param.category_id)
         param.type = 'menu'
      else
         param.type = 'category'

      let modal = this.modal_ctrl.create(DetailPage, param);
      modal.present();
   }

   open_new_modal(type) {
      let modal = this.modal_ctrl.create(NewPage, { type: type });
      modal.present();
   }

   delete(target) {
      let confirm = this.alertCtrl.create({
         title: '本当に削除してもよろしいですか？',
         message: 'この操作は取り消すことができませんが、それでも実行しますか？',
         buttons: [
            {
               text: 'キャンセル',
               role: 'cancel',
               handler: () => {
                  return;
               }
            },
            {
               text: 'OK',
               handler: () => {
                 if (target.category_id) {
                    this.menus = this.remove_content(this.menus, target);
                    this.store_service.update_menu(this.menus);
                 }
                 else {
                    this.categories = this.remove_content(this.menus, target);
                    this.store_service.update_category(this.categories);
                 }
               }
            }
         ]
      });
      confirm.present();
   }

   remove_content(items, content) {
      items.forEach((v, i) => {
         if (content.id == v['id']) {
            items.splice(i, 1);
         }
      });

      return items;
   }
}
