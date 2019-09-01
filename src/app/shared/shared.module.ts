import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog.component';
import { CustomMaterialModule } from './../core/custom-modules/material.module';

@NgModule({
  declarations: [ DialogComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports : [
    DialogComponent
  ],
  entryComponents: [DialogComponent],
})
export class SharedModule { }
