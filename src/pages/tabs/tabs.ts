import { Component } from '@angular/core';

import { MenuPage } from '../settings/menu';
import { CategoryPage } from '../settings/category';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = CategoryPage;

  constructor() {

  }
}
