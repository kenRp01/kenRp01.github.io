import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_bike.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.youtube.com/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'angularChat.jpeg',
    title: 'AngularChat',
    info: '',
    info2: '',
    url: 'https://angular-chat-dcc8f.web.app/',
    repo: 'https://angular-chat-dcc8f.web.app/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-app.jpeg',
    title: 'todo-app',
    info: '',
    info2: '',
    url: 'https://todo-demo-app-angular-68704.web.app/',
    repo: 'https://todo-demo-app-angular-68704.web.app/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'login-app.jpeg',
    title: 'login-app',
    info: '',
    info2: '',
    url: 'https://login-app-c2794.web.app/login',
    repo: 'https://login-app-c2794.web.app/login', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/APO14648835',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kenRp01',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
