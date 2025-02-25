import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  isMenuOpened: boolean = false;
  isActive = false;


  constructor(private httpClient: HttpClient){
  }
  
  toggleMenu() : void{
    this.isMenuOpened = !this.isMenuOpened;
    this.isActive = !this.isActive;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
    this.isActive = false;
  }
}
