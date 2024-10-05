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


    const data = {
      labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
        '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
      datasets: [
        {
          label: "Sales",
          data: [20,30,40,50],
          backgroundColor: 'blue'
        }
      ]
    }

    this.chart = new Chart("skillsChart", {
      type: 'horizontalBar',

      data: data,
      options: {
        aspectRatio:2.5,
        scales: {
         xAxes: [{
            display: true,
            ticks: {
              suggestedMin: 0,
              beginAtZero: true,
              max: 100
            }
          }]
        }

      }

    });
  }

  ngOnInit() {
    console.log('CHART');
    this.createChart();
  }

}
