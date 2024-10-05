import { Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  public chart: any;

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
        datasets: [
          {
            label: "Sales",
            data: [20,30,40,50],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: [50,30,40,20],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

  ngOnInit() {
    console.log('CHART');
    this.createChart();
  }

}
