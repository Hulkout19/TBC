import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  imports: [MatCardModule,NgFor, RouterModule],
  template: '<app-slider></app-slider>'
})
export class SliderComponent implements AfterViewInit {
  slideRight: boolean = false;
  isActive = false;
  @ViewChild('card') card!: ElementRef<HTMLElement>
  project: Projects[] = PROJECT;
  starter: number = 1;
  hold: any;

  private position: number = 0;

  constructor(private httpClient: HttpClient){
  }

    
  
  ngAfterViewInit(): void {

    const computedStyle: CSSStyleDeclaration = window.getComputedStyle(this.card.nativeElement)
  }

  moveLeft(): void {
    if (!this.card) return;

    this.position -= 20; // Move left by 20px
    this.card.nativeElement.style.right = `${this.position}px`;
  }

  getCard() : Projects{
    this.hold = this.project[1];
    return this.hold;
  }
  
  toggleRight() : void{

    const step = 20;
    const card = document.getElementById("card") as HTMLElement;
    const top: number = parseInt(window.getComputedStyle(card).top, 10);
    const left: number = parseInt(window.getComputedStyle(card).left, 10);

    card.style.top = `${top + step}px`;
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
