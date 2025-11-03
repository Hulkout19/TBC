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
  
  constructor(private httpClient: HttpClient){
    this.title = this.project[this.start].title;
    this.picPath = this.project[this.start].iconUrl;
  }

    moveRight(): void {
      if(this.start <this.project.length - 1) {
        this.start++;
        this.title = this.project[this.start].title;
        this.picPath = this.project[this.start].iconUrl;
      }
      else{
        this.start = 0;
        this.title = this.project[this.start].title;
        this.picPath = this.project[this.start].iconUrl;
      }
    }

    moveLeft(): void {
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
