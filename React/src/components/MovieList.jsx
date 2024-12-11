import React, { useState, useEffect } from 'react';

function MovieList({ onMoviesLoaded }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Errore nella chiamata API');
                }
                return response.json();
            })
            .then((data) => {
                setMovies(data);
                onMoviesLoaded(data);
            })
    }, []);

    return null;
}

export default MovieList;
