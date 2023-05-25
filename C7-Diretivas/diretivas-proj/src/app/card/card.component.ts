import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = 'superUser'

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'monitor',
      'placa'
    ]
   }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push('jadley')
  }

  remover(indice:number){
    this.produtos.splice(indice,1)
  }
}
