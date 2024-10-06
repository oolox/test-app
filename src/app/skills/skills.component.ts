import { Component, OnInit} from '@angular/core';
import { skillsItemType} from "../app.types";
import { skillsData } from "../services/skillsData";

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
  procData: any;

  getLabels(): string[] {
    return this.procData.map((skill:skillsItemType) => skill.label);
  }

  getData(): number[] {
    return this.procData.map((skill:skillsItemType) => skill.rating);
  }

  getColors(): string[] {
    const colorLUT: string[] = [ '#204080','#208040','#804020','#802040' ];
    return this.procData.map((skill:skillsItemType) => {
        switch (skill.type) {
          case 'Languages': return colorLUT[0];
          case 'Integrations': return colorLUT[1];
          case 'Skills': return colorLUT[2];
          default: return colorLUT[0];
        }
    });
  }

  createChart(){
    console.log(this.getColors());
    const data = {
      labels: this.getLabels(),
      datasets: [
        {
          barThickness: 18,
          data: this.getData(),
          backgroundColor: this.getColors(),
        },
      ]
    }

    this.chart = new Chart("skillsChart", {
      type: 'horizontalBar',

      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
         xAxes: [{
            display: true,
            ticks: {
              suggestedMin: 0,
              beginAtZero: true,
              max: 10
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      },


    });
  }

  ngOnInit() {
    this.procData=skillsData;
    this.createChart();
  }

}
