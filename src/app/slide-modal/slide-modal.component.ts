import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {screenshotType} from "../app.types";

@Component({
  selector: 'slide-modal',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './slide-modal.component.html',
  styleUrl: './slide-modal.component.scss'
})



export class SlideModalComponent implements  OnChanges {
  @Input() screen:screenshotType = {};

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGE:', this.screen);
  }

}
