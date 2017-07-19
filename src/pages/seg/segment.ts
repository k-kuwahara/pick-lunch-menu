import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Platform } from 'ionic-angular';

@Component({
   selector: 'page-segment',
   templateUrl: 'segment.html'
})

export class SegmentPage {

   form: FormGroup;
   pet: string = "puppies";

   constructor(@Inject(FormBuilder) fb: FormBuilder) {
   }
}
