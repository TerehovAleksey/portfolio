import {createSlice} from "@reduxjs/toolkit";
import getUserLocale from "get-user-locale";

let lang = localStorage.getItem('lang');
if (lang === null) {
    lang = getUserLocale();
}

type LanguageState = {
    language: 'en' | 'ru';
};

const initialState: LanguageState = {
    language: lang?.includes('ru') ? 'ru' : 'en'
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            localStorage.setItem('lang', action.payload);
            state.language = action.payload
        }
    }
});

export type {LanguageState}
export const {setLanguage} = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
