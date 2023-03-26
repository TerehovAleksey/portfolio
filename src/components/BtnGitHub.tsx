import React from 'react';
import gh from "../assets/img/icons/gitHub-black.svg";

type BtnGitHubProps = {
    link: string;
}

const BtnGitHub = ({link}: BtnGitHubProps) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gh} alt=""/>
            GitHub repo
        </a>
    );
};

export default BtnGitHub;
