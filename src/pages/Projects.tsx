import React from 'react';
import {projects} from "../helpers/projectsList";
import Project from "../components/Project";
import {useAppSelector} from "../utils/useRedux";

const Projects = () => {

    const {language} = useAppSelector(state => state.language);

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">
                    {language === 'ru' ? 'Проекты' : 'Projects'}
                </h2>
                <ul className="projects">
                    {projects.map(v => <Project key={v.slug} project={v}/>)}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
