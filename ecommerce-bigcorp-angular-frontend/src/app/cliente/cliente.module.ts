import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListagemClienteComponent, CadastroClienteComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [ListagemClienteComponent, CadastroClienteComponent]
})
export class ClienteModule { }
