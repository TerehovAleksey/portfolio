import React from 'react';
import {NavLink} from "react-router-dom";
import {IProjectItem} from "../interfaces/IProjectItem";

type ProjectProps = {
    project: IProjectItem
}

const Project = ({project}: ProjectProps) => {
    return (
        <li className="project">
            <NavLink to={`/portfolio/project/${project.slug}`}>
                <img src={project.img} alt={project.title} className="project__img"/>
                <h3 className="project__title">{project.title}</h3>
            </NavLink>
        </li>
    );
};

export default Project;
