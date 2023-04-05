import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormulariosComponent} from './formularios.component';

// USAR ESTOS DOS MODULOS PARA TRABAJAR CON FORMULARIOS
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    FormulariosComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports:[
    FormulariosComponent,
  ],
})
export class FormulariosModule { }
