import React from 'react';
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";
import BtnGitHub from "../components/BtnGitHub";
import {useAppSelector} from "../utils/useRedux";
import Carousel from "nuka-carousel";

const Project = () => {

    const {id} = useParams();
    const project = projects[Number.parseInt(id ? id : "0")];
    const {language} = useAppSelector(state => state.language);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <Carousel autoplay className="project-details__cover">
                        {
                            project.imgBig.map((i, ind) =>
                                <img key={ind} src={i} alt="" className=""/>)
                        }
                    </Carousel>
                    <div className="project-details__desc">
                        <p className="project-details__skills">{project.skills}</p>
                        <p className="project-details__description">
                            {language === 'ru' ? project.description_ru : project.description_en}
                        </p>
                    </div>
                    {project.gitHubLink && (<BtnGitHub link={project.gitHubLink}/>)}
                </div>
            </div>
        </main>
    )
};

export default Project;
