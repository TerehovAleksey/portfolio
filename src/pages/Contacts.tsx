import React from 'react';
import {useAppSelector} from "../utils/useRedux";

const Contacts = () => {

    const {language} = useAppSelector(state => state.language);

    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">
                    {language === 'ru' ? 'Контакты' : 'Contacts'}
                </h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">
                            {language === 'ru' ? 'Адрес' : 'Location'}
                        </h2>
                        <p>
                            {language === 'ru' ? 'Минск, Беларусь' : 'Minsk, Belarus'}
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">
                            {language === 'ru' ? 'Телефон' : 'Phone'}
                        </h2>
                        <p><a href="tel:+375295565021">+375(29)556-50-21</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/TerehovAleksei">@TerehovAleksei</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:375295565021@yandex.ru">375295565021@yandex.ru</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
};

export default Contacts;
