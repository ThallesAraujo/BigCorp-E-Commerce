import { AjudaComponent } from './ajuda/ajuda.component';
import { ListagemPedidoComponent } from './pedido/listagem-pedido/listagem-pedido.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './cliente/listagem-cliente/listagem-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home/home.component'


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "clientes", component: ListagemClienteComponent, pathMatch: "full"},
  {path: "clientes/adicionar", component: CadastroClienteComponent, pathMatch: "full"},
  {path: "clientes/editar/:id", component: CadastroClienteComponent, pathMatch: "full"},
  {path: "clientes/:idCliente/pedidos", component: ListagemPedidoComponent, pathMatch: "full"},
  {path: "ajuda", component: AjudaComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
