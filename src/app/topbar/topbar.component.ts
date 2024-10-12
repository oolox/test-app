import {Component, Output, EventEmitter, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {menuItem, screenName} from '../app.types';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})

export class TopbarComponent {
  @Output() menuSelect = new EventEmitter<screenName>();
  @Input() selected:screenName = 'OVERVIEW';

  menuItems: menuItem[] = [
    {
      label: 'overview',
      action: 'OVERVIEW',
      selected: this.selected === 'OVERVIEW'
    },
    {
      label: 'skills',
      action: 'SKILLS',
      selected: this.selected === 'SKILLS'
    },
    {
      label: 'experience',
      action: 'TIMELINE',
      selected: this.selected === 'TIMELINE'
    }
  ];

  topbarClick(item: menuItem) {
    this.menuItems.forEach((item: menuItem) => {
      item.selected = false
    })
    item.selected = true;
    this.menuSelect.emit(item.action);
  }
}
