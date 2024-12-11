import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieSingle({ onMovieLoaded }) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Errore nel recupero del film');
                }
                return response.json();
            })
            .then((data) => {
                setMovie(data);
                onMovieLoaded(data);
            })
            .catch((error) => console.error(error));
    }, [id, onMovieLoaded]);

    return null;
}

export default MovieSingle;
