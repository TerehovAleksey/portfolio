import React, {useState, useEffect} from 'react';

function getStorageValue<T>(key: string, defaultValue: T) : T{
    const saved = localStorage.getItem(key);
    if (saved) {
        const initial: T = JSON.parse(saved);
        return initial || defaultValue;
    }
    return defaultValue;
}

function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export {useLocalStorage};
