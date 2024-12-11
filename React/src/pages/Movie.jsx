import React, { useEffect, useState } from 'react';
import MovieSingle from '../components/MovieSingle.jsx';
import MovieReview from '../components/MovieReview.jsx';
import { NavLink } from 'react-router-dom';

function Movie() {
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    const handleMovieLoaded = (movieData) => {
        setMovie(movieData);
    };

    const handleReviewsLoaded = (reviewsData) => {
        setReviews(reviewsData);
    };

    return (
        <div className="container">
            <MovieSingle onMovieLoaded={handleMovieLoaded} />
            <MovieReview onReviewsLoaded={handleReviewsLoaded} />

            {movie ? (
                <>
                    <h1 className="mb-3">{movie[0].title}</h1>
                    <p><strong>Director:</strong> {movie[0].director}</p>
                    <p><strong>Genre:</strong> {movie[0].genre}</p>
                    <p><strong>Abstract:</strong> {movie[0].abstract}</p>
                    <p><strong>Release:</strong> {movie[0].release_year}</p>

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
