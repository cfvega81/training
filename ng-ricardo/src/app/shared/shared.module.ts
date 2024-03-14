import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  declarations: [...fromComponents.components],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ...fromComponents.components
  ]

})
export class SharedModule { }
