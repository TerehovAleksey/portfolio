import React, {useEffect} from 'react';
import sun from "../assets/img/icons/sun.svg";
import moon from "../assets/img/icons/moon.svg";
import {useLocalStorage} from "../utils/useLocalStorage";
import detectDarkMode from "../utils/detectDarkMode";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const isDarkTheme = event.matches;
                setDarkMode(isDarkTheme);
            });
    });

    const toggleDarkMode = () => {
        setDarkMode(current => !current);
    }

    return (
        <button onClick={toggleDarkMode} className={darkMode ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn"}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

export default BtnDarkMode;
