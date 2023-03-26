import React from 'react';
import lang from "../assets/img/icons/translate.svg";
import globe from "../assets/img/icons/globe-americas.svg";
import {useAppDispatch, useAppSelector} from "../utils/useRedux";
import {setLanguage} from "../store/languageSlice";

const BtnTranslate = () => {

    const {language} = useAppSelector(state => state.language);
    const dispatch = useAppDispatch();

    const switchLang = () => {
        dispatch(setLanguage(language === 'en' ? 'ru' : 'en'));
    }

    return (
        <button onClick={switchLang}
                className={language !== 'en' ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn"}>
            <img src={globe} alt="translate" className="dark-mode-btn__icon"/>
            <img src={lang} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

export default BtnTranslate;
