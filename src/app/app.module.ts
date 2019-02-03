import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    FormComponent,
    FooterComponent,
  ],
  imports: [
    [BrowserModule, FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatRadioModule
    ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
