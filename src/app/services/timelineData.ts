import {jobItemType} from "../app.types";

export const timelinedata: jobItemType[] = [
    {
      company: 'Plume',
      location: 'Palo Alto, CA',
      jobTitle: 'Lead Front End Developer',
      start: '2018',
      end: '2024',
      details: [
        'Development of multiple B2B applications to support SAS network optimization.',
        'Created complex visualizations, controls and features in Angular and React',
        'Drove adoption of standards and methods to optimize development process.',
        'Design, develop and maintain network operations center used by global telecom companies.',
        'Work across internal teams to define and create features and products. (API/Product/Design/QA)',
        'Oversaw growth of team from 1 to 12+ members; creating a high performance team.',
      ],
      screenshots: [
        { fileName:'assets/img/plume1.png',
          description:'Realtime network topology via socket, rendered with D3 as a force graph.'
        },
        { fileName:'assets/img/plume2.png',
          description:'Reconfigurable, interactive health check tool used by technicians.'
        },
        { fileName:'assets/img/plume3.png',
          description:'Detailed time domain graphs driven by graphQL and hardware abstraction APIs.'
        },
        { fileName:'assets/img/plume4.png',
          description:'Visual diagnostic tools for technicians to optimize network locations.'
        },
        { fileName:'assets/img/plume8.png',
          description:'Timeline data via REST reports specific metrics over time.'
        },
        { fileName:'assets/img/plume9.png',
          description:'Integrated Dashboard latched by user permissions, used by T1 at customer locations.'
        }
      ]
    },
    {
      company: 'AgileOne',
      jobTitle: 'Lead Front End Developer',
      location: 'Sunnyvale, CA',
      start: '2016',
      end: '2018',
      details: [
        'Developed customer facing SAAS marketing application',
        'Architect stack and structure for complex Angular Material web applications',
        'Integrate third party components for ui, security and visualization (D3)',
        'Resolve tickets with legacy code base during upgrade cycle',
        'Build team of front end developers, and mentor junior developers'

      ],
      screenshots: [
        { fileName:'assets/img/a1-1.png',
          description:'File system for server side marketing campaigns'
        },
        { fileName:'assets/img/a1-2.png',
          description:'Marketing campaign segment generator for end users'
        },
        { fileName:'assets/img/a1-3.png',
          description:'Web container designer for end users to lay out advertising assets'
        },
        { fileName:'assets/img/a1-4.png',
          description:'SQL query builder for marketers to create targeting rules'
        }
      ]
    },
    {
      company: 'Badgeville',
      jobTitle: 'Front End Developer',
      location: 'Redwood City, CA',
      start: '2015',
      end: '2016',
      details: [
        'Developed web applications for SAAS gamification platform',
        'Migrated legacy code from PHP stack to Angular with bootstrap',
        'Integrated Kendo chart library for analytic modules',
        'Developed complex user facing control panel components',
        'Mentored junior team members',
      ],
      screenshots: [
        { fileName:'assets/img/bv0.jpg',
          description:'Gamification design wizard for end users to configure rules and rewards'
        },
        { fileName:'assets/img/bv1.jpg',
          description:'API driven tree component used to configure game settings.'
        },
        { fileName:'assets/img/bv2.jpg',
          description:'Reconfigurable dashboards enable selecting of over time data sets',
        },
        { fileName:'assets/img/bv3.jpg',
          description:'Complex multidimensional charting across reconfigurable metrics'
        }

      ]
    },
  {
    company: 'Contracts',
    jobTitle: 'IOT Developer',
    location: 'Denver, CO',
    start: '2010',
    end: '2014',
    details: [
      'Hardware prototyping, embedded development, responsive web design',
      'Embedded linux development, industrial control',
      'Integration of realtime data to video overlay for sports broadcast',
      'Internet TV development for hospitality vertical'
    ],
    screenshots: [
      { fileName:'assets/img/adrGarage.png',
        description:'Graphics Generation for Live Sports Broadcast'
      },
      { fileName:'assets/img/beerlog.png',
        description:'Beerlog: Keg Flow and Status Monitoring'
      },
      { fileName:'assets/img/simulcare.png',
        description:'Simulcare II: Mobile Controlled Therapy Device'
      },
      { fileName:'assets/img/roomlinx.png',
        description:'Roomlinx: Internet and POS integrated internet TV.'
      },

    ]
  }
  ];
