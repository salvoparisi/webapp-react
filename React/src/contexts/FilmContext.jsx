import React, { createContext, useState, useContext } from 'react';

const FilmContext = createContext();

export const FilmProvider = ({ children }) => {
    const [selectedFilmId, setSelectedFilmId] = useState(null);

    return (
        <FilmContext.Provider value={{ selectedFilmId, setSelectedFilmId }}>
            {children}
        </FilmContext.Provider>
    );
};

export const useFilmContext = () => {
    return useContext(FilmContext);
};
