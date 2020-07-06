import { ClienteService } from './../cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from '../cliente.model'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ClienteService, private router: Router) {}

  cliente: Cliente = new Cliente()

  @ViewChild('tfNome')
  tfNome: FormControl

  ngOnInit(): void {
    
      let id = this.route.snapshot.paramMap.get("id")
      console.log("idCLiente", id)
      if(id !== undefined){
        this.service.get(id).subscribe(cliente => {
          this.cliente = cliente
          this.tfNome.setValue(cliente.nome)
          console.log("cliente pego", cliente)
        })
      }
    
  }

  nomeClienteChanged = (event) =>{
    console.log(event.target.value)
    if (event.target.value.length >= 4){
      this.cliente.nome = event.target.value
    }
  }

  salvarCliente = () => {
    if (this.cliente.id !== undefined){
      this.service.put(this.cliente).subscribe(res => {
        console.log(res)
      })
    }else{
      this.cliente.status = "ativo"
      this.cliente.dataCadastro = new Date().toDateString()
      console.log("cliente da request",this.cliente)
      this.cliente.id = "0"
      this.service.post(this.cliente).subscribe(cli => console.log(cli))
    }
    this.router.navigateByUrl('/clientes')
  }

}
