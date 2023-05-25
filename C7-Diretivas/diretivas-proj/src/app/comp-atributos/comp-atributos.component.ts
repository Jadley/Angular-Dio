import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  corFundo:string = 'red'
  corFonte:string = 'green'
  item:string = ''
  lista:string[] = []

  adicionarLista(){
    this.lista.push(this.item)
  }

  estilo:string = 'enable'
  trocar(){
    if(this.estilo == 'enable'){
      this.estilo = 'disable'
    }else {
      this.estilo = 'enable'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
