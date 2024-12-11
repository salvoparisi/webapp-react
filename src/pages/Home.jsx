import { movies } from "../components/MovieList"
import { Link, NavLink } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className="text-center bg-primary text-white py-3">Home</h1>
            <h3 className="text-center text-primary mb-5">Movie List</h3>
            <div className="container">
                <div className="row">
                    {movies.map((film, i) =>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
                            <div className="card card-movies">
                                <h4><div>{film.title}</div></h4>
                                <div className="abstract px-2">{film.abstract}</div>
                                <div className="d-flex justify-content-between">
                                    <div className="btn btn-warning">{film.genre}</div>
                                    <NavLink to={`/${film.id}`} className="btn btn-primary">Scopri</NavLink>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>

        </>
    )
}

export default Home