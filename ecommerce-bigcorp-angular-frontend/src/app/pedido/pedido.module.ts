import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';



@NgModule({
  declarations: [ListagemPedidoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [ListagemPedidoComponent]
})
export class PedidoModule { }
