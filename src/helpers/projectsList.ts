import project01 from "../assets/projects/01.jpg";
import project02 from "../assets/projects/02.jpg";
import project03 from "../assets/projects/03.jpg";
import project04 from "../assets/projects/04.jpg";
import project05 from "../assets/projects/05.jpg";
import project06 from "../assets/projects/06.jpg";
import project01Big from "../assets/projects/01-big.jpg";
import project02Big from "../assets/projects/02-big.jpg";
import project03Big from "../assets/projects/03-big.jpg";
import project04Big from "../assets/projects/04-big.jpg";
import project05Big from "../assets/projects/05-big.jpg";
import project06Big from "../assets/projects/06-big.jpg";
import {IProjectItem} from "../interfaces/IProjectItem";

const projects: IProjectItem[] = [
    {
        title: 'Gaming streaming portal',
        skills: 'React, Node.js, MongoDB',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com'
    },
    {
        title: 'Video service',
        skills: 'React, PHP, MySQL',
        img: project02,
        imgBig: project02Big,
        gitHubLink: 'https://github.com'
    },
    {
        title: 'Video portal',
        skills: 'Vue JS, Node.js, MongoDB',
        img: project03,
        imgBig: project03Big,
        gitHubLink: 'https://github.com'
    },
    {
        title: 'Dating app',
        skills: 'React Native',
        img: project04,
        imgBig: project04Big,
        gitHubLink: 'https://github.com'
    },
    {
        title: 'Landing',
        skills: 'HTML, SCSS, JS',
        img: project05,
        imgBig: project05Big,
        gitHubLink: 'https://github.com'
    },
    {
        title: 'Gaming community',
        skills: 'React, PHP, MySQL',
        img: project06,
        imgBig: project06Big,
        gitHubLink: 'https://github.com'
    },
]

export {projects};
