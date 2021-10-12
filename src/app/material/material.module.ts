import { NgModule } from '@angular/core';

import{MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
const Model = [
MatCardModule,
MatToolbarModule,
MatFormFieldModule,
MatInputModule,
MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    Model
  ],
  exports:[Model]
})
export class MaterialModules { }
