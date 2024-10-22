import { Component } from '@angular/core';
import {timelineData } from "../services/timelineData";
import {jobItemType, screenshotType} from "../app.types";
import {JsonPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {SlideModalComponent} from "../slide-modal/slide-modal.component";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    JsonPipe,
    SlideModalComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})

export class TimelineComponent {
  timeline = timelineData;
  showModal:boolean= false;
  showScreen:screenshotType = {};
  colorLUT: string[] = ['#206080','#208060','#806020','#802060'];

  selectItem(item:jobItemType) {
    item.selected=!item.selected;
  }

  modalClose(action: any) {
    this.showModal=false;
    console.log('modalClose');
  }

  onEvent(event:Event, item:screenshotType) {
    this.showModal=true;
    this.showScreen= { ...item, ...{company:item.company }};
    console.log('showScreen: ',this.showScreen);

    event.stopPropagation();
  }
}
