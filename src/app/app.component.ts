import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TopbarComponent} from "./topbar/topbar.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {screenName} from "./app.types";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopbarComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  selectedPage:screenName= 'TIMELINE';

  menuSelect(action: screenName) {
    console.log("app.menuSelect=> ",action);
    this.selectedPage = action;
  }


}


