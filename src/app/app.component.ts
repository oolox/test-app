import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';


  timeline: any = [
    {
      company: 'Plume',
      start: '2018',
      end: '2024'

    },
    {
      company: 'AgileOne',
      start: '2016',
      end: '2018'
    },
    {
      company: 'Badgeville',
      start: '2015',
      end: '2016'
    }
  ]


}
