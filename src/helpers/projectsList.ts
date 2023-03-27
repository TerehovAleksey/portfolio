import webshop from "../assets/projects/webshop.png";
import webshop1 from "../assets/projects/webshop-01.png";
import webshop2 from "../assets/projects/webshop-02.png";
import webshop3 from "../assets/projects/webshop-03.png";
import {IProjectItem} from "../interfaces/IProjectItem";

const projects: IProjectItem[] = [
    {
        title: 'Web Shop',
        skills: 'ASP NET Core MVC, MSSQL, EntityFramework Core',
        img: webshop,
        imgBig: [webshop1, webshop2, webshop3],
        gitHubLink: 'https://github.com/TerehovAleksey/WebShop',
        description_en: 'A training project that was created as part of the C#, ASP.NET Core Developer course on the Geekbrains educational platform in 2018.',
        description_ru: 'Учебный проект, который создавался в рамках обучения на курсе C#, ASP.NET Core Developer на образовательной платформе Geekbrains в 2018 году.'
    },
]

export {projects};
