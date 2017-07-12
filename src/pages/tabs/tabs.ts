import { Component } from '@angular/core';

import { MenuPage } from '../settings/menu';
import { CategoryPage } from '../settings/category';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any;
  tab2Root:any;

  constructor() {
    this.tab1Root = MenuPage;
    this.tab2Root = CategoryPage;
  }
}
