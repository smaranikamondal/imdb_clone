import React, { useEffect,useState } from "react";
// import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c2d48a38acdb1db28c2fdb4abe7bd209&language=en-US")
        .then((res) => res.json())
        .then((data) => setPopularMovies(data.results));
    }, []);

    return (
        <>
            <div className="poster">
                <Carousel 
                autoPlay = {true}
                infiniteLoop = {true}
                showThumbs={false} 
                showStatus={false}  
                transitionTime={3} 
                stopOnHover={true}>

                    {
                        popularMovies.map((movie) => (
                            <Link className="text-white no-underline" to={`/movie/${movie.id}`}>
                            <div className="h-3/5">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" className="mx-auto block w-full"/>
                            </div>

                            <div className="relative pb-20 h-7 flex flex-col items-start justify-end bg-gradient-to-t from-transparent to-black transition-opacity duration-300 hover:opacity-100">
                                <div className="font-bold text-4xl mb-4 text-left">{movie ? movie.original_title: ""}
                                </div>
                                <div className="text-2xl mb-4">{movie ? movie.release_date: ""}
                                    <span className="ml-12">{movie ? movie.vote_average: ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="italic text-base text-left mb-1 w-1/2">{movie ? movie.overview: ""}</div>
                            </div>
                        </Link>
                    ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    );
};

export default Home;