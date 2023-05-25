import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private parametrizador: ActivatedRoute,
    private roteador: Router) { 
    // this.parametrizador.params.subscribe( res => console.log(res))

    // this.parametrizador.queryParams.subscribe()
  }
  

  ngOnInit(): void {
    // setInterval(()=> {
    //   this.roteador.navigate(['/'])
    // }, 5000)
  }

}
