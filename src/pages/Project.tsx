import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";
import BtnGitHub from "../components/BtnGitHub";
import {useAppSelector} from "../utils/useRedux";
import Carousel from "nuka-carousel";

const Project = () => {

    const {id} = useParams();
    const {language} = useAppSelector(state => state.language);
    const [project, setProject] = useState(projects[0]);

    useEffect(() => {
        const p = projects.find(p => p.slug === id);
        if (p) {
            setProject(p);
        }
    }, [id]);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <Carousel adaptiveHeight={false} autoplay={true} className="project-details__cover">
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
