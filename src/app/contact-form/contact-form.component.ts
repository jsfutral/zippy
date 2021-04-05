import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  categories = [
    { id: 1, name:'Development' },
    { id: 2, name:'Art' },
    { id: 3, name:'Languages' }
  ]
 
  log(x: any) { 
    console.log(x);
  }

  submit(f: any) {
    console.log(f);
  }
}
