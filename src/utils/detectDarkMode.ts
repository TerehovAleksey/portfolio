//Проверка темной темы на уровне системных настроек
const detectDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export default detectDarkMode;
