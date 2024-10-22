import { Component, OnInit} from '@angular/core';
import { skillsItemType,filterType} from "../app.types";
import { skillsData } from "../services/skillsData";
import { CommonModule  } from '@angular/common';
import Chart from 'chart.js';
import {timelineData} from "../services/timelineData";

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

  altMetric:boolean=false;
  isSort:boolean=false;

  getLabels(): string[] {
    return this.procData.map((skill:skillsItemType) => skill.label);
  }

  getData(): number[] {
    if (this.altMetric) {
      return this.procData.map((skill:skillsItemType) => skill.years);
    }
    return this.procData.map((skill:skillsItemType) => skill.rating);
  }

  getTypeOrder(type:string):number
  {
    switch (type) {
      case 'Languages': return 1;
      case 'Integrations': return 2;
      case 'Development': return 3;
      default: return 4;
    }
  }

  sortData( data : skillsItemType[]): skillsItemType[] {
    if(this.altMetric) {
      data.sort( (a,b) => b.years - a.years);
      data.sort( (a,b) => this.getTypeOrder(a.type) - this.getTypeOrder(b.type));
    } else {
      data.sort( (a,b) => b.rating - a.rating);
      data.sort( (a,b) => this.getTypeOrder(a.type) - this.getTypeOrder(b.type));
    }
    return data;
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

  setFilter(filter:any) {
    filter.enabled=!filter.enabled
    this.updateData()
  }

  setMetric( isAltMetric:boolean): void {
    this.altMetric=isAltMetric;
    this.updateData()
  }

  setSort( sort:boolean) {
    this.isSort=sort;
    this.updateData();
  }

  createChart(){
    if (this.chart)
    {
      this.chart.destroy();
    }
    if (this.isSort) this.procData= this.sortData(this.procData);

    const data = {
      labels: this.getLabels(),
      datasets: [
        {
          barThickness: 10,
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

  protected readonly timeline = timelineData;
}
