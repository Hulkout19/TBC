import { Component } from '@angular/core';
import { PROJECT } from '../projects';
import { Projects } from 'src/projects';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-slider',
  templateUrl: './new-slider.component.html',
  styleUrls: ['./new-slider.component.css']
})


export class NewSliderComponent {
  project: Projects[] = PROJECT;
  title: string = '';
  start: number = 0;
  picPath: string = '';
  stopSlide: boolean = false;
  change: boolean = false;
  active: boolean = false;
  
  constructor(private httpClient: HttpClient){
    this.title = this.project[this.start].title;
    this.picPath = this.project[this.start].iconUrl;
    
  }

  ngOnInit(): void {
    // this.startSlideshow();
  }

  //   async startSlideshow() {
  //   while (!this.stopSlide) {
  //     this.moveRight();
  //     this.change = false;
  //     await this.delay(5000); // 5-second delay between slides
  //   }
  // }
  //   delay(ms: number) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  //   }


    moveRight(): void {
      this.change = true;
      this.active = true;
      if(this.start < this.project.length - 1) {
        this.start++;
        this.title = this.project[this.start].title;
        this.picPath = this.project[this.start].iconUrl;
      }
      else{
        this.start = 0;
        this.title = this.project[this.start].title;
        this.picPath = this.project[this.start].iconUrl;
      }
      this.active = false;
    }

    moveLeft(): void {
      this.change = true;
      if(this.start > 0) {
        this.start--;
        this.title = this.project[this.start].title;
        this.picPath = this.project[this.start].iconUrl;
      }
      else{
        this.start = this.project.length - 1;
        this.title = this.project[this.start].title;
        this.picPath = this.project[this.start].iconUrl;
      }
      
    }

}
