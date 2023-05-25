import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  constructor() { 
    console.log(`constructor ${this.nome}`)
  }

  @Input() nome:string = ''

  ngOnInit(): void {
    console.log(`OnInit ${this.nome}`)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`OnChanges ${this.nome}`)
    
  }

}
