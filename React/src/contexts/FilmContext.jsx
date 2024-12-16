import React, { createContext, useState, useContext } from 'react';

const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [selectedFilmId, setSelectedFilmId] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    return (
        <FilmContext.Provider value={{ selectedFilmId, setSelectedFilmId, isLoading, setIsLoading }}>
            {children}
        </FilmContext.Provider>
    );
};

export const useFilmContext = () => {
    return useContext(FilmContext);
};
