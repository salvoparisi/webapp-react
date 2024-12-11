import React from 'react';
import { movie, reviews } from '../components/MovieReview.js';
import { Link, NavLink } from 'react-router-dom'

function App() {
    return (
        <div className="container">
            <h1 className='mb-3'>{movie.title}</h1>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Abstract:</strong> {movie.abstract}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Relese:</strong> {movie.release_year}</p>

            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p><strong>{review.name}</strong> ({review.vote}/5): {review.text}</p>
                    </li>
                ))}
            </ul>
            <NavLink to="/" className="btn btn-primary">Indietro</NavLink>
        </div>
    );
}

export default App;