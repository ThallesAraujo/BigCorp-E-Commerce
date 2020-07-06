import { ProdutoService } from './../../produto/produto.service';
import { Produto } from './../../produto/produto.model';
import { MainSectionComponent } from './../../components/main-section/main-section.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: [Produto]

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(produtos => {
      console.log("prods", produtos)
      this.produtos = produtos
    })
  }

}
