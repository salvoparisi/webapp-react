import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id]);

    console.log(movie);

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
                    {movie.reviews && movie.reviews.length > 0 ? (
                        <ul>
                            {movie.reviews.map((review) => (
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
