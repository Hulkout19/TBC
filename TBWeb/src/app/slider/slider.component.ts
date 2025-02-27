import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Projects } from 'src/projects';
import { PROJECT } from '../projects';
import { NgFor, NgIf } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  standalone: true,
  imports: [MatCardModule, RouterModule],
  template: '<app-slider></app-slider>'
})
export class SliderComponent {
  slideRight: boolean = false;
  isActive = false;

  project: Projects[] = PROJECT;
  starter: number = 0;
  hold: any;

  constructor(private httpClient: HttpClient){
  }

  getCard() : Projects{
    this.hold = this.project[1];
    return this.hold;
  }
  
  toggleRight() : void{
    this.slideRight = !this.slideRight;
    this.isActive = !this.isActive;
    console.log(this.slideRight);
    console.log(this.project[0])
    this.hold = this.project[this.starter]
    this.starter += 1;
  }

  toggleLeft() : void{
    this.slideRight = !this.slideRight;
    this.isActive = !this.isActive;
    console.log(this.slideRight);
    console.log(this.project[0])
    this.hold = this.project[this.starter]
    this.starter -= 1;
  }

  clickedOutside(): void {
    this.slideRight = false;
    this.isActive = false;
  }
}
