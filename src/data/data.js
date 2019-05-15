import TravelAgency from "../assets/images/myWorks/travelAgency.png";
import mobApp from "../assets/images/myWorks/mobApp.png";
import ToDoList from "../assets/images/myWorks/todoList.png";
import linkedinSocialImage from '../assets/images/icons/linkedin-logo.svg'
import githubSocialImage from '../assets/images/icons/github-sign.svg'
import facebookSocialImage from '../assets/images/icons/facebook-app-logo.svg'
import skypeSocialImage from '../assets/images/icons/skype-symbol.svg'
import twitterSocialImage from '../assets/images/icons/twitter-sign.svg'
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
        network: 'skype',
        isIcon: true,
        src: skypeSocialImage

    },
    {
        network: 'twitter',
        isIcon: true,
        src: twitterSocialImage

    }
];

export let descriptions = [
    {
        id: '0001',
        type: 'webtool',
        name: 'ToDo List',
        imageSource: ToDoList,
        moreLink: '',
        siteLink: 'https://rosemdev.github.io/To-do-List/',
        text: "This is my a first project after learning the Java Script language. So it have my not super cool design, but it's working well and performs its function. Also It could 'remember' your tasks and redisplay after long break. So follow the link" +
            " bellow to check it out."
    },

    {
        id: '0002',
        type: 'landing page',
        name: 'Travel Agency',
        imageSource: TravelAgency,
        moreLink: '',
        siteLink: 'https://rosemdev.github.io/travelAgency/',
        text: "This is a landing page for a travel agency. It may seem to be not finished but this is a result of a little course in Udemy. In this project I used Webpack, PostCsss and ES6 and some library for scroll on reveal.",
    },

    {
        id: '0003',
        type: 'landing page',
        name: 'Mob app',
        imageSource: mobApp,
        moreLink: '',
        siteLink: 'https://rosemdev.github.io/mobapp/',
        text: "There is a most beautiful landing page I have created. I love the page like this and the my site have a similar playing with colors. I think the site should be bright, memorized and gorgeous. This is a good example to reach such attributes."
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

export let aboutMyself = {
    name: 'Romanna Semenyshyn',
    nickname: 'rosem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

};
