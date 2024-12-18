import React, { useState, useEffect } from 'react';
import AddReview from '../components/AddReview.jsx'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader.jsx';
import { useFilmContext } from '../contexts/FilmContext'

function Movie() {
    const { isLoading, setIsLoading } = useFilmContext()
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/movies/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setIsLoading(false);
            })
            .catch((err) => console.error('Errore nel fetch:', err));
    }, [id, setIsLoading]);

    const renderStars = (vote) => {
        const stars = [];
        const diff = 5 - vote
        for (let i = 0; i < vote; i++) {
            stars.push(
                <i key={i} className="bi bi-star-fill text-warning"></i>
            );
        }
        for (let i = 0; i < diff; i++) {
            stars.push(
                <i key={i + 10} className="bi bi-star text-warning"></i>
            )
        }

        return stars;
    };

    return (
        <div className="container my-5">
            {isLoading ? (
                <Loader />
            ) : (
                movie ? (

                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h1 className="mb-0">{movie.title}</h1>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <p><strong>Director:</strong> {movie.director}</p>
                                    <p><strong>Genre:</strong> {movie.genre}</p>
                                    <p><strong>Release:</strong> {movie.release_year}</p>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>Abstract:</strong></p>
                                    <p>{movie.abstract}</p>
                                </div>
                            </div>

                            <h2 className="mb-4">Reviews</h2>
                            <AddReview />
                            {movie.reviews && movie.reviews.length > 0 ? (
                                <ul className="list-group">
                                    {movie.reviews.map((review) => (
                                        <li className="list-group-item" key={review.id}>
                                            <p>
                                                <strong>{review.name}</strong>: {renderStars(review.vote)}
                                            </p>
                                            <p>{review.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted">Nessuna recensione disponibile.</p>
                            )}
                        </div>
                        <div className="card-footer text-end">
                            <NavLink to="/" className="btn btn-primary">Indietro</NavLink>
                        </div>
                    </div>
                ) : (
                    <h2>Nessun Info Disponibile</h2>
                )
            )}
        </div>
    );
}

export default Movie;
