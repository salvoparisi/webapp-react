import React, { useState } from 'react';
import MovieList from '../components/MovieList.jsx';
import MovieReview from '../components/MovieReview.jsx';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    const handleMoviesLoaded = (movieData) => {
        setMovie(movieData);
    };

    const handleReviewsLoaded = (reviewsData) => {
        setReviews(reviewsData);
    };


    return (
        <div className="container">
            <MovieList onMoviesLoaded={handleMoviesLoaded} />
            <MovieReview onReviewsLoaded={handleReviewsLoaded} />

            {movie ? (
                <>
                    <h1 className="mb-3">{movie[id - 1].title}</h1>
                    <p><strong>Director:</strong> {movie[id - 1].director}</p>
                    <p><strong>Genre:</strong> {movie[id - 1].genre}</p>
                    <p><strong>Abstract:</strong> {movie[id - 1].abstract}</p>
                    <p><strong>Release:</strong> {movie[id - 1].release_year}</p>

                    <h2>Reviews</h2>
                    {reviews.length > 0 ? (
                        <ul>
                            {reviews.map((review) => (
                                <li key={review.id}>
                                    <p>
                                        <strong>{review.name}</strong> ({review.vote}/5): {review.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nessuna recensione disponibile.</p>
                    )}
                </>
            ) : (
                <p>Caricamento film...</p>
            )}
            <NavLink to="/" className="btn btn-primary">Indietro</NavLink>
        </div>
    );
}

export default Movie;
