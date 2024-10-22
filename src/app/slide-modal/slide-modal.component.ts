import {Component, EventEmitter, Input, Output} from '@angular/core';
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

export class SlideModalComponent {
  @Input() screen:screenshotType = {};
  @Output() close = new EventEmitter<any>();

  closeModal(){
    this.close.emit();
  }

}
