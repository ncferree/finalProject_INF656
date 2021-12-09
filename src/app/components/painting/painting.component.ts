import { Component, OnInit, Input } from '@angular/core';
import { Painting } from '../../models/painting';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})



export class PaintingComponent implements OnInit {

 painting!: Painting;



  constructor() { }

  ngOnInit(): void {
   
  
  }

}
