import { PedidoModule } from './pedido/pedido.module';
import { ClienteModule } from './cliente/cliente.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { MainSectionModule } from './components/main-section/main-section.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AjudaComponent } from './ajuda/ajuda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainSectionModule,
    NavbarModule,
    ClienteModule,
    PedidoModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
