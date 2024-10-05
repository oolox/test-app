import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {jobItemType, menuItem, screenshotType} from "./app.types";
import {timelinedata,titlestr} from "./services/timelineData";
import {TopbarComponent} from "./topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopbarComponent],
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

  menuSelect(action: string) {
    console.log("menuSelect: ",action);
  }

  onEvent(event:Event, item:screenshotType) {
    this.showModal=true;
    this.showScreen= item;
    event.stopPropagation();
  }

}


