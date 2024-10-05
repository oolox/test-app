import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule  } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {TopbarComponent} from "./topbar/topbar.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {SkillsComponent} from "./skills/skills.component";
import {ResumeComponent} from "./resume/resume.component";
import {EmailComponent} from "./email/email.component";

import {screenName} from "./app.types";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule,
    TopbarComponent, TimelineComponent, SkillsComponent, ResumeComponent, EmailComponent],
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


