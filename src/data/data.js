import TravelAgency from "../assets/images/myWorks/travelAgency.png";
import mobApp from "../assets/images/myWorks/mobApp.png";
import ToDoList from "../assets/images/myWorks/todoList.png";
import linkedinSocialImage from '../assets/images/icons/linkedin-logo.svg'
import githubSocialImage from '../assets/images/icons/github-sign.svg'
import facebookSocialImage from '../assets/images/icons/facebook-app-logo.svg'
import socials from '../assets/images/icons/socials.svg'

export let socialLinks = [
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/romanna-semenyshyn/',
        isIcon: false,

    },

    {
        name: 'Github',
        link: 'https://github.com/RomSem/',
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
        link: 'https://www.linkedin.com/in/romanna-semenyshyn/',
        isIcon: true,
        src: linkedinSocialImage

    },

    {
        link: 'https://github.com/RomSem/',
        isIcon: true,
        src: githubSocialImage


    },

    {
        link: 'https://www.facebook.com/miss.annamor',
        isIcon: true,
        src: facebookSocialImage

    }
];

export let socialShareNetworks = [
    {
        network: 'linkedin',
        isIcon: true,
        icon: `${socials}#linkedin`

    },

    {
        network: 'googleplus',
        isIcon: true,
        icon: `${socials}#googleplus`

    },

    {
        network: 'facebook',
        isIcon: true,
        icon: `${socials}#facebook`

    }
];

export let descriptions = [
    {
        id: '0001',
        type: 'Website',
        name: 'ToDo List',
        imageSource: ToDoList,
        moreLink: '',
        siteLink: 'https://romsem.github.io/travelAgency/',
        text: 'landing page about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem eest facere laudantium magnam maiores',
    },

    {
        id: '0002',
        type: 'landing page',
        name: 'Travel Agency',
        imageSource: TravelAgency,
        moreLink: '',
        siteLink: 'https://romsem.github.io/travelAgency/',
        text: 'landing page about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem eest facere laudantium magnam maiores',
    },

    {
        id: '0003',
        type: 'landing page',
        name: 'Mob app',
        imageSource: mobApp,
        moreLink: '',
        siteLink: 'https://romsem.github.io/mobapp/',
        text: 'landing page about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt dignissimos dolorem eest facere laudantium magnam maiores',
    },
];


export let cards = [
    {
        stage: '01',
        name: 'prototype',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },

    {
        stage: '02',
        name: 'development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },

    {
        stage: '03',
        name: 'testing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
];

export let aboutMyself = {
    name: 'Romanna Semenyshyn',
    nickname: 'rosem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

};
