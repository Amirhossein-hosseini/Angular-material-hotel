import { NgModule } from '@angular/core';

import{MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {MatStepperModule} from '@angular/material/stepper'

import {MatSnackBarModule} from '@angular/material/snack-bar'

const Model = [
MatCardModule,
MatToolbarModule,
MatFormFieldModule,
MatInputModule,
MatIconModule,
MatSidenavModule,
MatListModule,
MatButtonModule,
MatStepperModule,
MatSnackBarModule

]

@NgModule({
  declarations: [],
  imports: [
    Model
  ],
  exports:[Model]
})
export class MaterialModules { }
