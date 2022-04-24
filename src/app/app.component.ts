import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  form = this.fb.group({
    courseType: ['premium', Validators.required],
    price: [null, {
      validators: [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern("[0-9]+") ]
    }]
  });

   constructor(private fb: FormBuilder) { }

   ngOnInit() {
    
    // the form emits an observable each time there is a new value (valid or invalid)
    this.form.valueChanges
    .subscribe(val => {

      const priceControl = this.form.controls['price'];

      // if 'courseType' value is 'free' & priceControl is enabled =>  disable priceControl
      if (val.courseType == 'free' && priceControl.enabled) {
        // disable priceControl input and make sure that no event is triggered => avoiding infinite loops
        priceControl.disable({emitEvent: false});
      }
      else if (val.courseType == 'premium' && priceControl.disabled) {
        priceControl.enable({emitEvent: false})
      }


    });
   }

}
