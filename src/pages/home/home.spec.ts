import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule, NavController, AlertController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from './home';
import { SegmentPage }  from '../seg/segment';
import { StoreService } from '../store.service';

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
            StoreService,
            NavController,
            AlertController
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

})