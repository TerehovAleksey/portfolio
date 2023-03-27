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
import {IProjectItem} from "../interfaces/IProjectItem";

const projects: IProjectItem[] = [
    {
        title: 'Micro Blog',
        skills: 'Blazor, MSSQL, EF Core, WebAPI, Docker',
        img: blog,
        imgBig: [blog1, blog2],
        gitHubLink: 'https://github.com/TerehovAleksey/MicroBlog',
        description_en: 'Small personal blog',
        description_ru: 'Небольшой личный блог'
    },
    {
        title: 'My Wallet',
        skills: '.NET MAUI, WebAPI, MSSQL',
        img: wallet,
        imgBig: [wallet1, wallet2],
        gitHubLink: 'https://github.com/TerehovAleksey/MyWallet',
        description_en: 'Wallet app (GooglePlay) clone.',
        description_ru: 'Клон приложения Wallet (на GooglePlay).'
    },
    {
        title: 'Web Shop',
        skills: 'ASP NET Core MVC, MSSQL, EntityFramework Core',
        img: shop,
        imgBig: [shop1, shop2, shop3],
        gitHubLink: 'https://github.com/TerehovAleksey/WebShop',
        description_en: 'A training project that was created as part of the C#, ASP.NET Core Developer course on the Geekbrains educational platform in 2018.',
        description_ru: 'Учебный проект, который создавался в рамках обучения на курсе C#, ASP.NET Core Developer на образовательной платформе Geekbrains в 2018 году.'
    },
]

export {projects};
