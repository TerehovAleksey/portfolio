import React from 'react';
import {NavLink} from "react-router-dom";
import BtnDarkMode from "./BtnDarkMode";
import {useAppSelector} from "../utils/useRedux";
import BtnTranslate from "./BtnTranslate";

const activeLink = "nav-list__link nav-list__link--active";
const normalLink = "nav-list__link";

const Navbar = () => {

    const {language} = useAppSelector(state => state.language);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/portfolio" className="logo"><strong>Freelancer</strong> portfolio</NavLink>
                    <div className="nav-buttons">
                        <BtnDarkMode/>
                        <BtnTranslate/>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/portfolio" end className={props => props.isActive ? activeLink : normalLink}>
                                {language === 'ru' ? 'Главная' : 'Home'}
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/portfolio/projects"
                                     className={props => props.isActive ? activeLink : normalLink}>
                                {language === 'ru' ? 'Проекты' : 'Projects'}
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/portfolio/contacts"
                                     className={props => props.isActive ? activeLink : normalLink}>
                                {language === 'ru' ? 'Контакты' : 'Contacts'}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
