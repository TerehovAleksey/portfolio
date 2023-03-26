import React from 'react';
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";
import BtnGitHub from "../components/BtnGitHub";

const Project = () => {

    const {id} = useParams();
    const project = projects[Number.parseInt(id ? id : "0")];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.imgBig} alt="" className="project-details__cover"/>
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink && (<BtnGitHub link={project.gitHubLink}/>)}
                </div>
            </div>
        </main>
    )
};

export default Project;