import {Component, Input} from '@angular/core';
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
  @Input() value = 0;
  @Input() title: string = "";

   menuItems: menuItem[] = [
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
    console.log("clicked: ",item);
  }

}
