import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente.model'

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {

  service: ClienteService

  constructor(service: ClienteService, private router: Router) { 
    this.service = service
  }

  clientes: [Cliente]

  ngOnInit(): void {
    this.getClientes()
  }


  getClientes = () => {
    this.service.getAll().subscribe(clientes => {
      this.clientes = clientes.filter(cli => cli.status === "ativo")
      console.log("clientes", clientes)
    })
  }

  adicionarCliente = () =>{
    this.router.navigateByUrl('clientes/adicionar')
  }

  editarCliente = (id) =>{
    this.router.navigateByUrl(`clientes/editar/${id}`)
  }

  verPedidos = (clienteId) => {
    this.router.navigateByUrl(`/clientes/${clienteId}/pedidos`)
  }

  excluirCliente = (clienteId) => {
    var teste = confirm("Tem certeza de que deseja remover esse cliente?")
    if(teste){
      this.service.delete(clienteId).subscribe(res => {
        console.log(res)
        this.getClientes()
      })
    }
    window.location.reload()
  }

}
