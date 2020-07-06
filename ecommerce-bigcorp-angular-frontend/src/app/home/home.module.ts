import { MainSectionComponent } from './../components/main-section/main-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainSectionModule } from '../components/main-section/main-section.module';

@NgModule({
  declarations: [HomeComponent, MainSectionComponent],
  imports: [
    CommonModule,
    MainSectionModule
  ]
})
export class HomeModule { }
