import { Component, Input, OnInit } from '@angular/core';
import { Center } from '../../Interfaces/center.interface';



@Component({
  selector: 'coords',
  template: `
    <div>
      <label>
        Lng: {{center.lng |number:'.0-8'}}
      </label>
      <label> 
        Lat: {{center.lat |number:'.0-8'}}
      </label>
    </div>

  `,
  styles: [`
    @import './src/styles.scss';

    div{
      min-width: 300px;
      max-width: 350px;
      position:fixed;
      top:20px;
      right:20px;
      text-align: center;
      border-radius: .5rem;
      background-color: $alice_blue;
      border:1px solid $battleship_gray;
      box-shadow: 0 0 4px $battleship_gray;
      z-index: 99;
    }
    
    label{
      display: block;
      padding:.5rem 1.5rem;
      border-bottom: 1px solid $battleship_gray;
    }

    @media screen and (max-width:800px){
      div{
        display: none;
      }
    }
  `]
})
export class CoordsComponent implements OnInit {

  @Input() center!:Center;

  constructor() { }

  ngOnInit(): void {
  }

}
