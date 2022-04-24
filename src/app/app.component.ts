import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  form = this.fb.group({
    courseType: ['premium', Validators.required],
    price: [null, {
      validators: [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern("[0-9]+") ]
    }]
  });

   constructor(private fb: FormBuilder) { }

}
