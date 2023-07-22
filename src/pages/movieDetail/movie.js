import React, { useEffect, useState } from 'react';
// import "./movie.css";
import { useParams } from 'react-router-dom';

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c2d48a38acdb1db28c2fdb4abe7bd209&language=en-US`)
            .then(response => response.json())
            .then(data => setMovie(data))
    }

    return (
        <div className="w-full relative flex flex-col items-center">
            <div className="w-80">
                <img className="w-full h-500 object-cover object-center" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt = ''/>
            </div>
            <div className="flex items-center w-3/4 relative bottom-225">
                <div className="mr-30">
                    <div className="movie__posterBox">
                        <img className="w-300 rounded-10 shadow-md" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt=''/>
                    </div>
                </div>
                <div className="text-white h-450 flex flex-col justify-between">
                    <div className="text-shadow-sm mb-1">
                        <div className="font-medium text-3xl">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="ml-4">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="my-5">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="p-2 border-2 border-white rounded-20 mr-4" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="my-8 flex-80">
                        <div className="text-1.5xl mb-5 font-semibold flex items-center">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="relative bottom-12 flex justify-between w-3/4">
                <div className="text-2.2xl">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}} rel="noreferrer"><p><span className="bg-red-500 flex justify-center items-center p-2.5 rounded-2xl cursor-pointer w-36 text-black font-bold">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}} rel="noreferrer"><p><span className="bg-yellow-300 flex justify-center items-center p-2.5 rounded-2xl cursor-pointer w-36 text-black font-bold">IMDb<i className="ml-1.4 fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="text-2.2xl">Production companies</div>
            <div className="w-85 flex justify-center items-end mb-16">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="flex flex-col items-center justify-center">
                                    <img className="w-200 mx-8" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt='' />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Movie;