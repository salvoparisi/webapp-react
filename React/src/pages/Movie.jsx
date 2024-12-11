import React from 'react';
import { useMovieReview } from '../components/MovieReview.jsx';
import { NavLink } from 'react-router-dom';

function Movie() {
    const { movie, reviews } = useMovieReview();

    return (
        <div className="container">
            {movie ? (
                <>
                    <h1 className="mb-3">{movie.title}</h1>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Abstract:</strong> {movie.abstract}</p>
                    <p><strong>Release:</strong> {movie.release_year}</p>

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
                <p>Film non trovato.</p>
            )}
            <NavLink to="/" className="btn btn-primary">Indietro</NavLink>
        </div>
    );
}

export default Movie;
