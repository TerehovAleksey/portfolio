import React from 'react';
import gh from "../assets/img/icons/gitHub-black.svg";

interface BtnGitHubProps {
    link: string;
}

const BtnGitHub = (props: BtnGitHubProps) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gh} alt=""/>
            GitHub repo
        </a>
    );
};

export default BtnGitHub;
