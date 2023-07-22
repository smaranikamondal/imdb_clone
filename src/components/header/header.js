import React from 'react';
// import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mx-10 my-2.5 flex items-center justify-between">
            <div className="flex items-center">
                <Link to="/"><img className="w-20 cursor-pointer" src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt=''/></Link>
                <Link to="/movies/popular" /*style={{textDecoration: "none"}}*/ className="mx-3 text-xl font-semibold cursor-pointer no-underline text-white  hover:text-red-600"><span>Popular</span></Link>
                <Link to="/movies/top_rated" /*style={{textDecoration: "none"}}*/ className="mx-3 text-xl font-semibold cursor-pointer no-underline text-white hover:text-red-600"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" /*style={{textDecoration: "none"}}*/ className="mx-3 text-xl font-semibold cursor-pointer no-underline text-white hover:text-red-600"><span>Upcoming</span></Link>
            </div>
        </div>
    );
}

export default Header;