import CurrencyExchnage from "../assets/images/myWorks/monobankAPI.png";
import Calculator from "../assets/images/myWorks/calculator.png";
import TravelAgency from "../assets/images/myWorks/travelAgency.png";
import mobApp from "../assets/images/myWorks/mobApp.png";
import ToDoList from "../assets/images/myWorks/todoList.png";
import linkedinSocialImage from '../assets/images/icons/linkedin-logo.svg'
import githubSocialImage from '../assets/images/icons/github-sign.svg'
import facebookSocialImage from '../assets/images/icons/facebook-app-logo.svg'
import teamsSocialImage from '../assets/images/icons/teams.svg'
import XSocialImage from '../assets/images/icons/x.svg'
import facebookWhSocialImage from '../assets/images/icons/facebook-app-logo_white.svg'
import linkedinWHWhSocialImage from '../assets/images/icons/linkedin-logo-white.svg'

export let socialLinks = [
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/romanna-semenyshyn/',
        isIcon: false,

    },

    {
        name: 'Github',
        link: 'https://github.com/rosemdev/',
        isIcon: false,

    },

    {
        name: 'Facebook',
        link: 'https://www.facebook.com/miss.annamor',
        isIcon: false,

    }
];

export let socialIconsLinks = [
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/romanna-semenyshyn/',
        isIcon: true,
        src: linkedinSocialImage

    },

    {
        name: 'Github',
        link: 'https://github.com/rosemdev/',
        isIcon: true,
        src: githubSocialImage


    },

    {
        name: 'Facebook',
        link: 'https://www.facebook.com/miss.annamor',
        isIcon: true,
        src: facebookSocialImage

    }
];

export let socialShareNetworks = [
    {
        network: 'linkedin',
        isIcon: true,
        src: linkedinWHWhSocialImage

    },
    {
        network: 'facebook',
        isIcon: true,
        src: facebookWhSocialImage

    },
    {
        network: 'teams',
        isIcon: true,
        src: teamsSocialImage

    },
    {
        network: 'X',
        isIcon: true,
        src: XSocialImage

    }
];

export let descriptions = [
    {
        id: '0001',
        type: 'webtool',
        name: 'Currency Exchnage',
        imageSource: CurrencyExchnage,
        moreLink: '',
        siteLink: 'https://rosem-currency-exchange.netlify.app',
        text: "It is simple and easy app to convert money for popular currencies using Monobank API, the most powerful bank in Ukraine."
    },
    {
        id: '0002',
        type: 'webtool',
        name: 'Calculator',
        imageSource: Calculator,
        moreLink: '',
        siteLink: 'https://rosem-calculator.netlify.app',
        text: "At first it should have been an easy calculator, but later I decided to make it more complicated and almost lost my mind with how much it is difficult to write a calculator."
    },
    {
        id: '0003',
        type: 'webtool',
        name: 'ToDo List',
        imageSource: ToDoList,
        moreLink: '',
        siteLink: 'https://rosemdev.github.io/To-do-List/',
        text: "This is my the first project after learning the JavaScript language. So it has maybe not super cool design, but it's working well and performs its function. Also, It could 'remember' your tasks and redisplay after a long break. So follow the link below to check it out."
    },

    {
        id: '0004',
        type: 'landing page',
        name: 'Travel Agency',
        imageSource: TravelAgency,
        moreLink: '',
        siteLink: 'https://rosemdev.github.io/travelAgency/',
        text: "This is a landing page for a travel agency. It may seem to be not finished but this is a result of a little course in Udemy. In this project, I used Webpack, PostCsss and ES6 and some library for the scroll on reveal.",
    },

    {
        id: '0005',
        type: 'landing page',
        name: 'Mob app',
        imageSource: mobApp,
        moreLink: '',
        siteLink: 'https://rosemdev.github.io/mobapp/',
        text: "There is a most beautiful landing page I have created. I love the page like this and my site has a similar playing with colors. I think the site should be bright, memorized and gorgeous. This is a good example to reach such attributes."
    },
];


export let cards = [
    {
        stage: '01',
        name: 'requirements collection',
        description: 'analysis of input data, discussions of the technologies, determine the pros and cons, creating a prototype'
    },

    {
        stage: '02',
        name: 'development',
        description: 'transforming of the documentations above - to the real result that can be seen, client agreement'
    },

    {
        stage: '03',
        name: 'testing',
        description: 'transforming the real result into a perfect one, client agreement, closing the project or maintaining features'
    },
];
