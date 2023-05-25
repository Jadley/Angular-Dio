import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0
  adicionar(){
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade -= 1
  }

  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInint')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    console.log("bye bye")
  }

}
