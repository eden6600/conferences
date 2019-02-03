import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    companyName: ['', Validators.required],
    role: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  });
  showAlert = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    this.form.status === 'INVALID'
      ? (this.showAlert = true)
      : (this.showAlert = false);
  }
}
