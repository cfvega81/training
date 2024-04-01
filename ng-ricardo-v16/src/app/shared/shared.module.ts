import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import * as fromComponents from './components';

import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';


const MaterailModule = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
]


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...MaterailModule,
    RouterModule

  ],

  declarations: [...fromComponents.components],

  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components,
    ...MaterailModule,
    
  ]

})
export class SharedModule { }
