import React from 'react';
import {useAppSelector} from "../utils/useRedux";

const Header = () => {

    const {language} = useAppSelector(state => state.language);

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        {language === 'en' ? 'Hi, my name is ' : 'Привет, меня зовут '}
                        <em>
                            {language === 'en' ? 'Aleksey' : 'Алексей'}
                        </em>
                    </strong>
                    <br/>
                    {language === 'en' ? 'a fullstack developer' : 'fullstack-разработчик'}
                </h1>
                <div className="header__text">
                    <p>
                        {language === 'en' ? 'with passion for learning and creating.' : 'со стремнением к изучению и созданию.'}
                    </p>
                </div>
                <a href={`https://terehovaleksey.github.io/?lang=${language}`} className="btn">
                    {language === 'en' ? 'My CV' : 'Резюме'}
                </a>
            </div>
        </header>
    );
};

export default Header;
