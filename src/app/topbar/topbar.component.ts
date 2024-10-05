import {Component, Input, Output,EventEmitter } from '@angular/core';
import {CommonModule} from "@angular/common";
import {menuItem} from '../app.types';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})


export class TopbarComponent {
  @Output() menuSelect = new EventEmitter<string>();

   menuItems: menuItem[] = [
     {
       label: 'skills',
       action: 'skills',
       selected: true
     },
    {
      label: 'experience',
      action: 'experience',
      selected: true
    },
    {
      label: 'email',
      action: 'email'
    },
    {
      label: 'resume',
      action: 'resume'
    }
  ];

  topbarClick(item: menuItem) {
    this.menuItems.forEach( (item:menuItem) => { item.selected=false })
    item.selected = true;
    this.menuSelect.emit(item.action);
  }

}
