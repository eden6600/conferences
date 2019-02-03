import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model = {
    firstName: '',
    lastName: '',
    companyName: '',
    role: '',
    phone: null,
    email: '',
    workersAmount: ''
  }
  constructor() { }

  ngOnInit() {
  }

  radioChange(e) {
    this.model.workersAmount = e.value;
  }

}
