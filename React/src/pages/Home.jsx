import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useFilmContext } from '../contexts/FilmContext';
import Loader from '../components/Loader';


function Home() {

    const { setSelectedFilmId, isLoading, setIsLoading } = useFilmContext();
    const [movie, setMovie] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3000/movies/')
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setIsLoading(false);
            })
    }, [setIsLoading])

    const handleFilmSelect = (id) => {
        setSelectedFilmId(id);
    };


    return (
        <>
            <h1 className="text-center bg-primary text-white py-3">Home</h1>
            <h3 className="text-center text-primary mb-5">Movie List</h3>
            <div className="container">
                {isLoading ? (
                    <Loader />
                ) : movie.lenght > 0 ? (
                    <h2 className='text-center'>Nessun Film Trovato</h2>
                ) : (
                    <div className="row">

                        {movie.map((film, i) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
                                <div className="card card-movies">
                                    <h4><div>{film.title}</div></h4>
                                    <div className="abstract px-2">{film.abstract}</div>
                                    <div className="d-flex justify-content-between">
                                        <div className="btn btn-warning">{film.genre}</div>
                                        <NavLink
                                            to={`/${film.id}`}
                                            className="btn btn-primary"
                                            onClick={() => handleFilmSelect(film.id)}
                                        >
                                            Scopri
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
