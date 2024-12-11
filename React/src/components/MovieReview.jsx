import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieReview({ onReviewsLoaded }) {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}/review`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Errore nel recupero delle recensioni');
                }
                return response.json();
            })
            .then((data) => {
                setReviews(data);
                onReviewsLoaded(data);
            })
    }, []);

    return null;
}

export default MovieReview;
