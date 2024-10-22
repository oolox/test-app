import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {screenshotType} from "../app.types";

@Component({
  selector: 'slide-modal',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf
  ],
  templateUrl: './slide-modal.component.html',
  styleUrl: './slide-modal.component.scss'
})

export class SlideModalComponent implements  OnChanges {
  @Input() screen:screenshotType = {};
  @Output() close = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGE:', this.screen);
  }

  closeModal(){
    this.close.emit();
  }

}
