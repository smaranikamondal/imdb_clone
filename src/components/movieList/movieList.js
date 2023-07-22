import React, { useEffect, useState } from 'react';
// import "./movieList.css";
import { useParams } from 'react-router-dom';
import Cards from '../card/card';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c2d48a38acdb1db28c2fdb4abe7bd209&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results));
    };

    return (
        <div className="pt-3 pr-3 pb-3 pl-3">
            <h2 className="text-lg my-10">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="flex flex-wrap justify-center">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;