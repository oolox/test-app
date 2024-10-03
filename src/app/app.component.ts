import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {jobItem} from "./app.types";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Paul Cousineau';


  timeline: jobItem[] = [
    {
      company: 'Plume',
      jobTitle: 'Lead Front End Developer',
      start: '2018',
      end: '2024'
    },
    {
      company: 'AgileOne',
      jobTitle: 'Lead Front End Developer',
      start: '2016',
      end: '2018'
    },
    {
      company: 'Badgeville',
      jobTitle: 'Front End Developer',
      start: '2015',
      end: '2016'
    }
  ];

  selectItem(item:jobItem) {
    item.selected=!item.selected;
    console.log('selectItem: ',item);
  }




}


