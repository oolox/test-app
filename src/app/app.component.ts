import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {jobItemType, screenshotType} from "./app.types";
import {timelinedata,titlestr} from "./services/timelineData";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {


  timeline = timelinedata;
  title:string= titlestr;
  showModal:boolean= false;
  showScreen:screenshotType | null= null;

  selectItem(item:jobItemType) {
    item.selected=!item.selected;
  }

  onEvent(event:Event, item:screenshotType) {
    console.log('screenshotType: ',item);
    this.showModal=true;
    this.showScreen= item;
    event.stopPropagation();
  }

}


