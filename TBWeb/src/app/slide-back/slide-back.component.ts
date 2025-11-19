import { Component } from '@angular/core';
import { PROJECT } from '../projects';
import { Projects } from 'src/projects';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slide-back',
  templateUrl: './slide-back.component.html',
  styleUrls: ['./slide-back.component.css'],
  animations: [
    trigger('fade', [
      transition('* => *', [
      style({ opacity: 0 }),
      animate('1000ms ease-in-out', style({ opacity: 1 }))
    ])
  ]),
  trigger('fade-out', [
      transition('* => *', [
      style({ opacity:1 }),
      animate('1000ms ease-in-out', style({ opacity: 0 }))
    ])
  ])
  ]
})
export class SlideBackComponent {
  project: Projects[] = PROJECT;
  title: string = '';
  start: number = 0;
  picPath: string = '';
  stopSlide: boolean = false;
  change: boolean = false;
  change2: boolean = false;

  constructor(private httpClient: HttpClient){
    this.title = this.project[this.start].title;
    this.picPath = this.project[this.start].iconUrl;
    
  }

  ngOnInit(): void {
    this.startSlideshow();
  }

  async startSlideshow() {
    while (!this.stopSlide) {
      this.moveRight();
      this.change = false;
      this.change2 = true;
      await this.delay(5000); // 5-second delay between slides
    }
  }
    delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }


    moveRight(): void {
      this.change = true;
      this.change2 = false;
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
