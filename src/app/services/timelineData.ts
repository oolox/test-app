import {jobItemType} from "../app.types";

export const titlestr = 'Paul Cousineau';



export const timelinedata: jobItemType[] = [
    {
      company: 'Plume',
      location: 'Palo Alto, CA',
      jobTitle: 'Lead Front End Developer',
      start: '2018',
      end: '2024',
      screenshots: [
        { fileName:'assets/img/plume1.png',
          description:'desc1'
        },
        { fileName:'assets/img/plume2.png',
          description:'desc2'
        },
        { fileName:'assets/img/plume3.png',
          description:'desc3'
        },
        { fileName:'assets/img/plume4.png',
          description:'desc4'
        },
        { fileName:'assets/img/plume5.png',
          description:'desc5'
        },
        { fileName:'assets/img/plume6.png',
          description:'desc6'
        },
        { fileName:'assets/img/plume7.png',
          description:'desc7'
        },
        { fileName:'assets/img/plume8.png',
          description:'desc8'
        },
        { fileName:'assets/img/plume9.png',
          description:'desc9'
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
        { fileName:'assets/img/a1-2.png',
          description:'desc1'
        },
        { fileName:'assets/img/a1-4.png',
          description:'desc1'
        },
        { fileName:'assets/img/a1-3.png',
          description:'desc1'
        },
        { fileName:'assets/img/a1-1.png',
          description:'desc1'
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
          description:'desc1'
        },
        { fileName:'assets/img/bv1.jpg',
          description:'desc1'
        },
        { fileName:'assets/img/bv2.jpg',
          description:'desc1'
        },
        { fileName:'assets/img/bv3.jpg',
          description:'desc1'
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
