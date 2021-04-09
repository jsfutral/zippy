import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form;

  constructor( fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group ({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
}
