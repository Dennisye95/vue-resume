export default {
  main: {
    experiences: [{
      company: 'Evichat Inc.',
      title: 'Full Stack Web Developer',
      technologies: ['Ruby on Rails', 'Node.js', 'Electron', 'PostgreSQL', 'AWS'],
      date: {
        start: 'Jan 2018',
        end: 'Apr 2018'
      },
      location: 'Toronto, Canada',
      achievements: [
        'Actively implemented core features for an e-discovery tool that helps lawyers collect, consolidate, and present social media and messaging evidence',
        'Assisted with the implementation and testing of <b>NLP</b> powered <b>context-aware</b> search feature, resulting in our first place finish at the 2018 AI Legal Challenge',
        'Greatly improved data integrity and security, as well as enabled new features through major restructuring of the database schema using <b>Rails</b> migrations',
        'Engineered a scalable solution for retrieving SMS/MMS data from iPhone backups, including support for older generation iPhones and backups as large as <b>40GB</b>',
        'Built an admin panel with custom features, significantly improving development efficiency as well as client onboarding'
      ],
    }, {
      company: 'LUQL.IO',
      title: 'Co-Founder and Full Stack Developer',
      technologies: ['Django', 'React Native', 'PostgreSQL', 'GCP', 'Firebase', 'MobX'],
      date: {
        start: 'Sep 2016',
        end: 'Dec 2017'
      },
      location: 'Waterloo, Canada',
      achievements: [
        'Extensively engineered a market-ready product from scratch as a founding member of a startup that supports a platform for P2P tourism',
        'Designed and built database schema for the entire domain of the application',
        'Developed REST API and core endpoints using <b>Django</b> while following a <b>TDD</b> approach to reduce potential bugs and improve development efficiency',
        'Spearheaded development of the mobile application using <b>React Native</b> and <b>MobX</b>',
        'Migrated production data and refactored codebase to improve <b>performance</b> and better support <b>asynchronous</b> execution'
      ],
    }, {
      company: 'Equitable Life of Canada',
      title: 'Investment Analyst and Developer',
      technologies: ['Python', 'PostgreSQL', 'Flask', 'SQLAlchemy', 'pandas', 'matplotlib'],
      date: {
        start: 'Jan 2017',
        end: 'Aug 2017'
      },
      location: 'Waterloo, Canada',
      achievements: [
        'Developed analytical tools and systems as a core member of the Investment Quants team at a Canadian insurance company',
        'Created and streamlined data pipelines for essential day to day operations',
        'Built a tool using <b>VBA</b> that provides analytics on our security lending program, resulting in a decision to reallocate certain assets, significantly increasing profits',
        'Designed and implemented a curve fitting model using <b>SQLAlchemy</b> and <b>Scipy</b> for constructing yield curves, a crucial component for pricing fixed income securities',
        'Prototyped an interactive web interface for editing yield curves using <b>Flask</b>'
      ],
    }, {
      company: 'Imagine Communications Corp.',
      title: 'Software QA Analyst',
      date: {
        start: 'May 2016',
        end: 'Aug 2016'
      },
      location: 'Toronto, Canada',
      achievements: [
        'Rigorously tested a line of products that supports nearly half of the world\'s audio and video channels and empowers the media and broadcasting industry',
        'Automated functional and performance testing of API through <b>SoapUI</b>',
        'Wrote scripts and unit tests using <b>Groovy</b> to streamline the testing process'
      ]
    }
  ],
  education: [{
      company: 'University of Waterloo',
      title: 'Bachelor of Computing and Financial Management',
      date: {
        start: 'Sep 2013',
        end: 'Current'
      }
    }]
  },
  sidebar: {
    identity: {
      name: 'Dennis Ye',
      roles: [
        'Software Developer',
        'Data Engineer'
      ]
    },
    contacts: [{
    name: 'Phone',
      faClass: 'fa fa-phone',
      display: '647 669 0518',
      link: 'tel:+16476690518'
    }, {
      name: 'Email',
      faClass: 'fa fa-envelope',
      display: 'dennisye95@gmail.com',
      link: 'mailto:dennisye95@gmail.com'
    }, {
      name: 'LinkedIn',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/dennisye95',
      link: 'https://www.linkedin.com/in/dennisye95'
    }, {
      name: 'Github',
      faClass: 'fa fa-github',
      display: 'github.com/Dennisye95',
      link: 'https://github.com/Dennisye95'
    }],
    languages: [{
      skill: 'Python',
      proficiency: 9
    }, {
      skill: 'Javascript',
      proficiency: 9
    }, {
      skill: 'HTML/CSS',
      proficiency: 10
    }, {
      skill: 'Ruby',
      proficiency: 8
    }, {
      skill: 'C/C++',
      proficiency: 7
    }, {
      skill: 'Java',
      proficiency: 6
    }, {
      skill: 'MATLAB',
      proficiency: 7
    }, {
      skill: 'R',
      proficiency: 6
    }],
    sections: [{
      title: 'Frameworks',
      items: [
        'Ruby on Rails',
        'Django',
        'Express',
        'React',
        'React Native',
        'Redux',
        'MobX',
        'Vue.js',
        'Electron',
        'Flask'
      ]
    }, {
      title: 'Libraries',
      items: [
        'jQuery',
        'Bootstrap',
        'SQLAlchemy',
        'psycopg2',
        'pandas',
        'numpy',
        'nltk',
        'matplotlib',
        'scipy',
        'spacy'
      ]
    }, {
      title: 'Databases',
      items: [
        'PostgreSQL',
        'MongoDB',
        'MySQL'
      ]
    }, {
      title: 'Tools',
      items: [
        'AWS',
        'GCP',
        'Firebase',
        'Node.js',
        'Git',
        'Vim',
        'Unix',
        'Webpack'
      ]
    }, {
      title: 'Passions',
      items: [
        'Music',
        'Dance',
        'Travel'
      ]
    }]
  }
}

