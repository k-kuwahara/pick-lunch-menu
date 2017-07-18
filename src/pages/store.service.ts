import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

   // 画面間の共有データ
   categories: string[] = [];

   constructor() {}
}