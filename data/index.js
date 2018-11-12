export default {
  main: {
    experiences: [{
      company: 'Evichat Inc.',
      title: 'Full Stack Software Engineer',
      technologies: ['Ruby on Rails', 'Node.js', 'Electron', 'PostgreSQL', 'AWS'],
      date: {
        start: 'Jan 2018',
        end: 'Apr 2018'
      },
      location: 'Toronto, Canada',
      achievements: [
        'Implemented core features for an e-discovery tool that helps lawyers collect, consolidate, and present social media and messaging evidence',
        'Collected, prepared, and tested large datasets for the implementation of  the <b>NLP</b> powered <b>context-aware</b> search feature, resulting in our <b>first place</b> finish at the 2018 AI Legal Challenge',
        'Engineered a scalable solution for extracting SMS/MMS data from iPhone backups, including support for older phones and backups as large as <b>40GB</b>',
        'Restructed large parts of the database schema, greatly improving data integrity and security, as well as enabling new features',
        'Built an admin panel with custom features, providing analytics on users and support for technical and non-technical team members',
      ],
    }, {
      company: 'LUQL.IO',
      title: 'Co-Founder, Full Stack Engineer',
      technologies: ['Django', 'React Native', 'PostgreSQL', 'GCP', 'Firebase', 'MobX'],
      date: {
        start: 'Sept 2016',
        end: 'Dec 2017'
      },
      location: 'Waterloo, Canada',
      achievements: [
        'Engineered a market-ready travel app that allows users to connect with local tour guides at their desired destinations',
        'Designed and developed database schema, REST API, and core endpoints using <b>Django</b> while following a <b>TDD</b> approach',
        'Built core libraries for <b>error handling</b> and <b>data validation</b>',
        'Initiated development of mobile application using <b>React Native</b> and <b>MobX</b>',
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
        'Developed analytical tools, systems, and data pipelines that assisted with essential day to day operations at a Canadian insurance company',
        'Overhauled and improved the yield curve model, a crucial component for pricing fixed income securities, using <b>SQLAlchemy</b> and <b>Scipy</b>',
        'Designed, developed, and tested data pipeline and core processes for new bond fund, leading to one of the most successful fund launches',
        'Built a data analytics tool using <b>Python</b> and <b>SQL</b> on the security lending program, resulting in the reallocation of assets and increased profits',
      ]
    }],
    projects: [{
      title: 'Plannersist',
      technologies: ['Django', 'PostgreSQL', 'React', 'Redux', 'Semantic UI', 'Recharts'],
      description: 'Productivity tool for managing personal projects, tasks, and deadlines.',
    }, {
      title: 'Virtual Piano',
      technologies: ['Paper.js', 'Paperscript', 'Howler.js'],
      description: 'Interactive piano web app with animations and sounds.'
    }, {
      title: 'Pin Point',
      technologies: ['HTML/CSS', 'Javascript', 'jQuery'],
      description: 'Timing based browser game on a 2D grid with adjustable size and speed.'
    }]
  },
  sidebar: {
    identity: {
      name: 'Dennis Ye',
      roles: [
        'Software Engineer',
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
      name: 'Website',
      faClass: 'fa fa-link',
      display: 'www.dennisye.net',
      link: 'www.dennisye.net'
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
      skill: 'SQL',
      proficiency: 8
    }, {
      skill: 'R',
      proficiency: 8
    }, {
      skill: 'MATLAB',
      proficiency: 7
    }, {
      skill: 'C/C++',
      proficiency: 7
    }, {
      skill: 'Java',
      proficiency: 6
    }],
    sections: [{
      title: 'Frameworks',
      items: [
        'Django',
        'Ruby on Rails',
        'React',
        'React Native',
        'Redux',
        'Express',
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
        'Firebase',
        'GCP',
        'Git',
        'Heroku',
        'Node.js',
        'Unix',
        'Vim',
        'Webpack'
      ]
    }],
    education: {
      school: 'University of Waterloo',
      degree: 'Bachelor of Computing and Financial Management',
      date: 'Sept 2013 - Dec 2018',
    }
  }
}

