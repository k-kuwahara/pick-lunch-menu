import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

import { StoreService } from '../store.service';

@Component({
   selector: 'page-segment',
   templateUrl: 'segment.html'
})

export class SegmentPage implements OnInit {
   set: string = "menu";
   menus: object[];
   categories: object[];

   constructor(public store_service: StoreService, public modal_ctrl: ModalController) {}

   ngOnInit() {
      this.menus = this.store_service.get_all_menu();
      this.categories = this.store_service.get_category();
   }

   open_modal(param) {
      if (param.category_id)
         param.type = 'menu'
      else
         param.type = 'category'

      let modal = this.modal_ctrl.create(ModalPage, param);
      modal.present();
   }

   delete(target) {
      if (window.confirm('削除してもよろしいですか？')) {
         if (target.category_id) {
            this.menus = this.remove_content(this.menus, target);
            this.store_service.update_menu(this.menus);
         }
         else {
            this.categories = this.remove_content(this.menus, target);
            this.store_service.update_category(this.categories);
         }
      }
      else {
         return;
      }
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
