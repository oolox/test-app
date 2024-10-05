import { Component } from '@angular/core';
import {timelinedata } from "../services/timelineData";
import {jobItemType, screenshotType} from "../app.types";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  timeline = timelinedata;
  showModal:boolean= false;
  showScreen:screenshotType | null= null;

  selectItem(item:jobItemType) {
    item.selected=!item.selected;
  }

  onEvent(event:Event, item:screenshotType) {
    this.showModal=true;
    this.showScreen= item;
    event.stopPropagation();
  }
}
