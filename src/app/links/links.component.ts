import {Component, OnInit} from '@angular/core';
import {timelineData } from "../services/timelineData";
import { CommonModule  } from '@angular/common';
import {jobItemType, screenName, screenshotType} from "../app.types";
import {SlideModalComponent} from "../slide-modal/slide-modal.component";



@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, SlideModalComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})

export class LinksComponent implements OnInit {
  timeline = timelineData;
  screenshots: screenshotType[] = [];
  screenData: screenshotType= {};
  showModal: boolean = false;

  ngOnInit() {
    this.timeline.map( ( job:jobItemType) => {
      if (job.screenshots) {
        job.screenshots.map((screenshot: screenshotType) => {
          screenshot.company= job.company;
          this.screenshots= [...this.screenshots, screenshot];
        });
      }
    })
  }
  onEvent(event:Event, item:screenshotType) {
    this.screenData= item;
    this.showModal=true;
    event.stopPropagation();
  }
}


