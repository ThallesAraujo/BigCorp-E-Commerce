import { Pedido } from './../pedido.model';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from './../pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  pedidos: [Pedido]

  constructor(private service: PedidoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idCliente = this.route.snapshot.paramMap.get("idCliente")
    this.service.getPedidosByIdCliente(idCliente).subscribe(pedidos => {
      console.log(pedidos)
      this.pedidos = pedidos
    })
  }

}
