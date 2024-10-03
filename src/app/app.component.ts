import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {jobItemType} from "./app.types";
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

  selectItem(item:jobItemType) {
    item.selected=!item.selected;
    console.log('selectItem: ',item);
  }




}


