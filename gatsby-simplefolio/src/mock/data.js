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
    info: 'Angular学習初めにAngular,TypeScript+Firebaseで作成したチャットアプリ',
    info2:
      'Angular,TypeScript,Firebaseについて個人で学習しながら基本的なCRUD処理を行うアプリケーション',
    url: 'https://angular-chat-dcc8f.web.app/',
    repo: 'https://github.com/kenRp01/angular-chat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-app.jpeg',
    title: 'todo-app',
    info: 'Angular学習のため作成したtodoアプリ',
    info2: '',
    url: 'https://todo-demo-app-angular-68704.web.app/',
    repo: 'https://github.com/kenRp01/todo-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'login-app.jpeg',
    title: 'login-app',
    info:
      '社内のエンジニアにAngularを用いた開発を体験してもらうために簡易的に作成したログイン画面。AngularMaterialの学習にもなった。',
    info2: 'https://qiita.com/kenRp01/items/bc42fa1cdc766b75f842',
    url: 'https://login-app-c2794.web.app/login',
    repo: 'https://github.com/kenRp01/login-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: '',
  email: 'yqxxnaxr1109@gmail.com',
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
      name: 'search',
      url: 'https://qiita.com/kenRp01',
    },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
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
