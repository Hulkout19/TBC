import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{
  isMenuOpened: boolean = false;
  isActive = false;
  unRotate = true;


  constructor(private httpClient: HttpClient){
  }
  
  toggleMenu() : void{
    this.isMenuOpened = !this.isMenuOpened;
    this.isActive = !this.isActive;
    this.unRotate = !this.unRotate;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
    this.isActive = false;
    this.unRotate = true;
  }
}
