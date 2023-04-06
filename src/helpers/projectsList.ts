import shop from "../assets/projects/webshop.png";
import shop1 from "../assets/projects/webshop-01.png";
import shop2 from "../assets/projects/webshop-02.png";
import shop3 from "../assets/projects/webshop-03.png";
import blog from "../assets/projects/microblog.png";
import blog1 from "../assets/projects/microblog-01.png";
import blog2 from "../assets/projects/microblog-02.png";
import wallet from "../assets/projects/my-wallet.png";
import wallet1 from "../assets/projects/my-wallet-01.png";
import wallet2 from "../assets/projects/my-wallet-02.png";
import courier from "../assets/projects/courier.png";
import courier1 from "../assets/projects/courier-01.png";
import courier2 from "../assets/projects/courier-02.png";
import courier3 from "../assets/projects/courier-03.png";
import portfolio from "../assets/projects/portfolio.png";
import portfolio1 from "../assets/projects/portfolio-01.png";
import portfolio2 from "../assets/projects/portfolio-02.png";
import cv from "../assets/projects/cv.png";
import cv1 from "../assets/projects/cv-01.png";
import cv2 from "../assets/projects/cv-02.png";
import {IProjectItem} from "../interfaces/IProjectItem";

const projects: IProjectItem[] = [
    {
        title: 'Portfolio',
        skills: 'Vite, React/Redux',
        img: portfolio,
        imgBig: [portfolio1, portfolio2],
        gitHubLink: 'https://github.com/TerehovAleksey/portfolio',
        description_en: 'You are on this site now)',
        description_ru: 'Вы сейчас на этом сайте)',
        slug: 'portfolio'
    },
    {
        title: 'CV',
        skills: 'Vite, React, Firebase, Bootstrap',
        img: cv,
        imgBig: [cv1, cv2],
        gitHubLink: 'https://github.com/TerehovAleksey/my-cv-react',
        description_en: 'Editable CV',
        description_ru: 'Резюме с возможностью редактирования',
        slug: 'sv'
    },
    {
        title: 'Courier',
        skills: 'Vite, React, Ant Design, Firebase',
        img: courier,
        imgBig: [courier1, courier2, courier3],
        gitHubLink: 'https://github.com/TerehovAleksey/courier-telegram',
        description_en: 'Delivery calculator for courier',
        description_ru: 'Калькулятор доставок для курьера',
        slug: 'courier'
    },
    {
        title: 'Micro Blog',
        skills: 'Blazor, MSSQL, EF Core, WebAPI, Docker',
        img: blog,
        imgBig: [blog1, blog2],
        gitHubLink: 'https://github.com/TerehovAleksey/MicroBlog',
        description_en: 'Small personal blog',
        description_ru: 'Небольшой личный блог',
        slug: 'blog'
    },
    {
        title: 'My Wallet',
        skills: '.NET MAUI, WebAPI, MSSQL',
        img: wallet,
        imgBig: [wallet1, wallet2],
        gitHubLink: 'https://github.com/TerehovAleksey/MyWallet',
        description_en: 'Wallet app (GooglePlay) clone.',
        description_ru: 'Клон приложения Wallet (на GooglePlay).',
        slug: 'wallet'
    },
    {
        title: 'Web Shop',
        skills: 'ASP NET Core MVC, MSSQL, EntityFramework Core',
        img: shop,
        imgBig: [shop1, shop2, shop3],
        gitHubLink: 'https://github.com/TerehovAleksey/WebShop',
        description_en: 'A training project that was created as part of the C#, ASP.NET Core Developer course on the Geekbrains educational platform in 2018.',
        description_ru: 'Учебный проект, который создавался в рамках обучения на курсе C#, ASP.NET Core Developer на образовательной платформе Geekbrains в 2018 году.',
        slug: 'shop'
    },
]

export {projects};
