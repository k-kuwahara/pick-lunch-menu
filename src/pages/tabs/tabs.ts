import { Component } from '@angular/core';

import { MenuPage } from '../settings/menu';
import { CategoryPage } from '../settings/category';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

   tab1:any;
   tab2:any;
   rootPage = MenuPage;

   constructor() {
      this.tab1 = MenuPage;
      this.tab2 = CategoryPage;
   }
}
