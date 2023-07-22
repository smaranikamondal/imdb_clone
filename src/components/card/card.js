import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import './card.css';
import { Link } from 'react-router-dom';

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return <>
        {
            isLoading 
            ? 
            <div className="inline-block transition-transform duration-200 relative rounded-md overflow-hidden m-0.19 cursor-pointer min-w-200 h-300 z-0 border border-gray-400 hover:scale-120 hover:z-1000 hover:shadow-md">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to = {`/movie/${movie.id}`} style={{textDecoration: "none", color: "white"}}>
                <div className="inline-block transition-transform duration-200 relative rounded-md overflow-hidden m-0.19 cursor-pointer min-w-200 h-300 z-0 border border-gray-400">
                    <img className="h-80" src = {`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}alt=''/>
                    <div className="absolute bottom-0 p-0 md:p-4 h-290 flex flex-col w-85% justify-end bg-gradient-to-t from-transparent to-black transition-opacity duration-200 opacity-0 hover:opacity-100">
                        <div className="font-bold text-xl mb-4">{movie ? movie.original_title: ""}</div>
                        <div className="text-xs mb-1">{movie ? movie.release_date: ""}
                            <span className="float-right">{movie ? movie.vote_average: ""}
                                <i className="fas fa-star" />
                            </span>
                        </div>
                        <div className="italic text-xs mb-1">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    </div>
                </div>
            </Link>
        }
    </>
};

export default Cards;
