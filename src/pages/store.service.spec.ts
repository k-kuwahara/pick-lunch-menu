import { async, TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';
import { IonicStorageModule } from '@ionic/storage';

describe('StoreService', () => {
   let service: StoreService;

   beforeEach(async(() => {
       TestBed.configureTestingModule({
          imports: [
              IonicStorageModule.forRoot()
          ]
       })
    }));

   beforeEach(async() => {
      service = new StoreService();
   });

   it('store service import', async() => {
      expect(service).toBeDefined();
   })
})