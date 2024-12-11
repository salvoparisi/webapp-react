import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function useMovieReview() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`http://localhost:3000/movies/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Errore nel recupero del film');
                }
                return response.json();
            })
            .then((data) => setMovie(data))
            .catch((err) => setError(err.message));

        fetch(`http://localhost:3000/movies/${id}/review`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Errore nel recupero delle recensioni');
                }
                return response.json();
            })
            .then((data) => setReviews(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    return { movie, reviews };
}
