import React from 'react';
import {NavLink} from "react-router-dom";
import {IProjectItem} from "../interfaces/IProjectItem";

interface ProjectProps{
    project: IProjectItem
    index: number
}

const Project = (props: ProjectProps) => {
    return (
        <li className="project">
            <NavLink to={`/project/${props.index}`}>
                <img src={props.project.img} alt={props.project.title} className="project__img"/>
                <h3 className="project__title">{props.project.title}</h3>
            </NavLink>
        </li>
    );
};

export default Project;
