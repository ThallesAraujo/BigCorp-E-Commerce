import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section.component';



@NgModule({
  declarations: [MainSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[MainSectionComponent]
})
export class MainSectionModule { }
