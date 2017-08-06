import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController, AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from './home';
import { StoreService } from '../store.service';
import { CATEGORIES } from '../dataset/category-list';

describe('Home component', () => {
   let comp: HomePage;
   let fixture: ComponentFixture<HomePage>;

   beforeEach(async(() => {
       TestBed.configureTestingModule({
         declarations: [HomePage],
         imports: [
           IonicModule.forRoot(HomePage),
           IonicStorageModule.forRoot()
         ],
         providers: [
            NavController,
            AlertController,
            { provide: StoreService, useValue: CATEGORIES }
         ]
       })
     }));

   beforeEach(() => {
      fixture = TestBed.createComponent(HomePage);
      comp = fixture.componentInstance;
   });

   it('should be created', () => {
      expect(comp).toBeDefined();
      expect(comp.menu['name']).toBeUndefined();
      expect(comp.categories.length).toBe(0);
   });

   it('select category', async() => {
      comp.select_category(1);
      expect(comp.select).toBeDefined(1);
   })
})