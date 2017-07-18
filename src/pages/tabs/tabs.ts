import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MenuPage } from '../settings/menu';
import { CategoryPage } from '../settings/category';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

   tab1:any;
   tab2:any;
   rootPage: HomePage;

   constructor() {
      this.tab1 = MenuPage;
      this.tab2 = CategoryPage;
   }
}
