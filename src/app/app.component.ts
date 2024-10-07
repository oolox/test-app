import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule  } from '@angular/common';

import {TopbarComponent} from "./topbar/topbar.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {SkillsComponent} from "./skills/skills.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactComponent} from "./contact/contact.component";

import {screenName} from "./app.types";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    TopbarComponent, TimelineComponent, SkillsComponent, ResumeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  selectedPage:screenName= 'OVERVIEW';
  menuSelect(action: screenName) {
    this.selectedPage = action;
  }
}


