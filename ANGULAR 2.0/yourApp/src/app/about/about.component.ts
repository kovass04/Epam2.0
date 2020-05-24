import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string = ''; 
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) =>{ 
      this.name = params['name']; 
    })
  }

}
