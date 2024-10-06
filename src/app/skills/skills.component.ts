import { Component, OnInit} from '@angular/core';
import { skillsItemType,filterType} from "../app.types";
import { skillsData } from "../services/skillsData";
import { CommonModule  } from '@angular/common';
import Chart from 'chart.js';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent implements OnInit {

  public chart: any;
  procData: any;

  colorLUT: string[] = ['#206080','#208060','#806020','#802060'];

  skillsFilter:filterType[] = [
    { label: 'Languages', color: this.colorLUT[0], enabled: true },
    { label: 'Integrations', color: this.colorLUT[1], enabled: true },
    { label: 'Development', color: this.colorLUT[2], enabled: true },
    { label: 'Tools', color: this.colorLUT[3], enabled: true },
  ]

  getLabels(): string[] {
    return this.procData.map((skill:skillsItemType) => skill.label);
  }

  getData(): number[] {
    return this.procData.map((skill:skillsItemType) => skill.rating);
  }

  getColors(): string[] {
    return this.procData.map((skill:skillsItemType) => {
        switch (skill.type) {
          case 'Languages': return this.colorLUT[0];
          case 'Integrations': return this.colorLUT[1];
          case 'Development': return this.colorLUT[2];
          default: return this.colorLUT[3];
        }
    });
  }

  filterSelect(filter:any) {
    filter.enabled=!filter.enabled
    this.updateData()
  }

  createChart(){
    if (this.chart)
    {
      this.chart.destroy();
    }

    const data = {
      labels: this.getLabels(),
      datasets: [
        {
          barThickness: 14,
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

  updateData(): void {
    console.log('updateData');
    this.procData=skillsData;

    this.procData=this.procData.filter( (skill:skillsItemType) => {
      const isEnabled = this.skillsFilter.find((el) => el.label===skill.type);
      return isEnabled?.enabled;
    })
    this.createChart();
  }

  ngOnInit() {
    this.updateData();
  }

  protected readonly skillsData = skillsData;
}
