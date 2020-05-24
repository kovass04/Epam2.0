import { Component, OnInit } from '@angular/core'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  myProp: string = 'Go ahead, click that button';  
  myArr = []; 
  private name: string; 
  constructor(private data: DataService) { } 
  ngOnInit(): void {
    this.myArr = this.data.getAll(); 
  }
   myMethod() {
   this.myProp = 'That button above me was clicked'; 
  }
}