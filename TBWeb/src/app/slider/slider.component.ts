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
  imports: [MatCardModule, RouterModule]
})
export class SliderComponent {
  slideRight: boolean = false;
  isActive = false;

  project: Projects[] = PROJECT;

  constructor(private httpClient: HttpClient){
  }
  
  toggleSlide() : void{
    this.slideRight = !this.slideRight;
    this.isActive = !this.isActive;
    console.log(this.slideRight);
  }

  clickedOutside(): void {
    this.slideRight = false;
    this.isActive = false;
  }
}
