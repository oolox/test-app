import {Component, OnInit} from '@angular/core';
import {timelineData } from "../services/timelineData";
import { CommonModule  } from '@angular/common';
import {jobItemType, screenshotType, skillsItemType} from "../app.types";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})

export class LinksComponent implements OnInit {
  timeline = timelineData;
  screenshots: screenshotType[] = [];

  ngOnInit() {
    this.timeline.map( ( job:jobItemType) => {
      if (job.screenshots) {
        job.screenshots.map((screenshot: screenshotType) => {
          screenshot.company= job.company;
          this.screenshots= [...this.screenshots, screenshot];
        });
      }
    })
    console.log('screenshots:', this.screenshots);
  }

  onEvent(event:Event, item:screenshotType) {
    console.log('onEvent:',item);
    event.stopPropagation();
  }

  // this.procData.map((skill:skillsItemType) => skill.years);
}


