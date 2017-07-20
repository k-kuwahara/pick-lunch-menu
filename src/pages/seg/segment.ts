import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

import { StoreService } from '../store.service';

@Component({
   selector: 'page-segment',
   templateUrl: 'segment.html'
})

export class SegmentPage implements OnInit {
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
}
